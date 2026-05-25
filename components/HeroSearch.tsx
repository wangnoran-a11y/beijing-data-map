"use client";

import { Search, Database, Globe, TrendingUp } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function HeroSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const quickTags = ["人口数据", "交通流量", "经济指标", "教育资源", "医疗数据"];

  return (
    <section className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?q=80&w=2400&auto=format&fit=crop"
          alt="Beijing CBD"
          className="w-full h-full object-cover opacity-100 brightness-105 contrast-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-white/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),rgba(0,0,0,0.12))]" />
      </div>

      {/* Decorative elements */}
      <img
        src="https://mgx-backend-cdn.metadl.com/generate/images/1258690/2026-05-20/o6g7aoqaagra/decoration-chinese-cloud.png"
        alt=""
        className="absolute top-10 right-10 w-32 h-32 opacity-20 animate-float"
      />
      <img
        src="https://mgx-backend-cdn.metadl.com/generate/images/1258690/2026-05-20/o6g7aoqaagra/decoration-chinese-cloud.png"
        alt=""
        className="absolute bottom-20 left-10 w-24 h-24 opacity-15 animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        <div className="mb-2 flex items-center justify-center gap-2">
          <Database className="w-8 h-8 text-[#C41E3A]" />
          <span className="text-[#D4A574] text-sm font-medium tracking-widest uppercase">
            Beijing Data Group
          </span>
        </div>
      <h1 className="text-6xl md:text-7xl font-black text-[#F8FAFC] mb-4 tracking-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.38)]">
        北京数据集团
        <span className="text-[#D4383F]">数据地图</span>
      </h1>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto drop-shadow">
          汇聚首都数据资源，构建智慧城市数据底座
        </p>

        {/* Search Box */}
        <div className="relative max-w-4xl mx-auto mb-6">
          <div className="relative flex items-center bg-white/95 rounded-2xl border border-gray-200 overflow-hidden shadow-2xl shadow-red-100/40 animate-pulse-glow">
            <Search className="absolute left-5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索数据资源、API接口、数据集..."
              className="w-full py-5 pl-14 pr-32 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none text-base"
            />
            <Link
              href="/data-catalog"
              className="absolute right-2 px-6 py-2.5 bg-gradient-to-r from-[#B4232A] to-[#D4383F] text-white rounded-full font-medium hover:shadow-lg hover:shadow-red-500/25 transition-all"
            >
              搜索
            </Link>
          </div>
        </div>

        {/* Quick Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-white/90 text-sm font-medium">热门搜索：</span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              className="px-3 py-1 text-sm text-gray-700 bg-white/90 border border-gray-300 shadow-sm rounded-full border border-white/20 hover:border-[#B4232A]/40 hover:bg-[#FFF1F1] hover:text-[#B4232A]"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="mx-auto flex w-fit items-center justify-center gap-8 md:gap-12 rounded-2xl bg-white/85 px-10 py-4 shadow-lg backdrop-blur-md">
          {[
            { icon: Database, label: "数据集", value: "12,680+" },
            { icon: Globe, label: "API接口", value: "3,420+" },
            { icon: TrendingUp, label: "日均调用", value: "580万+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-5 h-5 text-[#D4A574] mx-auto mb-1" />
              <div className="text-xl font-bold text-[#111111]">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}