"use client";

import Link from "next/link";
import { TrendingUp, Download, Clock, Star, Eye } from "lucide-react";

const hotResources = [
  {
    title: "北京市实时交通流量数据",
    desc: "覆盖六环内主要道路的实时车流量、车速数据",
    category: "交通出行",
    downloads: "23.5万",
    views: "89.2万",
    updateTime: "实时更新",
    rating: 4.9,
    tags: ["实时", "API"],
  },
  {
    title: "全市空气质量监测站点数据",
    desc: "35个监测站点PM2.5、PM10、O3等指标历史数据",
    category: "能源环保",
    downloads: "18.2万",
    views: "56.7万",
    updateTime: "每小时",
    rating: 4.8,
    tags: ["时序", "CSV"],
  },
  {
    title: "北京市人口普查统计数据",
    desc: "第七次全国人口普查北京市分区县详细数据",
    category: "社会民生",
    downloads: "15.8万",
    views: "42.3万",
    updateTime: "年度",
    rating: 4.7,
    tags: ["统计", "Excel"],
  },
  {
    title: "城市公共交通线路及站点",
    desc: "地铁、公交全部线路站点坐标及运营时刻表",
    category: "交通出行",
    downloads: "12.6万",
    views: "38.9万",
    updateTime: "月度",
    rating: 4.8,
    tags: ["地理", "JSON"],
  },
  {
    title: "医疗机构基础信息库",
    desc: "全市各级医疗机构地址、科室、床位等基础信息",
    category: "医疗健康",
    downloads: "9.4万",
    views: "28.1万",
    updateTime: "季度",
    rating: 4.6,
    tags: ["目录", "API"],
  },
  {
    title: "教育资源分布地图数据",
    desc: "中小学、高校、培训机构地理分布及基础信息",
    category: "教育科研",
    downloads: "8.7万",
    views: "25.6万",
    updateTime: "学期",
    rating: 4.5,
    tags: ["地理", "GeoJSON"],
  },
];

export default function HotResources() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-[#C41E3A]" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">热门资源</h2>
              <p className="text-gray-500 text-sm">最受欢迎的数据资源</p>
            </div>
          </div>
          <Link href="/data-catalog" className="text-sm text-[#C41E3A] hover:text-[#E63946] transition-colors">
            更多热门 →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {hotResources.map((resource, index) => (
            <Link
              href="/data-catalog"
              key={resource.title}
              className="glass-card rounded-xl p-5 cursor-pointer group hover:scale-[1.02] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="px-2 py-0.5 text-xs rounded-full bg-[#C41E3A]/5 text-[#C41E3A] border border-[#C41E3A]/20">
                  {resource.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-[#D4A574] fill-[#D4A574]" />
                  <span className="text-xs text-[#D4A574]">{resource.rating}</span>
                </div>
              </div>

              <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-[#C41E3A] transition-colors line-clamp-1">
                {resource.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">{resource.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {resource.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-600 border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Download className="w-3.5 h-3.5" />
                    {resource.downloads}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    {resource.views}
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {resource.updateTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}