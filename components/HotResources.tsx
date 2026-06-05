"use client";

import Link from "next/link";
import {
  ArrowRight,
  Crown,
  Clock3,
  TrendingUp,
  Radio,
  Car,
  HeartPulse,
  Users,
  Pill,
  ShieldCheck,
  Building2,
  BarChart3,
} from "lucide-react";

const products = [
  {
    rank: 1,
    title: "车维全景动察",
    industry: "交通行业",
    desc: "面向车辆维修记录、里程、故障、配件、工时等信息，提供车辆维修全景数据产品服务。",
    visits: "46.2万",
    calls: "12.8万",
    growth: "+18.6%",
    icon: Car,
    featured: true,
  },
  {
    rank: 2,
    title: "医疗机构画像",
    industry: "医疗行业",
    desc: "基于医疗机构基础信息、科室、床位、服务能力等数据，形成机构画像与资源分析能力。",
    visits: "32.7万",
    calls: "9.6万",
    growth: "+15.2%",
    icon: HeartPulse,
    featured: false,
  },
  {
    rank: 3,
    title: "养老机构画像",
    industry: "民政行业",
    desc: "围绕养老机构、床位、收费、从业人员、入住老人等信息，形成养老机构综合画像。",
    visits: "29.4万",
    calls: "8.2万",
    growth: "+12.9%",
    icon: Users,
    featured: false,
  },
  {
    rank: 4,
    title: "药品流通分析",
    industry: "医疗行业",
    desc: "围绕药品名称、批准文号、生产企业、规格、流通信息等，支撑药品监管和流通分析。",
    visits: "18.9万",
    calls: "5.4万",
    growth: "+9.8%",
    icon: Pill,
    featured: false,
  },
  {
    rank: 5,
    title: "车维健康动察",
    industry: "交通行业",
    desc: "提供车辆健康评分、风险等级、风险标签和车辆健康报告，支撑保险风控与二手车评估。",
    visits: "16.3万",
    calls: "4.7万",
    growth: "+8.5%",
    icon: ShieldCheck,
    featured: false,
  },
  {
    rank: 6,
    title: "养老机构信用评分",
    industry: "民政行业",
    desc: "基于机构运营、服务能力、床位供给、资质合规等信息，形成养老机构信用评价能力。",
    visits: "12.6万",
    calls: "3.9万",
    growth: "+7.1%",
    icon: Building2,
    featured: false,
  },
];

const topList = products.slice(0, 5);

