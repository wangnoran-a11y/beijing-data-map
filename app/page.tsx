import Link from "next/link";
import LoginGate from "@/components/LoginGate";
import Header from "@/components/Header";
import HomeSearchBox from "@/components/HomeSearchBox";
import {
  authorizedResourceDomains,
  authorizedResourceSummary,
} from "@/data/authorizedResources";
import { dataCatalogSummary } from "@/data/dataMapCatalog";
import {
  ArrowRight,
  Building2,
  Database,
  Factory,
  FileText,
  Globe2,
  Layers,
  Package,
  ShieldCheck,
} from "lucide-react";

const beijingSources = [
  "市公安局",
  "市卫健委",
  "市民政局",
  "市医保局",
  "市税务局",
  "市教委",
  "市生态环境局",
  "市规划自然资源委",
];

const ministrySources = [
  { name: "交通运输部", connected: true },
  { name: "民政部", connected: true },
  { name: "教育部", connected: true },
  {
    name: "公安部",
    connected: true,
    resources: ["网证数据核验", "第三方身份核验"],
  },
  { name: "国家卫生健康委员会", connected: false },
  { name: "国家医疗保障局", connected: false },
];

const overseasData = {
  title: "境外企业数据资源",
  subtitle: "欧洲企业信息与信用数据",
  description:
    "储备欧洲企业多维信息资源，覆盖企业基础信息、股权治理、经营信息、财务信息、信用风险及知识产权等数据。",
  stats: [
    { value: "8000万+", label: "企业主体" },
    { value: "13亿+", label: "数据记录" },
    { value: "欧洲", label: "重点区域" },
  ],
  tags: [
    "企业基础信息",
    "股权治理",
    "经营信息",
    "财务信息",
    "信用风险",
    "知识产权",
  ],
};

const projects = [
  {
    title: "汽车维修电子健康档案",
    tag: "交通运输部",
    desc: "已形成车维全景动察01—08及车辆健康评分共9个产品，持续推进全国数据验证与产品能力建设。",
    stats: ["9个产品", "4项已上线", "5项开发中"],
    href: "/data-catalog/transport",
  },
  {
    title: "公共数据授权运营",
    tag: "北京市",
    desc: "围绕首批公共数据资源，推进资源分类、场景建设和产品服务清单完善。",
    stats: ["9个领域", "40类资源"],
    href: "/authorized-resources",
  },
  {
    title: "养老金融服务",
    tag: "民政数据",
    desc: "支撑养老机构评级、授信调查和养老金融场景应用。",
    stats: ["机构画像", "风险评级"],
    href: "/data-catalog/civil",
  },
  {
    title: "企业授信风控",
    tag: "金融服务",
    desc: "整合企业经营、税务、发票和年报数据，支撑贷前风控。",
    stats: ["企业画像", "授信评估"],
    href: "/data-catalog/finance",
  },
];

const products = [
  {
    title: "车维全景动察-01",
    subtitle: "维修总次数",
    source: "交通运输部",
    status: "已上线",
  },
  {
    title: "车维全景动察-02",
    subtitle: "结算时间",
    source: "交通运输部",
    status: "已上线",
  },
  {
    title: "企业尽调研究",
    subtitle: "企业年报、税收、股东等数据服务",
    source: "首批授权运营",
    status: "首批授权",
  },
  {
    title: "医保大数据反欺诈",
    subtitle: "商保核保理赔场景",
    source: "首批授权运营",
    status: "首批授权",
  },
  {
    title: "车维全景动察-03",
    subtitle: "维修里程",
    source: "交通运输部",
    status: "已上线",
  },
  {
    title: "车维全景动察-04",
    subtitle: "维修故障情况",
    source: "交通运输部",
    status: "开发中",
  },
  {
    title: "碳排放监测分析",
    subtitle: "碳排放核算与减排分析",
    source: "首批授权运营",
    status: "首批授权",
  },
  {
    title: "企业经营发展监测",
    subtitle: "重点区域企业画像与资质画像",
    source: "首批授权运营",
    status: "首批授权",
  },
];

