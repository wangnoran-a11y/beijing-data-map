"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Bot, Flame, LoaderCircle, Plus, Sparkles } from "lucide-react";
import { authorizedResourceDomains } from "@/data/authorizedResources";

const scenarios = [
  ["企业经营与授信", ["financial-services"], "企业经营授信风险"],
  ["车辆与保险服务", ["transportation", "financial-services"], "车辆保险维修风险"],
  ["医疗与保险服务", ["medical-health", "financial-services"], "医疗医保保险理赔"],
  ["养老服务评价", ["government-services", "medical-health", "financial-services"], "养老机构健康信用"],
  ["就业与人才服务", ["financial-services", "education"], "就业人才社保"],
  ["绿色低碳管理", ["green-low-carbon", "financial-services"], "绿色低碳碳排放"],
  ["文旅消费服务", ["culture-tourism", "financial-services"], "文旅消费经营"],
  ["城市安全与应急", ["emergency-management", "urban-governance", "government-services"], "城市安全应急风险"],
] as const;

const hotNeeds = [
  ["企业全生命周期风险画像", "可组合", "工商、税务、司法、信用和社保数据联动"],
  ["AI训练数据合规与质量评估", "待拓展", "需要数据授权、质量、偏差与可追溯信息"],
  ["新能源汽车电池健康评估", "待拓展", "已有维保数据，仍需电池运行和检测数据"],
  ["医保商保协同风控", "可组合", "医保结算、诊疗、医药耗材与信用数据组合"],
  ["银发经济与养老服务画像", "可组合", "养老机构、健康、补贴、信用和处罚数据组合"],
  ["供应链韧性与产业链风险", "待拓展", "仍需订单、物流和上下游关系数据"],
  ["城市气候风险与保险定价", "待拓展", "仍需灾损和保险理赔数据"],
  ["数据资产入表与价值评估", "待拓展", "需要成本、质量、频次和收益贡献指标"],
] as const;

type AiResult = { summary: string; existingResources: { name: string; reason: string }[]; gaps: { name: string; reason: string }[] };

