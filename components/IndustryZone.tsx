"use client";

import Link from "next/link";
import {
  Building2,
  Car,
  Heart,
  GraduationCap,
  Zap,
  Landmark,
  ShoppingCart,
  Leaf,
  Wifi,
  Factory,
  Home,
  Users,
} from "lucide-react";

const industries = [
  { icon: Landmark, name: "政务数据", count: 2340, color: "#C41E3A" },
  { icon: Car, name: "交通出行", count: 1856, color: "#E63946" },
  { icon: Heart, name: "医疗健康", count: 1420, color: "#C41E3A" },
  { icon: GraduationCap, name: "教育科研", count: 1180, color: "#D4A574" },
  { icon: Building2, name: "金融服务", count: 980, color: "#1A1A2E" },
  { icon: Zap, name: "能源环保", count: 860, color: "#E63946" },
  { icon: ShoppingCart, name: "商业消费", count: 760, color: "#C41E3A" },
  { icon: Leaf, name: "农业农村", count: 640, color: "#059669" },
  { icon: Wifi, name: "通信科技", count: 580, color: "#1A1A2E" },
  { icon: Factory, name: "工业制造", count: 520, color: "#D4A574" },
  { icon: Home, name: "住房建设", count: 460, color: "#E63946" },
  { icon: Users, name: "社会民生", count: 380, color: "#C41E3A" },
];

export default function IndustryZone() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">行业专区</h2>
            <p className="text-gray-500 text-sm">按行业分类浏览数据资源</p>
          </div>
          <Link href="/data-catalog" className="text-sm text-[#C41E3A] hover:text-[#E63946] transition-colors">
            查看全部 →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industries.map((item, index) => (
            <Link
              href="/data-catalog"
              key={item.name}
              className="glass-card rounded-xl p-4 text-center cursor-pointer group hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div
                className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center transition-all group-hover:scale-110"
                style={{ backgroundColor: `${item.color}10` }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">{item.name}</h3>
              <p className="text-xs text-gray-500">{item.count} 个数据集</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}