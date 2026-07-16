import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  Database,
  Table2,
  Boxes,
  FileText,
  Layers,
  CheckCircle2,
  Clock3,
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

  type ProductDisplay = {
    id?: string;
    name: string;
    shortName?: string;
    category?: string;
    type?: string;
    status?: string;
    stage?: string;
    description?: string;
    input?: string;
    output?: string;
    scenario?: string;
  };

  const products = (catalog.products ?? []) as ProductDisplay[];
  const tables = catalog.tables ?? [];
  const isTransport = catalog.id === "transport";

  const ministrySourcePattern =
    /交通运输部|民政部|教育部|国家卫生健康|国家医疗保障|公安部/;

  const isMinistryCatalog = ministrySourcePattern.test(catalog.source);
  const backHref = isMinistryCatalog
    ? "/data-catalog#ministry-catalog"
    : "/data-catalog";

  const sourceLabel = isMinistryCatalog
    ? "国家部委数据目录"
    : "北京市公共数据目录";

  const onlineProductCount = products.filter(
    (product) => product.status === "已上线"
  ).length;

  const developingProductCount = products.filter(
    (product) => product.status === "开发中"
  ).length;

  return (
    <main className="min-h-screen bg-[#F7F8FA] pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Link
          href={backHref}
          className="mb-8 inline-flex items-center gap-2 font-bold text-[#C41E3A]"
        >
          <ArrowLeft className="h-4 w-4" />
          返回统一数据目录
        </Link>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
                  {isMinistryCatalog ? (
                    <Building2 className="h-4 w-4" />
                  ) : (
                    <Database className="h-4 w-4" />
                  )}
                  {sourceLabel}
                </span>

                <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600">
                  {catalog.source}
                </span>
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
                {products.length}
              </div>
            </div>

            {isTransport ? (
              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Layers className="h-5 w-5 text-[#C41E3A]" />
                  建设进度
                </div>

                <div className="mt-3 flex items-center gap-4">
                  <div>
                    <div className="text-2xl font-black text-[#C41E3A]">
                      {onlineProductCount}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">已上线</div>
                  </div>

                  <div className="h-10 w-px bg-slate-200" />

                  <div>
                    <div className="text-2xl font-black text-amber-600">
                      {developingProductCount}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">开发中</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Layers className="h-5 w-5 text-[#C41E3A]" />
                  数据规模
                </div>
                <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                  {catalog.stats.records}
                </div>
              </div>
            )}
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
            {tables.map((table) => (
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

            {tables.length === 0 && (
              <div className="col-span-full rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center">
                <div className="text-sm font-bold text-slate-600">
                  数据表目录正在建设中
                </div>
                <p className="mt-2 text-sm text-slate-400">
                  后续接入的数据表和字段信息将在此统一展示。
                </p>
              </div>
            )}
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
            {tables.map((table) => (
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

            {tables.length === 0 && (
              <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 px-6 py-14 text-center">
                <div className="text-sm font-bold text-slate-600">
                  字段目录正在建设中
                </div>
                <p className="mt-2 text-sm text-slate-400">
                  待数据表接入后，将在此展示字段英文名、中文名、类型、规则及业务说明。
                </p>
              </div>
            )}
          </div>
        </section>

        <section
          id="products"
          className="mt-8 scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm"
        >
          <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                三、数据产品清单
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {isTransport
                  ? "已形成车维全景动察01—08及车辆健康评分共9个产品，其中4个已上线、5个开发中。"
                  : `展示${sourceLabel}中已形成或正在建设的数据产品，包括产品名称、类型及应用说明。`}
              </p>
            </div>

            {isTransport && (
              <div className="flex flex-wrap gap-3">
                <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600">
                  产品总数 {products.length}
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
                  <CheckCircle2 className="h-4 w-4" />
                  已上线 {onlineProductCount}
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700">
                  <Clock3 className="h-4 w-4" />
                  开发中 {developingProductCount}
                </div>
              </div>
            )}
          </div>

          {isTransport ? (
            <div className="overflow-hidden rounded-3xl border border-slate-100">
              <div className="hidden grid-cols-[72px_minmax(280px,1.25fr)_110px_120px_120px_minmax(280px,1fr)] gap-4 border-b border-slate-100 bg-slate-50 px-6 py-4 text-xs font-black text-slate-500 lg:grid">
                <div>序号</div>
                <div>产品名称</div>
                <div>产品类型</div>
                <div>建设状态</div>
                <div>建设阶段</div>
                <div>产品说明</div>
              </div>

              <div className="divide-y divide-slate-100">
                {products.map((product, index) => (
                  <div
                    key={product.id ?? product.name}
                    className="grid gap-4 px-6 py-5 transition hover:bg-red-50/30 lg:grid-cols-[72px_minmax(280px,1.25fr)_110px_120px_120px_minmax(280px,1fr)] lg:items-center"
                  >
                    <div className="text-sm font-black text-[#C41E3A]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <div className="font-black text-slate-900">
                        {product.name}
                      </div>

                      {product.shortName && (
                        <div className="mt-1 text-xs text-slate-400">
                          {product.shortName}
                        </div>
                      )}
                    </div>

                    <div>
                      <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                        {product.category ?? product.type ?? "—"}
                      </span>
                    </div>

                    <div>
                      <span
                        className={[
                          "inline-flex rounded-full px-3 py-1 text-xs font-bold",
                          product.status === "已上线"
                            ? "bg-red-50 text-[#C41E3A]"
                            : "bg-amber-50 text-amber-700",
                        ].join(" ")}
                      >
                        {product.status ?? "规划中"}
                      </span>
                    </div>

                    <div className="text-sm font-medium text-slate-600">
                      {product.stage ?? "—"}
                    </div>

                    <p className="text-sm leading-6 text-slate-500">
                      {product.description ?? product.scenario ?? "—"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
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
                  {products.map((product, index) => (
                    <tr
                      key={product.id ?? product.name}
                      className="hover:bg-slate-50"
                    >
                      <td className="px-5 py-4 font-black text-[#C41E3A]">
                        {index + 1}
                      </td>

                      <td className="px-5 py-4 font-black text-slate-900">
                        {product.name}
                      </td>

                      <td className="whitespace-nowrap px-5 py-4">
                        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
                          {product.type ?? product.category ?? "—"}
                        </span>
                      </td>

                      <td className="px-5 py-4 leading-6 text-slate-600">
                        {product.input ?? "—"}
                      </td>

                      <td className="px-5 py-4 leading-6 text-slate-600">
                        {product.output ?? product.description ?? "—"}
                      </td>

                      <td className="px-5 py-4 leading-6 text-slate-600">
                        {product.scenario ?? "—"}
                      </td>
                    </tr>
                  ))}

                  {products.length === 0 && (
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
          )}
        </section>
      </div>
    </main>
  );
}