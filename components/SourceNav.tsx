"use client";

import Link from "next/link";
import { Building, ExternalLink, Landmark } from "lucide-react";

const citySources = ["医保", "卫健", "教育", "交通"];

const ministrySources = [
  "交通运输部",
  "公安部",
  "民政部",
  "农业农村部",
  "市场监管总局",
  "国务院国资委",
];

export default function SourceNav() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <Building className="w-6 h-6 text-[#D4A574]" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">资源来源导航</h2>
              <p className="text-gray-500 text-sm">
                汇聚北京市公共数据资源与国家部委数据资源，形成统一发现入口
              </p>
            </div>
          </div>

          <Link
            href="/data-catalog"
            className="text-sm text-[#C41E3A] hover:text-[#E63946] transition-colors"
          >
            全部来源 →
          </Link>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-5">
            <div className="mb-4 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-[#C41E3A]" />
              <h3 className="text-base font-semibold text-gray-900">北京市</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {citySources.map((source, index) => (
                <Link
                  href="/data-catalog"
                  key={source}
                  className="glass-card rounded-xl p-4 group hover:scale-105 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#C41E3A]/10 flex items-center justify-center">
                      <Building className="w-5 h-5 text-[#C41E3A]" />
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#C41E3A]" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#C41E3A]">
                    {source}
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">北京市数据资源</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
            <div className="mb-4 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-[#D4A574]" />
              <h3 className="text-base font-semibold text-gray-900">部委</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {ministrySources.map((source, index) => (
                <Link
                  href="/data-catalog"
                  key={source}
                  className="glass-card rounded-xl p-4 group hover:scale-105 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#D4A574]/10 flex items-center justify-center">
                      <Building className="w-5 h-5 text-[#D4A574]" />
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#C41E3A]" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#C41E3A] line-clamp-1">
                    {source}
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">国家部委数据资源</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}