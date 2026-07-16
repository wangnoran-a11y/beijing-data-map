import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Database,
  FileText,
  Factory,
  Layers3,
  Package,
  Search,
  ShieldCheck,
  Table2,
} from "lucide-react";
import { dataCatalog } from "@/data/dataMapCatalog";
import { authorizedResourceDomains } from "@/data/authorizedResources";
import { industries } from "@/data/industryEmpowerment";

type SearchResult = {
  id: string;
  title: string;
  type: string;
  desc: string;
  href: string;
  source?: string;
  icon: typeof Search;
  priority: number;
};

function normalize(value: unknown) {
  return String(value ?? "").trim().toLowerCase();
}

function includesKeyword(content: unknown, keyword: string) {
  return normalize(content).includes(keyword);
}

function getCatalogSourceType(group?: string) {
  if (group === "ministry") return "国家部委数据目录";
  if (group === "public") return "北京市公共数据目录";
  if (group === "industry") return "行业数据目录";
  return "数据目录";
}

function getCatalogIcon(group?: string) {
  if (group === "ministry") return Building2;
  if (group === "public") return ShieldCheck;
  return Database;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q: rawQ } = await searchParams;
  const originalKeyword = (rawQ ?? "").trim();
  const q = originalKeyword.toLowerCase();

  const results: SearchResult[] = [];

  if (q) {
    for (const catalog of dataCatalog) {
      const catalogHref = `/data-catalog/${catalog.id}`;
      const sourceType = getCatalogSourceType(catalog.group);
      const catalogIcon = getCatalogIcon(catalog.group);

      const catalogSearchText = [
        catalog.name,
        catalog.source,
        catalog.summary,
        catalog.group,
        "ministry" in catalog ? catalog.ministry : "",
      ].join(" ");

      if (includesKeyword(catalogSearchText, q)) {
        results.push({
          id: `catalog-${catalog.id}`,
          title: catalog.name,
          type: sourceType,
          desc: catalog.summary,
          href: catalogHref,
          source: catalog.source,
          icon: catalogIcon,
          priority: 100,
        });
      }

      for (const table of catalog.tables ?? []) {
        const tableSearchText = [
          catalog.name,
          catalog.source,
          table.tableName,
          table.tableCnName,
          ...(table.fields ?? []).flatMap((field) => [
            field.fieldName,
            field.fieldCnName,
            field.rule,
            field.description,
          ]),
        ].join(" ");

        if (includesKeyword(tableSearchText, q)) {
          const matchedFields = (table.fields ?? []).filter((field) =>
            includesKeyword(
              [
                field.fieldName,
                field.fieldCnName,
                field.rule,
                field.description,
              ].join(" "),
              q
            )
          );

          results.push({
            id: `table-${catalog.id}-${table.tableName}`,
            title: table.tableCnName,
            type: "数据表",
            desc:
              matchedFields.length > 0
                ? `所属目录：${catalog.name}；匹配字段：${matchedFields
                    .slice(0, 5)
                    .map((field) => field.fieldCnName)
                    .join("、")}${matchedFields.length > 5 ? "等" : ""}`
                : `所属目录：${catalog.name}；共${table.fieldCount}个字段。`,
            href: `${catalogHref}#fields`,
            source: catalog.source,
            icon: Table2,
            priority: 80,
          });
        }

        for (const field of table.fields ?? []) {
          const fieldSearchText = [
            catalog.name,
            catalog.source,
            table.tableCnName,
            table.tableName,
            field.fieldName,
            field.fieldCnName,
            field.type,
            field.rule,
            field.description,
          ].join(" ");

          if (includesKeyword(fieldSearchText, q)) {
            results.push({
              id: `field-${catalog.id}-${table.tableName}-${field.fieldName}`,
              title: field.fieldCnName,
              type: "数据字段",
              desc: `${field.fieldName}｜${field.type}｜${field.description}`,
              href: `${catalogHref}#fields`,
              source: `${catalog.name} / ${table.tableCnName}`,
              icon: FileText,
              priority: 70,
            });
          }
        }
      }

for (const [index, product] of (catalog.products ?? []).entries()) {
  const productSearchText = [
    catalog.name,
    catalog.source,
    product.name,
    "shortName" in product ? product.shortName : "",
    "category" in product ? product.category : "",
    "type" in product ? product.type : "",
    "status" in product ? product.status : "",
    "stage" in product ? product.stage : "",
    "description" in product ? product.description : "",
    "input" in product ? product.input : "",
    "output" in product ? product.output : "",
    "scenario" in product ? product.scenario : "",
  ].join(" ");

  if (includesKeyword(productSearchText, q)) {
    results.push({
      id: `product-${catalog.id}-${
        "id" in product ? product.id : index
      }`,
      title: product.name,
      type: "数据产品",
      desc:
        ("description" in product ? product.description : "") ||
        ("output" in product ? product.output : "") ||
        ("scenario" in product ? product.scenario : "") ||
        `所属目录：${catalog.name}`,
      href: `${catalogHref}#products`,
      source: catalog.source,
      icon: Package,
      priority: 90,
    });
  }
}
    }

    for (const domain of authorizedResourceDomains) {
      const domainSearchText = [
        domain.name,
        domain.shortName,
        domain.description,
        ...domain.resources.flatMap((resource) => [
          resource.name,
          resource.description,
          ...resource.examples,
        ]),
      ].join(" ");

      if (includesKeyword(domainSearchText, q)) {
        results.push({
          id: `authorized-domain-${domain.id}`,
          title: domain.name,
          type: "授权领域",
          desc: domain.description,
          href: `/authorized-resources/${domain.id}`,
          source: "北京市公共数据授权运营",
          icon: ShieldCheck,
          priority: 75,
        });
      }

      for (const resource of domain.resources) {
        const resourceSearchText = [
          domain.name,
          resource.name,
          resource.description,
          ...resource.examples,
        ].join(" ");

        if (includesKeyword(resourceSearchText, q)) {
          results.push({
            id: `authorized-resource-${domain.id}-${resource.id}`,
            title: resource.name,
            type: "授权资源分类",
            desc: `${domain.name}｜${resource.description}`,
            href: `/authorized-resources/${domain.id}/${resource.id}`,
            source: "北京市公共数据授权运营",
            icon: Layers3,
            priority: 85,
          });
        }
      }
    }

    for (const industry of industries) {
      const industrySearchText = [
        industry.name,
        industry.desc,
        ...industry.resources,
        ...industry.products,
        ...industry.scenarios,
      ].join(" ");

      if (includesKeyword(industrySearchText, q)) {
        results.push({
          id: `industry-${industry.id}`,
          title: industry.name,
          type: "产业赋能",
          desc: industry.desc,
          href: `/industry/${industry.id}`,
          source: "数据赋能产业",
          icon: Factory,
          priority: 60,
        });
      }
    }
  }

  const uniqueResults = Array.from(
    new Map(results.map((item) => [item.id, item])).values()
  )
    .map((item) => {
      const normalizedTitle = normalize(item.title);
      let score = item.priority;

      if (normalizedTitle === q) score += 200;
      else if (normalizedTitle.includes(q)) score += 100;
      else if (normalize(item.source).includes(q)) score += 40;

      return { ...item, score };
    })
    .sort((a, b) => b.score - a.score);

  const resultTypeCount = new Set(
    uniqueResults.map((item) => item.type)
  ).size;

  return (
    <main className="min-h-screen bg-[#F7F8FA] pb-16 pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <section className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
            <Search className="h-4 w-4" />
            全局检索
          </div>

          <h1 className="text-[42px] font-black tracking-tight text-slate-900">
            搜索结果
          </h1>

          <p className="mt-3 text-slate-500">
            当前搜索关键词：
            <span className="ml-1 font-bold text-slate-800">
              {originalKeyword || "未输入"}
            </span>
          </p>
        </section>

        <form
          action="/search"
          className="mb-8 flex max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <input
            name="q"
            defaultValue={originalKeyword}
            placeholder="搜索数据目录、数据表、字段、产品、部委、授权资源和产业场景"
            className="h-14 min-w-0 flex-1 px-5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />

          <button
            type="submit"
            className="flex shrink-0 items-center gap-2 bg-[#C41E3A] px-7 text-sm font-bold text-white transition hover:bg-[#A81831]"
          >
            <Search className="h-4 w-4" />
            搜索
          </button>
        </form>

        {q && (
          <section className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-sm text-slate-500">匹配结果</div>
              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {uniqueResults.length}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-sm text-slate-500">结果类型</div>
              <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                {resultTypeCount}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="text-sm text-slate-500">检索范围</div>
              <div className="mt-2 text-sm font-bold leading-6 text-slate-700">
                数据目录、授权资源、数据产品、字段及产业应用
              </div>
            </div>
          </section>
        )}

        <section className="grid gap-5">
          {uniqueResults.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.href}
                className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-[#C41E3A] transition group-hover:bg-[#C41E3A] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                      <div>
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
                            {item.type}
                          </span>

                          {item.source && (
                            <span className="text-xs text-slate-400">
                              {item.source}
                            </span>
                          )}
                        </div>

                        <h2 className="text-xl font-black text-slate-900 transition group-hover:text-[#C41E3A]">
                          {item.title}
                        </h2>
                      </div>

                      <span className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#C41E3A]">
                        查看详情
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}

          {!q && (
            <div className="rounded-3xl border border-slate-100 bg-white p-12 text-center shadow-sm">
              <Search className="mx-auto h-10 w-10 text-slate-300" />

              <div className="mt-4 font-bold text-slate-700">
                请输入搜索关键词
              </div>

              <p className="mt-2 text-sm text-slate-400">
                例如：交通运输部、维修总次数、VIN、医保结算、养老机构或车辆健康评分
              </p>
            </div>
          )}

          {q && uniqueResults.length === 0 && (
            <div className="rounded-3xl border border-slate-100 bg-white p-12 text-center shadow-sm">
              <Search className="mx-auto h-10 w-10 text-slate-300" />

              <div className="mt-4 font-bold text-slate-700">
                暂无匹配结果
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                建议尝试更短的关键词，例如“交通”“医保”“维修”“养老”或“企业授信”。
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}