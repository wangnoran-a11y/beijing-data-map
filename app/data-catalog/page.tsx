import Link from "next/link";
import {
  Database,
  ArrowRight,
  Table2,
  Boxes,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { dataCatalog } from "@/data/dataMapCatalog";

export default function DataCatalogPage() {
  const totalTables = dataCatalog.reduce(
    (sum, item) => sum + item.stats.tables,
    0
  );

  const totalFields = dataCatalog.reduce(
    (sum, item) => sum + item.stats.fields,
    0
  );

  const totalProducts = dataCatalog.reduce(
    (sum, item) => sum + item.products.length,
    0
  );

  return (
    <main className="min-h-screen bg-[#F7F8FA] pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-10">
        <div className="mb-10">
          <h1 className="text-[42px] font-black text-slate-900">
            数据目录
          </h1>

          <p className="mt-3 text-slate-500">
            汇聚北京市及国家部委重点数据资源目录，展示核心数据表、字段清单及数据产品能力。
          </p>
        </div>

        <Link
          href="/authorized-resources"
          className="mb-10 block rounded-3xl border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
                <ShieldCheck className="h-4 w-4" />
                公共数据授权运营
              </div>

              <h2 className="text-2xl font-black text-slate-900">
                第一批公共数据资源与产品服务清单
              </h2>

              <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-500">
                覆盖8个重点领域、19个应用场景，展示拟纳入授权运营的数据资源范围、数据提供部门及公共数据产品服务清单。
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#C41E3A] px-5 py-3 text-sm font-bold text-white">
              查看清单
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </Link>

        <div className="mb-10 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <Database className="h-5 w-5 text-[#C41E3A]" />
              数据领域
            </div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              {dataCatalog.length}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <Table2 className="h-5 w-5 text-[#C41E3A]" />
              数据表
            </div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              {totalTables}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <Boxes className="h-5 w-5 text-[#C41E3A]" />
              字段总量
            </div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              {totalFields}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <FileText className="h-5 w-5 text-[#C41E3A]" />
              数据产品
            </div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              {totalProducts}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-black text-slate-900">
            重点领域数据目录
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            点击进入各领域详情，查看数据表、字段全表及数据产品清单。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {dataCatalog.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C41E3A]">
                  <Database className="h-6 w-6 text-white" />
                </div>

                <div>
                  <h2 className="font-black text-slate-900">
                    {item.name}
                  </h2>

                  <p className="text-xs text-slate-500">
                    {item.source}
                  </p>
                </div>
              </div>

              <p className="mb-5 text-sm leading-6 text-slate-600">
                {item.summary}
              </p>

              <div className="mb-5 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-slate-50 px-3 py-4 text-center">
                  <div className="text-xl font-black text-slate-900">
                    {item.stats.tables}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">数据表</div>
                </div>

                <div className="rounded-xl bg-slate-50 px-3 py-4 text-center">
                  <div className="text-xl font-black text-slate-900">
                    {item.stats.fields}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">字段</div>
                </div>

                <div className="rounded-xl bg-slate-50 px-3 py-4 text-center">
                  <div className="text-xl font-black text-slate-900">
                    {item.products.length}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">产品</div>
                </div>
              </div>

              <div className="space-y-3">
                {item.tables.slice(0, 3).map((table) => (
                  <div
                    key={table.tableName}
                    className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {table.tableCnName}
                    <span className="ml-2 text-xs text-slate-400">
                      {table.fieldCount}个字段
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href={`/data-catalog/${item.id}`}
                className="mt-6 inline-flex items-center gap-2 font-bold text-[#C41E3A]"
              >
                查看字段全表与产品清单
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}