import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Database,
  Factory,
  FileText,
  Layers3,
  Target,
} from "lucide-react";
import { industries } from "@/data/industryEmpowerment";

const sourceTypeClass = {
  北京市公共数据: "bg-red-50 text-[#C41E3A]",
  国家部委数据: "bg-amber-50 text-amber-700",
  境外企业数据: "bg-slate-100 text-slate-600",
};

const maturityClass = {
  高: "bg-red-50 text-[#C41E3A]",
  较高: "bg-amber-50 text-amber-700",
  中: "bg-blue-50 text-blue-700",
  基础: "bg-slate-100 text-slate-600",
};

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const industry = industries.find((item) => item.id === id);

  if (!industry) {
    return notFound();
  }

  const sourceTypes = Array.from(
    new Set((industry.resources ?? []).map((item) => item.sourceType))
  );

  return (
    <main className="min-h-screen bg-[#F7F8FA] pb-16 pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Link
          href="/industry"
          className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-[#C41E3A]"
        >
          <ArrowLeft className="h-4 w-4" />
          返回数据赋能产业
        </Link>

        <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-start">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
                <Factory className="h-4 w-4" />
                数据赋能重点产业
              </div>

              <h1 className="text-[42px] font-black tracking-tight text-slate-900">
                {industry.name}
              </h1>

              <p className="mt-3 text-sm font-bold text-[#C41E3A]">
                {industry.policyName}
              </p>

              <p className="mt-4 max-w-4xl leading-7 text-slate-500">
                {industry.desc}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {(industry.directions ?? []).map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex shrink-0 flex-wrap gap-2">
              {sourceTypes.map((type) => (
                <span
                  key={type}
                  className={`rounded-full px-3 py-2 text-xs font-bold ${sourceTypeClass[type as keyof typeof sourceTypeClass]}`}
                >
                  {type}
                </span>
              ))}
              <span
                className={`rounded-full px-3 py-2 text-xs font-bold ${maturityClass[industry.maturity as keyof typeof maturityClass]}`}
              >
                资源成熟度：{industry.maturity}
              </span>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "关联数据资源",
                value: industry.resources?.length ?? 0,
                note: "仅统计当前地图已有资源",
                icon: Database,
              },
              {
                label: "现有数据产品",
                value: industry.products?.length ?? 0,
                note: "仅引用当前产品目录",
                icon: FileText,
              },
              {
                label: "应用方向",
                value: industry.scenarios?.length ?? 0,
                note: "基于现有资源可拓展",
                icon: Target,
              },
              {
                label: "数据来源",
                value: sourceTypes.length,
                note: sourceTypes.join(" / "),
                icon: Layers3,
              },
            ].map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5"
                >
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Icon className="h-4 w-4 text-[#C41E3A]" />
                    {stat.label}
                  </div>
                  <div className="mt-3 text-[26px] font-black leading-none text-[#C41E3A]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs leading-5 text-slate-400">
                    {stat.note}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-5">
            <h2 className="text-2xl font-black text-slate-900">
              关联数据资源
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              以下资源均来自当前数据地图已有目录；同一资源可以支撑多个产业。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {(industry.resources ?? []).map((resource, index) => (
              <Link
                key={`${resource.sourceType}-${resource.name}-${index}`}
                href={resource.href || "/data-catalog"}
                className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:border-red-200 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold ${
                        sourceTypeClass[resource.sourceType]
                      }`}
                    >
                      {resource.sourceType}
                    </span>

                    <h3 className="mt-3 text-base font-black text-slate-900 transition group-hover:text-[#C41E3A]">
                      {resource.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      来源：{resource.source}
                    </p>

                    {resource.note && (
                      <p className="mt-2 text-xs font-bold text-slate-500">
                        {resource.note}
                      </p>
                    )}
                  </div>

                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#C41E3A] transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-black text-slate-900">
                  现有数据产品
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  只展示当前数据产品页已存在、与本产业可直接关联的产品。
                </p>
              </div>

              <Link
                href="/data-products"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C41E3A]"
              >
                查看全部产品
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {(industry.products?.length ?? 0) > 0 ? (
                (industry.products ?? []).map((rawProduct: any, index: number) => {
                  const product =
                    typeof rawProduct === "string"
                      ? { name: rawProduct, href: "/data-products", note: "" }
                      : rawProduct ?? {};
                  const productName =
                    product.name ?? product.title ?? product.label ?? `数据产品${index + 1}`;
                  const href =
                    typeof product.href === "string" && product.href.trim()
                      ? product.href
                      : "/data-products";
                  return (
                  <Link
                    key={`${productName}-${index}`}
                    href={href}
                    className="group flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3.5 transition hover:bg-red-50/60"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C41E3A]" />
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-slate-700 transition group-hover:text-[#C41E3A]">
                        {productName}
                      </div>
                      {product.note && (
                        <div className="mt-1 text-xs text-slate-400">
                          {product.note}
                        </div>
                      )}
                    </div>
                  </Link>
                  );
                })
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-5 py-8 text-center">
                  <div className="text-sm font-bold text-slate-500">
                    当前暂无专项现有产品
                  </div>
                  <div className="mt-2 text-xs leading-5 text-slate-400">
                    保留产业资源关联能力，不以规划产品冒充现有产品。
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="mb-5">
              <h2 className="text-xl font-black text-slate-900">
                可拓展应用场景
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                以下为基于现有数据资源形成的产业赋能方向，不等同于已上线产品。
              </p>
            </div>

            <div className="space-y-3">
              {(industry.scenarios ?? []).map((scenario, index) => (
                <div
                  key={scenario}
                  className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3.5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-black text-[#C41E3A] shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span className="text-sm font-bold text-slate-700">
                    {scenario}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-red-100 bg-red-50/40 p-6">
          <p className="text-sm leading-7 text-slate-600">
            <span className="font-bold text-[#C41E3A]">说明：</span>
            本页采用“产业—现有数据资源—现有产品—可拓展场景”的映射关系。
            “关联数据资源”和“现有数据产品”均以当前数据地图已有内容为基础；
            “可拓展应用场景”仅表示数据赋能方向，不代表已经形成或上线对应产品。
          </p>
        </section>
      </div>
    </main>
  );
}
