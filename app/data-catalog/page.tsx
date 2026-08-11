"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Building2,
  Database,
  FileText,
  Landmark,
  Layers3,
  Search,
  ShieldCheck,
} from "lucide-react";
import {
  authorizedResourceDomains,
  authorizedResourceSummary,
} from "@/data/authorizedResources";

const PUBLIC_PRODUCT_SERVICE_COUNT = 59;
const MINISTRY_PRODUCT_COUNT = 9;

const ministryCatalogs = [
  {
    id: "transport-ministry",
    name: "交通运输部",
    shortName: "交通",
    description:
      "汽车维修电子健康档案，覆盖维修基础信息、维修配件信息、维修项目工时信息等。",
    tags: ["汽车维修", "维修配件", "维修工时"],
    stats: ["3张核心表", "58个字段", "9个产品"],
    status: "已接入",
    href: "/data-catalog/transport",
  },
  {
    id: "civil-ministry",
    name: "民政部",
    shortName: "民政",
    description:
      "覆盖养老机构、社会组织、婚姻登记、社会救助等民政领域数据资源。",
    tags: ["养老服务", "社会组织", "民政治理"],
    stats: ["目录建设中"],
    status: "已接入",
    href: "/data-catalog/civil",
  },
  {
    id: "health-ministry",
    name: "国家卫生健康委",
    shortName: "卫健",
    description:
      "覆盖医疗健康、居民健康管理、诊疗服务、疾病防控等领域数据资源。",
    tags: ["居民健康", "诊疗服务", "疾病防控"],
    stats: ["目录建设中"],
    status: "未接入",
    href: "/data-catalog#ministry-catalog",
  },
  {
    id: "medical-insurance-ministry",
    name: "国家医疗保障局",
    shortName: "医保",
    description:
      "覆盖医保目录、医保结算、医保费用、药品耗材及医保追溯等数据资源。",
    tags: ["医保目录", "医保结算", "药品耗材"],
    stats: ["目录建设中"],
    status: "未接入",
    href: "/data-catalog#ministry-catalog",
  },
  {
    id: "public-security-ministry",
    name: "公安部",
    shortName: "公安",
    description:
      "依托国家网络身份认证公共服务二级接入平台（北京数据集团节点），当前已接入两项身份核验数据资源。",
    tags: ["网证数据核验", "第三方身份核验"],
    stats: ["2项数据资源"],
    status: "已接入",
    href: "/data-catalog#ministry-catalog",
  },
  {
    id: "education-ministry",
    name: "教育部",
    shortName: "教育",
    description:
      "覆盖基础教育课程、课标、考点、知识点及教育行业大模型基础数据资源。",
    tags: ["教育教学", "课标资源", "教育大模型"],
    stats: ["目录建设中"],
    status: "已接入",
    href: "/data-catalog/education",
  },
];

