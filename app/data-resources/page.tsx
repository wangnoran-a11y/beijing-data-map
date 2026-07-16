import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Database,
  FileText,
  Landmark,
  Layers3,
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
  },
  {
    title: "国家部委数据资源",
    subtitle: "部委行业数据",
    description:
      "汇集交通运输部、民政部、国家卫生健康委、国家医疗保障局、公安部、教育部等国家部委行业数据，覆盖交通运输、民政养老、医疗健康、医保服务、公安交管和教育教学等重点领域。",
    stats: ["6个部委来源", "覆盖6个重点领域", "持续接入建设"],
    icon: Building2,
    href: "/data-catalog#ministry-catalog",
    action: "查看部委数据目录",
  },
];

export default function DataResourcesPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] pb-16 pt-28 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
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
            汇聚北京市公共数据和国家部委行业数据，统一展示资源来源、
            授权范围及重点资源布局，并提供统一数据目录入口。
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
              2类
            </div>

            <div className="mt-2 text-xs text-slate-400">
              北京市公共数据、国家部委数据
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
              <Layers3 className="h-5 w-5 text-[#C41E3A]" />
              资源分类
            </div>

            <div className="mt-3 text-4xl font-black text-[#C41E3A]">
              {authorizedResourceSummary.resourceCount}
            </div>

            <div className="mt-2 text-xs text-slate-400">
              首批公共数据资源分类
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <FileText className="h-5 w-5 text-[#C41E3A]" />
              交通数据规模
            </div>

            <div className="mt-3 text-4xl font-black text-[#C41E3A]">
              59.1亿+
            </div>

            <div className="mt-2 text-xs text-slate-400">
              汽车维修电子健康档案记录
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
              按资源来源区分北京市公共数据与国家部委行业数据。
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {sourceSystems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_14px_32px_rgba(196,30,58,0.08)]"
                >
                  <div className="flex items-start justify-between gap-5">
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

                    <ArrowRight className="h-5 w-5 shrink-0 text-[#C41E3A] transition group-hover:translate-x-1" />
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-500">
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

                  <div className="mt-6 border-t border-slate-100 pt-5 text-sm font-bold text-[#C41E3A]">
                    {item.action}
                  </div>
                </Link>
              );
            })}
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
                  数据目录分别展示北京市公共数据授权目录和国家部委数据目录，
                  统一呈现数据资源、数据表、字段清单及对应数据产品。
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