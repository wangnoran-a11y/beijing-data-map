"use client";

import Link from "next/link";
import { FileText, Database, Globe, Lock, Unlock, ArrowRight } from "lucide-react";

const resources = [
  {
    title: "城市道路实时路况",
    provider: "北京市交通委",
    format: "API",
    size: "实时流",
    updateFreq: "实时",
    access: "open",
    fields: 28,
    records: "1.2亿+",
    icon: Globe,
  },
  {
    title: "企业工商注册信息",
    provider: "北京市市场监管局",
    format: "CSV/JSON",
    size: "4.8GB",
    updateFreq: "日更新",
    access: "auth",
    fields: 42,
    records: "280万+",
    icon: FileText,
  },
  {
    title: "气象观测站历史数据",
    provider: "北京市气象局",
    format: "NetCDF",
    size: "12.6GB",
    updateFreq: "小时",
    access: "open",
    fields: 56,
    records: "8600万+",
    icon: Database,
  },
  {
    title: "公共WiFi热点分布",
    provider: "北京市经信局",
    format: "GeoJSON",
    size: "156MB",
    updateFreq: "周更新",
    access: "open",
    fields: 15,
    records: "4.2万+",
    icon: Globe,
  },
];

export default function ResourceCards() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <Database className="w-6 h-6 text-[#C41E3A]" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">资源卡片</h2>
              <p className="text-gray-500 text-sm">精选数据资源详情</p>
            </div>
          </div>
          <Link href="/data-catalog" className="text-sm text-[#C41E3A] hover:text-[#E63946] transition-colors">
            查看更多 →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {resources.map((resource, index) => (
            <Link
              href="/data-catalog"
              key={resource.title}
              className="glass-card rounded-xl p-6 cursor-pointer group hover:scale-[1.01] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#C41E3A]/5 flex items-center justify-center shrink-0">
                  <resource.icon className="w-6 h-6 text-[#C41E3A]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#C41E3A] transition-colors truncate">
                      {resource.title}
                    </h3>
                    {resource.access === "open" ? (
                      <Unlock className="w-4 h-4 text-green-500 shrink-0" />
                    ) : (
                      <Lock className="w-4 h-4 text-[#D4A574] shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{resource.provider}</p>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">格式</span>
                      <span className="text-xs text-gray-700 font-medium">{resource.format}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">大小</span>
                      <span className="text-xs text-gray-700 font-medium">{resource.size}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">字段数</span>
                      <span className="text-xs text-gray-700 font-medium">{resource.fields}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">记录数</span>
                      <span className="text-xs text-gray-700 font-medium">{resource.records}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 text-xs rounded bg-[#C41E3A]/5 text-[#C41E3A] border border-[#C41E3A]/20">
                        {resource.updateFreq}
                      </span>
                      <span className={`px-2 py-0.5 text-xs rounded ${resource.access === "open" ? "bg-green-50 text-green-600 border border-green-200" : "bg-[#D4A574]/10 text-[#D4A574] border border-[#D4A574]/20"}`}>
                        {resource.access === "open" ? "开放" : "授权"}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#C41E3A] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}