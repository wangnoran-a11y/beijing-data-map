import Link from "next/link";
import { ArrowLeft, Star, Search, ArrowRight } from "lucide-react";

const favorites = [
  {
    name: "企业经营风险画像",
    type: "企业画像类产品",
    desc: "面向金融机构、园区招商、监管服务等场景，提供企业经营状态、风险标签和信用画像。",
  },
  {
    name: "车辆健康评估报告",
    type: "交通数据产品",
    desc: "基于车辆维修保养记录，输出车辆健康评分、维修风险和二手车评估参考。",
  },
  {
    name: "医疗资源分析报告",
    type: "医疗健康产品",
    desc: "面向区域医疗资源配置、机构评估和公共服务分析，提供多维度统计分析能力。",
  },
  {
    name: "民政主体信用报告",
    type: "民政数据产品",
    desc: "面向银行风控和社会组织管理，提供主体基础信息、信用状态和风险识别结果。",
  },
];

export default function FavoritesPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FB] pt-[74px]">
      <section className="bg-gradient-to-r from-[#111827] via-[#1F2937] to-[#7F1D1D] px-10 py-10 text-white">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/profile"
            className="mb-5 flex w-fit items-center gap-2 text-sm text-white/75 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            返回个人信息中心
          </Link>

          <p className="mb-3 text-sm tracking-[0.3em] text-red-200">
            MY FAVORITES
          </p>

          <h1 className="text-4xl font-black">我的收藏</h1>

          <p className="mt-4 text-white/75">
            管理已收藏的数据资源、数据产品和产业应用场景
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-10 py-8">
        <div className="mb-6 flex items-center justify-between rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-center gap-3">
            <Star className="h-6 w-6 text-[#B4232A]" />
            <div>
              <h2 className="text-xl font-bold text-slate-900">收藏列表</h2>
              <p className="text-sm text-slate-500">
                共 4 条收藏内容，支持快速进入查看
              </p>
            </div>
          </div>

          <div className="flex w-[320px] items-center rounded-2xl border border-slate-200 bg-slate-50 px-4">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              placeholder="搜索收藏内容"
              className="h-11 flex-1 bg-transparent px-3 text-sm text-slate-700 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {favorites.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50">
                  <Star className="h-6 w-6 fill-[#B4232A] text-[#B4232A]" />
                </div>

                <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-bold text-slate-500">
                  {item.type}
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900">
                {item.name}
              </h3>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                {item.desc}
              </p>

              <Link
                href="/data-products"
                className="mt-5 flex items-center text-sm font-bold text-[#B4232A]"
              >
                查看详情
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}