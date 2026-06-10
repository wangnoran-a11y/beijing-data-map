import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  FileText,
  User,
  CalendarDays,
} from "lucide-react";

const mockData: Record<string, any> = {
  "1": {
    name: "企业画像核验产品",
    type: "数据产品申请",
    status: "审核中",
    applicant: "王楠",
    applyTime: "2026-06-09",
    description: "用于企业信用评估、风险识别及市场主体画像分析。",
  },
  "2": {
    name: "车辆电子健康档案",
    type: "交通数据资源申请",
    status: "已通过",
    applicant: "王楠",
    applyTime: "2026-06-08",
    description: "用于保险风控、二手车评估及汽车金融场景。",
  },
  "3": {
    name: "民政主体风险识别报告",
    type: "报告类产品申请",
    status: "待补充材料",
    applicant: "王楠",
    applyTime: "2026-06-03",
    description: "用于金融机构贷前审核与风险监测。",
  },
};

export default async function ApplicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = mockData[id] || mockData["1"];

  return (
    <main className="min-h-screen bg-[#F5F7FB] pt-[74px]">
      <section className="bg-gradient-to-r from-[#111827] via-[#1F2937] to-[#7F1D1D] px-10 py-10 text-white">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/profile/applications"
            className="mb-5 flex w-fit items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            返回申请列表
          </Link>

          <h1 className="text-4xl font-black">申请详情</h1>
          <p className="mt-3 text-white/75">查看申请审批进度及产品信息</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-10 py-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-900">
                {item.name}
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                申请编号：BDG-APP-20260609-00{id}
              </p>
            </div>

            <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-bold text-orange-600">
              {item.status}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <FileText className="mb-3 h-5 w-5 text-[#B4232A]" />
              <div className="text-sm text-slate-500">产品类型</div>
              <div className="mt-2 text-base font-bold text-slate-900">
                {item.type}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <Clock className="mb-3 h-5 w-5 text-[#B4232A]" />
              <div className="text-sm text-slate-500">当前状态</div>
              <div className="mt-2 text-base font-bold text-[#B4232A]">
                {item.status}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <User className="mb-3 h-5 w-5 text-[#B4232A]" />
              <div className="text-sm text-slate-500">申请人</div>
              <div className="mt-2 text-base font-bold text-slate-900">
                {item.applicant}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <CalendarDays className="mb-3 h-5 w-5 text-[#B4232A]" />
              <div className="text-sm text-slate-500">申请时间</div>
              <div className="mt-2 text-base font-bold text-slate-900">
                {item.applyTime}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <div className="mb-3 text-sm font-semibold text-slate-500">
              产品说明
            </div>
            <p className="leading-8 text-slate-800">{item.description}</p>
          </div>

          <div className="mt-8 rounded-3xl border border-red-100 bg-red-50 p-6">
            <h3 className="mb-6 text-xl font-bold text-[#B4232A]">
              审批进度
            </h3>

            <div className="space-y-5">
              {[
                ["提交申请", "2026-06-09 09:32", true],
                ["平台受理", "2026-06-09 10:15", true],
                ["数据审核中", "预计 1-2 个工作日", false],
                ["开通权限", "待审核通过后自动开通", false],
              ].map(([title, time, done]) => (
                <div key={title as string} className="flex items-start gap-4">
                  <div
                    className={`mt-1 flex h-7 w-7 items-center justify-center rounded-full ${
                      done
                        ? "bg-[#B4232A] text-white"
                        : "bg-white text-slate-400 ring-1 ring-slate-200"
                    }`}
                  >
                    {done ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Clock className="h-4 w-4" />
                    )}
                  </div>

                  <div>
                    <div
                      className={`font-bold ${
                        done ? "text-slate-900" : "text-slate-500"
                      }`}
                    >
                      {title}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">{time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <Link
              href="/profile/applications"
              className="flex h-12 items-center justify-center rounded-xl border border-slate-200 px-6 text-sm font-bold text-slate-600 hover:border-red-300 hover:text-[#B4232A]"
            >
              返回列表
            </Link>

            <Link
              href="/data-products"
              className="flex h-12 items-center justify-center rounded-xl bg-[#B4232A] px-6 text-sm font-bold text-white"
            >
              查看相关产品
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}