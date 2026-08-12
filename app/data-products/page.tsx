"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Car,
  CheckCircle2,
  Database,
  FileText,
  HeartPulse,
  Landmark,
  Package,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import {
  authorizedProductsByDomain,
  authorizedProductSummary,
} from "@/data/authorizedProducts";
import { dataCatalog } from "@/data/dataMapCatalog";

type ExistingCatalogProduct = {
  id?: string;
  name: string;
  shortName?: string;
  category?: string;
  type?: string;
  status?: string;
  stage?: string;
  description?: string;
  input?: string;
  output?: string;
  scenario?: string;
};

type UnifiedProduct = {
  id: string;
  sourceGroup: "authorized" | "ministry" | "other";
  sourceLabel: string;
  groupId: string;
  groupLabel: string;
  title: string;
  description: string;
  services: string[];
  methods: string[];
  purpose?: string;
  type?: string;
  status?: string;
  href: string;
};

const authorizedDomainMeta: Record<
  string,
  { label: string; icon: typeof Package; href: string }
> = {
  "medical-health": {
    label: "医疗健康",
    icon: HeartPulse,
    href: "/authorized-resources/medical-health",
  },
  education: {
    label: "教育教学",
    icon: BookOpen,
    href: "/authorized-resources/education",
  },
  "financial-services": {
    label: "金融服务",
    icon: Building2,
    href: "/authorized-resources/financial-services",
  },
  transportation: {
    label: "交通运输",
    icon: Car,
    href: "/authorized-resources/transportation",
  },
  "green-low-carbon": {
    label: "绿色低碳",
    icon: ShieldCheck,
    href: "/authorized-resources/green-low-carbon",
  },
  "culture-tourism": {
    label: "文化旅游",
    icon: FileText,
    href: "/authorized-resources/culture-tourism",
  },
  "government-services": {
    label: "政务服务",
    icon: Landmark,
    href: "/authorized-resources/government-services",
  },
  "urban-governance": {
    label: "城市治理",
    icon: Database,
    href: "/authorized-resources/urban-governance",
  },
  "emergency-management": {
    label: "应急管理",
    icon: ShieldCheck,
    href: "/authorized-resources/emergency-management",
  },
};

const existingCatalogMeta: Record<
  string,
  {
    sourceGroup: "ministry" | "other";
    sourceLabel: string;
    groupLabel: string;
    href: string;
  }
> = {
  transport: {
    sourceGroup: "ministry",
    sourceLabel: "交通运输部",
    groupLabel: "交通运输部产品",
    href: "/data-catalog/transport#products",
  },
  finance: {
    sourceGroup: "other",
    sourceLabel: "金融服务数据",
    groupLabel: "金融服务产品",
    href: "/data-catalog/finance#products",
  },
  "literature-art": {
    sourceGroup: "other",
    sourceLabel: "文联文化数据",
    groupLabel: "文化艺术产品",
    href: "/data-catalog/literature-art#products",
  },
};

const existingCatalogOrder = [
  "transport",
  "finance",
  "literature-art",
];

function splitScenes(value?: string) {
  if (!value) return [];
  return value
    .split(/[、，,；;\/]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 6);
}

function existingDescription(product: ExistingCatalogProduct) {
  if (product.description) return product.description;
  if (product.output) {
    return product.input
      ? `基于${product.input}，形成${product.output}。`
      : product.output;
  }
  return "围绕相关数据资源形成标准化数据产品能力。";
}

function buildAllProducts(): UnifiedProduct[] {
  const authorized: UnifiedProduct[] = Object.entries(
    authorizedProductsByDomain
  ).flatMap(([domainId, scenarios]) => {
    const meta = authorizedDomainMeta[domainId];
    if (!meta) return [];

    return scenarios.map((scenario) => ({
      id: `authorized-${scenario.number}`,
      sourceGroup: "authorized" as const,
      sourceLabel: "北京市公共数据整体授权运营",
      groupId: domainId,
      groupLabel: meta.label,
      title: scenario.name,
      description: `首批拟提供公共数据产品和服务第${scenario.number}项。`,
      services: scenario.services,
      methods: scenario.serviceMethods,
      purpose: scenario.purpose,
      type: "应用场景及产品服务",
      href: meta.href,
    }));
  });

  const existing: UnifiedProduct[] = dataCatalog.flatMap((catalog) => {
    const meta = existingCatalogMeta[catalog.id];
    if (!meta) return [];

    return ((catalog.products ?? []) as ExistingCatalogProduct[]).map(
      (product, index) => ({
        id: `existing-${catalog.id}-${product.id ?? index + 1}`,
        sourceGroup: meta.sourceGroup,
        sourceLabel: meta.sourceLabel,
        groupId: catalog.id,
        groupLabel: meta.groupLabel,
        title: product.name,
        description: existingDescription(product),
        services: splitScenes(product.scenario),
        methods: [
          product.category ?? product.type ?? "数据产品",
        ].filter(Boolean),
        type: product.category ?? product.type ?? "数据产品",
        status: product.status ?? product.stage,
        href: meta.href,
      })
    );
  });

  return [...authorized, ...existing];
}

