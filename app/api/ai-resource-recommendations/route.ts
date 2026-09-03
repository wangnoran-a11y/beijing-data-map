import OpenAI from "openai";
import { z } from "zod";
import { authorizedResourceDomains } from "@/data/authorizedResources";

const inputSchema = z.object({ question: z.string().trim().min(2).max(500) });
const outputSchema = z.object({
  summary: z.string(),
  existingResources: z.array(z.object({ name: z.string(), reason: z.string() })).max(12),
  gaps: z.array(z.object({ name: z.string(), reason: z.string() })).max(10),
});
const inventory = authorizedResourceDomains.flatMap((domain) => domain.resources.map((resource) => ({ domain: domain.name, name: resource.name, description: resource.description })));

export async function POST(request: Request) {
  try {
    const { question } = inputSchema.parse(await request.json());
    if (!process.env.OPENAI_BASE_URL && !process.env.OPENAI_API_KEY) return Response.json({ error: "AI Gateway is not configured" }, { status: 503 });
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "netlify-ai-gateway", baseURL: process.env.OPENAI_BASE_URL });
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: "你是公共数据资源规划专家。优先从给定清单组合推荐真实存在的资源，不存在的需求必须放入gaps。只输出JSON：summary字符串、existingResources数组（name、reason）、gaps数组（name、reason）。" },
        { role: "user", content: `需求：${question}\n现有资源：${JSON.stringify(inventory)}` },
      ],
    });
    const content = completion.choices[0]?.message?.content;
    if (!content) throw new Error("Empty response");
    return Response.json(outputSchema.parse(JSON.parse(content)));
  } catch (error) {
    console.error("AI recommendation failed", error);
    return Response.json({ error: "Unable to generate recommendations" }, { status: 500 });
  }
}
