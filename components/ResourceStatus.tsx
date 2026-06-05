"use client";

import {
  Activity,
  Clock3,
  Database,
  FileText,
  HeartPulse,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
  Zap,
  CheckCircle2,
} from "lucide-react";

const metrics = [
  {
    label: "资源总量",
    value: "12,680+",
    desc: "已归集数据资源",
    icon: Database,
  },
  {
    label: "数据产品",
    value: "3,420+",
    desc: "已沉淀产品服务",
    icon: FileText,
  },
  {
    label: "调用次数",
    value: "580万+",
    desc: "累计访问与调用",
    icon: TrendingUp,
  },
  {
    label: "平台可用率",
    value: "99.9%",
    desc: "核心服务稳定运行",
    icon: ShieldCheck,
  },
];

const focusItems = [
  { label: "交通行业", value: "98" },
  { label: "医疗行业", value: "95" },
  { label: "教育行业", value: "93" },
  { label: "民政行业", value: "92" },
];

const serviceHealth = [
  { label: "API网关", value: "99.97%" },
  { label: "目录检索", value: "99.91%" },
  { label: "资源申请", value: "99.86%" },
  { label: "数据交付", value: "99.82%" },
];

const latestUpdates = [
  { title: "车辆维修电子健康档案", tag: "交通行业", time: "刚刚" },
  { title: "医疗机构基础信息库", tag: "医疗行业", time: "5分钟前" },
  { title: "教师学生信息字段目录", tag: "教育行业", time: "8分钟前" },
  { title: "养老机构数据资源", tag: "民政行业", time: "12分钟前" },
];

export default function ResourceStatus() {
  return (
    <section className="bg-white px-5 py-8 sm:px-8 lg:px-10 xl:px-14 2xl:px-20">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50">
              <Activity className="h-6 w-6 text-emerald-500" />
            </div>

            <div>
              <h2 className="text-[30px] font-black tracking-tight text-gray-950">
                运营态势
              </h2>
              <p className="mt-2 text-[15px] leading-6 text-gray-500">
                从资源规模、产品沉淀、调用活跃和服务稳定性监测平台运行情况。
              </p>
            </div>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-600">
            <Zap className="h-4 w-4" />
            系统运行正常
          </div>
        </div>

        <div className="rounded-[28px] border border-gray-100 bg-white p-4 shadow-sm">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_360px]">
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {metrics.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-5 shadow-sm"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-50">
                          <Icon className="h-5 w-5 text-[#C41E3A]" />
                        </div>

                        <span className="rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-bold text-gray-400">
                          实时
                        </span>
                      </div>

                      <div className="text-[26px] font-black leading-none text-gray-950">
                        {item.value}
                      </div>

                      <div className="mt-2 text-sm font-bold text-gray-800">
                        {item.label}
                      </div>

                      <div className="mt-1 text-xs text-gray-500">
                        {item.desc}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="rounded-[22px] border border-gray-100 bg-gray-50/70 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="inline-flex items-center gap-2 text-[18px] font-black text-gray-950">
                      <HeartPulse className="h-5 w-5 text-[#C41E3A]" />
                      本期重点行业
                    </h3>

                    <span className="text-xs font-bold text-gray-400">
                      重点监测
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {focusItems.map((item) => (
                      <div key={item.label} className="rounded-2xl bg-white p-3">
                        <div className="mb-2 flex items-center justify-between text-sm font-bold text-gray-800">
                          <span>{item.label}</span>
                          <span className="text-[#C41E3A]">{item.value}</span>
                        </div>

                        <div className="h-2 rounded-full bg-gray-100">
                          <div
                            className="h-2 rounded-full bg-[#C41E3A]"
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[22px] border border-gray-100 bg-gray-50/70 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="inline-flex items-center gap-2 text-[18px] font-black text-gray-950">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      服务健康
                    </h3>

                    <span className="text-xs font-bold text-emerald-500">
                      全部正常
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {serviceHealth.map((item) => (
                      <div key={item.label} className="rounded-2xl bg-white p-3">
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-800">
                          <span className="h-2 w-2 rounded-full bg-emerald-500" />
                          {item.label}
                        </div>

                        <div className="mt-2 text-[20px] font-black text-emerald-500">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-[22px] bg-[#111827] p-5 text-white">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="text-sm text-white/50">平台综合运营指数</div>
                    <div className="mt-1 flex items-end gap-3">
                      <span className="text-[36px] font-black leading-none">
                        94.2
                      </span>
                      <span className="mb-1 rounded-full bg-[#C41E3A]/30 px-3 py-1 text-xs font-bold text-white">
                        较上期 +3.6%
                      </span>
                    </div>
                  </div>

                  <div className="min-w-[260px] flex-1">
                    <div className="mb-2 flex items-center justify-between text-xs text-white/50">
                      <span>运行质量</span>
                      <span>优秀</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[94%] rounded-full bg-gradient-to-r from-[#C41E3A] to-[#D8B37A]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[22px] border border-gray-100 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="inline-flex items-center gap-2 text-[20px] font-black text-gray-950">
                  <RefreshCw className="h-5 w-5 text-[#C41E3A]" />
                  最新动态
                </h3>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                  Live
                </span>
              </div>

              <div className="space-y-3">
                {latestUpdates.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-gray-50 px-4 py-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="truncate text-sm font-black text-gray-950">
                          {item.title}
                        </div>

                        <div className="mt-2 inline-flex rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-bold text-[#C41E3A]">
                          {item.tag}
                        </div>
                      </div>

                      <div className="shrink-0 inline-flex items-center gap-1 text-xs text-gray-400">
                        <Clock3 className="h-3.5 w-3.5" />
                        {item.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <div className="text-sm font-black text-gray-950">
                  今日运行摘要
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white p-3">
                    <div className="text-xs text-gray-400">新增资源</div>
                    <div className="mt-1 text-[22px] font-black text-gray-950">
                      126
                    </div>
                  </div>

                  <div className="rounded-xl bg-white p-3">
                    <div className="text-xs text-gray-400">平均响应</div>
                    <div className="mt-1 text-[22px] font-black text-gray-950">
                      86ms
                    </div>
                  </div>

                  <div className="rounded-xl bg-white p-3">
                    <div className="text-xs text-gray-400">调用增长</div>
                    <div className="mt-1 text-[22px] font-black text-[#C41E3A]">
                      +18.6%
                    </div>
                  </div>

                  <div className="rounded-xl bg-white p-3">
                    <div className="text-xs text-gray-400">数据交付</div>
                    <div className="mt-1 text-[22px] font-black text-emerald-500">
                      99.82%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}