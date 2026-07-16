import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Factory,
  Database,
  FileText,
  Target,
  CheckCircle2,
  Table2,
  Clock3,
} from "lucide-react";
import { industries } from "@/data/industryEmpowerment";
import { dataCatalog } from "@/data/dataMapCatalog";

type TransportProduct = {
  id?: string;
  name: string;
  shortName?: string;
  category?: string;
  type?: string;
  status?: string;
  stage?: string;
  description?: string;
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

  const isAutoIndustry = industry.id === "auto";

  const transportCatalog = dataCatalog.find(
    (item) => item.id === "transport"
  );

  const transportProducts = (
    transportCatalog?.products ?? []
  ) as TransportProduct[];

  /**
   * 智能网联汽车产业页直接读取交通运输部产品。
   * 其他产业仍读取 industryEmpowerment.ts 中配置的产品。
   */
  const displayedProducts = isAutoIndustry
    ? transportProducts
    : industry.products;

  const resourceCount = isAutoIndustry
    ? transportCatalog?.tables?.length ?? industry.resources.length
    : industry.resources.length;

  const productCount = displayedProducts.length;

  const onlineProductCount = isAutoIndustry
    ? transportProducts.filter(
        (product) => product.status === "已上线"
      ).length
    : 0;

  const developingProductCount = isAutoIndustry
    ? transportProducts.filter(
        (product) => product.status === "开发中"
      ).length
    : 0;

  return (
    <main className="min-h-screen bg-[#F7F8FA] pb-16 pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* 返回 */}
        <Link
          href="/industry"
          className="mb-8 inline-flex items-center gap-2 font-bold text-[#C41E3A]"
        >
          <ArrowLeft className="h-4 w-4" />
          返回数据赋能产业
        </Link>

        {/* 页面头部 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
                <Factory className="h-4 w-4" />
                数据赋能重点产业
              </div>

              <h1 className="text-[42px] font-black tracking-tight text-slate-900">
                {industry.name}
              </h1>

              <p className="mt-3 max-w-4xl leading-7 text-slate-500">
                {industry.desc}
              </p>

              {isAutoIndustry && (
                <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-500">
                  依托交通运输部汽车维修电子健康档案数据，
                  形成车维全景动察01—08及车辆健康评分共9个数据产品，
                  重点支撑车险风控、汽车金融、二手车流通及汽车后市场服务。
                </p>
              )}
            </div>

            {isAutoIndustry && (
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href="/data-catalog/transport"
                  className="inline-flex items-center gap-2 rounded-full bg-[#C41E3A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#A81831]"
                >
                  查看交通数据目录
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/data-products"
                  className="inline-flex items-center gap-2 rounded-full bg-red-50 px-5 py-3 text-sm font-bold text-[#C41E3A] transition hover:bg-red-100"
                >
                  查看数据产品
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>

          {/* 统计 */}
          <div
            className={[
              "mt-8 grid gap-5",
              isAutoIndustry
                ? "sm:grid-cols-2 lg:grid-cols-4"
                : "md:grid-cols-3",
            ].join(" ")}
          >
            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Database className="h-5 w-5 text-[#C41E3A]" />
                可用数据资源
              </div>

              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {resourceCount}
              </div>

              {isAutoIndustry && (
                <div className="mt-1 text-xs text-slate-400">
                  交通运输部核心数据表
                </div>
              )}
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <FileText className="h-5 w-5 text-[#C41E3A]" />
                数据产品服务
              </div>

              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {productCount}
              </div>

              {isAutoIndustry && (
                <div className="mt-1 text-xs text-slate-400">
                  8个查询类产品、1个评分类产品
                </div>
              )}
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Target className="h-5 w-5 text-[#C41E3A]" />
                应用场景
              </div>

              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {industry.scenarios.length}
              </div>

              <div className="mt-1 text-xs text-slate-400">
                重点产业应用方向
              </div>
            </div>

            {isAutoIndustry && (
              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Clock3 className="h-5 w-5 text-[#C41E3A]" />
                  产品建设进度
                </div>

                <div className="mt-3 flex items-center gap-5">
                  <div>
                    <div className="text-2xl font-black text-[#C41E3A]">
                      {onlineProductCount}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      已上线
                    </div>
                  </div>

                  <div className="h-10 w-px bg-slate-200" />

                  <div>
                    <div className="text-2xl font-black text-amber-600">
                      {developingProductCount}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      开发中
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 智能网联汽车：数据表概览 */}
        {isAutoIndustry && transportCatalog && (
          <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  交通运输部数据资源
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  汽车维修电子健康档案包含以下核心数据表，
                  共{transportCatalog.stats.fields}个字段，
                  数据规模{transportCatalog.stats.records}。
                </p>
              </div>

              <Link
                href="/data-catalog/transport#fields"
                className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[#C41E3A]"
              >
                查看字段全表
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {transportCatalog.tables.map((table) => (
                <Link
                  key={table.tableName}
                  href="/data-catalog/transport#fields"
                  className="group rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C41E3A]">
                    <Table2 className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="mt-4 font-black text-slate-900 transition group-hover:text-[#C41E3A]">
                    {table.tableCnName}
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    {table.tableName}
                  </p>

                  <div className="mt-4 flex items-center justify-between rounded-xl bg-white px-4 py-3">
                    <span className="text-sm text-slate-500">
                      字段数量
                    </span>

                    <span className="font-black text-[#C41E3A]">
                      {table.fieldCount}个
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 产业能力清单 */}
        <section
          className={[
            "mt-8 grid gap-8",
            isAutoIndustry
              ? "lg:grid-cols-[0.85fr_1.5fr_0.85fr]"
              : "md:grid-cols-3",
          ].join(" ")}
        >
          {/* 可用数据资源 */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-black text-slate-900">
              可用数据资源
            </h2>

            <div className="space-y-3">
              {industry.resources.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700"
                >
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#C41E3A]" />
                  <span>{item}</span>
                </div>
              ))}

              {industry.resources.length === 0 && (
                <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-400">
                  暂无资源清单
                </div>
              )}
            </div>
          </div>

          {/* 数据产品服务 */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="text-xl font-black text-slate-900">
                数据产品服务
              </h2>

              {isAutoIndustry && (
                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
                  共{transportProducts.length}个
                </span>
              )}
            </div>

            <div className="space-y-3">
              {isAutoIndustry
                ? transportProducts.map((product, index) => (
                    <Link
                      key={product.id ?? product.name}
                      href="/data-catalog/transport#products"
                      className="group block rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:border-red-200 hover:bg-white"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-black text-[#C41E3A] shadow-sm">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                            <div className="font-black text-slate-900 transition group-hover:text-[#C41E3A]">
                              {product.name}
                            </div>

                            <span
                              className={[
                                "w-fit shrink-0 rounded-full px-2.5 py-1 text-xs font-bold",
                                product.status === "已上线"
                                  ? "bg-red-50 text-[#C41E3A]"
                                  : "bg-amber-50 text-amber-700",
                              ].join(" ")}
                            >
                              {product.status ?? "规划中"}
                            </span>
                          </div>

                          <div className="mt-2 flex flex-wrap gap-2">
                            <span className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-slate-500">
                              {product.category ??
                                product.type ??
                                "数据产品"}
                            </span>

                            {product.stage && (
                              <span className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-slate-500">
                                {product.stage}
                              </span>
                            )}
                          </div>

                          {product.description && (
                            <p className="mt-3 text-sm leading-6 text-slate-500">
                              {product.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))
                : industry.products.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#C41E3A]" />
                      <span>{item}</span>
                    </div>
                  ))}

              {displayedProducts.length === 0 && (
                <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-400">
                  产品清单正在建设中
                </div>
              )}
            </div>
          </div>

          {/* 应用场景 */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-black text-slate-900">
              典型应用场景
            </h2>

            <div className="space-y-3">
              {industry.scenarios.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700"
                >
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#C41E3A]" />
                  <span>{item}</span>
                </div>
              ))}

              {industry.scenarios.length === 0 && (
                <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-400">
                  应用场景正在建设中
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}