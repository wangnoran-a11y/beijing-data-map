import Link from "next/link";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { industryData } from "@/data/industryData";

type SearchResult = {
  type: "行业专区" | "数据资源" | "字段目录" | "数据产品" | "应用场景";
  title: string;
  desc: string;
  link: string;
  meta?: string;
};

const quickSearchMap: Record<string, { industryIds: string[]; words: string[] }> = {
  公共数据: {
    industryIds: ["traffic", "medical", "education", "civil"],
    words: ["资源", "数据", "字段", "专区"],
  },
  企业画像: {
    industryIds: ["civil", "medical"],
    words: ["画像", "企业", "机构", "信用", "评分", "标签"],
  },
  交通出行: {
    industryIds: ["traffic"],
    words: ["交通", "车辆", "汽车", "维修", "二手车", "车险", "里程", "配件", "工时"],
  },
  医疗健康: {
    industryIds: ["medical"],
    words: ["医疗", "医保", "药品", "机构", "诊疗", "科室", "床位"],
  },
  产业金融: {
    industryIds: ["traffic", "civil"],
    words: ["金融", "授信", "风控", "保险", "信用", "贷款", "评分", "风险"],
  },
};

function getSearchConfig(keyword: string) {
  if (quickSearchMap[keyword]) {
    return quickSearchMap[keyword];
  }

  return {
    industryIds: industryData.map((item) => item.id),
    words: [keyword],
  };
}

function matchText(text: string, words: string[]) {
  return words.some((word) => text.includes(word));
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const keyword = (params.q || "").trim();

  const results: SearchResult[] = [];

  if (keyword) {
    const searchConfig = getSearchConfig(keyword);
    const searchWords = searchConfig.words;

    industryData.forEach((industry) => {
      if (!searchConfig.industryIds.includes(industry.id)) return;

      if (matchText(`${industry.name}${industry.desc}`, searchWords)) {
        results.push({
          type: "行业专区",
          title: industry.name,
          desc: industry.desc,
          link: `/industry/${industry.id}`,
          meta: "重点数据资源专区",
        });
      }

      industry.resources.forEach((resource) => {
        const resourceText = `${resource.name}${resource.table}${resource.fields.join("")}`;

        if (matchText(resourceText, searchWords)) {
          results.push({
            type: "数据资源",
            title: resource.name,
            desc: `${industry.name} · ${resource.table}`,
            link: `/industry/${industry.id}`,
            meta: `${resource.fields.length} 个字段`,
          });
        }

        resource.fields.forEach((field) => {
          if (matchText(field, searchWords)) {
            results.push({
              type: "字段目录",
              title: field,
              desc: `${industry.name} · ${resource.name}`,
              link: `/industry/${industry.id}`,
              meta: resource.table,
            });
          }
        });
      });

      industry.products.forEach((product) => {
        if (matchText(product, searchWords)) {
          results.push({
            type: "数据产品",
            title: product,
            desc: industry.name,
            link: `/industry/${industry.id}`,
            meta: "产品能力",
          });
        }
      });

      industry.scenes.forEach((scene) => {
        if (matchText(scene, searchWords)) {
          results.push({
            type: "应用场景",
            title: scene,
            desc: industry.name,
            link: `/industry/${industry.id}`,
            meta: "场景应用",
          });
        }
      });
    });
  }

  const uniqueResults = results.filter(
    (item, index, arr) =>
      arr.findIndex(
        (other) =>
          other.type === item.type &&
          other.title === item.title &&
          other.desc === item.desc
      ) === index
  );

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-6 py-10">
      <div className="mx-auto max-w-[1200px]">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#C41E3A] shadow-sm transition hover:bg-red-50"
        >
          <ArrowLeft className="h-4 w-4" />
          返回首页
        </Link>

        <section className="mb-6 rounded-[28px] bg-gradient-to-br from-[#0B1226] via-[#111827] to-[#2A1218] p-8 text-white shadow-xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-white">
            <Search className="h-4 w-4 text-[#D8B37A]" />
            全站统一检索
          </div>

          <h1 className="text-[36px] font-black">搜索结果</h1>

          <p className="mt-2 text-sm text-white/60">
            支持搜索数据资源、字段目录、数据产品、应用场景和重点行业专区。
          </p>

          <div className="mt-6 rounded-2xl bg-white/10 px-5 py-4">
            <div className="text-sm text-white/50">当前关键词</div>
            <div className="mt-1 text-[26px] font-black text-white">
              {keyword || "未输入关键词"}
            </div>
          </div>
        </section>

        {!keyword ? (
          <div className="rounded-[24px] border border-gray-100 bg-white p-8 text-center shadow-sm">
            <h2 className="text-2xl font-black text-gray-950">
              请输入关键词进行搜索
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              例如：VIN、医疗、养老、保险风控、车辆健康评分。
            </p>
          </div>
        ) : uniqueResults.length === 0 ? (
          <div className="rounded-[24px] border border-gray-100 bg-white p-8 text-center shadow-sm">
            <h2 className="text-2xl font-black text-gray-950">
              未找到相关内容
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              请尝试搜索其他关键词，例如：交通、医疗、养老、教师、保险。
            </p>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <h2 className="text-[26px] font-black text-gray-950">
                共找到 {uniqueResults.length} 条结果
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                点击结果可进入对应专区详情页。
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {uniqueResults.map((item, index) => (
                <Link
                  key={`${item.type}-${item.title}-${index}`}
                  href={item.link}
                  className="group rounded-[22px] border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-red-100 hover:shadow-lg"
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
                      {item.type}
                    </span>

                    {item.meta && (
                      <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-bold text-gray-500">
                        {item.meta}
                      </span>
                    )}
                  </div>

                  <h3 className="text-[20px] font-black text-gray-950 group-hover:text-[#C41E3A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.desc}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#C41E3A]">
                    查看详情
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}