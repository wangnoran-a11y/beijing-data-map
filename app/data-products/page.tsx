import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Car,
  CheckCircle2,
  Clock3,
  Database,
  FileText,
  HeartPulse,
  Package,
  ShieldCheck,
  Users,
} from "lucide-react";
import { dataCatalog } from "@/data/dataMapCatalog";

type CatalogProduct = {
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

type ProductCard = {
  id: string;
  title: string;
  category: string;
  type: string;
  status?: string;
  stage?: string;
  desc: string;
  scenes: string[];
  href: string;
  icon: typeof Package;
  catalogId: string;
};

const catalogMeta: Record<
  string,
  {
    category: string;
    icon: typeof Package;
    href: string;
  }
> = {
  transport: {
    category: "交通运输产品",
    icon: Car,
    href: "/data-catalog/transport#products",
  },
  civil: {
    category: "民政养老产品",
    icon: Users,
    href: "/data-catalog/civil#products",
  },
  education: {
    category: "教育教学产品",
    icon: BookOpen,
    href: "/data-catalog/education#products",
  },
  finance: {
    category: "金融服务产品",
    icon: Building2,
    href: "/data-catalog/finance#products",
  },
  nhc: {
    category: "医疗健康产品",
    icon: HeartPulse,
    href: "/data-catalog/nhc#products",
  },
  nhsa: {
    category: "医疗保障产品",
    icon: HeartPulse,
    href: "/data-catalog/nhsa#products",
  },
  mps: {
    category: "公安交管产品",
    icon: ShieldCheck,
    href: "/data-catalog/mps#products",
  },
  "literature-art": {
    category: "文化艺术产品",
    icon: FileText,
    href: "/data-catalog/literature-art#products",
  },
};

function splitScenes(value?: string) {
  if (!value) return [];

  return value
    .split(/[、，,；;\/]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 5);
}

function getProductDescription(product: CatalogProduct) {
  if (product.description) return product.description;

  if (product.output) {
    return product.input
      ? `基于${product.input}，形成${product.output}。`
      : product.output;
  }

  return "围绕相关数据资源形成标准化数据产品能力，具体产品说明持续完善。";
}

function buildProductCards(): ProductCard[] {
  return dataCatalog.flatMap((catalog) => {
    const meta = catalogMeta[catalog.id] ?? {
      category: `${catalog.name}产品`,
      icon: Database,
      href: `/data-catalog/${catalog.id}#products`,
    };

    return ((catalog.products ?? []) as CatalogProduct[]).map(
      (product, index) => ({
        id: product.id ?? `${catalog.id}-${index + 1}`,
        title: product.name,
        category: meta.category,
        type: product.category ?? product.type ?? "数据产品",
        status: product.status,
        stage: product.stage,
        desc: getProductDescription(product),
        scenes: splitScenes(product.scenario),
        href: meta.href,
        icon:
          product.name.includes("评分") ||
          product.type === "评分类" ||
          product.category === "评分类"
            ? ShieldCheck
            : meta.icon,
        catalogId: catalog.id,
      })
    );
  });
}

export default function DataProductsPage() {
  const products = buildProductCards();

  const categories = Array.from(
    new Set(products.map((item) => item.category))
  );

  const sceneCount = new Set(
    products.flatMap((item) => item.scenes)
  ).size;

  const typeCount = new Set(
    products.map((item) => item.type)
  ).size;

  const transportProducts = products.filter(
    (item) => item.catalogId === "transport"
  );

  const onlineTransportProducts = transportProducts.filter(
    (item) => item.status === "已上线"
  ).length;

  const developingTransportProducts = transportProducts.filter(
    (item) => item.status === "开发中"
  ).length;

  return (
    <main className="min-h-screen bg-[#F7F8FA] pb-16 pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* 页面标题 */}
        <section className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
            <Package className="h-4 w-4" />
            数据产品
          </div>

          <h1 className="text-[42px] font-black tracking-tight text-slate-900">
            数据产品总览
          </h1>

          <p className="mt-3 max-w-4xl leading-7 text-slate-500">
            统一汇集数据目录中已经形成或正在建设的数据产品，
            产品名称、类型、状态和说明均从统一数据目录自动读取。
          </p>
        </section>

        {/* 总体统计 */}
        <section className="mb-6 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">产品数量</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              {products.length}
            </div>
            <div className="mt-2 text-xs text-slate-400">
              自动汇总数据目录产品
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">产品类别</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              {categories.length}
            </div>
            <div className="mt-2 text-xs text-slate-400">
              按领域和来源分类
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">服务场景</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              {sceneCount}
            </div>
            <div className="mt-2 text-xs text-slate-400">
              根据产品应用场景汇总
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">产品类型</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              {typeCount}
            </div>
            <div className="mt-2 text-xs text-slate-400">
              查询、报告、评分、模型等
            </div>
          </div>
        </section>

        {/* 交通产品进度 */}
        {transportProducts.length > 0 && (
          <section className="mb-10 rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-sm font-bold text-[#C41E3A]">
                  交通运输产品建设进度
                </div>

                <h2 className="mt-2 text-2xl font-black text-slate-900">
                  车维全景动察01—08及车辆健康评分
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  共形成{transportProducts.length}个交通运输数据产品，
                  其中{onlineTransportProducts}个已上线、
                  {developingTransportProducts}个开发中。
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600">
                  产品总数 {transportProducts.length}
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
                  <CheckCircle2 className="h-4 w-4" />
                  已上线 {onlineTransportProducts}
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700">
                  <Clock3 className="h-4 w-4" />
                  开发中 {developingTransportProducts}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 产品分类 */}
        <section className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm"
            >
              {category}
            </span>
          ))}
        </section>

        {/* 产品列表 */}
        {products.length > 0 ? (
          <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={`${item.catalogId}-${item.id}`}
                  className="flex min-h-[390px] flex-col rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-start gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C41E3A]">
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      <div className="min-w-0">
                        <div className="mb-1 text-xs font-bold text-[#C41E3A]">
                          {item.category}
                        </div>

                        <h2 className="font-black leading-6 text-slate-900">
                          {item.title}
                        </h2>

                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <span className="text-xs text-slate-400">
                            {item.type}
                          </span>

                          {item.status && (
                            <span
                              className={[
                                "rounded-full px-2.5 py-1 text-xs font-bold",
                                item.status === "已上线"
                                  ? "bg-red-50 text-[#C41E3A]"
                                  : "bg-amber-50 text-amber-700",
                              ].join(" ")}
                            >
                              {item.status}
                            </span>
                          )}

                          {item.stage && (
                            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-500">
                              {item.stage}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mb-5 text-sm leading-7 text-slate-500">
                    {item.desc}
                  </p>

                  {item.scenes.length > 0 && (
                    <div className="mb-6 flex flex-wrap gap-2">
                      {item.scenes.map((scene) => (
                        <span
                          key={scene}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600"
                        >
                          {scene}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link
                    href={item.href}
                    className="mt-auto inline-flex items-center gap-2 border-t border-slate-100 pt-5 font-bold text-[#C41E3A]"
                  >
                    查看产品详情
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </section>
        ) : (
          <section className="rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center">
            <Package className="mx-auto h-9 w-9 text-slate-300" />
            <div className="mt-4 font-bold text-slate-600">
              暂无数据产品
            </div>
            <p className="mt-2 text-sm text-slate-400">
              请先在 dataMapCatalog.ts 中补充产品清单。
            </p>
          </section>
        )}
      </div>
    </main>
  );
}