export default function SmartResourceRecommendations() {
  const [active, setActive] = useState(0);
  const [allResources, setAllResources] = useState(false);
  const [allNeeds, setAllNeeds] = useState(false);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiResult | null>(null);
  const [error, setError] = useState("");
  const scenario = scenarios[active];
  const resources = useMemo(() => authorizedResourceDomains.filter((domain) => scenario[1].some((id) => id === domain.id)).flatMap((domain) => domain.resources.map((resource) => ({ ...resource, domain: domain.name, href: `/authorized-resources/${domain.id}/${resource.id}` }))), [scenario]);

  async function askAi() {
    if (!question.trim()) return;
    setLoading(true); setError(""); setResult(null);
    try {
      const response = await fetch("/api/ai-resource-recommendations", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question }) });
      if (!response.ok) throw new Error("大模型服务暂时不可用");
      setResult(await response.json());
    } catch (e) { setError(e instanceof Error ? e.message : "请求失败"); }
    finally { setLoading(false); }
  }

  return <section className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-10">
    <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm">
      <div className="p-7 lg:p-10">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end"><div><div className="inline-flex items-center gap-2 text-sm font-black text-[#C41E3A]"><Sparkles className="h-4 w-4" />智能资源推荐</div><h2 className="mt-3 text-3xl font-black text-slate-900">热门数据应用场景榜</h2><p className="mt-3 text-slate-500">优先组合现有资源，同时识别市场需求和待拓展资源。</p></div><Link href="/authorized-resources" className="inline-flex items-center gap-2 text-sm font-bold text-[#C41E3A]">查看全部资源<ArrowRight className="h-4 w-4" /></Link></div>
        <div className="mt-7 flex snap-x gap-3 overflow-x-auto pb-3">{scenarios.map((item, index) => <button key={item[0]} onClick={() => { setActive(index); setAllResources(false); }} className={`min-w-[220px] snap-start rounded-2xl border p-4 text-left ${active === index ? "border-[#C41E3A] bg-[#C41E3A] text-white shadow-md" : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-red-50"}`}><div className="flex justify-between text-xs font-black opacity-70"><span>TOP {index + 1}</span><Flame className="h-4 w-4" /></div><div className="mt-3 font-black">{item[0]}</div></button>)}</div>
      </div>

      <div className="border-y border-slate-100 bg-slate-50/60 p-7 lg:p-10">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><div className="text-xs font-bold text-[#C41E3A]">当前场景</div><h3 className="mt-1 text-2xl font-black text-slate-900">{scenario[0]}资源组合</h3><p className="mt-2 text-sm text-slate-500">共匹配 {resources.length} 项现有资源。</p></div><Link href={`/search?q=${encodeURIComponent(scenario[2])}`} className="text-sm font-bold text-[#C41E3A]">查看综合搜索结果 →</Link></div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{(allResources ? resources : resources.slice(0, 6)).map((resource, index) => <Link key={`${resource.domain}-${resource.id}`} href={resource.href} className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-red-200 hover:shadow-md"><div className="flex justify-between"><span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">推荐 {index + 1}</span><ArrowRight className="h-4 w-4 text-slate-300" /></div><div className="mt-4 text-lg font-black text-slate-900">{resource.name}</div><div className="mt-2 text-xs font-bold text-slate-400">来源领域：{resource.domain}</div><p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">{resource.description}</p></Link>)}</div>
        {resources.length > 6 && <div className="mt-6 text-center"><button onClick={() => setAllResources(!allResources)} className="rounded-full border border-red-200 bg-white px-6 py-2.5 text-sm font-bold text-[#C41E3A]">{allResources ? "收起资源" : `查看全部 ${resources.length} 项资源`}</button></div>}
      </div>

      <div className="grid gap-8 p-7 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div><div className="inline-flex items-center gap-2 text-sm font-black text-[#C41E3A]"><Flame className="h-4 w-4" />热门数据需求</div><h3 className="mt-2 text-2xl font-black text-slate-900">市场需求与资源缺口</h3><div className="mt-5 grid gap-3 sm:grid-cols-2">{(allNeeds ? hotNeeds : hotNeeds.slice(0, 6)).map((need, index) => <div key={need[0]} className="rounded-2xl border border-slate-100 p-4"><div className="flex justify-between"><span className="text-xs font-black text-slate-300">{String(index + 1).padStart(2, "0")}</span><span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${need[1] === "可组合" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>{need[1]}</span></div><div className="mt-2 font-black text-slate-800">{need[0]}</div><p className="mt-2 text-xs leading-5 text-slate-500">{need[2]}</p></div>)}</div><button onClick={() => setAllNeeds(!allNeeds)} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#C41E3A]">{allNeeds ? "收起" : "查看更多需求"}<Plus className="h-4 w-4" /></button></div>
        <div className="rounded-3xl bg-slate-950 p-6 text-white"><div className="flex items-center gap-2 text-sm font-black text-red-300"><Bot className="h-5 w-5" />大模型资源规划助手</div><h3 className="mt-3 text-2xl font-black">描述问题，生成资源组合</h3><p className="mt-2 text-sm leading-6 text-slate-400">优先匹配现有资源，同时指出需要补充的数据。</p><textarea value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="例如：如何判断一家新能源物流企业的经营和车辆风险？" className="mt-5 h-28 w-full resize-none rounded-2xl border border-white/10 bg-white/10 p-4 text-sm outline-none" /><button onClick={askAi} disabled={loading || !question.trim()} className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#C41E3A] px-5 py-3 text-sm font-black disabled:opacity-50">{loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}{loading ? "正在分析" : "生成智能推荐"}</button>{error && <p className="mt-4 text-xs text-red-200">{error}，请确认 Netlify 已启用 AI Gateway。</p>}{result && <div className="mt-5 space-y-4 rounded-2xl bg-white/10 p-4 text-sm"><p>{result.summary}</p><div><b className="text-emerald-300">现有资源组合</b>{result.existingResources.map((item) => <p key={item.name} className="mt-2"><b>{item.name}</b>：{item.reason}</p>)}</div><div><b className="text-amber-300">待拓展资源</b>{result.gaps.map((item) => <p key={item.name} className="mt-2"><b>{item.name}</b>：{item.reason}</p>)}</div></div>}</div>
      </div>
    </div>
  </section>;
}
