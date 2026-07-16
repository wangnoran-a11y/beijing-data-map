import Link from "next/link";
import {
  authorizedResourceDomains,
  authorizedResourceSummary,
} from "@/data/authorizedResources";

export default function AuthorizedResourcesPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] pb-16 pt-24 text-slate-900">
      {/* 页面头部 */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-3 inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
                公共数据资源整体授权运营
              </div>

              <h1 className="text-3xl font-black tracking-tight text-slate-900">
                首批公共数据资源
              </h1>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
                汇集拟纳入北京市公共数据资源整体授权运营范围的首批公共数据资源，
                按授权领域、资源分类和具体数据内容进行统一展示。
              </p>
            </div>

            {/* 统计数据 */}
            <div className="flex gap-3">
              <div className="min-w-[138px] rounded-2xl border border-red-100 bg-red-50 px-5 py-4">
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-black text-[#C41E3A]">
                    {authorizedResourceSummary.domainCount}
                  </span>

                  <span className="mb-1 text-sm font-bold text-[#C41E3A]">
                    个
                  </span>
                </div>

                <div className="mt-1 text-sm font-medium text-slate-500">
                  重点领域
                </div>
              </div>

              <div className="min-w-[138px] rounded-2xl border border-red-100 bg-red-50 px-5 py-4">
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-black text-[#C41E3A]">
                    {authorizedResourceSummary.resourceCount}
                  </span>

                  <span className="mb-1 text-sm font-bold text-[#C41E3A]">
                    类
                  </span>
                </div>

                <div className="mt-1 text-sm font-medium text-slate-500">
                  数据资源
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 授权领域 */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-black text-slate-900">
              授权领域
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              按领域查看首批拟纳入授权运营的数据资源
            </p>
          </div>

          <div className="hidden text-sm text-slate-400 sm:block">
            共 {authorizedResourceDomains.length} 个领域
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {authorizedResourceDomains.map((domain, index) => {
            const visibleResources = domain.resources.slice(0, 3);
            const remainingCount =
              domain.resources.length - visibleResources.length;

            return (
              <Link
                key={domain.id}
                href={`/authorized-resources/${domain.id}`}
                className="group flex min-h-[300px] flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_14px_32px_rgba(196,30,58,0.09)]"
              >
                {/* 卡片顶部 */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-sm font-black text-[#C41E3A] transition-all group-hover:bg-[#C41E3A] group-hover:text-white">
                    {domain.shortName}
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                    {domain.resources.length}类资源
                  </span>
                </div>

                {/* 领域名称 */}
                <div className="mt-5">
                  <div className="text-xs font-bold text-[#C41E3A]/60">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="mt-1 text-lg font-black text-slate-900 transition group-hover:text-[#C41E3A]">
                    {domain.name}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                    {domain.description}
                  </p>
                </div>

                {/* 资源分类 */}
                <div className="mt-5 flex-1 border-t border-slate-100 pt-4">
                  <div className="mb-3 text-xs font-medium text-slate-400">
                    主要资源分类
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {visibleResources.map((resource) => (
                      <span
                        key={resource.id}
                        title={resource.name}
                        className="max-w-full truncate rounded-md bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 transition group-hover:bg-red-50 group-hover:text-[#C41E3A]"
                      >
                        {resource.name}
                      </span>
                    ))}

                    {remainingCount > 0 && (
                      <span className="rounded-md bg-red-50 px-2.5 py-1 text-xs font-bold text-[#C41E3A]">
                        +{remainingCount}
                      </span>
                    )}
                  </div>
                </div>

                {/* 查看入口 */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm font-bold text-[#C41E3A]">
                    查看资源详情
                  </span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50 font-bold text-[#C41E3A] transition-all group-hover:translate-x-1 group-hover:bg-[#C41E3A] group-hover:text-white">
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}