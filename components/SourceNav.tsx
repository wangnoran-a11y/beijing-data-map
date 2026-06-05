"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Bus,
  Database,
  GraduationCap,
  HeartPulse,
  Landmark,
  Lightbulb,
  LineChart,
  Shield,
  Sprout,
  Users,
} from "lucide-react";

const citySources = [
  { name: "金融服务", icon: LineChart },
  { name: "医疗健康", icon: HeartPulse },
  { name: "交通运输", icon: Bus },
  { name: "教育教学", icon: GraduationCap },
  { name: "城市治理", icon: Landmark },
  { name: "应急管理", icon: Shield },
  { name: "科技创新", icon: Lightbulb },
  { name: "绿色低碳", icon: Sprout },
];

const ministrySources = [
  { name: "交通运输部", icon: Bus },
  { name: "民政部", icon: Users },
  { name: "国家卫健委", icon: HeartPulse },
  { name: "公安部", icon: Shield },
  { name: "农业农村部", icon: Sprout },
  { name: "教育部", icon: GraduationCap },
  { name: "市场监管总局", icon: Landmark },
];

export default function SourceNav() {
  return (
    <section className="bg-white px-5 py-8 sm:px-8 lg:px-10 xl:px-14 2xl:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50">
              <Building2 className="h-6 w-6 text-[#C41E3A]" />
            </div>

            <div>
              <h2 className="text-[34px] font-black text-gray-950">
                资源来源导航
              </h2>

              <p className="mt-2 text-[15px] text-gray-500">
                汇聚北京市公共数据资源与国家部委数据资源，构建统一的数据发现入口。
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-red-100 bg-white px-5 py-3 text-center shadow-sm">
              <div className="text-xs text-gray-500">来源数量</div>

              <div className="mt-1 text-[30px] font-black text-[#C41E3A]">
                38+
              </div>
            </div>

            <Link
              href="/data-sources"
              className="flex items-center gap-2 rounded-full bg-[#C41E3A] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-100 transition hover:bg-[#A91830]"
            >
              查看全部来源
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                <Landmark className="h-5 w-5 text-[#C41E3A]" />
              </div>

              <div>
                <h3 className="text-[22px] font-black text-gray-950">
                  北京市公共数据资源
                </h3>

                <p className="text-sm text-gray-500">
                  覆盖首都重点行业与城市治理场景
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {citySources.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    href={`/data-sources?type=city&name=${encodeURIComponent(
                      item.name
                    )}`}
                    key={item.name}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 transition-all duration-200 hover:border-red-200 hover:bg-red-50/30 hover:shadow-sm"
                  >
                    <Icon className="h-4 w-4 text-[#C41E3A]" />

                    <span className="text-sm font-semibold text-gray-800">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
                <Database className="h-5 w-5 text-[#B98245]" />
              </div>

              <div>
                <h3 className="text-[22px] font-black text-gray-950">
                  国家部委数据资源
                </h3>

                <p className="text-sm text-gray-500">
                  汇聚国家部委权威数据资源
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {ministrySources.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    href={`/data-sources?type=ministry&name=${encodeURIComponent(
                      item.name
                    )}`}
                    key={item.name}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 transition-all duration-200 hover:border-amber-200 hover:bg-amber-50/30 hover:shadow-sm"
                  >
                    <Icon className="h-4 w-4 text-[#B98245]" />

                    <span className="text-sm font-semibold text-gray-800">
                      {item.name}
                    </span>
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