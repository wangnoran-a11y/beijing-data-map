import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Database,
  Table2,
  Boxes,
  FileText,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { dataCatalog } from "@/data/dataMapCatalog";

export default async function CatalogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const catalog = dataCatalog.find((item) => item.id === id);

  if (!catalog) {
    return notFound();
  }

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
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
                <Database className="h-4 w-4" />
                {catalog.source}
              </div>

              <h1 className="text-[42px] font-black text-slate-900">
                {catalog.name}
              </h1>

              <p className="mt-3 max-w-4xl text-slate-500">
                {catalog.summary}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Table2 className="h-5 w-5 text-[#C41E3A]" />
                数据表
              </div>
              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {catalog.stats.tables}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Boxes className="h-5 w-5 text-[#C41E3A]" />
                字段总量
              </div>
              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {catalog.stats.fields}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <FileText className="h-5 w-5 text-[#C41E3A]" />
                数据产品
              </div>
              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {catalog.products.length}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Layers className="h-5 w-5 text-[#C41E3A]" />
                数据规模
              </div>
              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {catalog.stats.records}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#fields"
              className="rounded-full bg-[#C41E3A] px-5 py-2 text-sm font-bold text-white"
            >
              查看字段全表
            </a>
            <a
              href="#products"
              className="rounded-full bg-red-50 px-5 py-2 text-sm font-bold text-[#C41E3A]"
            >
              查看数据产品
            </a>
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-black text-slate-900">
              一、数据资产概览
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              按数据表展示字段数量、字段构成及可支撑的数据产品能力。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {catalog.tables.map((table) => (
              <div
                key={table.tableName}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C41E3A]">
                  <Table2 className="h-5 w-5 text-white" />
                </div>

                <h3 className="font-black text-slate-900">
                  {table.tableCnName}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {table.tableName}
                </p>

                <div className="mt-4 flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <span className="text-sm text-slate-500">字段数量</span>
                  <span className="font-black text-[#C41E3A]">
                    {table.fieldCount} 个
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="fields"
          className="mt-8 scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-black text-slate-900">
              二、字段全表
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              按数据表分组展示字段英文名、中文名、类型、规则及业务说明，适合展示全量字段。
            </p>
          </div>

          <div className="space-y-10">
            {catalog.tables.map((table) => (
              <div
                key={table.tableName}
                className="rounded-3xl border border-slate-100"
              >
                <div className="flex flex-col gap-3 border-b border-slate-100 bg-slate-50 px-6 py-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      {table.tableCnName}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      表名：{table.tableName}
                    </p>
                  </div>

                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
                    <CheckCircle2 className="h-4 w-4" />
                    {table.fieldCount} 个字段
                  </div>
                </div>

                <div className="max-h-[560px] overflow-auto">
                  <table className="min-w-[1100px] w-full text-sm">
                    <thead className="sticky top-0 z-10 bg-white text-slate-600 shadow-sm">
                      <tr>
                        <th className="w-[80px] whitespace-nowrap px-5 py-4 text-left font-black">
                          序号
                        </th>
                        <th className="w-[180px] whitespace-nowrap px-5 py-4 text-left font-black">
                          字段英文名
                        </th>
                        <th className="w-[180px] whitespace-nowrap px-5 py-4 text-left font-black">
                          字段中文名
                        </th>
                        <th className="w-[120px] whitespace-nowrap px-5 py-4 text-left font-black">
                          字段类型
                        </th>
                        <th className="w-[260px] px-5 py-4 text-left font-black">
                          字段规则
                        </th>
                        <th className="px-5 py-4 text-left font-black">
                          业务说明
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                      {table.fields.map((field, index) => (
                        <tr key={field.fieldName} className="hover:bg-slate-50">
                          <td className="whitespace-nowrap px-5 py-4 font-black text-[#C41E3A]">
                            {index + 1}
                          </td>
                          <td className="whitespace-nowrap px-5 py-4 font-mono text-slate-800">
                            {field.fieldName}
                          </td>
                          <td className="whitespace-nowrap px-5 py-4 font-bold text-slate-900">
                            {field.fieldCnName}
                          </td>
                          <td className="whitespace-nowrap px-5 py-4 text-slate-600">
                            {field.type}
                          </td>
                          <td className="px-5 py-4 leading-6 text-slate-600">
                            {field.rule}
                          </td>
                          <td className="px-5 py-4 leading-6 text-slate-600">
                            {field.description}
                          </td>
                        </tr>
                      ))}

                      {table.fields.length === 0 && (
                        <tr>
                          <td
                            colSpan={6}
                            className="px-5 py-12 text-center text-slate-400"
                          >
                            暂无字段明细，待补充。
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="products"
          className="mt-8 scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-black text-slate-900">
              三、数据产品清单
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              展示该领域全部可发布、可运营的数据产品，包括序号、产品名称、类型、入参、出参及应用场景。
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-100">
            <table className="min-w-[1300px] w-full text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="w-[80px] px-5 py-4 text-left font-black">
                    序号
                  </th>
                  <th className="w-[300px] px-5 py-4 text-left font-black">
                    产品名称
                  </th>
                  <th className="w-[120px] px-5 py-4 text-left font-black">
                    产品类型
                  </th>
                  <th className="w-[300px] px-5 py-4 text-left font-black">
                    入参
                  </th>
                  <th className="w-[360px] px-5 py-4 text-left font-black">
                    出参
                  </th>
                  <th className="w-[260px] px-5 py-4 text-left font-black">
                    应用场景
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {catalog.products.map((product, index) => (
                  <tr key={product.name} className="hover:bg-slate-50">
                    <td className="px-5 py-4 font-black text-[#C41E3A]">
                      {index + 1}
                    </td>

                    <td className="px-5 py-4 font-black text-slate-900">
                      {product.name}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4">
                      <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
                        {product.type}
                      </span>
                    </td>

                    <td className="px-5 py-4 leading-6 text-slate-600">
                      {product.input}
                    </td>

                    <td className="px-5 py-4 leading-6 text-slate-600">
                      {product.output}
                    </td>

                    <td className="px-5 py-4 leading-6 text-slate-600">
                      {product.scenario}
                    </td>
                  </tr>
                ))}

                {catalog.products.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-5 py-12 text-center text-slate-400"
                    >
                      暂无产品清单，待补充。
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}