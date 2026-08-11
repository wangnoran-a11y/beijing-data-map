import Link from "next/link";
import { notFound } from "next/navigation";
import {
  authorizedResourceDomains,
  getAuthorizedDomainById,
} from "@/data/authorizedResources";
import { getAuthorizedProductsByDomainId } from "@/data/authorizedProducts";

type PageProps = {
  params: Promise<{
    domainId: string;
  }>;
};

export function generateStaticParams() {
  return authorizedResourceDomains.map((domain) => ({
    domainId: domain.id,
  }));
}

export default async function AuthorizedDomainDetailPage({
  params,
}: PageProps) {
  const { domainId } = await params;
  const domain = getAuthorizedDomainById(domainId);

  if (!domain) {
    notFound();
  }

  const productScenarios = getAuthorizedProductsByDomainId(domain.id);
  const serviceCount = productScenarios.reduce(
    (total, scenario) => total + scenario.services.length,
    0
  );

  return (
    <main className="min-h-screen bg-[#F7F8FA] pb-16 pt-24 text-slate-900">
      {/* 页面头部 */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-[#C41E3A]">
              首页
            </Link>
            <span>/</span>
            <Link
              href="/authorized-resources"
              className="transition hover:text-[#C41E3A]"
            >
              首批公共数据资源
            </Link>
            <span>/</span>
            <span className="text-slate-600">{domain.name}</span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-3 inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
                {domain.shortName}领域
              </div>

              <h1 className="text-3xl font-black tracking-tight text-slate-900">
                {domain.name}
              </h1>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {domain.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="min-w-[118px] rounded-2xl border border-red-100 bg-red-50 px-4 py-4">
                <div className="text-3xl font-black text-[#C41E3A]">
                  {domain.resources.length}
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500">
                  类数据资源
                </div>
              </div>

              <div className="min-w-[118px] rounded-2xl border border-red-100 bg-red-50 px-4 py-4">
                <div className="text-3xl font-black text-[#C41E3A]">
                  {productScenarios.length}
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500">
                  项应用场景
                </div>
              </div>

              <div className="min-w-[118px] rounded-2xl border border-red-100 bg-red-50 px-4 py-4">
                <div className="text-3xl font-black text-[#C41E3A]">
                  {serviceCount}
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500">
                  项产品服务
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 领域快速切换 */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
          <div className="flex flex-wrap gap-2">
            {authorizedResourceDomains.map((item) => {
              const active = item.id === domain.id;

              return (
                <Link
                  key={item.id}
                  href={`/authorized-resources/${item.id}`}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    active
                      ? "bg-[#C41E3A] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-[#C41E3A]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-10 px-6 py-8 lg:px-10">
        {/* 数据资源清单 */}
        <section>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                数据资源清单
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                查看{domain.name}领域首批拟纳入整体授权运营的具体数据资源。
              </p>
            </div>

            <span className="shrink-0 text-sm text-slate-400">
              共 {domain.resources.length} 类
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {domain.resources.map((resource, index) => (
              <Link
                key={resource.id}
                href={`/authorized-resources/${domain.id}/${resource.id}`}
                className="group flex min-h-[210px] flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_12px_28px_rgba(196,30,58,0.08)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-xs font-black text-[#C41E3A]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                    {resource.examples.length}项内容
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-black text-slate-900 transition group-hover:text-[#C41E3A]">
                  {resource.name}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                  {resource.description}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-bold text-[#C41E3A]">
                  查看数据内容
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 产品和服务清单 */}
        <section id="products" className="scroll-mt-28">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <div className="mb-2 inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
                首批公共数据产品和服务
              </div>
              <h2 className="text-2xl font-black text-slate-900">
                {domain.name}产品和服务清单
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                按0804版首批清单展示本领域对应的应用场景及产品和服务。
              </p>
            </div>

            <div className="hidden gap-4 text-sm text-slate-400 sm:flex">
              <span>{productScenarios.length}项场景</span>
              <span>{serviceCount}项产品服务</span>
            </div>
          </div>

          {productScenarios.length > 0 ? (
            <div className="space-y-4">
              {productScenarios.map((scenario) => (
                <div
                  key={scenario.number}
                  className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#C41E3A] text-sm font-black text-white">
                      {String(scenario.number).padStart(2, "0")}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-lg font-black text-slate-900">
                          {scenario.name}
                        </h3>

                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                          {scenario.services.length}项产品服务
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {scenario.services.map((service) => (
                          <span
                            key={service}
                            className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center">
              <div className="text-lg font-black text-slate-800">
                当前版本暂未列示具体产品和服务
              </div>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                0804版《拟提供的首批公共数据产品和服务清单》中，
                暂未列示{domain.name}领域具体产品和服务，后续可随最新版清单持续补充。
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
