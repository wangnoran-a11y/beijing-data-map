import Link from "next/link";
import { ArrowLeft, Clock, Search, Eye } from "lucide-react";

const historyList = [
  {
    title: "访问数据目录",
    type: "页面访问",
    time: "2026-06-09 14:32",
    desc: "查看北京市与国家部委数据资源目录",
  },
  {
    title: "查看交通专区",
    type: "专区访问",
    time: "2026-06-09 13:48",
    desc: "浏览交通出行相关数据资源与数据产品",
  },
  {
    title: "查看企业画像产品",
    type: "产品访问",
    time: "2026-06-08 17:20",
    desc: "查看企业经营风险画像产品详情",
  },
  {
    title: "下载医疗分析报告",
    type: "报告下载",
    time: "2026-06-08 10:15",
    desc: "下载医疗资源分析报告样例文件",
  },
];

export default function HistoryPage() {
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
            VISIT HISTORY
          </p>

          <h1 className="text-4xl font-black">访问记录</h1>

          <p className="mt-4 text-white/75">
            查看近期访问的数据资源、数据产品和报告下载记录
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-10 py-8">
        <div className="mb-6 grid grid-cols-3 gap-6">
          {[
            ["12", "全部记录"],
            ["7", "页面访问"],
            ["3", "产品访问"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
            >
              <div className="text-3xl font-black text-slate-900">{num}</div>
              <div className="mt-1 text-sm text-slate-500">{label}</div>
            </div>
          ))}
        </div>

        <div className="mb-6 flex items-center justify-between rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-[#B4232A]" />
            <div>
              <h2 className="text-xl font-bold text-slate-900">访问明细</h2>
              <p className="text-sm text-slate-500">
                共 12 条访问记录，最近更新于 2026-06-09
              </p>
            </div>
          </div>

          <div className="flex w-[320px] items-center rounded-2xl border border-slate-200 bg-slate-50 px-4">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              placeholder="搜索访问内容"
              className="h-11 flex-1 bg-transparent px-3 text-sm text-slate-700 outline-none"
            />
          </div>
        </div>

        <div className="space-y-4">
          {historyList.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50">
                  <Eye className="h-6 w-6 text-[#B4232A]" />
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">{item.desc}</p>

                  <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
                    <span>{item.time}</span>
                    <span>·</span>
                    <span>{item.type}</span>
                  </div>
                </div>
              </div>

              <span className="rounded-full bg-slate-50 px-4 py-2 text-xs font-bold text-slate-500">
                {item.type}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}