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
  Sparkles,
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

type SearchIntent = {
  industry: string;
  scenario: string;
  dataNeeds: string[];
  terms: string[];
  summary: string;
};

const intentRules: Array<{
  keywords: string[];
  intent: SearchIntent;
}> = [
  {
    keywords: ["企业", "公司", "经营", "授信", "融资", "贷款", "尽调", "信用", "风险"],
    intent: {
      industry: "金融服务",
      scenario: "企业尽调与经营风险识别",
      dataNeeds: ["企业登记", "经营信息", "纳税信息", "司法风险", "信用信息"],
      terms: ["企业", "公司", "经营", "授信", "融资", "贷款", "尽调", "信用", "风险", "税务", "司法"],
      summary: "围绕企业主体真实性、经营活跃度和风险情况，组合推荐相关数据资源。",
    },
  },
  {
    keywords: ["医疗", "医保", "就医", "看病", "医院", "健康", "医药", "医疗保险", "健康险"],
    intent: {
      industry: "医药健康",
      scenario: "医疗服务与医保风险分析",
      dataNeeds: ["医疗机构", "医保结算", "诊疗信息", "药品耗材", "健康服务"],
      terms: ["医疗", "医保", "诊疗", "医院", "健康", "药品", "结算", "理赔"],
      summary: "围绕医疗服务、医保结算和健康管理，推荐可支撑业务分析的数据资源。",
    },
  },
  {
    keywords: [
      "交通",
      "车辆",
      "汽车",
      "车",
      "一辆车",
      "车保险",
      "维修",
      "车险",
      "二手车",
      "营运",
    ],
    intent: {
      industry: "智能网联汽车",
      scenario: "车辆状态与维修风险分析",
      dataNeeds: ["车辆基础信息", "维修记录", "故障信息", "配件工时", "营运属性"],
      terms: [
        "交通",
        "车辆",
        "汽车",
        "维修",
        "故障",
        "配件",
        "营运",
        "车险",
        "保险",
        "核保",
        "理赔",
        "车辆健康评分",
      ],
      summary: "围绕车辆使用、维修和风险判断，推荐汽车全生命周期相关数据资源。",
    },
  },
  {
    keywords: ["养老", "老人", "老年", "民政"],
    intent: {
      industry: "养老服务",
      scenario: "养老机构与养老金融服务",
      dataNeeds: ["养老机构", "服务能力", "信用信息", "补贴信息", "健康服务"],
      terms: ["养老", "老年", "民政", "机构", "信用", "健康"],
      summary: "围绕养老机构评价、服务供给和养老金融，推荐相关公共数据资源。",
    },
  },
];

const conceptGroups = [
  ["企业", "公司", "工商", "法人", "主体", "商户"],
  ["经营", "运营", "营收", "收入", "发展", "稳定性", "活跃度"],
  ["风险", "异常", "失信", "处罚", "司法", "诉讼"],
  ["授信", "融资", "贷款", "信贷", "担保", "信用"],
  ["尽调", "调查", "核验", "审查", "背景调查"],
  ["交通", "出行", "运输", "道路", "营运"],
  ["车辆", "汽车", "车", "机动车", "二手车"],
  ["维修", "维保", "修理", "保养"],
  ["故障", "损坏", "泡水", "火烧", "事故"],
  ["保险", "车险", "保单", "核保", "承保", "理赔"],
  ["医疗", "就医", "看病", "诊疗", "医院", "医疗机构"],
  ["医保", "医疗保险", "结算", "报销"],
  ["健康", "体检", "疾病", "病", "康养"],
  ["医药", "药品", "药", "耗材"],
  ["养老", "老人", "老年", "养老院", "养老机构"],
  ["教育", "学校", "学生", "教师", "学籍"],
  ["房产", "住房", "房屋", "不动产"],
  ["就业", "招聘", "岗位", "人才", "社保"],
  ["税务", "纳税", "税收", "发票"],
  ["环保", "环境", "污染", "碳排放", "能耗"],
];

