"use client";

import Link from "next/link";
import {
  ArrowRight,
  Plane,
  Sprout,
  TrendingUp,
  Leaf,
} from "lucide-react";

const industries = [
  {
    name: "金融服务",
    desc: "企业征信、风险评估、产业金融、普惠金融等数据应用方向。",
    icon: TrendingUp,
  },
  {
    name: "农业农村",
    desc: "农业监测、乡村治理、农产品流通、涉农金融等数据场景。",
    icon: Sprout,
  },
  {
    name: "低空经济",
    desc: "飞行监管、空域服务、物流运输、低空产业服务等数据方向。",
    icon: Plane,
  },
  {
    name: "绿色低碳",
    desc: "碳排放监测、ESG评价、绿色金融及产业分析方向。",
    icon: Leaf,
  },
];

export default function IndustryZone() {
  return (
    <section className="bg-white px-5 py-8 sm:px-8 lg:px-10 xl:px-14 2xl:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-[34px] font-black text-gray-950">
              行业扩展
            </h2>

            <p className="mt-2 text-[15px] text-gray-500">
              除交通、医疗、教育、民政重点行业外，持续拓展更多行业数据资源与产品能力。
            </p>
          </div>

          <Link
            href="/industry-extend"
            className="flex items-center gap-2 rounded-full bg-[#C41E3A] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-100 transition hover:bg-[#A91830]"
          >
            查看全部行业
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                href={`/industry-extend?name=${encodeURIComponent(item.name)}`}
                key={item.name}
                className="group rounded-[24px] border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50">
                  <Icon className="h-6 w-6 text-[#C41E3A]" />
                </div>

                <h3 className="text-[24px] font-black text-gray-950 group-hover:text-[#C41E3A]">
                  {item.name}
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-gray-500">
                  {item.desc}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#C41E3A]">
                  查看行业资源
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}