import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Database,
  Boxes,
  Sparkles,
  Layers,
  Building2,
} from "lucide-react";
import { industryData } from "@/data/industryData";

export default async function IndustryPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ from?: string }>;
}) {
  const { id } = await params;
  const { from } = await searchParams;
  const industry = industryData.find((item) => item.id === id);
  let backHref = "/industry";
let backText = "返回数据赋能产业";

if (from === "home") {
  backHref = "/#resource-showcase";
  backText = "返回首页资源展示";
}

if (from === "resource") {
  backHref = "/data-resources";
  backText = "返回数据资源";
}

if (from === "catalog") {
  backHref = "/data-catalog";
  backText = "返回数据目录";
}

if (from === "product") {
  backHref = "/data-products";
  backText = "返回数据产品";
}

  if (!industry) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F7F8FA] px-8 pb-14 pt-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-6 flex items-center justify-between">
          <Link
  href={backHref}
  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#C41E3A] shadow-sm transition hover:-translate-y-[1px] hover:shadow-md"
>
  <ArrowLeft className="h-4 w-4" />
  {backText}
</Link>

          <div className="hidden text-sm font-semibold text-slate-400 md:block">
            首页 / 数据赋能产业 / {industry.name}
          </div>
        </div>

        <section className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0B1226] via-[#111827] to-[#2A1218] text-white shadow-xl">
          <div className="relative p-8 md:p-10">
            <div className="absolute right-[-80px] top-[-80px] h-[240px] w-[240px] rounded-full bg-[#C41E3A]/25 blur-3xl" />
            <div className="absolute bottom-[-100px] left-[-80px] h-[260px] w-[260px] rounded-full bg-[#D8B37A]/10 blur-3xl" />

            <div className="relative mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#C41E3A] shadow-lg shadow-red-950/30">
                  <Database className="h-7 w-7" />
                </div>

                <div>
                  <div className="mb-2 inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-[#D8B37A]">
                    产业数据行业
                  </div>

                  <h1 className="text-[34px] font-black leading-tight md:text-[42px]">
                    {industry.name}
                  </h1>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-white/65">
                    {industry.desc}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4">
                <div className="text-xs font-bold text-white/50">行业状态</div>
                <div className="mt-1 text-lg font-black text-[#D8B37A]">
                  已接入展示
                </div>
              </div>
            </div>

            <div className="relative mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {industry.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.12]"
                >
                  <div className="text-[28px] font-black text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-[24px] font-black">数据资源目录</h2>
                <p className="mt-1 text-sm text-white/45">
                  展示该产业方向已汇聚的数据表、核心字段及资源能力。
                </p>
              </div>
            </div>

            <div className="relative mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              {industry.resources.map((res) => (
                <div
                  key={res.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 transition hover:-translate-y-1 hover:bg-white/[0.12]"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-black">{res.name}</h3>
                      <p className="mt-1 text-xs font-bold text-[#D8B37A]">
                        {res.table}
                      </p>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Boxes className="h-5 w-5 text-[#D8B37A]" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {res.fields.map((field) => (
                      <span
                        key={field}
                        className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/75"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-5">
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#D8B37A]" />
                  <h2 className="text-lg font-black">数据产品</h2>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {industry.products.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-5">
                <div className="mb-4 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-[#D8B37A]" />
                  <h2 className="text-lg font-black">应用场景</h2>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {industry.scenes.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mt-8 rounded-2xl border border-white/10 bg-white/[0.08] p-5">
              <div className="mb-3 flex items-center gap-2">
                <Layers className="h-5 w-5 text-[#D8B37A]" />
                <h2 className="text-lg font-black">行业说明</h2>
              </div>

              <p className="text-sm leading-7 text-white/60">
                本行业围绕数据资源汇聚、数据产品开发和产业场景应用进行展示，
                后续可继续接入更多字段目录、产品详情、调用情况、授权运营状态及典型案例。
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}