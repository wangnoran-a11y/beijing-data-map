"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
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
  Search,
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
    shortLabel: string;
    description: string;
    icon: typeof Package;
    href: string;
  }
> = {
  transport: {
    category: "交通运输产品",
    shortLabel: "交通运输",
    description: "围绕汽车维修电子健康档案数据形成车辆维保查询、风险识别和健康评分等产品。",
    icon: Car,
    href: "/data-catalog/transport#products",
  },
  civil: {
    category: "民政养老产品",
    shortLabel: "民政养老",
    description: "围绕养老机构基础画像、运营风险识别和服务能力评价形成数据产品。",
    icon: Users,
    href: "/data-catalog/civil#products",
  },
  education: {
    category: "教育教学产品",
    shortLabel: "教育教学",
    description: "围绕教育基础信息、教师队伍和学生学籍等重点数据形成查询分析产品。",
    icon: BookOpen,
    href: "/data-catalog/education#products",
  },
  finance: {
    category: "金融服务产品",
    shortLabel: "金融服务",
    description: "围绕企业授信、经营监测、额度测算及四流一致性核验形成金融风控产品。",
    icon: Building2,
    href: "/data-catalog/finance#products",
  },
  "literature-art": {
    category: "文化艺术产品",
    shortLabel: "文化艺术",
    description: "围绕文艺人才、作品版权、价值评估、传播分析及文化资源地图形成文化数据产品。",
    icon: FileText,
    href: "/data-catalog/literature-art#products",
  },
};