export default function DataCatalogPage() {
  const [keyword, setKeyword] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("all");

  useEffect(() => {
    const domainId = new URLSearchParams(window.location.search).get("domain");

    if (
      domainId &&
      authorizedResourceDomains.some((domain) => domain.id === domainId)
    ) {
      setSelectedDomain(domainId);
    }
  }, []);

  const changeDomain = (domainId: string) => {
    setSelectedDomain(domainId);

    const nextUrl =
      domainId === "all"
        ? "/data-catalog#public-catalog"
        : `/data-catalog?domain=${domainId}#public-catalog`;

    window.history.replaceState(null, "", nextUrl);
  };

  const publicCatalogItems = useMemo(() => {
    return authorizedResourceDomains.flatMap((domain) =>
      domain.resources.map((resource) => ({
        domainId: domain.id,
        domainName: domain.name,
        domainShortName: domain.shortName,
        resourceId: resource.id,
        resourceName: resource.name,
        description: resource.description,
        examples: resource.examples,
      }))
    );
  }, []);

  const totalPublicDataItems = useMemo(() => {
    return publicCatalogItems.reduce(
      (sum, item) => sum + item.examples.length,
      0
    );
  }, [publicCatalogItems]);

  const filteredPublicItems = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLowerCase();

    return publicCatalogItems.filter((item) => {
      const matchesDomain =
        selectedDomain === "all" || item.domainId === selectedDomain;

      const searchableText = [
        item.domainName,
        item.resourceName,
        item.description,
        ...item.examples,
      ]
        .join(" ")
        .toLowerCase();

      const matchesKeyword =
        normalizedKeyword === "" ||
        searchableText.includes(normalizedKeyword);

      return matchesDomain && matchesKeyword;
    });
  }, [keyword, publicCatalogItems, selectedDomain]);

  const currentDomainName =
    selectedDomain === "all"
      ? "全部领域"
      : authorizedResourceDomains.find(
          (domain) => domain.id === selectedDomain
        )?.name ?? "全部领域";

  const totalSourceTypes = 2;
  const totalCatalogUnits =
    authorizedResourceSummary.domainCount + ministryCatalogs.length;
  const totalProductsAndServices =
    PUBLIC_PRODUCT_SERVICE_COUNT + MINISTRY_PRODUCT_COUNT;

  return (
    <main className="min-h-screen bg-[#F7F8FA] pb-16 pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* 页面标题 */}
        <section className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
            <Database className="h-4 w-4" />
            统一数据目录
          </div>

          <h1 className="text-[42px] font-black tracking-tight text-slate-900">
            数据目录
          </h1>

          <p className="mt-3 max-w-4xl leading-7 text-slate-500">
            汇聚北京市公共数据授权目录和国家部委行业数据目录，
            分区展示数据资源、数据表、字段清单及数据产品能力。
          </p>
        </section>

        {/* 整体统计：公共数据 + 国家部委 */}
        <section className="mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-black text-slate-900">
              数据目录整体概览
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              以下统计涵盖北京市公共数据授权目录和已纳入展示的国家部委数据目录。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              icon={Database}
              label="数据来源"
              value={totalSourceTypes}
              unit="类"
              note="北京市公共数据、国家部委数据"
            />

            <StatCard
              icon={Landmark}
              label="目录单元"
              value={totalCatalogUnits}
              unit="个"
              note={`${authorizedResourceSummary.domainCount}个公共数据领域 + ${ministryCatalogs.length}个部委来源`}
            />

            <StatCard
              icon={Layers3}
              label="公共资源分类"
              value={authorizedResourceSummary.resourceCount}
              unit="类"
              note={`包含${totalPublicDataItems}项具体数据内容`}
            />

            <StatCard
              icon={ShieldCheck}
              label="产品和服务"
              value={totalProductsAndServices}
              unit="项"
              note={`${PUBLIC_PRODUCT_SERVICE_COUNT}项公共数据产品服务 + ${MINISTRY_PRODUCT_COUNT}项部委产品`}
            />
          </div>
        </section>

        {/* 北京市公共数据目录 */}
        <section id="public-catalog" className="mb-14 scroll-mt-28">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-[#C41E3A]">
                <ShieldCheck className="h-4 w-4" />
                公共数据授权运营
              </div>

              <h2 className="text-3xl font-black text-slate-900">
                北京市公共数据授权目录
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-500">
                覆盖{authorizedResourceSummary.domainCount}个重点领域、
                {authorizedResourceSummary.resourceCount}类公共数据资源及
                {PUBLIC_PRODUCT_SERVICE_COUNT}项公共数据产品和服务。
              </p>
            </div>

            <Link
              href="/authorized-resources"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#C41E3A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#A81831]"
            >
              查看授权资源
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 搜索及领域筛选 */}
          <div className="mb-6 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  value={keyword}
                  onChange={(event) => setKeyword(event.target.value)}
                  placeholder="搜索公共数据资源分类、数据内容或关键词"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-red-200 focus:bg-white focus:ring-4 focus:ring-red-50"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => changeDomain("all")}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-bold transition",
                    selectedDomain === "all"
                      ? "bg-[#C41E3A] text-white"
                      : "bg-slate-50 text-slate-600 hover:bg-red-50 hover:text-[#C41E3A]",
                  ].join(" ")}
                >
                  全部领域
                </button>

                {authorizedResourceDomains.map((domain) => (
                  <button
                    key={domain.id}
                    type="button"
                    onClick={() => changeDomain(domain.id)}
                    className={[
                      "rounded-full px-4 py-2 text-sm font-bold transition",
                      selectedDomain === domain.id
                        ? "bg-[#C41E3A] text-white"
                        : "bg-slate-50 text-slate-600 hover:bg-red-50 hover:text-[#C41E3A]",
                    ].join(" ")}
                  >
                    {domain.name}
                    <span className="ml-1.5 opacity-70">
                      {domain.resources.length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h3 className="text-2xl font-black text-slate-900">
                公共数据资源目录清单
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                当前展示：
                <span className="font-bold text-slate-700">
                  {currentDomainName}
                </span>
                ，共
                <span className="mx-1 font-bold text-[#C41E3A]">
                  {filteredPublicItems.length}
                </span>
                类资源。
              </p>
            </div>

            {(keyword || selectedDomain !== "all") && (
              <button
                type="button"
                onClick={() => {
                  setKeyword("");
                  changeDomain("all");
                }}
                className="w-fit text-sm font-bold text-[#C41E3A]"
              >
                清空筛选
              </button>
            )}
          </div>

          {/* 桌面端公共数据表格 */}
          <div className="hidden overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm lg:block">
            <div className="grid grid-cols-[72px_130px_240px_minmax(0,1fr)_90px_110px] items-center border-b border-slate-100 bg-slate-50 px-5 py-4 text-xs font-bold text-slate-500">
              <div>序号</div>
              <div>授权领域</div>
              <div>资源分类</div>
              <div>数据资源内容</div>
              <div className="text-center">内容数量</div>
              <div className="text-right">操作</div>
            </div>

            {filteredPublicItems.length > 0 ? (
              <div>
                {filteredPublicItems.map((item, index) => (
                  <Link
                    key={`${item.domainId}-${item.resourceId}`}
                    href={`/authorized-resources/${item.domainId}/${item.resourceId}`}
                    className="group grid grid-cols-[72px_130px_240px_minmax(0,1fr)_90px_110px] items-center border-b border-slate-100 px-5 py-5 transition last:border-b-0 hover:bg-red-50/40"
                  >
                    <div className="text-sm font-bold text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <span className="inline-flex rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-[#C41E3A]">
                        {item.domainName}
                      </span>
                    </div>

                    <div className="pr-6 text-sm font-bold text-slate-800 transition group-hover:text-[#C41E3A]">
                      {item.resourceName}
                    </div>

                    <div className="min-w-0 pr-8">
                      <div className="line-clamp-1 text-sm text-slate-600">
                        {item.examples.join("、")}
                      </div>

                      <div className="mt-1 line-clamp-1 text-xs text-slate-400">
                        {item.description}
                      </div>
                    </div>

                    <div className="text-center">
                      <span className="inline-flex min-w-[52px] justify-center rounded-lg bg-slate-50 px-2.5 py-1.5 text-sm font-bold text-slate-700">
                        {item.examples.length}项
                      </span>
                    </div>

                    <div className="flex justify-end">
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-[#C41E3A]">
                        查看详情
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <EmptyState />
            )}
          </div>

          {/* 移动端公共数据列表 */}
          <div className="space-y-4 lg:hidden">
            {filteredPublicItems.length > 0 ? (
              filteredPublicItems.map((item, index) => (
                <Link
                  key={`${item.domainId}-${item.resourceId}`}
                  href={`/authorized-resources/${item.domainId}/${item.resourceId}`}
                  className="group block rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:border-red-200"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-xs font-black text-[#C41E3A]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="min-w-0">
                        <span className="inline-flex rounded-full bg-red-50 px-2.5 py-1 text-xs font-bold text-[#C41E3A]">
                          {item.domainName}
                        </span>

                        <h3 className="mt-2 font-black text-slate-900">
                          {item.resourceName}
                        </h3>
                      </div>
                    </div>

                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#C41E3A]" />
                  </div>

                  <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500">
                    {item.examples.join("、")}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
                    <span className="text-slate-400">数据内容</span>
                    <span className="font-bold text-slate-700">
                      {item.examples.length}项
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="rounded-2xl border border-slate-100 bg-white">
                <EmptyState />
              </div>
            )}
          </div>
        </section>

        {/* 国家部委数据目录 */}
        <section
          id="ministry-catalog"
          className="scroll-mt-28 border-t border-slate-200 pt-12"
        >
          <div className="mb-7">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-[#C41E3A]">
              <Landmark className="h-4 w-4" />
              国家部委行业数据
            </div>

            <h2 className="text-3xl font-black text-slate-900">
              国家部委数据目录
            </h2>

            <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-500">
              集中展示国家部委数据资源接入情况。当前交通运输部、民政部、教育部、公安部已接入，
              国家卫生健康委、国家医疗保障局暂未接入。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ministryCatalogs.map((item) => {
              const hasDetailPage = [
                "transport-ministry",
                "civil-ministry",
                "education-ministry",
              ].includes(item.id);

              const cardContent = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-sm font-black text-[#C41E3A] transition ${
                        hasDetailPage
                          ? "group-hover:bg-[#C41E3A] group-hover:text-white"
                          : ""
                      }`}
                    >
                      <Building2 className="h-5 w-5" />
                    </div>

                    <span
                      className={[
                        "rounded-full px-3 py-1 text-xs font-bold",
                        item.status === "已接入"
                          ? "bg-red-50 text-[#C41E3A]"
                          : "bg-slate-100 text-slate-500",
                      ].join(" ")}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3
                    className={`mt-5 text-xl font-black text-slate-900 transition ${
                      hasDetailPage ? "group-hover:text-[#C41E3A]" : ""
                    }`}
                  >
                    {item.name}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.stats.map((stat) => (
                      <span
                        key={stat}
                        className={`rounded-md px-2.5 py-1 text-xs font-bold ${
                          item.status === "已接入"
                            ? "bg-red-50 text-[#C41E3A]"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {stat}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                    <span
                      className={`text-sm font-bold ${
                        hasDetailPage ? "text-[#C41E3A]" : "text-slate-400"
                      }`}
                    >
                      {item.id === "public-security-ministry"
                        ? "当前已接入2项资源"
                        : item.status === "未接入"
                        ? "暂未接入"
                        : "查看相关目录"}
                    </span>

                    {hasDetailPage && (
                      <ArrowRight className="h-4 w-4 text-[#C41E3A] transition group-hover:translate-x-1" />
                    )}
                  </div>
                </>
              );

              return hasDetailPage ? (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group flex min-h-[310px] flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_14px_32px_rgba(196,30,58,0.08)]"
                >
                  {cardContent}
                </Link>
              ) : (
                <div
                  key={item.id}
                  className="flex min-h-[310px] flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

type StatCardProps = {
  icon: typeof Database;
  label: string;
  value: number;
  unit: string;
  note: string;
};

function StatCard({
  icon: Icon,
  label,
  value,
  unit,
  note,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3 text-sm text-slate-500">
        <Icon className="h-5 w-5 text-[#C41E3A]" />
        {label}
      </div>

      <div className="mt-3 flex items-end gap-1">
        <span className="text-4xl font-black text-[#C41E3A]">
          {value}
        </span>
        <span className="mb-1 text-sm text-slate-400">{unit}</span>
      </div>

      <div className="mt-2 text-xs leading-5 text-slate-400">
        {note}
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center px-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
        <Search className="h-5 w-5 text-slate-400" />
      </div>

      <div className="mt-4 font-bold text-slate-700">
        未找到匹配的资源
      </div>

      <p className="mt-2 text-sm text-slate-400">
        请调整搜索关键词或领域筛选条件
      </p>
    </div>
  );
}