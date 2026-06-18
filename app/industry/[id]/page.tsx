import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Factory,
  Database,
  FileText,
  Target,
  CheckCircle2,
} from "lucide-react";
import { industries } from "@/data/industryEmpowerment";

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

  return (
    <main className="min-h-screen bg-[#F7F8FA] pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-10">
        <Link
          href="/industry"
          className="mb-8 inline-flex items-center gap-2 font-bold text-[#C41E3A]"
        >
          <ArrowLeft className="h-4 w-4" />
          返回数据赋能产业
        </Link>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
            <Factory className="h-4 w-4" />
            重点产业
          </div>

          <h1 className="text-[42px] font-black text-slate-900">
            {industry.name}
          </h1>

          <p className="mt-3 max-w-4xl text-slate-500">
            {industry.desc}
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Database className="h-5 w-5 text-[#C41E3A]" />
                可用数据资源
              </div>
              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {industry.resources.length}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <FileText className="h-5 w-5 text-[#C41E3A]" />
                数据产品服务
              </div>
              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {industry.products.length}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Target className="h-5 w-5 text-[#C41E3A]" />
                应用场景
              </div>
              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {industry.scenarios.length}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-black text-slate-900">
              可用数据资源
            </h2>

            <div className="space-y-3">
              {industry.resources.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C41E3A]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-black text-slate-900">
              数据产品服务
            </h2>

            <div className="space-y-3">
              {industry.products.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C41E3A]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-black text-slate-900">
              典型应用场景
            </h2>

            <div className="space-y-3">
              {industry.scenarios.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C41E3A]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}