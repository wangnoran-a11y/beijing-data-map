import Link from "next/link";
import { notFound } from "next/navigation";
import {
  authorizedResourceDomains,
  getAuthorizedResourceById,
} from "@/data/authorizedResources";

type PageProps = {
  params: Promise<{
    domainId: string;
    resourceId: string;
  }>;
};

export function generateStaticParams() {
  return authorizedResourceDomains.flatMap((domain) =>
    domain.resources.map((resource) => ({
      domainId: domain.id,
      resourceId: resource.id,
    }))
  );
}

export default async function AuthorizedResourceDetailPage({
  params,
}: PageProps) {
  const { domainId, resourceId } = await params;

  const result = getAuthorizedResourceById(domainId, resourceId);

  if (!result) {
    notFound();
  }

  const { domain, resource } = result;

  return (
    <main className="min-h-screen bg-[#F7F8FA] pb-16 pt-24 text-slate-900">
      {/* 页面头部 */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <Link
              href="/"
              className="transition hover:text-[#C41E3A]"
            >
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

            <Link
              href={`/authorized-resources/${domain.id}`}
              className="transition hover:text-[#C41E3A]"
            >
              {domain.name}
            </Link>

            <span>/</span>

            <span className="text-slate-600">{resource.name}</span>
          </div>

          <div className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
            首批授权资源
          </div>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900">
            {resource.name}
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">
            {resource.description}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        {/* 主要内容 */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm lg:p-7">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-slate-900">
                数据资源内容
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                本分类包含以下公共数据资源
              </p>
            </div>

            <span className="shrink-0 rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
              共{resource.examples.length}项
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {resource.examples.map((example, index) => (
              <div
                key={example}
                className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3.5 transition hover:border-red-200 hover:bg-red-50/40"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold text-[#C41E3A] shadow-sm transition group-hover:bg-[#C41E3A] group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-medium text-slate-700">
                  {example}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 右侧信息 */}
        <aside className="h-fit rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-base font-black text-slate-900">
            资源基本信息
          </h2>

          <dl className="mt-5 divide-y divide-slate-100">
            <div className="py-4 first:pt-0">
              <dt className="text-xs text-slate-400">所属领域</dt>

              <dd className="mt-1.5">
                <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
                  {domain.name}
                </span>
              </dd>
            </div>

            <div className="py-4">
              <dt className="text-xs text-slate-400">资源分类</dt>

              <dd className="mt-1.5 text-sm font-bold text-slate-800">
                {resource.name}
              </dd>
            </div>

            <div className="py-4">
              <dt className="text-xs text-slate-400">授权批次</dt>

              <dd className="mt-1.5 text-sm font-bold text-slate-800">
                首批
              </dd>
            </div>

            <div className="py-4">
              <dt className="text-xs text-slate-400">资源状态</dt>

              <dd className="mt-2">
                <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
                  拟纳入授权运营
                </span>
              </dd>
            </div>

            <div className="py-4">
              <dt className="text-xs text-slate-400">包含内容</dt>

              <dd className="mt-1.5 text-sm font-bold text-slate-800">
                {resource.examples.length}项
              </dd>
            </div>
          </dl>

          <Link
            href={`/authorized-resources/${domain.id}`}
            className="mt-5 flex h-11 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-sm font-bold text-[#C41E3A] transition hover:border-[#C41E3A] hover:bg-[#C41E3A] hover:text-white"
          >
            返回{domain.name}资源
          </Link>
        </aside>
      </section>
    </main>
  );
}