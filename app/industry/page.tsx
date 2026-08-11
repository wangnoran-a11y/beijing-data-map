import Link from "next/link";
import {
  ArrowRight,
  Database,
  Factory,
  FileText,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { industries } from "@/data/industryEmpowerment";
import { authorizedResourceSummary } from "@/data/authorizedResources";
import { dataCatalog } from "@/data/dataMapCatalog";

export default function IndustryPage() {
  const currentProductCount = dataCatalog.reduce(
    (sum, item) => sum + (item.products?.length ?? 0),
    0
  );

  return (
    <main className="min-h-screen bg-[#F7F8FA] pb-16 pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
            <Factory className="h-4 w-4" />
            数据赋能产业
          </div>

          <h1 className="text-[42px] font-black tracking-tight text-slate-900">
            数据赋能重点产业
          </h1>

          <p className="mt-3 max-w-5xl leading-7 text-slate-500">
            按北京市先进制造业和现代服务业深度融合八大重点领域进行产业划分，
            将数据地图现有北京市公共数据、国家部委数据及境外企业数据与产业需求建立关联，
            展示可关联资源、现有数据产品及可拓展应用场景。
          </p>

          <div className="mt-5 inline-flex rounded-2xl border border-red-100 bg-red-50/50 px-4 py-3 text-xs leading-6 text-slate-500">
            <span className="mr-2 shrink-0 font-bold text-[#C41E3A]">
              产业划分依据
            </span>
            《北京市推动先进制造业和现代服务业深度融合发展的实施意见》
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "重点产业",
                value: `${industries.length}`,
                unit: "个",
                note: "北京市两业融合重点领域",
                icon: Factory,
              },
              {
                label: "数据来源",
                value: "3",
                unit: "类",
                note: "北京市、国家部委、境外企业",
                icon: Layers3,
              },
              {
                label: "公共数据资源",
                value: `${authorizedResourceSummary.resourceCount}`,
                unit: "类",
                note: "首批公共数据资源分类",
                icon: Database,
              },
              {
                label: "现有数据产品",
                value: `${currentProductCount}`,
                unit: "个",
                note: "按当前数据产品目录统计",
                icon: FileText,
              },
            ].map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5"
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <Icon className="h-4 w-4 text-[#C41E3A]" />
                    {stat.label}
                  </div>

                  <div className="mt-3 flex items-end gap-1.5">
                    <span className="text-[28px] font-black leading-none text-[#C41E3A]">
                      {stat.value}
                    </span>
                    <span className="pb-0.5 text-sm font-bold text-slate-400">
                      {stat.unit}
                    </span>
                  </div>

                  <div className="mt-2 text-xs text-slate-400">{stat.note}</div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                八大重点产业
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                同一数据资源可根据产业适配关系关联至多个产业，产业卡片中的数量不进行跨产业汇总。
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-500 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-[#C41E3A]" />
              仅关联当前数据地图已有资源
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((item, index) => (
              <Link
                key={item.id}
                href={`/industry/${item.id}`}
                className="group flex min-h-[330px] flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_14px_32px_rgba(196,30,58,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C41E3A] text-sm font-black text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <div className="text-xs font-bold text-[#C41E3A]">
                        两业融合重点领域
                      </div>
                      <h2 className="mt-1 text-xl font-black text-slate-900 transition group-hover:text-[#C41E3A]">
                        {item.name}
                      </h2>
                    </div>
                  </div>

                  <ArrowRight className="h-5 w-5 shrink-0 text-[#C41E3A] transition group-hover:translate-x-1" />
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {item.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {(item.directions ?? []).slice(0, 5).map((direction) => (
                    <span
                      key={direction}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600"
                    >
                      {direction}
                    </span>
                  ))}
                </div>

                <div className="mt-auto grid grid-cols-3 gap-3 border-t border-slate-100 pt-5">
                  <div className="rounded-xl bg-slate-50 px-3 py-3 text-center">
                    <div className="text-lg font-black text-slate-900">
                      {item.resources?.length ?? 0}
                    </div>
                    <div className="mt-1 text-[11px] text-slate-500">
                      关联资源
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-50 px-3 py-3 text-center">
                    <div className="text-lg font-black text-slate-900">
                      {item.products?.length ?? 0}
                    </div>
                    <div className="mt-1 text-[11px] text-slate-500">
                      现有产品
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-50 px-3 py-3 text-center">
                    <div className="text-lg font-black text-slate-900">
                      {item.scenarios?.length ?? 0}
                    </div>
                    <div className="mt-1 text-[11px] text-slate-500">
                      应用方向
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}