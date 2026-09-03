"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Check, GitCompareArrows, Search, X } from "lucide-react";
import { authorizedResourceDomains } from "@/data/authorizedResources";

const scenarioMap: Record<string, string> = {
  "medical-health": "医保风控、医疗服务、健康管理、医药研究",
  education: "教育管理、人才评价、招生就业、产教融合",
  "financial-services": "企业尽调、授信风控、金融服务、经营分析",
  transportation: "车辆核验、交通治理、车险服务、汽车后市场",
  "green-low-carbon": "碳核算、环境治理、绿色金融、气候风险",
  "culture-tourism": "文旅运营、消费分析、知识产权、公共文化服务",
  "government-services": "政务服务、民生保障、机构评价、政策匹配",
  "urban-governance": "社会救助、城市运行、基层治理、防汛监测",
  "emergency-management": "安全生产、风险预警、应急救援、城市安全",
};

const resources = authorizedResourceDomains.flatMap((domain) =>
  domain.resources.map((resource) => ({
    ...resource,
    domainId: domain.id,
    domainName: domain.name,
    scenario: scenarioMap[domain.id] ?? "数据核验、分析研判和场景应用",
    href: `/authorized-resources/${domain.id}/${resource.id}`,
  }))
);

export default function ResourceCompareClient() {
  const [keyword, setKeyword] = useState("");
  const [domainId, setDomainId] = useState("all");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const filtered = useMemo(() => resources.filter((item) => {
    const matchDomain = domainId === "all" || item.domainId === domainId;
    const text = `${item.name} ${item.description} ${item.examples.join(" ")} ${item.domainName}`;
    return matchDomain && text.includes(keyword.trim());
  }), [keyword, domainId]);
  const selected = selectedIds.map((id) => resources.find((item) => `${item.domainId}/${item.id}` === id)).filter(Boolean) as typeof resources;

  function toggle(id: string) {
    if (selectedIds.includes(id)) return setSelectedIds(selectedIds.filter((item) => item !== id));
    if (selectedIds.length < 3) setSelectedIds([...selectedIds, id]);
  }

  return <>
    <section className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-black text-[#C41E3A]"><GitCompareArrows className="h-4 w-4" />数据资源对比</div>
        <h1 className="mt-4 text-4xl font-black text-slate-900">选择资源，快速看清差异</h1>
        <p className="mt-3 max-w-3xl text-slate-500">最多选择3项资源，对比所属领域、覆盖内容、典型数据和适用场景，为资源组合和产品设计提供依据。</p>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
      <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="relative flex-1"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="搜索资源名称或数据内容" className="h-12 w-full rounded-2xl border border-slate-200 pl-11 pr-4 text-sm outline-none focus:border-red-300" /></div>
          <select value={domainId} onChange={(e) => setDomainId(e.target.value)} className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-600 outline-none"><option value="all">全部领域</option>{authorizedResourceDomains.map((domain) => <option key={domain.id} value={domain.id}>{domain.name}</option>)}</select>
        </div>

        <div className="mt-5 flex min-h-12 flex-wrap items-center gap-2 rounded-2xl bg-slate-50 p-3">
          <span className="mr-2 text-sm font-bold text-slate-500">已选 {selected.length}/3：</span>
          {selected.map((item) => <button key={`${item.domainId}/${item.id}`} onClick={() => toggle(`${item.domainId}/${item.id}`)} className="inline-flex items-center gap-2 rounded-full bg-[#C41E3A] px-3 py-1.5 text-xs font-bold text-white">{item.name}<X className="h-3 w-3" /></button>)}
          {!selected.length && <span className="text-sm text-slate-400">请从下方选择2—3项资源</span>}
        </div>

        <div className="mt-6 grid max-h-[430px] gap-3 overflow-y-auto pr-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => { const id = `${item.domainId}/${item.id}`; const active = selectedIds.includes(id); const disabled = !active && selectedIds.length >= 3; return <button key={id} onClick={() => toggle(id)} disabled={disabled} className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${active ? "border-[#C41E3A] bg-red-50" : "border-slate-100 hover:border-red-200"} disabled:cursor-not-allowed disabled:opacity-40`}><span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${active ? "bg-[#C41E3A] text-white" : "bg-slate-100 text-slate-400"}`}>{active && <Check className="h-3.5 w-3.5" />}</span><span><span className="block font-black text-slate-800">{item.name}</span><span className="mt-1 block text-xs text-slate-400">{item.domainName} · {item.examples.length}项典型数据</span></span></button>; })}
        </div>
      </div>

      {selected.length >= 2 && <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-6"><h2 className="text-2xl font-black text-slate-900">资源对比结果</h2><p className="mt-2 text-sm text-slate-500">对比结果仅依据当前数据地图资源目录生成。</p></div>
        <div className="overflow-x-auto"><table className="w-full min-w-[850px] border-collapse text-left"><thead><tr className="bg-slate-50"><th className="w-40 border-r border-slate-100 p-5 text-sm font-black text-slate-500">对比维度</th>{selected.map((item) => <th key={item.id} className="min-w-[240px] border-r border-slate-100 p-5"><div className="text-lg font-black text-slate-900">{item.name}</div><Link href={item.href} className="mt-2 inline-block text-xs font-bold text-[#C41E3A]">查看资源详情 →</Link></th>)}</tr></thead><tbody>
          <tr><td className="border-r border-t border-slate-100 p-5 text-sm font-bold text-slate-500">所属领域</td>{selected.map((item) => <td key={item.id} className="border-r border-t border-slate-100 p-5 text-sm font-bold text-[#C41E3A]">{item.domainName}</td>)}</tr>
          <tr><td className="border-r border-t border-slate-100 p-5 text-sm font-bold text-slate-500">资源概述</td>{selected.map((item) => <td key={item.id} className="border-r border-t border-slate-100 p-5 text-sm leading-6 text-slate-600">{item.description}</td>)}</tr>
          <tr><td className="border-r border-t border-slate-100 p-5 text-sm font-bold text-slate-500">典型数据</td>{selected.map((item) => <td key={item.id} className="border-r border-t border-slate-100 p-5"><div className="flex flex-wrap gap-2">{item.examples.slice(0, 8).map((example) => <span key={example} className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs text-slate-600">{example}</span>)}</div>{item.examples.length > 8 && <div className="mt-2 text-xs text-slate-400">另有 {item.examples.length - 8} 项</div>}</td>)}</tr>
          <tr><td className="border-r border-t border-slate-100 p-5 text-sm font-bold text-slate-500">适用场景</td>{selected.map((item) => <td key={item.id} className="border-r border-t border-slate-100 p-5 text-sm leading-6 text-slate-600">{item.scenario}</td>)}</tr>
          <tr><td className="border-r border-t border-slate-100 p-5 text-sm font-bold text-slate-500">组合建议</td>{selected.map((item) => <td key={item.id} className="border-r border-t border-slate-100 p-5 text-sm leading-6 text-slate-600">可与其他领域资源交叉核验，用于形成更完整的主体、行为或风险画像。</td>)}</tr>
        </tbody></table></div>
      </div>}
    </section>
  </>;
}
