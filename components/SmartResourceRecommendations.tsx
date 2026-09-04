"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, Bot, ChevronDown, Database, Sparkles, TrendingUp } from "lucide-react";
import { authorizedResourceDomains } from "@/data/authorizedResources";
import styles from "./SmartResourceRecommendations.module.css";

const scenarios = [
  { name: "企业经营与授信", keywords: ["企业", "税务", "信用", "司法", "招投标", "金融"], heat: 98 },
  { name: "医疗与保险服务", keywords: ["医保", "医疗", "健康", "参保", "药品"], heat: 95 },
  { name: "车辆与交通服务", keywords: ["车辆", "驾驶", "交通", "运单", "维修"], heat: 91 },
  { name: "养老服务评价", keywords: ["养老", "老年", "民生", "信用", "处罚"], heat: 88 },
  { name: "绿色金融与碳管理", keywords: ["碳", "气象", "企业", "金融", "用水"], heat: 84 },
  { name: "文旅消费洞察", keywords: ["文旅", "住宿", "企业", "市场", "信用"], heat: 79 },
  { name: "城市安全与应急", keywords: ["应急", "安全", "气象", "防汛", "处罚"], heat: 76 },
  { name: "人才就业与教育", keywords: ["教育", "学生", "人才", "就业", "企业"], heat: 73 },
];

const hotNeeds = [
  { name: "中小企业经营健康度", tag: "现有资源可组合", tone: "green" },
  { name: "医保商保协同风控", tag: "现有资源可组合", tone: "green" },
  { name: "新能源车辆残值评估", tag: "部分资源待补充", tone: "amber" },
  { name: "养老机构综合评级", tag: "现有资源可组合", tone: "green" },
  { name: "极端天气城市韧性", tag: "部分资源待补充", tone: "amber" },
  { name: "人工智能产业人才流动", tag: "待拓展资源", tone: "slate" },
];

export default function SmartResourceRecommendations() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [answerMode, setAnswerMode] = useState<"ai" | "rules" | "">("");
  const [loading, setLoading] = useState(false);
  const selected = scenarios[active];

  const matches = useMemo(() => {
    return authorizedResourceDomains.flatMap((domain) =>
      domain.resources.map((resource) => {
        const text = `${domain.name} ${resource.name} ${resource.description} ${resource.examples.join(" ")}`;
        const score = selected.keywords.filter((word) => text.includes(word)).length;
        return { ...resource, domainId: domain.id, domainName: domain.name, score };
      })
    ).filter((item) => item.score > 0).sort((a, b) => b.score - a.score || b.examples.length - a.examples.length);
  }, [selected]);

  async function askAI(event: FormEvent) {
    event.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");
    setAnswerMode("");
    try {
      const response = await fetch("/api/ai-resource-recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: question.trim() }),
      });
      const data = await response.json();
      setAnswer(data.answer || data.error || "暂时无法生成建议，请稍后再试。");
      setAnswerMode(data.mode === "ai" ? "ai" : data.answer ? "rules" : "");
    } catch {
      setAnswer("AI 服务暂未连接，但上方基于现有目录的组合推荐仍可正常使用。");
      setAnswerMode("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="border-t border-slate-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-black text-[#C41E3A]"><Sparkles className="h-4 w-4" />智能资源推荐</div>
            <h2 className="mt-4 text-3xl font-black text-slate-900">从业务问题出发，组合可用数据资源</h2>
            <p className="mt-3 text-slate-500">优先推荐现有资源，同时识别热门需求中的资源缺口。</p>
          </div>
          <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-500"><TrendingUp className="h-4 w-4 text-[#C41E3A]" />场景热度排行</div>
        </div>

        <div className="mt-8 flex snap-x gap-3 overflow-x-auto pb-3">
          {scenarios.map((scenario, index) => <button key={scenario.name} onClick={() => setActive(index)} className={`min-w-[210px] snap-start rounded-2xl border p-4 text-left transition ${active === index ? "border-[#C41E3A] bg-[#C41E3A] text-white shadow-md" : "border-slate-200 bg-white hover:border-red-200"}`}><span className={`text-xs font-black ${active === index ? "text-red-100" : "text-[#C41E3A]"}`}>TOP {index + 1} · 热度 {scenario.heat}</span><span className="mt-2 block font-black">{scenario.name}</span></button>)}
        </div>

        <div className={styles.recommendationLayout}>
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center justify-between gap-4"><div><h3 className="text-xl font-black text-slate-900">{selected.name}推荐组合</h3><p className="mt-1 text-sm text-slate-500">已匹配 {matches.length} 类现有资源</p></div><Database className="h-7 w-7 text-[#C41E3A]" /></div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {matches.slice(0, expanded ? matches.length : 6).map((item, index) => <Link key={`${item.domainId}/${item.id}`} href={`/authorized-resources/${item.domainId}/${item.id}`} className="group rounded-2xl border border-slate-100 bg-white p-4 transition hover:border-red-200 hover:shadow-sm"><div className="flex items-center justify-between gap-2"><span className="text-xs font-black text-[#C41E3A]">推荐 {index + 1}</span><span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] text-slate-500">{item.domainName}</span></div><h4 className="mt-2 font-black text-slate-900 group-hover:text-[#C41E3A]">{item.name}</h4><p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">{item.examples.slice(0, 4).join("、")}</p></Link>)}
            </div>
            {matches.length > 6 && <button onClick={() => setExpanded(!expanded)} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#C41E3A]">{expanded ? "收起资源" : `查看全部 ${matches.length} 类资源`}<ChevronDown className={`h-4 w-4 transition ${expanded ? "rotate-180" : ""}`} /></button>}
          </div>

          <div className={styles.assistantPanel}>
            <div className="flex items-center gap-2 text-sm font-black text-red-300"><Bot className="h-5 w-5" />AI 资源规划助手</div>
            <h3 className="mt-3 text-xl font-black">描述你想解决的数据问题</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">大模型将结合当前资源目录，给出资源组合、可形成产品和待补充资源。</p>
            <form onSubmit={askAI} className="mt-5"><textarea value={question} onChange={(event) => setQuestion(event.target.value)} rows={4} placeholder="例如：如何评估新能源物流企业经营风险？" className={styles.assistantInput}/><button disabled={loading || !question.trim()} className={styles.assistantButton}>{loading ? "正在分析…" : "生成资源组合建议"}<ArrowRight className="h-4 w-4" /></button></form>
            {answer && <div className="mt-4 rounded-2xl bg-white/10 p-4"><div className="mb-3 flex items-center gap-2 text-xs font-black text-red-200">{answerMode === "ai" ? "大模型 + 资源规则联合分析" : answerMode === "rules" ? "资源规则分析（大模型繁忙时自动生成）" : "分析结果"}</div><div className="whitespace-pre-wrap text-sm leading-6 text-slate-100">{answer}</div></div>}
          </div>
        </div>

        <div className="mt-8"><h3 className="text-lg font-black text-slate-900">热门数据需求与资源缺口</h3><div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{hotNeeds.map((item) => <div key={item.name} className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4"><span className="font-bold text-slate-800">{item.name}</span><span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-black ${item.tone === "green" ? "bg-emerald-50 text-emerald-700" : item.tone === "amber" ? "bg-amber-50 text-amber-700" : "bg-slate-200 text-slate-600"}`}>{item.tag}</span></div>)}</div></div>
      </div>
    </section>
  );
}
