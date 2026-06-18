import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { dataCatalog } from "@/data/dataMapCatalog";
import { authorizedResources } from "@/data/authorizedResources";
import { industries } from "@/data/industryEmpowerment";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q: rawQ } = await searchParams;
  const q = (rawQ || "").trim().toLowerCase();

  const results: {
    title: string;
    type: string;
    desc: string;
    href: string;
  }[] = [];

  if (q) {
    for (const catalog of dataCatalog) {
      if (JSON.stringify(catalog).toLowerCase().includes(q)) {
        results.push({
          title: catalog.name,
          type: "数据目录",
          desc: catalog.summary,
          href: `/data-catalog/${catalog.id}`,
        });
      }
    }

    for (const item of authorizedResources) {
      if (JSON.stringify(item).toLowerCase().includes(q)) {
        results.push({
          title: item.scenario,
          type: "授权运营资源",
          desc: item.resource,
          href: "/authorized-resources",
        });
      }
    }

    for (const item of industries) {
      if (JSON.stringify(item).toLowerCase().includes(q)) {
        results.push({
          title: item.name,
          type: "产业赋能",
          desc: item.desc,
          href: `/industry/${item.id}`,
        });
      }
    }
  }

  return (
    <main className="min-h-screen bg-[#F7F8FA] pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-10">
        <h1 className="text-[42px] font-black text-slate-900">
          搜索结果
        </h1>

        <p className="mt-3 text-slate-500">
          当前搜索关键词：{q || "未输入"}
        </p>

        <div className="mt-8 grid gap-5">
          {results.map((item, index) => (
            <Link
              key={`${item.title}-${index}`}
              href={item.href}
              className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-3 inline-flex rounded-full bg-red-50 px-4 py-2 text-xs font-bold text-[#C41E3A]">
                {item.type}
              </div>

              <h2 className="text-xl font-black text-slate-900">
                {item.title}
              </h2>

              <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                {item.desc}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 font-bold text-[#C41E3A]">
                查看详情
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}

          {q && results.length === 0 && (
            <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
              <Search className="mx-auto mb-4 h-10 w-10 text-slate-300" />
              <div className="font-bold text-slate-700">
                暂无匹配结果
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}