const industries = [
  "新一代信息技术",
  "医药健康",
  "智能网联汽车",
  "集成电路",
  "高端装备",
  "新能源与节能环保",
  "现代物流",
  "消费与生活服务",
];

const industryLinks: Record<string, string> = {
  新一代信息技术: "information",
  医药健康: "health",
  智能网联汽车: "auto",
  集成电路: "ic",
  高端装备: "equipment",
  新能源与节能环保: "energy",
  现代物流: "logistics",
  消费与生活服务: "consumption",
};

export default function Home() {
  return (
    <LoginGate>
      <main className="min-h-screen bg-[#F7F8FA] text-slate-900">
        <Header />

        <section className="pt-32 pb-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
                <Database className="h-4 w-4" />
                北京数据地图
              </div>

              <h1 className="max-w-4xl text-[52px] font-black leading-tight text-slate-900">
                汇聚公共数据资源，
                <br />
                形成产品能力，赋能重点产业。
              </h1>

              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-500">
                面向公共数据授权运营、数据资源管理、产品服务发布和产业场景应用，构建可查看、可检索、可落地的数据地图门户。
              </p>

              <HomeSearchBox />

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/data-catalog"
                  className="inline-flex items-center gap-2 rounded-full bg-[#C41E3A] px-6 py-3 text-sm font-bold text-white"
                >
                  查看数据目录
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/authorized-resources"
                  className="inline-flex items-center gap-2 rounded-full bg-red-50 px-6 py-3 text-sm font-bold text-[#C41E3A]"
                >
                  查看授权运营清单
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/industry"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3 text-sm font-bold text-slate-700"
                >
                  查看产业地图
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-4">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Database className="h-5 w-5 text-[#C41E3A]" />
                    首批授权领域
                  </div>
                  <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                    {authorizedResourceSummary.domainCount}
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Layers className="h-5 w-5 text-[#C41E3A]" />
                    首批资源分类
                  </div>
                  <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                    {authorizedResourceSummary.resourceCount}
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Package className="h-5 w-5 text-[#C41E3A]" />
                    数据产品
                  </div>
                  <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                    {dataCatalogSummary.productCount}
                  </div>
                  <div className="mt-1 text-xs text-slate-400">
                    已纳入目录的数据产品
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Factory className="h-5 w-5 text-[#C41E3A]" />
                    赋能产业
                  </div>
                  <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                    8
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 lg:px-10 py-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-900">
                数据资源来源
              </h2>
              <p className="mt-3 text-slate-500">
                汇聚北京市公共数据资源、国家部委数据资源及境外企业数据资源，形成统一资源视图。
              </p>
            </div>

            <Link
              href="/data-catalog"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-red-200 bg-[#C41E3A] px-5 py-2.5 text-sm font-bold text-white shadow-[0_5px_14px_rgba(196,30,58,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#B51B35] hover:shadow-[0_8px_18px_rgba(196,30,58,0.22)]"
            >
              查看数据目录
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* 北京市公共数据 */}
            <div className="flex min-h-[470px] flex-col rounded-[28px] border border-slate-100 bg-white p-7 shadow-sm">
              <div className="flex min-h-[78px] items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50">
                    <Building2 className="h-6 w-6 text-[#C41E3A]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#C41E3A]">市级公共数据</div>
                    <h3 className="mt-1 text-xl font-black text-slate-900">北京市公共数据目录</h3>
                    <p className="mt-1 text-sm text-slate-500">已接入重点市级部门公共数据资源</p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-[#C41E3A]">
                  已接入
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  ["8", "重点部门"],
                  [String(authorizedResourceSummary.domainCount), "授权领域"],
                  [String(authorizedResourceSummary.resourceCount), "资源分类"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl bg-slate-50 px-3 py-4 text-center">
                    <div className="whitespace-nowrap text-[24px] leading-none font-black text-[#C41E3A]">{value}</div>
                    <div className="mt-1 text-xs text-slate-500">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <div className="mb-3 text-xs font-bold text-slate-400">已接入重点部门</div>
                <div className="grid grid-cols-2 gap-2.5">
                  {beijingSources.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-slate-50 px-3.5 py-2.5 text-sm font-bold text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/authorized-resources"
                className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-[#C41E3A]"
              >
                查看首批授权资源
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* 国家部委数据 */}
            <div className="flex min-h-[470px] flex-col rounded-[28px] border border-slate-100 bg-white p-7 shadow-sm">
              <div className="flex min-h-[78px] items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50">
                    <Database className="h-6 w-6 text-[#C41E3A]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#C41E3A]">部委行业数据</div>
                    <h3 className="mt-1 text-xl font-black text-slate-900">国家部委数据目录</h3>
                    <p className="mt-1 text-sm text-slate-500">持续推进重点部委数据资源接入</p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-600">
                  持续接入
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  ["6", "部委来源"],
                  ["4", "已接入"],
                  ["2", "未接入"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl bg-slate-50 px-3 py-4 text-center">
                    <div className="whitespace-nowrap text-[24px] leading-none font-black text-[#C41E3A]">{value}</div>
                    <div className="mt-1 text-xs text-slate-500">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <div className="mb-3 text-xs font-bold text-slate-400">部委接入情况</div>
                <div className="grid grid-cols-2 gap-2.5">
                  {ministrySources.map((item) =>
                    item.name === "公安部" ? (
                      <details
                        key={item.name}
                        className="group rounded-xl bg-slate-50 px-3.5 py-2.5 open:ring-1 open:ring-red-100"
                      >
                        <summary className="flex min-h-[22px] cursor-pointer list-none items-center justify-between gap-2">
                          <span className="min-w-0 text-sm font-bold text-slate-700">
                            {item.name}
                          </span>
                          <div className="flex shrink-0 items-center gap-1.5">
                            <span className="rounded-full bg-red-50 px-2 py-1 text-[10px] font-bold text-[#C41E3A]">
                              已接入
                            </span>
                            <span className="text-xs text-slate-400 transition group-open:rotate-180">
                              ▾
                            </span>
                          </div>
                        </summary>

                        <div className="mt-2 border-t border-slate-200 pt-2">
                          <div className="mb-1.5 text-[10px] font-bold text-slate-400">
                            已接入2项资源
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.resources?.map((resource) => (
                              <span
                                key={resource}
                                className="rounded-full bg-white px-2 py-1 text-[10px] font-bold text-slate-600"
                              >
                                {resource}
                              </span>
                            ))}
                          </div>
                        </div>
                      </details>
                    ) : (
                      <div
                        key={item.name}
                        className="flex min-h-[42px] items-center justify-between gap-2 rounded-xl bg-slate-50 px-3.5 py-2.5"
                      >
                        <span className="min-w-0 text-sm font-bold text-slate-700">
                          {item.name}
                        </span>
                        <span
                          className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-bold ${
                            item.connected
                              ? "bg-red-50 text-[#C41E3A]"
                              : "bg-slate-200 text-slate-500"
                          }`}
                        >
                          {item.connected ? "已接入" : "未接入"}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <Link
                href="/data-catalog#ministry-catalog"
                className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-[#C41E3A]"
              >
                查看部委数据
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* 境外企业数据 */}
            <div className="flex min-h-[470px] flex-col rounded-[28px] border border-slate-100 bg-white p-7 shadow-sm">
              <div className="flex min-h-[78px] items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50">
                    <Globe2 className="h-6 w-6 text-[#C41E3A]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#C41E3A]">境外企业数据</div>
                    <h3 className="mt-1 text-xl font-black text-slate-900">境外企业数据资源</h3>
                    <p className="mt-1 text-sm text-slate-500">欧洲企业信息与信用数据</p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-500">
                  储备待接入
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {overseasData.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-slate-50 px-3 py-4 text-center"
                  >
                    <div className="whitespace-nowrap text-[18px] leading-none font-black text-[#C41E3A]">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <div className="mb-3 text-xs font-bold text-slate-400">主要数据能力</div>
                <p className="text-sm leading-6 text-slate-500">
                  储备欧洲企业多维信息资源，覆盖企业主体、治理、经营、财务及信用风险等企业信息。
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {overseasData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/overseas-resources"
                className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-[#C41E3A]"
              >
                查看境外企业数据概况
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-900">
                数据产品成果
              </h2>
              <p className="mt-3 text-slate-500">
                汇总展示首批授权运营、国家部委及其他已形成的数据产品和服务。
              </p>
            </div>

            <Link
              href="/data-products"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-red-200 bg-[#C41E3A] px-5 py-2.5 text-sm font-bold text-white shadow-[0_5px_14px_rgba(196,30,58,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#B51B35] hover:shadow-[0_8px_18px_rgba(196,30,58,0.22)]"
            >
              查看全部产品
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {products.map((item) => (
              <Link
                key={`${item.source}-${item.title}`}
                href="/data-products"
                className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50">
                    <FileText className="h-5 w-5 text-[#C41E3A]" />
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${
                      item.status === "已上线"
                        ? "bg-red-50 text-[#C41E3A]"
                        : item.status === "开发中"
                        ? "bg-blue-50 text-blue-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="text-xs font-bold text-slate-400">
                  {item.source}
                </div>
                <div className="mt-2 font-black text-slate-900 transition group-hover:text-[#C41E3A]">
                  {item.title}
                </div>
                <div className="mt-2 text-xs leading-5 text-slate-500">
                  {item.subtitle}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
                  <ShieldCheck className="h-4 w-4" />
                  授权运营
                </div>

                <h2 className="text-3xl font-black text-slate-900">
                  首批公共数据资源
                </h2>

                <p className="mt-3 text-slate-500">
                  覆盖{authorizedResourceSummary.domainCount}个重点领域、
                  {authorizedResourceSummary.resourceCount}类公共数据资源，
                  按领域和资源分类统一展示。
                </p>
              </div>

              <Link
                href="/authorized-resources"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#C41E3A] px-5 py-3 text-sm font-bold text-white"
              >
                查看完整清单
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {authorizedResourceDomains.map((domain) => (
                <Link
                  key={domain.id}
                  href={`/authorized-resources/${domain.id}`}
                  className="group rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-sm"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white transition group-hover:bg-red-50">
                      <Database className="h-5 w-5 text-[#C41E3A]" />
                    </div>

                    <span className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-slate-500">
                      {domain.resources.length}类
                    </span>
                  </div>

                  <div className="font-bold text-slate-900 transition group-hover:text-[#C41E3A]">
                    {domain.name}
                  </div>

                  <div className="mt-2 line-clamp-2 min-h-[40px] text-xs leading-5 text-slate-500">
                    {domain.resources
                      .slice(0, 3)
                      .map((resource) => resource.name)
                      .join("、")}
                    {domain.resources.length > 3 ? "等" : ""}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-900">
                数据赋能重点产业
              </h2>
              <p className="mt-3 text-slate-500">
                从“数据从哪来”进一步延伸到“数据能赋能哪些产业”。
              </p>
            </div>

            <Link
              href="/industry"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-red-200 bg-[#C41E3A] px-5 py-2.5 text-sm font-bold text-white shadow-[0_5px_14px_rgba(196,30,58,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#B51B35] hover:shadow-[0_8px_18px_rgba(196,30,58,0.22)]"
            >
              查看产业地图
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {industries.map((item) => (
              <Link
                key={item}
                href={`/industry/${industryLinks[item]}`}
                className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50">
                  <Factory className="h-5 w-5 text-[#C41E3A]" />
                </div>

                <div className="font-black text-slate-900">{item}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-6 pb-20">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                重点项目
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                轻量展示当前重点推进的数据资源建设、产品开发和场景落地项目。
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {projects.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-3 inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
                  {item.tag}
                </div>

                <h3 className="text-base font-black text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
                  {item.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600"
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                <div className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#C41E3A]">
                  查看
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </LoginGate>
  );
}