const sourceTabs = [
  {
    id: "all",
    label: "全部产品",
    description: "统一查看首批授权运营、国家部委及其他现有数据产品。",
  },
  {
    id: "authorized",
    label: "首批授权运营",
    description: "对应最新的69项应用场景及产品和服务。",
  },
  {
    id: "ministry",
    label: "国家部委",
    description: "展示当前已形成明确产品清单的国家部委数据产品。",
  },
  {
    id: "other",
    label: "其他现有产品",
    description: "保留金融服务、文化艺术等已经形成的数据产品。",
  },
];

export default function DataProductsPage() {
  const products = useMemo(() => buildAllProducts(), []);
  const [selectedSource, setSelectedSource] = useState("authorized");
  const [selectedGroup, setSelectedGroup] = useState("all");
  const [keyword, setKeyword] = useState("");

  const sourceCounts = useMemo(
    () => ({
      all: products.length,
      authorized: products.filter((item) => item.sourceGroup === "authorized")
        .length,
      ministry: products.filter((item) => item.sourceGroup === "ministry")
        .length,
      other: products.filter((item) => item.sourceGroup === "other").length,
    }),
    [products]
  );

  const groupTabs = useMemo(() => {
    if (selectedSource === "authorized") {
      return Object.entries(authorizedDomainMeta)
        .map(([id, meta]) => ({
          id,
          label: meta.label,
          count: products.filter(
            (item) => item.sourceGroup === "authorized" && item.groupId === id
          ).length,
        }))
        .filter((item) => item.count > 0);
    }

    if (selectedSource === "ministry" || selectedSource === "other") {
      return existingCatalogOrder
        .filter((id) => {
          const meta = existingCatalogMeta[id];
          return meta?.sourceGroup === selectedSource;
        })
        .map((id) => ({
          id,
          label: existingCatalogMeta[id].sourceLabel,
          count: products.filter(
            (item) => item.sourceGroup === selectedSource && item.groupId === id
          ).length,
        }))
        .filter((item) => item.count > 0);
    }

    return [];
  }, [products, selectedSource]);

  const filteredProducts = products.filter((item) => {
    const sourceMatch =
      selectedSource === "all" || item.sourceGroup === selectedSource;
    const groupMatch =
      selectedGroup === "all" || item.groupId === selectedGroup;

    const q = keyword.trim().toLowerCase();
    const keywordMatch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.sourceLabel.toLowerCase().includes(q) ||
      item.groupLabel.toLowerCase().includes(q) ||
      item.services.some((service) => service.toLowerCase().includes(q)) ||
      item.methods.some((method) => method.toLowerCase().includes(q));

    return sourceMatch && groupMatch && keywordMatch;
  });

  const ministryProducts = products.filter(
    (item) => item.sourceGroup === "ministry" && item.groupId === "transport"
  );

  const activeSource =
    sourceTabs.find((item) => item.id === selectedSource) ?? sourceTabs[0];

  function changeSource(sourceId: string) {
    setSelectedSource(sourceId);
    setSelectedGroup("all");
  }

  return (
    <main className="min-h-screen bg-[#F7F8FA] pb-16 pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <section className="mb-9">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
            <Package className="h-4 w-4" />
            数据产品
          </div>

          <h1 className="text-[42px] font-black tracking-tight text-slate-900">
            数据产品总览
          </h1>

          <p className="mt-3 max-w-5xl leading-7 text-slate-500">
            汇总展示北京市公共数据首批授权运营产品和服务、国家部委数据产品及其他已形成的数据产品，
            按产品来源和领域分类快速切换，避免不同来源产品混在同一长列表中。
          </p>
        </section>

        <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["首批授权场景", String(authorizedProductSummary.scenarioCount), "最新首批授权运营清单"],
            ["首批产品服务", String(authorizedProductSummary.serviceCount), "场景下具体产品和服务项"],
            ["国家部委产品", String(sourceCounts.ministry), "交通运输部已明确产品"],
            ["其他现有产品", String(sourceCounts.other), "金融服务、文化艺术"],
          ].map(([label, value, note]) => (
            <div
              key={label}
              className="rounded-3xl border border-slate-100 bg-white px-6 py-5 shadow-sm"
            >
              <div className="text-sm font-medium text-slate-500">{label}</div>
              <div className="mt-2 text-[28px] font-black leading-none text-[#C41E3A]">
                {value}
              </div>
              <div className="mt-2 text-xs text-slate-400">{note}</div>
            </div>
          ))}
        </section>

        <section className="mb-8 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-black text-slate-900">
                  按产品来源查看
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  先按来源切换，再按领域或部委筛选。
                </p>
              </div>

              <div className="flex h-11 w-full items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 lg:w-[360px]">
                <Search className="h-4 w-4 shrink-0 text-slate-400" />
                <input
                  value={keyword}
                  onChange={(event) => setKeyword(event.target.value)}
                  placeholder="搜索场景、产品、服务或来源"
                  className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {sourceTabs.map((item) => {
                const count =
                  sourceCounts[item.id as keyof typeof sourceCounts] ?? 0;
                const active = selectedSource === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => changeSource(item.id)}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                      active
                        ? "bg-[#C41E3A] text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-[#C41E3A]"
                    }`}
                  >
                    {item.label} {count}
                  </button>
                );
              })}
            </div>

            {groupTabs.length > 0 && (
              <div className="border-t border-slate-100 pt-4">
                <div className="mb-3 text-xs font-bold text-slate-400">
                  {selectedSource === "authorized" ? "按授权领域" : "按数据来源"}
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedGroup("all")}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-bold transition ${
                      selectedGroup === "all"
                        ? "border-red-200 bg-red-50 text-[#C41E3A]"
                        : "border-slate-200 bg-white text-slate-500 hover:border-red-100 hover:text-[#C41E3A]"
                    }`}
                  >
                    全部
                  </button>

                  {groupTabs.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedGroup(item.id)}
                      className={`rounded-full border px-3.5 py-1.5 text-xs font-bold transition ${
                        selectedGroup === item.id
                          ? "border-red-200 bg-red-50 text-[#C41E3A]"
                          : "border-slate-200 bg-white text-slate-500 hover:border-red-100 hover:text-[#C41E3A]"
                      }`}
                    >
                      {item.label} {item.count}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mb-6 rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <div>
              <div className="text-xs font-bold text-[#C41E3A]">当前产品体系</div>
              <h2 className="mt-1 text-2xl font-black text-slate-900">
                {activeSource.label}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {activeSource.description}
              </p>
            </div>

            <div className="shrink-0 rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600">
              当前显示 {filteredProducts.length} 项
            </div>
          </div>
        </section>

        {selectedSource === "ministry" ? (
          <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl font-black text-slate-900">国家部委产品</h3>
                <p className="mt-1 text-sm text-slate-500">交通运输部</p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                {ministryProducts.length} 个产品
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-100">
              <div className="grid grid-cols-[56px_1fr_180px_110px] gap-3 bg-slate-50 px-5 py-3 text-xs font-bold text-slate-400">
                <div>序号</div>
                <div>产品名称</div>
                <div>产品类型</div>
                <div>状态</div>
              </div>

              {ministryProducts.map((item, index) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="grid grid-cols-[56px_1fr_180px_110px] gap-3 border-t border-slate-100 px-5 py-3.5 text-sm transition hover:bg-red-50/30"
                >
                  <div className="text-slate-400">{index + 1}</div>
                  <div className="font-bold text-slate-800">{item.title}</div>
                  <div className="text-slate-500">{item.type ?? "数据产品"}</div>
                  <div>
                    {item.status && (
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold ${
                          item.status.includes("已上线")
                            ? "bg-red-50 text-[#C41E3A]"
                            : item.status.includes("开发中")
                            ? "bg-blue-50 text-blue-700"
                            : item.status.includes("未接入") ||
                              item.status.includes("待接入")
                            ? "bg-slate-100 text-slate-500"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : filteredProducts.length > 0 ? (
          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((item) => (
              <article
                key={item.id}
                className="flex min-h-[330px] flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold ${
                        item.sourceGroup === "authorized"
                          ? "bg-red-50 text-[#C41E3A]"
                          : item.sourceGroup === "ministry"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {item.sourceLabel}
                    </span>

                    <div className="mt-2 text-xs font-bold text-slate-400">
                      {item.groupLabel}
                    </div>
                  </div>

                  {item.status && (
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold ${
                        item.status.includes("已上线")
                          ? "bg-red-50 text-[#C41E3A]"
                          : item.status.includes("开发中")
                          ? "bg-blue-50 text-blue-700"
                          : item.status.includes("未接入") ||
                            item.status.includes("待接入")
                          ? "bg-slate-100 text-slate-500"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-lg font-black leading-7 text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                {item.services.length > 0 && (
                  <div className="mt-4">
                    <div className="mb-2 text-xs font-bold text-slate-400">
                      {item.sourceGroup === "authorized"
                        ? "产品和服务"
                        : "应用场景"}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {item.services.slice(0, 6).map((service, index) => (
                        <span
                          key={`${item.id}-service-${index}`}
                          className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium leading-4 text-slate-600"
                        >
                          {service}
                        </span>
                      ))}

                      {item.services.length > 6 && (
                        <span className="rounded-lg bg-red-50 px-2.5 py-1.5 text-[11px] font-bold text-[#C41E3A]">
                          +{item.services.length - 6}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-5">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {item.purpose && (
                      <span className="rounded-full bg-red-50 px-3 py-1 text-[11px] font-bold text-[#C41E3A]">
                        {item.purpose}
                      </span>
                    )}

                    {item.methods.map((method, index) => (
                      <span
                        key={`${item.id}-method-${index}`}
                        className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-500"
                      >
                        {method}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#C41E3A]"
                  >
                    查看相关目录
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center">
            <div className="text-base font-bold text-slate-500">
              暂无匹配产品
            </div>
            <div className="mt-2 text-sm text-slate-400">
              请切换产品来源或调整搜索关键词。
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
