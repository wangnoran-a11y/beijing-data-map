import Link from "next/link";
import {
  ArrowLeft,
  Database,
  FileText,
  Building2,
  Layers,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { authorizedResources } from "@/data/authorizedResources";

export default function AuthorizedResourcesPage() {
  const totalFields = Array.from(
    new Set(authorizedResources.map((item) => item.field))
  ).length;

  const totalScenarios = authorizedResources.length;

  const publicCount = authorizedResources.filter(
    (item) => item.direction === "公共治理、公益事业"
  ).length;

  const industryCount = authorizedResources.filter(
    (item) => item.direction === "产业发展、行业发展"
  ).length;

  return (
    <main className="min-h-screen bg-[#F7F8FA] pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-10">
        <Link
          href="/data-catalog"
          className="mb-8 inline-flex items-center gap-2 font-bold text-[#C41E3A]"
        >
          <ArrowLeft className="h-4 w-4" />
          返回数据目录
        </Link>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
            <ShieldCheck className="h-4 w-4" />
            公共数据授权运营
          </div>

          <h1 className="text-[42px] font-black text-slate-900">
            第一批公共数据资源与产品服务清单
          </h1>

          <p className="mt-3 max-w-4xl text-slate-500">
            围绕公共治理、公益事业和产业发展重点场景，集中展示第一批可纳入授权运营的数据资源范围、数据提供部门及对应产品服务能力。
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Database className="h-5 w-5 text-[#C41E3A]" />
                覆盖领域
              </div>
              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {totalFields}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Layers className="h-5 w-5 text-[#C41E3A]" />
                应用场景
              </div>
              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {totalScenarios}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <FileText className="h-5 w-5 text-[#C41E3A]" />
                公益治理类
              </div>
              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {publicCount}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Building2 className="h-5 w-5 text-[#C41E3A]" />
                产业发展类
              </div>
              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {industryCount}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#resources"
              className="inline-flex items-center gap-2 rounded-full bg-[#C41E3A] px-5 py-3 text-sm font-bold text-white"
            >
              查看数据资源目录
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-red-50 px-5 py-3 text-sm font-bold text-[#C41E3A]"
            >
              查看产品服务目录
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section
          id="resources"
          className="mt-8 scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm"
        >
          <div className="mb-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm font-bold text-slate-600">
              数据资源
            </div>

            <h2 className="text-2xl font-black text-slate-900">
              公共数据资源目录
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              按领域、应用场景、数据资源内容及数据提供部门展示第一批授权运营资源范围。
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-100">
            <table className="min-w-[1300px] w-full text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="w-[80px] px-5 py-4 text-left font-black">
                    序号
                  </th>
                  <th className="w-[140px] px-5 py-4 text-left font-black">
                    领域
                  </th>
                  <th className="w-[260px] px-5 py-4 text-left font-black">
                    应用场景
                  </th>
                  <th className="w-[620px] px-5 py-4 text-left font-black">
                    数据资源内容
                  </th>
                  <th className="w-[240px] px-5 py-4 text-left font-black">
                    数据提供部门
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {authorizedResources.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="px-5 py-4 font-black text-[#C41E3A]">
                      {item.id}
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      {item.field}
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-800">
                      {item.scenario}
                    </td>
                    <td className="px-5 py-4 leading-6 text-slate-600">
                      {item.resource}
                    </td>
                    <td className="px-5 py-4 leading-6 text-slate-600">
                      {item.department}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section
          id="products"
          className="mt-8 scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm"
        >
          <div className="mb-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm font-bold text-slate-600">
              产品服务
            </div>

            <h2 className="text-2xl font-black text-slate-900">
              公共数据产品与服务目录
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              按领域、服务方向、应用场景及产品服务名称展示第一批可运营产品服务能力。
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-100">
            <table className="min-w-[1300px] w-full text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="w-[80px] px-5 py-4 text-left font-black">
                    序号
                  </th>
                  <th className="w-[140px] px-5 py-4 text-left font-black">
                    领域
                  </th>
                  <th className="w-[200px] px-5 py-4 text-left font-black">
                    服务方向
                  </th>
                  <th className="w-[300px] px-5 py-4 text-left font-black">
                    应用场景
                  </th>
                  <th className="w-[620px] px-5 py-4 text-left font-black">
                    产品服务名称
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {authorizedResources.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="px-5 py-4 font-black text-[#C41E3A]">
                      {item.id}
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      {item.field}
                    </td>
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
                        {item.direction}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-800">
                      {item.scenario}
                    </td>
                    <td className="px-5 py-4 leading-6 text-slate-600">
                      {item.products}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}