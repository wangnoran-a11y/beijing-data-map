"use client";

import Link from "next/link";
import {
  Database,
  FileText,
  HeartPulse,
  Car,
  Users,
  Pill,
  ArrowRight,
  Lock,
  Unlock,
  Sparkles,
} from "lucide-react";

const cards = [
  {
    icon: Car,
    title: "车辆维修电子健康档案",
    source: "交通运输部汽车维修电子档案系统",
    format: "API/报告",
    size: "59.1亿条",
    fields: 58,
    records: "59.1亿+",
    status: "授权",
    tag: "交通行业",
    hot: 98,
    open: false,
    desc: "覆盖维修基础信息、维修配件、维修工时等数据，支撑保险风控、二手车评估和汽车金融服务。",
  },
  {
    icon: HeartPulse,
    title: "医疗机构基础信息库",
    source: "医疗健康数据资源",
    format: "表/接口",
    size: "待统计",
    fields: "待统计",
    records: "待统计",
    status: "授权",
    tag: "医疗行业",
    hot: 95,
    open: false,
    desc: "汇聚医疗机构、科室、床位、机构等级、服务能力等基础信息，支撑医疗机构画像和资源配置分析。",
  },
  {
    icon: Users,
    title: "养老机构数据资源",
    source: "民政养老数据资源",
    format: "表/接口",
    size: "178项字段",
    fields: 178,
    records: "月度更新",
    status: "授权",
    tag: "民政行业",
    hot: 92,
    open: false,
    desc: "覆盖养老机构、从业人员、入住老人、床位、收费及运营状态等数据，支撑养老机构画像和养老金融服务。",
  },
  {
    icon: Pill,
    title: "药品数据资源",
    source: "医疗药品数据资源",
    format: "表/接口",
    size: "待统计",
    fields: "待统计",
    records: "待统计",
    status: "授权",
    tag: "医疗行业",
    hot: 88,
    open: false,
    desc: "覆盖药品名称、批准文号、药品分类、生产企业、规格价格等信息，支撑药品监管和流通分析。",
  },
].sort((a, b) => b.hot - a.hot);

export default function ResourceCards() {
  const featured = cards[0];
  const otherCards = cards.slice(1);
  const FeaturedIcon = featured.icon;

  return (
    <section className="bg-white px-5 py-10 sm:px-8 lg:px-10 xl:px-14 2xl:px-20">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-5">
            <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#C41E3A]/10">
              <Database className="h-6 w-6 text-[#C41E3A]" />
            </div>

            <div>
              <h2 className="text-[28px] font-bold tracking-tight text-gray-950 lg:text-[30px]">
                重点资源卡片
              </h2>
              <p className="mt-1 text-[15px] text-gray-500 lg:text-[16px]">
                围绕交通、医疗、民政重点数据资源，支撑数据产品开发与产业场景应用
              </p>
            </div>
          </div>

          <Link
            href="/data-catalog"
            className="w-fit rounded-full bg-[#C41E3A] px-5 py-2 text-sm font-bold text-white shadow-lg shadow-red-100 transition-all hover:bg-[#A91830]"
          >
            <span className="inline-flex items-center gap-2">
              资源申请入口
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="rounded-[32px] border border-gray-100 bg-gradient-to-br from-gray-50 via-white to-red-50/30 p-4 shadow-sm sm:p-5">
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-[0.95fr_1.45fr]">
            <Link
              href="/data-catalog"
              className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[28px] bg-[#111827] p-5 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#C41E3A]/25 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-[#D4A574]/20 blur-3xl" />

              <div className="relative flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C41E3A]">
                  <FeaturedIcon className="h-8 w-8 text-white" />
                </div>

                <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/80">
                  <Sparkles className="h-3.5 w-3.5 text-[#D4A574]" />
                  主推资源
                </div>
              </div>

              <div className="relative mt-6">
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">
                  {featured.tag}
                </span>

                <h3 className="mt-4 text-[26px] font-black leading-tight">
                  {featured.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {featured.desc}
                </p>

                <p className="mt-3 text-sm text-white/45">
                  来源：{featured.source}
                </p>
              </div>

              <div className="relative mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/8 p-4">
                  <p className="text-xs text-white/45">格式</p>
                  <p className="mt-1 text-xl font-black">{featured.format}</p>
                </div>

                <div className="rounded-2xl bg-white/8 p-4">
                  <p className="text-xs text-white/45">数据规模</p>
                  <p className="mt-1 text-xl font-black">{featured.size}</p>
                </div>

                <div className="rounded-2xl bg-white/8 p-4">
                  <p className="text-xs text-white/45">字段数</p>
                  <p className="mt-1 text-xl font-black">{featured.fields}</p>
                </div>

                <div className="rounded-2xl bg-white/8 p-4">
                  <p className="text-xs text-white/45">记录数</p>
                  <p className="mt-1 text-xl font-black">{featured.records}</p>
                </div>
              </div>

              <div className="relative mt-auto flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#D4A574]/15 px-3 py-1 text-xs font-bold text-[#D4A574]">
                  <Lock className="h-3.5 w-3.5" />
                  {featured.status}
                </span>

                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#C41E3A] px-4 py-2 text-sm font-bold text-white transition-all group-hover:bg-[#A91830]">
                  进入资源目录
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              {otherCards.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    href="/data-catalog"
                    key={item.title}
                    className="group flex min-h-[390px] flex-col rounded-[26px] border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-xl"
                  >
                    <div className="mb-5 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C41E3A]/10">
                        <Icon className="h-7 w-7 text-[#C41E3A]" />
                      </div>

                      {item.open ? (
                        <Unlock className="h-5 w-5 text-green-500" />
                      ) : (
                        <Lock className="h-5 w-5 text-[#D4A574]" />
                      )}
                    </div>

                    <span className="w-fit rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
                      {item.tag}
                    </span>

                    <h3 className="mt-4 text-[20px] font-black text-gray-950 group-hover:text-[#C41E3A]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      {item.source}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {item.desc}
                    </p>

                    <div className="mt-auto grid grid-cols-2 gap-3 pt-5 text-sm">
                      <div className="rounded-2xl bg-gray-50 p-3">
                        <p className="text-xs text-gray-400">格式</p>
                        <p className="mt-1 font-bold text-gray-900">
                          {item.format}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-gray-50 p-3">
                        <p className="text-xs text-gray-400">规模</p>
                        <p className="mt-1 font-bold text-gray-900">
                          {item.size}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-gray-50 p-3">
                        <p className="text-xs text-gray-400">字段</p>
                        <p className="mt-1 font-bold text-gray-900">
                          {item.fields}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-gray-50 p-3">
                        <p className="text-xs text-gray-400">更新</p>
                        <p className="mt-1 font-bold text-gray-900">
                          {item.records}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                      <span className="rounded-md bg-[#D4A574]/10 px-2 py-1 text-xs font-bold text-[#B98245]">
                        {item.status}
                      </span>

                      <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-[#C41E3A]" />
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