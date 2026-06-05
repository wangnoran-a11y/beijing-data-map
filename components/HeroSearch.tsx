"use client";

import { Search, Database, Globe, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroSearch() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const quickTags = [
    "公共数据",
    "企业画像",
    "交通出行",
    "医疗健康",
    "产业金融",
  ];

  const stats = [
    { icon: Database, label: "数据资源", value: "12,680+" },
    { icon: Globe, label: "数据产品", value: "3,420+" },
    { icon: TrendingUp, label: "活跃度", value: "580万+" },
  ];

  const handleSearch = (keyword?: string) => {
    const finalKeyword = (keyword ?? searchQuery).trim();

    if (!finalKeyword) return;

    router.push(`/search?q=${encodeURIComponent(finalKeyword)}`);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?q=80&w=2400&auto=format&fit=crop"
          alt="Beijing CBD"
          className="h-full w-full object-cover opacity-100 brightness-105 contrast-110"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,30,58,0.16),rgba(0,0,0,0.28))]" />
      </div>

      {/* Decorative elements */}
      <img
        src="https://mgx-backend-cdn.metadl.com/generate/images/1258690/2026-05-20/o6g7aoqaagra/decoration-chinese-cloud.png"
        alt=""
        className="absolute right-10 top-10 h-32 w-32 animate-float opacity-20"
      />
      <img
        src="https://mgx-backend-cdn.metadl.com/generate/images/1258690/2026-05-20/o6g7aoqaagra/decoration-chinese-cloud.png"
        alt=""
        className="absolute bottom-20 left-10 h-24 w-24 animate-float opacity-15"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
          <Database className="h-8 w-8 text-[#D4383F]" />
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D4A574]">
            Beijing Data Group
          </span>
        </div>

        <h1 className="mb-5 text-6xl font-black tracking-tight text-[#F8FAFC] drop-shadow-[0_6px_30px_rgba(0,0,0,0.45)] md:text-7xl">
          北京数据集团
          <span className="text-[#D4383F]">数据地图</span>
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-xl leading-9 text-white/90 drop-shadow">
          汇聚全国优质数据资源，打造面向产业发展的数据赋能入口。
        </p>

        {/* Search Box */}
        <div className="relative mx-auto mb-6 max-w-4xl">
          <div className="relative flex items-center overflow-hidden rounded-2xl border border-gray-200 bg-white/95 shadow-2xl shadow-red-100/40 animate-pulse-glow">
            <Search className="absolute left-5 h-5 w-5 text-gray-400" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder="搜索数据资源、数据产品、产业应用场景..."
              className="w-full bg-transparent py-5 pl-14 pr-32 text-base text-gray-900 placeholder-gray-400 focus:outline-none"
            />

            <button
              type="button"
              onClick={() => handleSearch()}
              className="absolute right-2 rounded-full bg-gradient-to-r from-[#B4232A] to-[#D4383F] px-6 py-2.5 font-medium text-white transition-all hover:shadow-lg hover:shadow-red-500/25"
            >
              搜索
            </button>
          </div>
        </div>

        {/* Quick Tags */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm font-medium text-white/90">热门搜索：</span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleSearch(tag)}
              className="rounded-full border border-white/30 bg-white/90 px-3 py-1 text-sm text-gray-700 shadow-sm transition hover:border-[#B4232A]/40 hover:bg-[#FFF1F1] hover:text-[#B4232A]"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="mx-auto flex w-fit items-center justify-center gap-8 rounded-2xl bg-white/88 px-10 py-4 shadow-lg backdrop-blur-md md:gap-12">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div key={stat.label} className="text-center">
                <Icon className="mx-auto mb-1 h-5 w-5 text-[#D4A574]" />
                <div className="text-xl font-bold text-[#111111]">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}