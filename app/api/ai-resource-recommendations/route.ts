import { buildRuleAnswer, recommendResources } from "@/lib/resourceRecommendationEngine";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { question } = (await request.json()) as { question?: string };
    if (!question?.trim()) return Response.json({ error: "请输入业务问题。" }, { status: 400 });

    const cleanQuestion = question.trim().slice(0, 500);
    const recommendation = recommendResources(cleanQuestion);
    const fallbackAnswer = buildRuleAnswer(recommendation);

    const gateway = process.env.OPENAI_BASE_URL;
    if (!gateway) return Response.json({ answer: fallbackAnswer, mode: "rules", recommendation });

    const compactInventory = recommendation.resources.map((resource) => ({
      domain: resource.domainName,
      resource: resource.resourceName,
      evidence: resource.examples.slice(0, 5),
      ruleScore: resource.score,
    }));
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (process.env.OPENAI_API_KEY) headers.Authorization = `Bearer ${process.env.OPENAI_API_KEY}`;

    const body = JSON.stringify({
      model: "gpt-4o-mini",
      temperature: 0.15,
      max_tokens: 850,
      messages: [
        { role: "system", content: "你是北京数据地图的数据产品规划助手。必须以系统提供的规则召回结果为事实依据，不得虚构已有资源。只把existingResources里的内容写入‘现有资源’，其他内容一律写入‘待拓展资源’。回答必须包含：需求理解、现有资源组合、资源如何关联、可形成的数据产品、待拓展资源、合规提示。资源不足时也要给出可执行的拓展方案。中文回答，控制在900字以内。" },
        { role: "user", content: JSON.stringify({ question: cleanQuestion, detectedIntent: recommendation.intent, coverage: recommendation.coverage, goals: recommendation.goals, existingResources: compactInventory, suggestedProduct: recommendation.product, candidateGaps: recommendation.gaps }) },
      ],
    });

    let lastStatus = 0;
    for (let attempt = 0; attempt < 3; attempt += 1) {
      try {
        const response = await fetch(`${gateway.replace(/\/$/, "")}/chat/completions`, { method: "POST", headers, body, signal: AbortSignal.timeout(26000) });
        lastStatus = response.status;
        if (response.ok) {
          const data = await response.json();
          const answer = data?.choices?.[0]?.message?.content;
          if (answer) return Response.json({ answer, mode: "ai", recommendation });
        }
        if (![408, 409, 429, 500, 502, 503, 504].includes(response.status)) break;
      } catch (error) {
        console.error("AI recommendation attempt failed", attempt + 1, error);
      }
      if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 500 * 2 ** attempt));
    }
    console.error("AI recommendation degraded to rules", { lastStatus, intent: recommendation.intent });
    return Response.json({ answer: fallbackAnswer, mode: "rules", recommendation });
  } catch (error) {
    console.error("Recommendation request failed", error);
    return Response.json({ error: "请求内容无法处理，请换一种方式描述。" }, { status: 400 });
  }
}