export default function HotResources() {
  return (
    <section className="bg-white px-5 py-8 sm:px-8 lg:px-10 xl:px-14 2xl:px-20">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50">
              <TrendingUp className="h-6 w-6 text-[#C41E3A]" />
            </div>

            <div>
              <h2 className="text-[30px] font-black tracking-tight text-gray-950">
                重点数据产品
              </h2>

              <p className="mt-2 text-[15px] leading-6 text-gray-500">
                重点展示集团已形成产品化能力的数据资源与服务，支撑交通、医疗、民政等重点场景应用。
              </p>
            </div>
          </div>

          <Link
  href="/data-products"
  className="flex items-center gap-2 rounded-full bg-[#C41E3A] px-5 py-3 text-sm font-bold text-white"
>
  查看产品目录
  <ArrowRight className="h-4 w-4" />
</Link>
        </div>

        <div className="rounded-[28px] border border-gray-100 bg-white p-4 shadow-sm">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_340px]">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {products.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    href="/data-catalog"
                    key={item.title}
                    className={`group relative overflow-hidden rounded-[22px] p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                      item.featured
                        ? "bg-gradient-to-br from-[#111827] via-[#151827] to-[#2A1218] text-white"
                        : "border border-gray-100 bg-white text-gray-950"
                    }`}
                  >
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#C41E3A]/20 blur-3xl" />

                    <div className="relative mb-4 flex items-start justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                          item.featured ? "bg-[#C41E3A]" : "bg-red-50"
                        }`}
                      >
                        {item.rank === 1 ? (
                          <Crown className="h-5 w-5 text-white" />
                        ) : (
                          <Icon
                            className={`h-5 w-5 ${
                              item.featured ? "text-white" : "text-[#C41E3A]"
                            }`}
                          />
                        )}
                      </div>

                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${
                          item.featured
                            ? "bg-white/10 text-white"
                            : "bg-red-50 text-[#C41E3A]"
                        }`}
                      >
                        TOP {item.rank}
                      </span>
                    </div>

                    <div className="relative">
                      <div
                        className={`mb-2 inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold ${
                          item.featured
                            ? "bg-white/10 text-white/80"
                            : "bg-red-50 text-[#C41E3A]"
                        }`}
                      >
                        {item.industry}
                      </div>

                      <h3 className="text-[20px] font-black leading-snug">
                        {item.title}
                      </h3>

                      <p
                        className={`mt-2 min-h-[48px] text-[13px] leading-6 ${
                          item.featured ? "text-white/60" : "text-gray-500"
                        }`}
                      >
                        {item.desc}
                      </p>

                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <div
                          className={`rounded-2xl p-3 ${
                            item.featured ? "bg-white/10" : "bg-gray-50"
                          }`}
                        >
                          <div
                            className={`text-[11px] ${
                              item.featured ? "text-white/50" : "text-gray-400"
                            }`}
                          >
                            访问量
                          </div>
                          <div className="mt-1 text-[18px] font-black">
                            {item.visits}
                          </div>
                        </div>

                        <div
                          className={`rounded-2xl p-3 ${
                            item.featured ? "bg-white/10" : "bg-gray-50"
                          }`}
                        >
                          <div
                            className={`text-[11px] ${
                              item.featured ? "text-white/50" : "text-gray-400"
                            }`}
                          >
                            调用量
                          </div>
                          <div className="mt-1 text-[18px] font-black">
                            {item.calls}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between text-xs font-bold">
                        <span className="text-emerald-500">{item.growth}</span>
                        <span
                          className={`inline-flex items-center gap-1 ${
                            item.featured ? "text-white/50" : "text-gray-400"
                          }`}
                        >
                          <Clock3 className="h-3.5 w-3.5" />
                          刚刚同步
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="rounded-[22px] border border-gray-100 bg-gray-50/70 p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="inline-flex items-center gap-2 text-[20px] font-black text-gray-950">
                  <Radio className="h-5 w-5 text-[#C41E3A]" />
                  产品服务排行
                </h3>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                  Live
                </span>
              </div>

              <div className="space-y-3">
                {topList.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-50 text-sm font-black text-[#C41E3A]">
                      {item.rank}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-black text-gray-950">
                        {item.title}
                      </div>
                      <div className="mt-0.5 text-xs text-gray-400">
                        {item.industry}
                      </div>
                    </div>

                    <div className="text-xs font-black text-emerald-500">
                      {item.growth}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <BarChart3 className="mb-2 h-5 w-5 text-[#C41E3A]" />
                  <div className="text-xs text-gray-500">今日访问</div>
                  <div className="mt-1 text-[22px] font-black text-gray-950">
                    46.2万
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <Radio className="mb-2 h-5 w-5 text-[#C41E3A]" />
                  <div className="text-xs text-gray-500">接口调用</div>
                  <div className="mt-1 text-[22px] font-black text-gray-950">
                    12.8万
                  </div>
                </div>
              </div>

              <Link
                href="/data-catalog"
                className="mt-4 flex items-center justify-between rounded-2xl bg-[#111827] px-4 py-3 text-white transition hover:bg-[#1f2937]"
              >
                <div>
                  <div className="text-sm font-black">榜单生成规则</div>
                  <p className="mt-1 text-xs text-white/60">
                    综合访问热度、调用频次、更新频率和场景价值生成。
                  </p>
                </div>

                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}