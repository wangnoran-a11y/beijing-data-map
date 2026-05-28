"use client";

import Link from "next/link";
import {
  Building2,
  Car,
  HeartPulse,
  GraduationCap,
  Plane,
  Leaf,
  Users,
  ArrowRight,
  Flame,
  Sparkles,
} from "lucide-react";

const industries = [
  { icon: Building2, name: "金融服务", desc: "企业征信、风险评估、产业金融", hot: 98 },
  { icon: HeartPulse, name: "医疗健康", desc: "医保、卫健、健康管理", hot: 95 },
  { icon: Car, name: "交通出行", desc: "车辆、物流、交通运行监测", hot: 92 },
  { icon: GraduationCap, name: "教育科研", desc: "教育资源、科研创新、人才分析", hot: 88 },
  { icon: Leaf, name: "农业农村", desc: "农业监测、乡村治理、农产品流通", hot: 84 },
  { icon: Users, name: "社会民生", desc: "婚姻登记、社会救助、学历学籍", hot: 82 },
  { icon: Plane, name: "低空经济", desc: "飞行监管、物流运输、空域服务", hot: 80 },
].sort((a, b) => b.hot - a.hot);

export default function IndustryZone() {
  return (
    <section className="bg-white px-5 py-5 sm:px-8 lg:px-10 xl:px-14 2xl:px-20">
      <div className="mx-auto w-full max-w-[1720px]">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-start gap-5">
            <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#C41E3A]/10">
              <Flame className="h-6 w-6 text-[#C41E3A]" />
            </div>

            <div>
              <h2 className="text-[28px] font-bold tracking-tight text-gray-950 lg:text-[30px]">
                行业专区
              </h2>
              <p className="mt-1 text-[15px] text-gray-500 lg:text-[16px]">
                面向重点产业场景，汇聚行业数据资源与数据产品，支撑数据赋能产业高质量发展
              </p>
            </div>
          </div>

          <Link
            href="/industry"
            className="mt-2 flex items-center gap-2 rounded-full bg-[#C41E3A] px-5 py-2 text-sm font-bold text-white shadow-lg shadow-red-100 transition-all hover:bg-[#A91830]"
          >
            查看全部
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="rounded-[30px] border border-red-100 bg-gradient-to-br from-red-50/45 via-white to-gray-50 p-4 shadow-sm sm:p-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {industries.map((item, index) => {
              const Icon = item.icon;
              const isTop = index === 0;

              return (
                <Link
                  href="/industry"
                  key={item.name}
                  className={`group relative flex min-h-[175px] flex-col overflow-hidden rounded-[24px] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    isTop
                      ? "bg-[#111827] text-white"
                      : "border border-red-100 bg-white/95 text-gray-950 hover:border-red-200"
                  }`}
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#C41E3A]/15 blur-3xl" />

                  <div className="relative mb-5 flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        isTop ? "bg-[#C41E3A]" : "bg-[#C41E3A]/10"
                      }`}
                    >
                      <Icon className={`h-6 w-6 ${isTop ? "text-white" : "text-[#C41E3A]"}`} />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        isTop ? "bg-white/10 text-red-100" : "bg-red-50 text-[#C41E3A]"
                      }`}
                    >
                      热度 {item.hot}
                    </span>
                  </div>

                  <div className="relative mt-auto">
                    {isTop && (
                      <div className="mb-2 flex items-center gap-1 text-xs font-bold text-[#D4A574]">
                        <Sparkles className="h-3.5 w-3.5" />
                        推荐专区
                      </div>
                    )}

                    <h3 className={`text-[22px] font-black ${!isTop && "group-hover:text-[#C41E3A]"}`}>
                      {item.name}
                    </h3>

                    <p className={`mt-2 text-[15px] leading-6 ${isTop ? "text-white/60" : "text-gray-500"}`}>
                      {item.desc}
                    </p>

                    <div className={`mt-4 flex items-center gap-2 text-sm font-bold ${isTop ? "text-white" : "text-[#C41E3A]"}`}>
                      进入专区
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}

            <Link
              href="/industry"
              className="group flex min-h-[175px] flex-col items-center justify-center rounded-[24px] border border-dashed border-red-200 bg-white/80 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#C41E3A] hover:bg-red-50/40 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#C41E3A]/10 text-3xl font-light text-[#C41E3A]">
                +
              </div>

              <h3 className="text-[23px] font-black text-gray-900 group-hover:text-[#C41E3A]">
                更多
              </h3>

              <p className="mt-2 max-w-[240px] text-center text-[14px] leading-6 text-gray-500">
                查看更多产业数据专区与数据产品服务
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}