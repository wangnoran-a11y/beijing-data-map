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
} from "lucide-react";

const citySources = [
  { name: "医保", desc: "北京市数据资源", icon: HeartPulse },
  { name: "卫健", desc: "北京市数据资源", icon: Shield },
  { name: "教育", desc: "北京市数据资源", icon: GraduationCap },
  { name: "交通", desc: "北京市数据资源", icon: Bus },
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
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A574]/10">
              <Building2 className="h-6 w-6 text-[#D4A574]" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-950">
                资源来源导航
              </h2>
              <p className="mt-2 text-base text-gray-500">
                汇聚北京市公共数据资源与国家部委数据资源，形成统一发现入口
              </p>
            </div>
          </div>

          <Link
            href="/data-catalog"
            className="mt-2 text-sm font-medium text-[#C41E3A] hover:text-[#E63946]"
          >
            全部来源 →
          </Link>
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl border border-red-100 bg-red-50/40 px-8 py-7">
            <div className="mb-7 flex items-center gap-3">
              <Landmark className="h-6 w-6 text-[#C41E3A]" />
              <h3 className="text-2xl font-bold text-gray-950">北京市</h3>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {citySources.map((source) => {
                const Icon = source.icon;

                return (
                  <Link
                    href="/data-catalog"
                    key={source.name}
                    className="group rounded-2xl border border-red-100 bg-white/85 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
                  >
                    <div className="mb-5 flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C41E3A]/10">
                        <Icon className="h-8 w-8 text-[#C41E3A]" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 transition-colors group-hover:text-[#C41E3A]" />
                    </div>

                    <h4 className="text-xl font-bold text-gray-950 group-hover:text-[#C41E3A]">
                      {source.name}
                    </h4>
                    <p className="mt-2 text-sm text-gray-500">{source.desc}</p>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-gray-50/80 px-8 py-7">
            <div className="mb-7 flex items-center gap-3">
              <Landmark className="h-6 w-6 text-[#D4A574]" />
              <h3 className="text-2xl font-bold text-gray-950">部委</h3>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {ministrySources.map((source) => {
                const Icon = source.icon;

                return (
                  <Link
                    href="/data-catalog"
                    key={source.name}
                    className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A574]/40 hover:shadow-lg"
                  >
                    <div className="mb-5 flex items-start justify-between">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#D4A574]/10">
                        <Icon className="h-7 w-7 text-[#D4A574]" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 transition-colors group-hover:text-[#C41E3A]" />
                    </div>

                    <h4 className="text-base font-bold text-gray-950">
                      {source.name}
                    </h4>
                    <p className="mt-2 text-sm text-gray-500">{source.desc}</p>
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