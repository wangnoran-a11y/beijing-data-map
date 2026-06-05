"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Car,
  HeartPulse,
  Users,
  GraduationCap,
  Database,
  Boxes,
  LineChart,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { industryData } from "@/data/industryData";

const iconMap = {
  traffic: Car,
  medical: HeartPulse,
  education: GraduationCap,
  civil: Users,
};

const themeMap = {
  traffic: "bg-gradient-to-br from-[#0B1226] via-[#111827] to-[#2A1218]",
  medical: "bg-gradient-to-br from-[#0B1226] via-[#111827] to-[#2A1218]",
  education: "bg-gradient-to-br from-[#0B1226] via-[#111827] to-[#2A1218]",
  civil: "bg-gradient-to-br from-[#0B1226] via-[#111827] to-[#2A1218]",
};

function PreviewBlock({
  title,
  countLabel,
  items,
  icon,
}: {
  title: string;
  countLabel: string;
  items: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-[14px] border border-white/10 bg-white/10 p-2.5">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <h4 className="text-[16px] font-black text-white">{title}</h4>
        </div>

        <span className="text-[12px] font-bold text-[#D8B37A]">
          共 {items.length} 个
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {items.slice(0, 4).map((item) => (
          <span
            key={item}
            title={item}
            className="rounded-md border border-white/10 bg-white/10 px-3 py-1.5 text-[12px] font-bold text-white/85"
          >
            {item}
          </span>
        ))}

        {items.length > 4 && (
          <span className="rounded-md border border-[#D8B37A]/30 bg-[#D8B37A]/15 px-3 py-1.5 text-[12px] font-black text-[#D8B37A]">
            +{items.length - 4}
          </span>
        )}
      </div>
    </div>
  );
}

