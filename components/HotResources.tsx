"use client";

import Link from "next/link";
import {
  TrendingUp,
  ArrowRight,
  Flame,
  Eye,
  Radio,
  RefreshCw,
  ChevronUp,
  Crown,
  Sparkles,
  Clock3,
  BarChart3,
} from "lucide-react";

const resources = [
  { rank: 1, title: "车辆维修电子健康档案", scene: "交通出行", desc: "车辆维修、保养、里程、风险标签等数据服务", hot: 98, trend: "+18.6%", visits: "46.2万", calls: "12.8万", update: "刚刚同步" },
  { rank: 2, title: "医疗机构基础信息库", scene: "医疗健康", desc: "机构地址、科室、床位、服务能力等基础信息", hot: 95, trend: "+15.2%", visits: "32.7万", calls: "9.6万", update: "5分钟前" },
  { rank: 3, title: "企业工商注册信息", scene: "金融服务", desc: "企业画像、授信辅助、产业分析等基础资源", hot: 92, trend: "+12.9%", visits: "29.4万", calls: "8.2万", update: "30分钟前" },
  { rank: 4, title: "教育资源空间分布数据", scene: "教育科研", desc: "学校、机构、区域分布及教育资源情况", hot: 88, trend: "+9.8%", visits: "18.9万", calls: "5.4万", update: "今日更新" },
  { rank: 5, title: "社会救助服务主题库", scene: "社会民生", desc: "民生服务、救助事项、办理情况与服务治理", hot: 84, trend: "+8.5%", visits: "16.3万", calls: "4.8万", update: "今日更新" },
  { rank: 6, title: "低空飞行监管基础数据", scene: "低空经济", desc: "飞行监管、物流运输、空域服务相关数据", hot: 80, trend: "+7.1%", visits: "12.6万", calls: "3.9万", update: "今日更新" },
];

const stats = [
  { label: "今日访问", value: "46.2万", icon: Eye },
  { label: "接口调用", value: "12.8万", icon: Radio },
  { label: "更新资源", value: "126", icon: RefreshCw },
  { label: "平均增长", value: "+12.1%", icon: BarChart3 },
];

