"use client";

import Link from "next/link";
import {
  Building2,
  ExternalLink,
  Landmark,
  HeartPulse,
  GraduationCap,
  Bus,
  Shield,
  Users,
  Sprout,
  LineChart,
  BadgeCheck,
  TrendingUp,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const citySources = [
  { id: "01", name: "金融服务", desc: "北京市数据资源", icon: TrendingUp },
  { id: "02", name: "医疗健康", desc: "北京市数据资源", icon: HeartPulse },
  { id: "03", name: "交通运输", desc: "北京市数据资源", icon: Bus },
  { id: "04", name: "教育教学", desc: "北京市数据资源", icon: GraduationCap },
  { id: "05", name: "应急管理", desc: "北京市数据资源", icon: Shield },
  { id: "06", name: "绿色低碳", desc: "北京市数据资源", icon: Sprout },
  { id: "07", name: "城市治理", desc: "北京市数据资源", icon: Landmark },
  { id: "08", name: "科技创新", desc: "北京市数据资源", icon: Lightbulb },
];

const ministrySources = [
  { name: "交通运输部", desc: "国家部委数据资源", icon: Bus },
  { name: "公安部", desc: "国家部委数据资源", icon: Shield },
  { name: "民政部", desc: "国家部委数据资源", icon: Users },
  { name: "农业农村部", desc: "国家部委数据资源", icon: Sprout },
  { name: "市场监管总局", desc: "国家部委数据资源", icon: LineChart },
  { name: "国务院国资委", desc: "国家部委数据资源", icon: BadgeCheck },
];

export default function SourceNav() {
  return (
    <section className="bg-white px-5 py-10 sm:px-8 lg:px-10 xl:px-14 2xl:px-20">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-5">
            <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D4A574]/10">
              <Building2 className="h-6 w-6 text-[#D4A574]" />
            </div>

            <div>
              <h2 className="text-[28px] font-bold tracking-tight text-gray-950 lg:text-[30px]">
                资源来源导航
              </h2>

              <p className="mt-1 text-[15px] text-gray-500 lg:text-[16px]">
                汇聚北京市公共数据资源与国家部委数据资源，形成统一发现入口
              </p>
            </div>
          </div>

          <Link
            href="/data-catalog"
            className="w-fit rounded-full bg-[#C41E3A] px-5 py-2 text-sm font-bold text-white shadow-lg shadow-red-100 transition-all hover:bg-[#A91830]"
          >
            <span className="inline-flex items-center gap-2">
              全部来源
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="space-y-6">
          <div className="rounded-[30px] border border-red-100 bg-red-50/40 p-4 shadow-sm sm:p-5 lg:p-6">
            <div className="mb-6 flex items-center gap-3">
              <Landmark className="h-6 w-6 text-[#C41E3A]" />
              <h3 className="text-[24px] font-bold text-gray-950">北京市</h3>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {citySources.map((source) => {
                const Icon = source.icon;

                return (
                  <Link
                    href="/data-catalog"
                    key={source.name}
                    className="group flex min-h-[180px] flex-col rounded-[24px] border border-red-100 bg-white/95 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
                  >
                    <div className="mb-5 flex items-start justify-between">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#C41E3A]/10">
                        <Icon className="h-7 w-7 text-[#C41E3A]" />
                      </div>

                      <ExternalLink className="h-4 w-4 text-gray-400 transition-colors group-hover:text-[#C41E3A]" />
                    </div>

                    <div className="mt-auto">
                      <div className="text-2xl font-black text-[#C41E3A]">
                        {source.id}
                      </div>

                      <h4 className="mt-1 text-xl font-black text-gray-950 group-hover:text-[#C41E3A]">
                        {source.name}
                      </h4>

                      <p className="mt-2 text-sm text-gray-500">
                        {source.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="rounded-[30px] border border-gray-100 bg-gray-50/80 p-4 shadow-sm sm:p-5 lg:p-6">
            <div className="mb-6 flex items-center gap-3">
              <Landmark className="h-6 w-6 text-[#D4A574]" />
              <h3 className="text-[24px] font-bold text-gray-950">部委</h3>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
              {ministrySources.map((source) => {
                const Icon = source.icon;

                return (
                  <Link
                    href="/data-catalog"
                    key={source.name}
                    className="group flex min-h-[165px] flex-col rounded-[24px] border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A574]/40 hover:shadow-xl"
                  >
                    <div className="mb-5 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4A574]/10">
                        <Icon className="h-7 w-7 text-[#D4A574]" />
                      </div>

                      <ExternalLink className="h-4 w-4 text-gray-400 transition-colors group-hover:text-[#C41E3A]" />
                    </div>

                    <div className="mt-auto">
                      <h4 className="text-base font-black text-gray-950">
                        {source.name}
                      </h4>

                      <p className="mt-2 text-sm text-gray-500">
                        {source.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}