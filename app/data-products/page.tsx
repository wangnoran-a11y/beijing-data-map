"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { authorizedResourceDomains } from "@/data/authorizedResources";
import { authorizedProductsByDomain, authorizedProductSummary } from "@/data/authorizedProducts";

export default function DataProductsPage(){
 const [domainId,setDomainId]=useState(authorizedResourceDomains[0].id);
 const [keyword,setKeyword]=useState("");
 const domain=authorizedResourceDomains.find(d=>d.id===domainId)!;
 const scenarios=useMemo(()=> (authorizedProductsByDomain[domainId]??[]).filter(s=>!keyword.trim()||`${s.name} ${s.services.join(" ")}`.toLowerCase().includes(keyword.trim().toLowerCase())),[domainId,keyword]);
 const domainServiceCount=(authorizedProductsByDomain[domainId]??[]).reduce((t,s)=>t+s.services.length,0);
 return <main className="min-h-screen bg-[#F7F8FA] pb-16 pt-24 text-slate-900">
  <section className="border-b border-slate-100 bg-white"><div className="mx-auto max-w-7xl px-6 py-9 lg:px-10">
   <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><div className="mb-3 inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">0812最新清单</div><h1 className="text-3xl font-black">首批公共数据产品和服务</h1><p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">依据最新《北京市公共数据资源整体授权运营实施方案》附件1-2，按9个重点领域展示应用场景、产品和服务、用途及服务方式。</p></div>
   <div className="flex gap-3"><div className="rounded-2xl border border-red-100 bg-red-50 px-5 py-4"><div className="text-3xl font-black text-[#C41E3A]">{authorizedProductSummary.scenarioCount}</div><div className="mt-1 text-xs text-slate-500">应用场景</div></div><div className="rounded-2xl border border-red-100 bg-red-50 px-5 py-4"><div className="text-3xl font-black text-[#C41E3A]">{authorizedProductSummary.serviceCount}</div><div className="mt-1 text-xs text-slate-500">产品和服务项</div></div></div></div>
  </div></section>
  <section className="sticky top-16 z-20 border-b border-slate-100 bg-white/95 backdrop-blur"><div className="mx-auto max-w-7xl px-6 py-4 lg:px-10"><div className="flex flex-wrap gap-2">{authorizedResourceDomains.map(d=><button key={d.id} onClick={()=>setDomainId(d.id)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${domainId===d.id?"bg-[#C41E3A] text-white":"bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-[#C41E3A]"}`}>{d.name}<span className="ml-1.5 opacity-60">{authorizedProductsByDomain[d.id]?.length??0}</span></button>)}</div></div></section>
  <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
   <div className="mb-6 flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between"><div><h2 className="text-2xl font-black">{domain.name}</h2><p className="mt-2 text-sm text-slate-500">{authorizedProductsByDomain[domainId]?.length??0}项应用场景 · {domainServiceCount}项产品和服务</p></div><div className="relative w-full md:w-80"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"/><input value={keyword} onChange={e=>setKeyword(e.target.value)} placeholder="搜索场景或产品服务" className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-red-300"/></div></div>
   <div className="grid gap-4 lg:grid-cols-2">{scenarios.map(s=><div key={s.number} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"><div className="flex items-start gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-sm font-black text-[#C41E3A]">{String(s.number).padStart(2,"0")}</div><div className="min-w-0 flex-1"><h3 className="text-lg font-black">{s.name}</h3><div className="mt-3 flex flex-wrap gap-2"><span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">{s.purpose}</span>{s.serviceMethods.map(m=><span key={m} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">{m}</span>)}</div><div className="mt-4 space-y-2">{s.services.map(x=><div key={x} className="rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">{x}</div>)}</div></div></div></div>)}</div>
   {scenarios.length===0&&<div className="rounded-3xl bg-white p-12 text-center text-slate-400">未找到匹配的产品或服务</div>}
   <div className="mt-8 flex justify-end"><Link href={`/authorized-resources/${domainId}`} className="inline-flex items-center gap-2 rounded-full bg-red-50 px-5 py-3 text-sm font-bold text-[#C41E3A]">查看对应数据资源<ArrowRight className="h-4 w-4"/></Link></div>
  </section>
 </main>
}