const catalogOrder = [
  "transport",
  "civil",
  "education",
  "finance",
  "literature-art",
];

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
    const meta = catalogMeta[catalog.id];

    if (!meta) return [];

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
  const products = useMemo(() => buildProductCards(), []);
  const [selectedCatalog, setSelectedCatalog] = useState("transport");
  const [keyword, setKeyword] = useState("");

  const catalogTabs = catalogOrder
    .map((catalogId) => {
      const meta = catalogMeta[catalogId];
      const count = products.filter((item) => item.catalogId === catalogId).length;

      return {
        id: catalogId,
        label: meta.shortLabel,
        category: meta.category,
        description: meta.description,
        icon: meta.icon,
        href: meta.href,
        count,
      };
    })
    .filter((item) => item.count > 0);

  const filteredProducts = products.filter((item) => {
    const matchCatalog =
      selectedCatalog === "all" || item.catalogId === selectedCatalog;
    const q = keyword.trim().toLowerCase();
    const matchKeyword =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q) ||
      item.scenes.some((scene) => scene.toLowerCase().includes(q));

    return matchCatalog && matchKeyword;
  });

  const categories = new Set(products.map((item) => item.category)).size;
  const sceneCount = new Set(products.flatMap((item) => item.scenes)).size;
  const typeCount = new Set(products.map((item) => item.type)).size;

  const selectedMeta =
    selectedCatalog === "all"
      ? null
      : catalogTabs.find((item) => item.id === selectedCatalog) ?? null;

  const selectedProducts =
    selectedCatalog === "all"
      ? products
      : products.filter((item) => item.catalogId === selectedCatalog);

  const onlineCount = selectedProducts.filter(
    (item) => item.status === "已上线"
  ).length;
  const developingCount = selectedProducts.filter(
    (item) => item.status === "开发中"
  ).length;

  return (
    <main className="min-h-screen bg-[#F7F8FA] pb-16 pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* 页面标题 */}
        <section className="mb-9">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
            <Package className="h-4 w-4" />
            数据产品
          </div>

          <h1 className="text-[42px] font-black tracking-tight text-slate-900">
            数据产品总览
          </h1>

          <p className="mt-3 max-w-4xl leading-7 text-slate-500">
            按重点领域分类展示已形成及正在建设的数据产品，支持按领域快速切换查看，
            产品名称、类型、状态和说明均从统一数据目录读取。
          </p>
        </section>

        {/* 总体统计 */}
        <section className="mb-8 grid gap-4 md:grid-cols-4">
          {[
            ["产品数量", String(products.length), "当前汇总产品"],
            ["产品领域", String(categories), "重点产品领域"],
            ["服务场景", String(sceneCount), "产品应用场景"],
            ["产品类型", String(typeCount), "查询、报告、评分、模型等"],
          ].map(([label, value, note]) => (
            <div
              key={label}
              className="rounded-3xl border border-slate-100 bg-white px-6 py-5 shadow-sm"
            >
              <div className="text-sm font-medium text-slate-500">{label}</div>
              <div className="mt-2 text-[28px] font-black leading-none text-[#C41E3A]">
                {value}
              </div>
              <div className="mt-2 text-xs text-slate-400">{note}</div>
            </div>
          ))}
        </section>

        {/* 领域筛选 */}
        <section className="mb-8 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-xl font-black text-slate-900">按领域查看产品</h2>
              <p className="mt-1 text-sm text-slate-500">
                点击领域标签，仅展示该领域的数据产品，避免逐页下滑查找。
              </p>
            </div>

            <div className="flex h-11 w-full items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 lg:w-[330px]">
              <Search className="h-4 w-4 shrink-0 text-slate-400" />
              <input
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                placeholder="搜索产品名称、类型或场景"
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => setSelectedCatalog("all")}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                selectedCatalog === "all"
                  ? "bg-[#C41E3A] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-[#C41E3A]"
              }`}
            >
              全部产品 {products.length}
            </button>

            {catalogTabs.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedCatalog(item.id)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  selectedCatalog === item.id
                    ? "bg-[#C41E3A] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-[#C41E3A]"
                }`}
              >
                {item.label} {item.count}
              </button>
            ))}
          </div>
        </section>

        {/* 当前领域概览 */}
        {selectedMeta && (
          <section className="mb-8 rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50">
                  <selectedMeta.icon className="h-6 w-6 text-[#C41E3A]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#C41E3A]">当前领域</div>
                  <h2 className="mt-1 text-2xl font-black text-slate-900">
                    {selectedMeta.category}
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                    {selectedMeta.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600">
                  产品 {selectedMeta.count}
                </span>
                {onlineCount > 0 && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
                    <CheckCircle2 className="h-4 w-4" />
                    已上线 {onlineCount}
                  </span>
                )}
                {developingCount > 0 && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700">
                    <Clock3 className="h-4 w-4" />
                    开发中 {developingCount}
                  </span>
                )}
                <Link
                  href={selectedMeta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A] transition hover:bg-red-100"
                >
                  查看领域目录
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* 当前结果标题 */}
        <section className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black text-slate-900">
              {selectedMeta ? selectedMeta.category : "全部数据产品"}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              当前显示 {filteredProducts.length} 个产品
              {keyword.trim() ? `，搜索关键词“${keyword.trim()}”` : ""}
            </p>
          </div>
        </section>

        {/* 产品列表 */}
        {filteredProducts.length > 0 ? (
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={`${item.catalogId}-${item.id}`}
                  className="group flex min-h-[350px] flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_12px_28px_rgba(196,30,58,0.08)]"
                >
                  <div className="mb-5 flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50 transition group-hover:bg-[#C41E3A]">
                      <Icon className="h-5 w-5 text-[#C41E3A] transition group-hover:text-white" />
                    </div>

                    <div className="min-w-0">
                      <div className="mb-1 text-xs font-bold text-[#C41E3A]">
                        {item.category}
                      </div>

                      <h3 className="font-black leading-6 text-slate-900">
                        {item.title}
                      </h3>

                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span className="text-xs text-slate-400">{item.type}</span>

                        {item.status && (
                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                              item.status === "已上线"
                                ? "bg-red-50 text-[#C41E3A]"
                                : "bg-amber-50 text-amber-700"
                            }`}
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
                    className="mt-auto inline-flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-[#C41E3A]"
                  >
                    查看产品详情
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </article>
              );
            })}
          </section>
        ) : (
          <section className="rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center">
            <Package className="mx-auto h-9 w-9 text-slate-300" />
            <div className="mt-4 font-bold text-slate-600">未找到相关数据产品</div>
            <p className="mt-2 text-sm text-slate-400">
              可切换领域或调整搜索关键词后重新查看。
            </p>
          </section>
        )}
      </div>
    </main>
  );
}