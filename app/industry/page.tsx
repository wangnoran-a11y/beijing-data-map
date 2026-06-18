import Link from "next/link";
import {
  ArrowRight,
  Factory,
  Database,
  FileText,
  Target,
} from "lucide-react";
import { industries } from "@/data/industryEmpowerment";

export default function IndustryPage() {
  const totalResources = industries.reduce(
    (sum, item) => sum + item.resources.length,
    0
  );

  const totalProducts = industries.reduce(
    (sum, item) => sum + item.products.length,
    0
  );

  const totalScenarios = industries.reduce(
    (sum, item) => sum + item.scenarios.length,
    0
  );

  return (
    <main className="min-h-screen bg-[#F7F8FA] pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-10">
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
            <Factory className="h-4 w-4" />
            数据赋能产业
          </div>

          <h1 className="text-[42px] font-black text-slate-900">
            数据赋能重点产业
          </h1>

          <p className="mt-3 max-w-4xl text-slate-500">
            围绕北京重点产业方向，展示公共数据资源可赋能的产业场景、可调用的数据资源及可形成的数据产品服务能力。
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Factory className="h-5 w-5 text-[#C41E3A]" />
                重点产业
              </div>
              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {industries.length}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Database className="h-5 w-5 text-[#C41E3A]" />
                关联资源
              </div>
              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {totalResources}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <FileText className="h-5 w-5 text-[#C41E3A]" />
                数据产品
              </div>
              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {totalProducts}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Target className="h-5 w-5 text-[#C41E3A]" />
                应用场景
              </div>
              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {totalScenarios}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-8 md:grid-cols-2">
          {industries.map((item) => (
            <Link
              key={item.id}
              href={`/industry/${item.id}`}
              className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C41E3A]">
                    <Factory className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <h2 className="text-xl font-black text-slate-900">
                      {item.name}
                    </h2>
                    <p className="text-xs text-slate-500">
                      数据资源 × 产业场景
                    </p>
                  </div>
                </div>

                <ArrowRight className="h-5 w-5 text-[#C41E3A]" />
              </div>

              <p className="mb-5 text-sm leading-6 text-slate-600">
                {item.desc}
              </p>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-slate-50 px-3 py-4 text-center">
                  <div className="text-xl font-black text-slate-900">
                    {item.resources.length}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">数据资源</div>
                </div>

                <div className="rounded-xl bg-slate-50 px-3 py-4 text-center">
                  <div className="text-xl font-black text-slate-900">
                    {item.products.length}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">数据产品</div>
                </div>

                <div className="rounded-xl bg-slate-50 px-3 py-4 text-center">
                  <div className="text-xl font-black text-slate-900">
                    {item.scenarios.length}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">应用场景</div>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}