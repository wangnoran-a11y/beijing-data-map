import Link from "next/link";
import { ArrowLeft, FileText, Search } from "lucide-react";

const applications = [
  {
    name: "企业画像核验产品",
    type: "数据产品申请",
    date: "2026-06-09",
    status: "审核中",
    statusClass: "bg-orange-50 text-orange-600",
  },
  {
    name: "车辆电子健康档案",
    type: "交通数据资源申请",
    date: "2026-06-08",
    status: "已通过",
    statusClass: "bg-green-50 text-green-600",
  },
  {
    name: "民政主体风险识别报告",
    type: "报告类产品申请",
    date: "2026-06-03",
    status: "待补充材料",
    statusClass: "bg-red-50 text-red-600",
  },
];

export default function ApplicationsPage() {
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
            MY APPLICATIONS
          </p>

          <h1 className="text-4xl font-black">我的申请</h1>

          <p className="mt-4 text-white/75">
            查看数据资源、数据产品和产业场景接入的申请进度
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-10 py-8">
        <div className="mb-6 grid grid-cols-3 gap-6">
          {[
            ["3", "全部申请"],
            ["1", "审核中"],
            ["1", "已通过"],
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
            <FileText className="h-6 w-6 text-[#B4232A]" />
            <div>
              <h2 className="text-xl font-bold text-slate-900">申请记录</h2>
              <p className="text-sm text-slate-500">
                共 3 条申请记录，最近更新于 2026-06-09
              </p>
            </div>
          </div>

          <div className="flex w-[320px] items-center rounded-2xl border border-slate-200 bg-slate-50 px-4">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              placeholder="搜索申请名称"
              className="h-11 flex-1 bg-transparent px-3 text-sm text-slate-700 outline-none"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-sm text-slate-500">
              <tr>
                <th className="px-6 py-4 font-semibold">申请名称</th>
                <th className="px-6 py-4 font-semibold">申请类型</th>
                <th className="px-6 py-4 font-semibold">申请时间</th>
                <th className="px-6 py-4 font-semibold">状态</th>
                <th className="px-6 py-4 font-semibold">操作</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((item, index) => (
                <tr
                  key={item.name}
                  className="border-t border-slate-100 text-sm text-slate-700 hover:bg-slate-50"
                >
                  <td className="px-6 py-5 font-bold text-slate-900">
                    {item.name}
                  </td>

                  <td className="px-6 py-5 text-slate-500">{item.type}</td>

                  <td className="px-6 py-5 text-slate-500">{item.date}</td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${item.statusClass}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <Link
                      href={`/profile/applications/${index + 1}`}
                      className="font-bold text-[#B4232A] hover:underline"
                    >
                      查看详情
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}