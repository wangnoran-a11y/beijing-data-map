import Link from "next/link";
import { notFound } from "next/navigation";
import type { ComponentType, ReactNode } from "react";
import {
  ArrowLeft,
  Building2,
  Boxes,
  CheckCircle2,
  Clock3,
  Database,
  FileText,
  Layers,
  Table2,
} from "lucide-react";
import { dataCatalog } from "@/data/dataMapCatalog";

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

type FieldDisplay = {
  fieldName: string;
  fieldCnName: string;
  type: string;
  rule: string;
  description: string;
};

type TableDisplay = {
  tableName: string;
  tableCnName: string;
  fieldCount: number;
  fields: FieldDisplay[];
};

export default async function CatalogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const catalog = dataCatalog.find((item) => item.id === id);

  if (!catalog) {
    notFound();
  }

  const products = (catalog.products ?? []) as ProductDisplay[];
  const tables = (catalog.tables ?? []) as TableDisplay[];
  const isTransport = catalog.id === "transport";
  const isMarketRegulation = catalog.id === "market-regulation";

  const ministrySourcePattern =
    /交通运输部|民政部|教育部|国家卫生健康|国家医疗保障|公安部|国家市场监督管理总局|市场监督管理总局|全国组织机构统一社会信用代码数据服务中心/;

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
    <main className="min-h-screen bg-[#F7F8FA] pb-16 pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Link
          href={backHref}
          className="mb-8 inline-flex items-center gap-2 font-bold text-[#C41E3A]"
        >
          <ArrowLeft className="h-4 w-4" />
          返回统一数据目录
        </Link>

        {/* 目录基本信息 */}
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

            {isMarketRegulation && (
              <span className="inline-flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-red-50 px-3 text-xs font-bold leading-none text-[#C41E3A]">
                已接入
              </span>
            )}
          </div>

          {/* 统计信息 */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <MetricCard
              icon={Table2}
              label="数据表"
              value={isMarketRegulation ? "未提供" : catalog.stats.tables}
              note={
                isMarketRegulation
                  ? "附件未列明实际数据表结构"
                  : "目录登记的数据表数量"
              }
            />

            <MetricCard
              icon={Boxes}
              label={isMarketRegulation ? "查询项 / 治理项" : "字段总量"}
              value={
                isMarketRegulation ? "25 / 23" : catalog.stats.fields
              }
              note={
                isMarketRegulation
                  ? "查询比对信息25项，核验治理信息23项"
                  : "目录登记的字段数量"
              }
            />

            <MetricCard
              icon={FileText}
              label="数据产品"
              value={isMarketRegulation ? "未单列" : products.length}
              note={
                isMarketRegulation
                  ? "材料列明核验服务，未提供产品清单"
                  : "目录登记的数据产品数量"
              }
            />

            {isMarketRegulation ? (
              <MetricCard
                icon={CheckCircle2}
                label="核验服务"
                value="2 项"
                note="信息核验治理、四要素核验"
              />
            ) : isTransport ? (
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
              <MetricCard
                icon={Layers}
                label="数据规模"
                value={catalog.stats.records}
                note="目录登记的数据规模"
              />
            )}
          </div>

          {!isMarketRegulation && (
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
          )}
        </section>

        {/* 数据资源概览 */}
        <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-black text-slate-900">
              数据资源概览
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {isMarketRegulation
                ? "依据已提供材料展示组织机构基础信息、信息项范围和核验服务能力。附件未提供实际数据表结构。"
                : "按数据表展示字段数量、字段构成及可支撑的数据产品能力。"}
            </p>
          </div>

          {isMarketRegulation ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "组织机构基础信息",
                  value: "全生命周期",
                  description:
                    "覆盖不同类型组织机构及其生命周期信息，可用于组织机构信息查询比对、主数据治理和组织关系分析。",
                },
                {
                  title: "查询比对信息",
                  value: "25 项",
                  description:
                    "组织机构代码中心介绍材料列出的相关信息范围，可用于组织机构信息查询和比对。",
                },
                {
                  title: "核验治理信息",
                  value: "23 项",
                  description:
                    "服务材料列明的组织机构信息核验治理字段范围，包括机构登记、经营、行业及联系方式等信息。",
                },
                {
                  title: "核验服务",
                  value: "2 项",
                  description:
                    "包括组织机构信息核验治理、组织机构四要素核验两项服务。",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C41E3A]">
                    <Database className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="font-black text-slate-900">{item.title}</h3>

                  <div className="mt-3 text-2xl font-black text-[#C41E3A]">
                    {item.value}
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
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
                    当前资料未提供实际数据表结构，待表结构接入后将在此展示。
                  </p>
                </div>
              )}
            </div>
          )}
        </section>

        {/* 市场监管局数据资源与服务说明 */}
        {isMarketRegulation && (
          <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  组织机构代码数据资源与核验服务
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  数据来源为全国组织机构统一社会信用代码数据服务中心，涵盖组织机构基础信息及相关核验治理服务能力。
                </p>
              </div>

              <span className="inline-flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-red-50 px-3 text-xs font-bold leading-none text-[#C41E3A]">
                已接入
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard
                icon={<Database className="h-5 w-5 text-[#C41E3A]" />}
                title="统一社会信用代码及机构基础信息"
                description="覆盖不同类型组织机构及其生命周期信息，可用于组织机构信息查询比对、主数据治理、组织关系分析和企业画像等。"
                tags={[
                  "统一社会信用代码",
                  "机构基本信息",
                  "全生命周期",
                  "组织关系分析",
                ]}
              />

              <InfoCard
                icon={<Building2 className="h-5 w-5 text-[#C41E3A]" />}
                title="组织机构信息核验治理"
                description="对统一社会信用代码、机构名称、注册地址、机构类型、经营状态、法定代表人等机构信息进行核验和治理。服务材料列明的治理信息范围为23项。"
                tags={["主体识别", "信息比对", "字段治理", "23项治理信息"]}
              />

              <InfoCard
                icon={<CheckCircle2 className="h-5 w-5 text-[#C41E3A]" />}
                title="组织机构四要素核验"
                description="根据统一社会信用代码、机构名称、法定代表人姓名及按约定加密处理的证件号码开展核验，返回一致、不一致或无法核验等结果。"
                tags={[
                  "机构实名核验",
                  "法定代表人核验",
                  "结果比对",
                  "证件信息加密处理",
                ]}
              />
            </div>
          </section>
        )}

        {/* 其他目录仍保留字段全表和数据产品清单 */}
        {!isMarketRegulation && (
          <>
            <section
              id="fields"
              className="mt-8 scroll-mt-28 rounded-3xl bg-white p-8 shadow-sm"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-black text-slate-900">
                  二、字段全表
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  按数据表分组展示字段英文名、中文名、类型、规则及业务说明。
                </p>
              </div>

              {tables.length > 0 ? (
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
                              <tr
                                key={field.fieldName}
                                className="hover:bg-slate-50"
                              >
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
              ) : (
                <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 px-6 py-14 text-center">
                  <div className="text-sm font-bold text-slate-600">
                    字段目录正在建设中
                  </div>
                  <p className="mt-2 text-sm text-slate-400">
                    待数据表接入后，将在此展示字段英文名、中文名、类型、规则及业务说明。
                  </p>
                </div>
              )}
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
                      ? `已形成车维全景动察及车辆健康评分共${products.length}个产品，其中${onlineProductCount}个已上线、${developingProductCount}个开发中。`
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
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                              product.status === "已上线"
                                ? "bg-red-50 text-[#C41E3A]"
                                : "bg-amber-50 text-amber-700"
                            }`}
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
              ) : products.length > 0 ? (
                <div className="overflow-x-auto rounded-3xl border border-slate-100">
                  <table className="min-w-[1100px] w-full text-sm">
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
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 px-6 py-14 text-center">
                  <div className="text-sm font-bold text-slate-600">
                    暂无产品清单，待补充
                  </div>
                  <p className="mt-2 text-sm text-slate-400">
                    数据产品信息将在接入后展示。
                  </p>
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  note,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string | number;
  note: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Icon className="h-5 w-5 text-[#C41E3A]" />
        {label}
      </div>

      <div className="mt-2 text-3xl font-black text-[#C41E3A]">{value}</div>

      <div className="mt-2 text-xs leading-5 text-slate-400">{note}</div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  description,
  tags,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
          {icon}
        </div>

        <h3 className="font-black text-slate-900">{title}</h3>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}