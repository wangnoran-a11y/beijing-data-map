import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Database,
  Globe2,
  Landmark,
  MapPinned,
} from "lucide-react";
import { authorizedResourceSummary } from "@/data/authorizedResources";

const sourceSystems = [
  {
    title: "北京市公共数据资源",
    subtitle: "市级公共数据",
    description:
      "汇集北京市首批拟纳入整体授权运营范围的公共数据资源，覆盖医疗健康、教育教学、金融服务、交通运输等重点领域。",
    stats: [
      `${authorizedResourceSummary.domainCount}个授权领域`,
      `${authorizedResourceSummary.resourceCount}类资源`,
    ],
    icon: Landmark,
    href: "/authorized-resources",
    action: "查看授权资源",
    status: "已接入",
    statusType: "connected",
  },
  {
    title: "国家部委数据资源",
    subtitle: "部委行业数据",
    description:
      "汇集交通运输部、民政部、教育部、公安部等已接入国家部委数据，并持续推进国家卫生健康委、国家医疗保障局等重点部委数据资源接入。",
    stats: ["6个部委来源", "4个已接入", "2个未接入"],
    icon: Building2,
    href: "/data-catalog#ministry-catalog",
    action: "查看部委数据目录",
    status: "持续接入",
    statusType: "progress",
  },
  {
    title: "境外企业数据资源",
    subtitle: "境外企业数据",
    description:
      "储备欧洲企业多维信息资源，覆盖企业基础信息、股权治理、经营信息、财务信息、信用风险等数据，支撑跨境企业核验、信用评估及商业决策。",
    stats: ["8000万+企业主体", "13亿+数据记录", "欧洲重点覆盖"],
    icon: Globe2,
    href: "/overseas-resources",
    action: "查看资源概况",
    status: "储备待接入",
    statusType: "pending",
  },
];

const overseasDataCategories = [
  "企业基础信息",
  "股权治理",
  "经营信息",
  "财务信息",
  "信用风险",
  "知识产权",
];

