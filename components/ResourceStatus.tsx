"use client";

import {
  Activity,
  ShieldCheck,
  RefreshCw,
  TrendingUp,
  Zap,
  BarChart3,
  Clock3,
  Layers,
} from "lucide-react";

const indexItems = [
  { label: "服务稳定", value: "99.9%" },
  { label: "更新活跃", value: "91.8%" },
  { label: "调用响应", value: "96.6%" },
  { label: "资源覆盖", value: "88.5%" },
  { label: "授权流转", value: "82.4%" },
  { label: "产业支撑", value: "89.7%" },
];

const monitorItems = [
  "交通数据接口调用峰值提升",
  "医保资源目录完成同步",
  "金融专区新增企业画像数据",
];

const health = [
  { name: "API网关", value: "99.97%" },
  { name: "目录检索", value: "99.91%" },
  { name: "资源申请", value: "99.86%" },
  { name: "数据交付", value: "99.82%" },
];

const updates = [
  { name: "车辆维修电子健康档案", tag: "交通出行", time: "刚刚" },
  { name: "医疗机构基础信息库", tag: "医疗健康", time: "5分钟前" },
  { name: "企业工商注册信息", tag: "金融服务", time: "30分钟前" },
];

const focus = [
  { name: "交通出行", value: 98 },
  { name: "医疗健康", value: 95 },
  { name: "金融服务", value: 92 },
];

export default function ResourceStatus() {
  return (
    <section className="bg-white px-5 py-10 sm:px-8 lg:px-10 xl:px-14 2xl:px-20">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-5">
            <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-50">
              <Activity className="h-6 w-6 text-green-500" />
            </div>

            <div>
              <h2 className="text-[28px] font-bold tracking-tight text-gray-950 lg:text-[30px]">
                运营态势
              </h2>
              <p className="mt-1 text-[15px] text-gray-500 lg:text-[16px]">
                从服务健康、资源更新、调用响应和产业支撑维度监测平台运行情况
              </p>
            </div>
          </div>

          <div className="w-fit rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-600">
            系统运行正常
          </div>
        </div>

        <div className="rounded-[28px] border border-gray-100 bg-gradient-to-br from-white via-gray-50 to-red-50/30 p-4 shadow-sm sm:p-5">
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-[0.9fr_1.7fr]">
            <div className="rounded-[24px] bg-[#111827] p-5 text-white shadow-xl">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="text-sm text-white/55">平台综合运营指数</p>

                  <div className="mt-2 flex flex-wrap items-end gap-3">
                    <h3 className="text-[40px] font-black leading-none">
                      94.2
                    </h3>

                    <span className="mb-1 rounded-full bg-[#C41E3A]/20 px-2.5 py-1 text-xs font-semibold text-red-300">
                      较上期 +3.6%
                    </span>
                  </div>
                </div>

                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7F1D1D] via-[#C41E3A] to-[#D4383F] p-3 shadow-[0_18px_35px_rgba(196,30,58,0.35)]">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
              </div>

              <div className="mb-4">
                <div className="mb-2 flex items-center justify-between text-xs text-white/45">
                  <span>运行质量</span>
                  <span>优秀</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-[#C41E3A] via-[#D4383F] to-[#D4A574]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {indexItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-white/8 px-3 py-2.5"
                  >
                    <p className="text-xs text-white/45">{item.label}</p>
                    <p className="mt-1 text-[20px] font-black">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-white/80">
                    实时监测
                  </span>

                  <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[11px] font-semibold text-emerald-300">
                    LIVE
                  </span>
                </div>

                <div className="space-y-2">
                  {monitorItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-white/[0.04] px-3 py-2"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                      <span className="text-sm text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="rounded-[24px] border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="mb-5 flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-green-500" />
                    <h3 className="text-[22px] font-bold text-gray-950">
                      服务健康
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {health.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-2xl bg-gray-50 px-4 py-4"
                      >
                        <div className="mb-3 flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                          <span className="font-semibold text-gray-800">
                            {item.name}
                          </span>
                        </div>

                        <p className="text-lg font-black text-green-600">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="mb-5 flex items-center gap-3">
                    <RefreshCw className="h-6 w-6 text-[#C41E3A]" />
                    <h3 className="text-[22px] font-bold text-gray-950">
                      最新动态
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {updates.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-2xl bg-gray-50 px-4 py-3"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-semibold text-gray-800">
                            {item.name}
                          </span>
                          <span className="shrink-0 text-sm text-gray-400">
                            {item.time}
                          </span>
                        </div>

                        <span className="mt-2 inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-[#C41E3A]">
                          {item.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] border border-gray-100 bg-white p-5 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                  <Zap className="h-6 w-6 text-[#D4A574]" />
                  <h3 className="text-[22px] font-bold text-gray-950">
                    本期运营重点
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                  {focus.map((item) => (
                    <div key={item.name}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-semibold text-gray-800">
                          {item.name}
                        </span>
                        <span className="text-sm font-bold text-[#C41E3A]">
                          {item.value}
                        </span>
                      </div>

                      <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#C41E3A] to-[#D4383F]"
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-gray-50 p-4">
                    <BarChart3 className="mb-2 h-5 w-5 text-[#C41E3A]" />
                    <p className="text-sm text-gray-500">调用增长</p>
                    <p className="mt-1 text-xl font-bold text-gray-950">
                      +18.6%
                    </p>
                  </div>

                  <div className="rounded-2xl bg-gray-50 p-4">
                    <Layers className="mb-2 h-5 w-5 text-[#C41E3A]" />
                    <p className="text-sm text-gray-500">新增资源</p>
                    <p className="mt-1 text-xl font-bold text-gray-950">126</p>
                  </div>

                  <div className="rounded-2xl bg-gray-50 p-4">
                    <Clock3 className="mb-2 h-5 w-5 text-[#C41E3A]" />
                    <p className="text-sm text-gray-500">平均响应</p>
                    <p className="mt-1 text-xl font-bold text-gray-950">
                      86ms
                    </p>
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