export default function IndustryDetail() {
  const [activeId, setActiveId] = useState("traffic");
  const active = industryData.find((item) => item.id === activeId)!;
  const activeTheme = themeMap[activeId as keyof typeof themeMap];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("scrollTo") === "industry-section") {
      setTimeout(() => {
        document
          .getElementById("industry-section")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  }, []);

  return (
    <section
      id="industry-section"
      className="bg-[#f7f8fa] px-5 py-6 sm:px-8 lg:px-10 xl:px-14 2xl:px-20"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-4">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-[13px] font-bold text-[#C41E3A]">
            <ShieldCheck className="h-4 w-4" />
            重点数据资源行业
          </div>

          <h2 className="text-[30px] font-black tracking-tight text-gray-950 lg:text-[34px]">
            数据资源成果展示
          </h2>

          <p className="mt-1.5 text-[14px] leading-6 text-gray-500">
            集中展示集团当前已接入和正在推进的重点数据资源，形成一体化展示入口。
          </p>
        </div>

        <div className="rounded-[26px] border border-gray-100 bg-white p-3.5 shadow-sm">
          <div className="overflow-x-auto pb-3 custom-scrollbar">
            <div className="flex min-w-max gap-4">
              {industryData.map((item) => {
                const Icon = iconMap[item.id as keyof typeof iconMap];
                const isActive = activeId === item.id;
                const itemTheme = themeMap[item.id as keyof typeof themeMap];

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`group relative w-[420px] shrink-0 cursor-pointer overflow-hidden rounded-[22px] p-4 text-left transition-all duration-300 ${
                      isActive
                        ? `${itemTheme} text-white shadow-lg`
                        : "border border-gray-100 bg-white text-gray-950 shadow-sm hover:border-red-200"
                    }`}
                  >
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#C41E3A]/18 blur-3xl" />
                    <div className="absolute bottom-0 left-0 h-20 w-20 rounded-full bg-[#D8B37A]/12 blur-3xl" />

                    <div className="relative mb-3 flex items-center justify-between">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                          isActive ? "bg-[#C41E3A]" : "bg-red-50"
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 ${
                            isActive ? "text-white" : "text-[#C41E3A]"
                          }`}
                        />
                      </div>

                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${
                          isActive
                            ? "bg-white/10 text-white"
                            : "bg-red-50 text-[#C41E3A]"
                        }`}
                      >
                        重点展示
                      </span>
                    </div>

                    <h3 className="relative text-[23px] font-black">
                      {item.name}
                    </h3>

                    <p
                      className={`relative mt-1.5 min-h-[44px] text-[13px] leading-5 ${
                        isActive ? "text-white/70" : "text-gray-500"
                      }`}
                    >
                      {item.desc}
                    </p>

                    <div className="relative mt-3 grid grid-cols-4 gap-2">
                      {item.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className={`rounded-lg p-2.5 ${
                            isActive ? "bg-white/10" : "bg-gray-50"
                          }`}
                        >
                          <div
                            className={`text-[17px] font-black ${
                              isActive ? "text-white" : "text-[#C41E3A]"
                            }`}
                          >
                            {stat.value}
                          </div>

                          <div
                            className={`mt-0.5 text-[10px] ${
                              isActive ? "text-white/55" : "text-gray-500"
                            }`}
                          >
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/industry/${item.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className={`relative mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold ${
                        isActive ? "text-white" : "text-[#C41E3A]"
                      }`}
                    >
                      查看行业详情
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>

                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C41E3A]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            key={active.id}
            className={`mt-3 animate-[fadeIn_0.25s_ease-out] rounded-[22px] ${activeTheme} p-4 text-white shadow-lg`}
          >
            <div className="mb-3 flex flex-col gap-2 border-b border-white/10 pb-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[12px] font-bold text-white">
                  <Database className="h-3.5 w-3.5 text-[#D8B37A]" />
                  {active.name}展开详情
                </div>

                <h3 className="text-[22px] font-black text-white">
                  {active.name}详情
                </h3>

                <p className="mt-1 text-[13px] leading-5 text-white/65">
                  {active.desc}
                </p>
              </div>

              <Link
                href={`/industry/${active.id}`}
                className="hidden w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[13px] font-bold text-white transition hover:bg-white/15 lg:inline-flex"
              >
                <Database className="h-4 w-4 text-[#D8B37A]" />
                查看完整行业
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mb-3 grid grid-cols-4 gap-2">
              {active.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/10 bg-white/10 px-3 py-2"
                >
                  <div className="text-[19px] font-black text-white">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-white/55">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mb-3">
              <div className="mb-2 flex items-center justify-between">
                <h4 className="text-[16px] font-black text-white">
                  数据资源目录
                </h4>

                <span className="text-[12px] font-bold text-[#D8B37A]">
                  资源概览
                </span>
              </div>

              <div
                className={`grid gap-2 ${
                  active.resources.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 lg:grid-cols-3"
                }`}
              >
                {active.resources.map((res) => (
                  <Link
                    href={`/industry/${active.id}`}
                    key={res.name}
                    className="rounded-[14px] border border-white/10 bg-white/10 p-3 transition hover:bg-white/15"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h5 className="text-[15px] font-black text-white">
                          {res.name}
                        </h5>

                        <p className="mt-1 text-[11px] font-bold text-[#D8B37A]">
                          {res.table}
                        </p>
                      </div>

                      <div className="rounded-md bg-white/10 p-1.5 text-[#D8B37A]">
                        <Boxes className="h-3.5 w-3.5" />
                      </div>
                    </div>

                    <div className="mt-3 rounded-xl bg-black/10 px-2.5 py-2">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <span className="shrink-0 text-[11px] text-white/50">
                          字段预览
                        </span>

                        <span className="shrink-0 rounded-full bg-[#D8B37A]/15 px-2 py-0.5 text-[10px] font-bold text-[#D8B37A]">
                          {res.fields.length}个字段
                        </span>

                        <div className="flex min-w-0 flex-1 items-center gap-1 overflow-hidden">
                          {res.fields.slice(0, 4).map((field) => (
                            <span
                              key={field}
                              className="shrink-0 rounded-md border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white/85"
                            >
                              {field}
                            </span>
                          ))}

                          {res.fields.length > 4 && (
                            <span className="shrink-0 text-[10px] font-bold text-[#D8B37A]">
                              +{res.fields.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
              <PreviewBlock
                title="数据产品"
                countLabel="产品"
                items={active.products}
                icon={<LineChart className="h-4 w-4 text-[#D8B37A]" />}
              />

              <PreviewBlock
                title="应用场景"
                countLabel="场景"
                items={active.scenes}
                icon={<ShieldCheck className="h-4 w-4 text-[#D8B37A]" />}
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-4px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .custom-scrollbar::-webkit-scrollbar {
            height: 4px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.06);
            border-radius: 999px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(216, 179, 122, 0.5);
            border-radius: 999px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(216, 179, 122, 0.75);
          }
        `}</style>
      </div>
    </section>
  );
}