const conversationalWords = [
  "我想",
  "我需要",
  "帮我",
  "请帮我",
  "能不能",
  "可不可以",
  "有哪些",
  "有什么",
  "需要哪些",
  "可以用哪些",
  "怎么",
  "如何",
  "判断",
  "分析",
  "查询",
  "搜索",
  "查一下",
  "了解",
  "看看",
  "相关的",
  "相关",
  "数据资源",
  "数据",
  "资源",
  "情况",
  "一辆",
  "一家",
];

function normalize(value: unknown) {
  return String(value ?? "").trim().toLowerCase();
}

function includesKeyword(content: unknown, keywords: string | string[]) {
  const normalizedContent = normalize(content);
  const terms = Array.isArray(keywords) ? keywords : [keywords];
  return terms.some((term) => term && normalizedContent.includes(normalize(term)));
}

function inferIntent(keyword: string): SearchIntent | null {
  const normalizedKeyword = normalize(keyword);
  const matchedRule = intentRules
    .map((rule) => ({
      ...rule,
      score: rule.keywords.filter((item) => normalizedKeyword.includes(item)).length,
    }))
    .filter((rule) => rule.score > 0)
    .sort((a, b) => b.score - a.score)[0];

  return matchedRule?.intent ?? null;
}

function buildSearchTerms(keyword: string, intent: SearchIntent | null) {
  const normalizedKeyword = normalize(keyword);
  let coreKeyword = normalizedKeyword;

  for (const word of conversationalWords) {
    coreKeyword = coreKeyword.replaceAll(word, " ");
  }

  const directTerms = coreKeyword
    .split(/[\s,，。；;、？！?：:]+/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  const expandedTerms = conceptGroups.flatMap((group) =>
    group.some(
      (concept) =>
        normalizedKeyword.includes(concept) ||
        directTerms.some((term) => term.includes(concept))
    )
      ? group
      : []
  );

  return Array.from(
    new Set([
      normalizedKeyword,
      ...directTerms,
      ...expandedTerms,
      ...(intent?.terms ?? []),
    ].filter((item) => item.length > 0))
  );
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
  const intent = inferIntent(originalKeyword);
  const searchTerms = buildSearchTerms(originalKeyword, intent);

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

      if (includesKeyword(catalogSearchText, searchTerms)) {
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

        if (includesKeyword(tableSearchText, searchTerms)) {
          const matchedFields = (table.fields ?? []).filter((field) =>
            includesKeyword(
              [
                field.fieldName,
                field.fieldCnName,
                field.rule,
                field.description,
              ].join(" "),
              searchTerms
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

          if (includesKeyword(fieldSearchText, searchTerms)) {
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

  if (includesKeyword(productSearchText, searchTerms)) {
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

      if (includesKeyword(domainSearchText, searchTerms)) {
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

        if (includesKeyword(resourceSearchText, searchTerms)) {
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

      if (includesKeyword(industrySearchText, searchTerms)) {
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

      score += searchTerms.filter((term) =>
        normalize([item.title, item.desc, item.source].join(" ")).includes(term)
      ).length * 12;

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

        {q && intent && (
          <section className="mb-8 overflow-hidden rounded-3xl border border-red-100 bg-gradient-to-br from-white to-red-50/70 shadow-sm">
            <div className="grid gap-6 p-6 lg:grid-cols-[1.1fr_1.9fr] lg:p-8">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-black text-[#C41E3A]">
                  <Sparkles className="h-4 w-4" />
                  智能需求识别
                </div>
                <h2 className="mt-3 text-2xl font-black text-slate-900">
                  {intent.scenario}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {intent.summary}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    识别领域
                  </div>
                  <div className="mt-2 font-black text-slate-800">
                    {intent.industry}
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    建议数据组合
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {intent.dataNeeds.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

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

                        {intent && (
                          <div className="mb-2 text-xs font-bold text-emerald-700">
                            推荐理由：可支撑“{intent.scenario}”中的
                            {intent.dataNeeds.slice(0, 2).join("、")}分析
                          </div>
                        )}

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