export default function HotResources() {
  const topThree = resources.slice(0, 3);
  const rest = resources.slice(3);

  return (
    <section className="bg-white px-5 py-10 sm:px-8 lg:px-10 xl:px-14 2xl:px-20">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-5">
            <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#C41E3A]/10">
              <TrendingUp className="h-6 w-6 text-[#C41E3A]" />
            </div>

            <div>
              <h2 className="text-[28px] font-bold tracking-tight text-gray-950 lg:text-[30px]">
                热门资源
              </h2>
              <p className="mt-0.5 text-[15px] text-gray-500 lg:text-[16px]">
                基于访问热度、接口调用、更新频率和场景价值形成实时资源排行榜
              </p>
            </div>
          </div>

          <Link
            href="/data-resources"
            className="w-fit rounded-full bg-[#C41E3A] px-5 py-2 text-sm font-bold text-white shadow-lg shadow-red-100 transition-all hover:bg-[#A91830]"
          >
            <span className="inline-flex items-center gap-2">
              热门资源榜
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="rounded-[32px] border border-red-100 bg-gradient-to-br from-red-50/50 via-white to-gray-50 p-4 shadow-sm lg:p-5">
          <div className="grid grid-cols-1 gap-5 2xl:grid-cols-[minmax(0,1fr)_360px]">
            <div className="min-w-0">
              <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
                {topThree.map((item) => (
                  <Link
                    href="/data-resources"
                    key={item.title}
                    className={`group relative flex min-h-[300px] flex-col overflow-hidden rounded-[26px] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      item.rank === 1
                        ? "bg-[#111827] text-white"
                        : "border border-red-100 bg-white text-gray-950"
                    }`}
                  >
                    <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#C41E3A]/20 blur-3xl" />

                    <div className="relative mb-5 flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-black ${
                          item.rank === 1
                            ? "bg-[#C41E3A] text-white"
                            : "bg-red-50 text-[#C41E3A]"
                        }`}
                      >
                        {item.rank === 1 ? <Crown className="h-6 w-6" /> : item.rank}
                      </div>

                      <span
                        className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${
                          item.rank === 1
                            ? "bg-white/10 text-red-100"
                            : "bg-red-50 text-[#C41E3A]"
                        }`}
                      >
                        <Flame className="h-3.5 w-3.5" />
                        热度 {item.hot}
                      </span>
                    </div>

                    <div className="relative flex flex-1 flex-col">
                      <p
                        className={`mb-3 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                          item.rank === 1
                            ? "bg-white/10 text-white/80"
                            : "bg-gray-50 text-gray-500"
                        }`}
                      >
                        {item.scene}
                      </p>

                      <h3 className="text-[22px] font-black leading-tight group-hover:text-[#C41E3A]">
                        {item.title}
                      </h3>

                      <p
                        className={`mt-3 text-sm leading-6 ${
                          item.rank === 1 ? "text-white/60" : "text-gray-500"
                        }`}
                      >
                        {item.desc}
                      </p>

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className={`rounded-2xl p-3 ${item.rank === 1 ? "bg-white/8" : "bg-gray-50"}`}>
                          <p className="text-xs opacity-60">访问量</p>
                          <p className="mt-1 text-lg font-black">{item.visits}</p>
                        </div>

                        <div className={`rounded-2xl p-3 ${item.rank === 1 ? "bg-white/8" : "bg-gray-50"}`}>
                          <p className="text-xs opacity-60">调用量</p>
                          <p className="mt-1 text-lg font-black">{item.calls}</p>
                        </div>
                      </div>

                      <div className="mt-auto flex items-center justify-between gap-4 pt-5">
                        <span className="flex items-center gap-1 text-sm font-bold text-green-500">
                          <ChevronUp className="h-4 w-4" />
                          {item.trend}
                        </span>

                        <span
                          className={`flex items-center gap-1 text-xs ${
                            item.rank === 1 ? "text-white/50" : "text-gray-400"
                          }`}
                        >
                          <Clock3 className="h-3.5 w-3.5" />
                          {item.update}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
                {rest.map((item) => (
                  <Link
                    href="/data-resources"
                    key={item.title}
                    className="group flex min-h-[230px] flex-col rounded-[24px] border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-lg"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-sm font-black text-[#C41E3A]">
                          {item.rank}
                        </div>

                        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-[#C41E3A]">
                          {item.scene}
                        </span>
                      </div>

                      <span className="text-sm font-black text-[#C41E3A]">
                        {item.hot}
                      </span>
                    </div>

                    <h3 className="text-[18px] font-black text-gray-950 group-hover:text-[#C41E3A]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {item.desc}
                    </p>

                    <div className="mt-auto pt-5">
                      <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#C41E3A] to-[#D4A574]"
                          style={{ width: `${item.hot}%` }}
                        />
                      </div>

                      <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                        <span>{item.visits}访问</span>
                        <span className="font-bold text-green-600">
                          {item.trend}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href="/data-resources"
                className="group mt-5 grid grid-cols-1 gap-5 rounded-[26px] bg-[#C41E3A] p-5 text-white shadow-lg shadow-red-100 transition-all hover:bg-[#A91830] lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Flame className="h-4 w-4 text-white" />
                    <span className="text-sm font-bold text-white">
                      榜单生成规则
                    </span>
                  </div>

                  <p className="text-sm leading-6 text-white/70">
                    综合访问热度、接口调用、资源更新频率、场景价值和增长趋势，动态生成实时资源热榜排序。
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xl font-black">查看完整排行榜</p>
                    <p className="mt-1 text-sm text-white/75">
                      查看全部实时热榜与热门数据资源
                    </p>
                  </div>

                  <ArrowRight className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>

            <aside className="grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-1">
              <div className="rounded-[26px] border border-gray-100 bg-white p-5 shadow-sm">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-[#D4A574]" />
                    <h3 className="text-[22px] font-black text-gray-950">
                      实时榜单动态
                    </h3>
                  </div>

                  <span className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    Live
                  </span>
                </div>

                <div className="space-y-3">
                  {resources.slice(0, 5).map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 rounded-2xl bg-gray-50 px-4 py-3"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-black text-[#C41E3A] shadow-sm">
                        {item.rank}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-gray-900">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          {item.update}
                        </p>
                      </div>

                      <span className="shrink-0 text-xs font-bold text-green-600">
                        {item.trend}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {stats.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-[20px] border border-gray-100 bg-white p-4 shadow-sm"
                    >
                      <Icon className="mb-3 h-5 w-5 text-[#C41E3A]" />
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="mt-1 text-2xl font-black text-gray-950">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}