export default function DataResourcesPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-10">
        {/* 页面标题 */}
        <section className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
            <Database className="h-4 w-4" />
            数据资源
          </div>

          <h1 className="text-[42px] font-black tracking-tight text-slate-900">
            资源体系
          </h1>

          <p className="mt-3 max-w-4xl leading-7 text-slate-500">
            汇聚北京市公共数据、国家部委数据及境外企业数据资源，
            统一展示资源来源、授权范围、接入状态及重点资源布局，
            并提供统一数据目录入口。
          </p>
        </section>

        {/* 统计概况 */}
        <section className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <Building2 className="h-5 w-5 text-[#C41E3A]" />
              资源来源
            </div>

            <div className="mt-3 text-4xl font-black text-[#C41E3A]">
              3类
            </div>

            <div className="mt-2 text-xs leading-5 text-slate-400">
              北京市公共数据、国家部委数据、境外企业数据
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <MapPinned className="h-5 w-5 text-[#C41E3A]" />
              授权领域
            </div>

            <div className="mt-3 text-4xl font-black text-[#C41E3A]">
              {authorizedResourceSummary.domainCount}
            </div>

            <div className="mt-2 text-xs text-slate-400">
              首批授权运营重点领域
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <Building2 className="h-5 w-5 text-[#C41E3A]" />
              部委接入
            </div>

            <div className="mt-3 flex items-end gap-2">
              <div className="text-4xl font-black text-[#C41E3A]">
                4
              </div>

              <div className="pb-1 text-sm font-bold text-slate-400">
                / 6
              </div>
            </div>

            <div className="mt-2 text-xs text-slate-400">
              国家部委数据已接入
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <Globe2 className="h-5 w-5 text-[#C41E3A]" />
              境外企业数据
            </div>

            <div className="mt-3 text-4xl font-black text-[#C41E3A]">
              8000万+
            </div>

            <div className="mt-2 text-xs text-slate-400">
              企业主体资源储备
            </div>
          </div>
        </section>

        {/* 资源来源体系 */}
        <section className="mb-10">
          <div className="mb-6">
            <h2 className="text-2xl font-black text-slate-900">
              资源来源体系
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              按资源来源区分北京市公共数据、国家部委数据与境外企业数据。
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {sourceSystems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_14px_32px_rgba(196,30,58,0.08)]"
                >
                  <div className="absolute right-5 top-5">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                        item.statusType === "connected"
                          ? "bg-red-50 text-[#C41E3A]"
                          : item.statusType === "progress"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-5 pr-20">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C41E3A]">
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      <div>
                        <div className="text-xs font-bold text-[#C41E3A]">
                          {item.subtitle}
                        </div>

                        <h3 className="mt-1 text-xl font-black text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 min-h-[112px] text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stats.map((stat) => (
                      <span
                        key={stat}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-[#C41E3A]">
                    <span>{item.action}</span>

                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 国家部委接入情况 */}
        <section className="mb-10">
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-3 inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
                  国家部委数据
                </div>

                <h2 className="text-2xl font-black text-slate-900">
                  部委数据接入情况
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
                  当前已接入交通运输部、民政部、教育部、公安部相关数据资源，
                  国家卫生健康委、国家医疗保障局相关数据资源正在持续推进接入。
                </p>
              </div>

              <div className="shrink-0 rounded-2xl bg-red-50 px-6 py-4 text-center">
                <div className="text-3xl font-black text-[#C41E3A]">
                  4 / 6
                </div>

                <div className="mt-1 text-xs font-bold text-slate-500">
                  已接入部委
                </div>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "交通运输部", connected: true },
                { name: "民政部", connected: true },
                { name: "教育部", connected: true },
                { name: "公安部", connected: true },
                { name: "国家卫生健康委", connected: false },
                { name: "国家医疗保障局", connected: false },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                >
                  <span className="text-sm font-bold text-slate-700">
                    {item.name}
                  </span>

                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                      item.connected
                        ? "bg-red-50 text-[#C41E3A]"
                        : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {item.connected ? "已接入" : "未接入"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 境外企业数据 */}
        <section id="overseas-data" className="mb-10 scroll-mt-28">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <Globe2 className="h-6 w-6 text-[#C41E3A]" />

                <h2 className="text-2xl font-black text-slate-900">
                  境外企业数据资源
                </h2>
              </div>

              <p className="text-sm text-slate-500">
                当前以欧洲企业信息与信用数据为重点，后续逐步拓展全球企业数据覆盖能力。
              </p>
            </div>

            <span className="shrink-0 rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-500">
              储备待接入
            </span>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-8 lg:p-10">
                <div className="mb-3 inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
                  欧洲企业信息与信用数据
                </div>

                <h3 className="text-2xl font-black text-slate-900">
                  构建境外企业信息与信用数据能力
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  储备欧洲企业多维信息资源，覆盖企业注册信息、经营状态、
                  股权治理、管理人员、经营财务、信用风险及知识产权等数据，
                  支撑跨境企业身份核验、企业信用评估、风险识别和商业决策。
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {overseasDataCategories.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 bg-slate-50/70 p-8 lg:border-l lg:border-t-0 lg:p-10">
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <div className="text-3xl font-black text-[#C41E3A]">
                      8000万+
                    </div>

                    <div className="mt-1 text-sm font-bold text-slate-700">
                      企业主体
                    </div>

                    <div className="mt-1 text-xs text-slate-400">
                      境外资源储备规模
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <div className="text-3xl font-black text-[#C41E3A]">
                      13亿+
                    </div>

                    <div className="mt-1 text-sm font-bold text-slate-700">
                      数据记录
                    </div>

                    <div className="mt-1 text-xs text-slate-400">
                      境外资源储备规模
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <div className="text-3xl font-black text-[#C41E3A]">
                      欧洲
                    </div>

                    <div className="mt-1 text-sm font-bold text-slate-700">
                      当前重点区域
                    </div>

                    <div className="mt-1 text-xs text-slate-400">
                      后续逐步拓展其他区域
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 数据目录入口 */}
        <section>
          <div className="rounded-3xl border border-red-100 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-3 inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
                  统一数据目录
                </div>

                <h2 className="text-2xl font-black text-slate-900">
                  查看数据目录
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
                  数据目录重点展示北京市公共数据授权目录和国家部委数据目录，
                  统一呈现数据资源、数据表、字段清单及对应数据产品。
                  境外企业数据当前处于资源储备阶段，后续接入后纳入统一目录管理。
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    北京市公共数据
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    国家部委数据
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    数据表与字段
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    数据产品
                  </span>
                </div>
              </div>

              <Link
                href="/data-catalog"
                className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-[#C41E3A] px-6 text-sm font-bold text-white transition hover:bg-[#A51731]"
              >
                查看数据目录
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}