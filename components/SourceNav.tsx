"use client";

import Link from "next/link";
import { Building, ExternalLink } from "lucide-react";

const sources = [
  { name: "北京市大数据中心", count: 3240, type: "政府" },
  { name: "北京市交通委", count: 1860, type: "政府" },
  { name: "北京市卫健委", count: 1420, type: "政府" },
  { name: "北京市教委", count: 1180, type: "政府" },
  { name: "北京市统计局", count: 980, type: "政府" },
  { name: "北京市生态环境局", count: 860, type: "政府" },
  { name: "中关村科技园", count: 720, type: "园区" },
  { name: "北京经开区", count: 640, type: "园区" },
  { name: "首都之窗", count: 560, type: "平台" },
  { name: "北京城市大脑", count: 480, type: "平台" },
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
              <p className="text-gray-500 text-sm">数据提供方及机构目录</p>
            </div>
          </div>
          <Link href="/data-catalog" className="text-sm text-[#C41E3A] hover:text-[#E63946] transition-colors">
            全部来源 →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {sources.map((source, index) => (
            <Link
              href="/data-catalog"
              key={source.name}
              className="glass-card rounded-xl p-4 cursor-pointer group hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#C41E3A]/5 flex items-center justify-center">
                  <Building className="w-5 h-5 text-[#C41E3A]" />
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#D4A574]/10 text-[#D4A574] border border-[#D4A574]/20">
                  {source.type}
                </span>
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1 group-hover:text-[#C41E3A] transition-colors line-clamp-1">
                {source.name}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">{source.count} 个数据集</p>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#C41E3A] transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}