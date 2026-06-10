import Link from "next/link";
import {
  Database,
  Package,
  Activity,
  Building2,
  Search,
  FileText,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";

const stats = [
  { label: "数据资源", value: "12,680+", icon: Database },
  { label: "数据产品", value: "3,420+", icon: Package },
  { label: "活跃度", value: "580万+", icon: Activity },
  { label: "接入机构", value: "286+", icon: Building2 },
];

const quickActions = [
  { title: "数据资源申请", desc: "查看并申请可用数据资源", href: "/data-resources" },
  { title: "数据产品订阅", desc: "订阅画像、报告、模型类产品", href: "/data-products" },
  { title: "产业场景接入", desc: "面向金融、医疗、交通等场景", href: "/industry" },
];

const myApps = [
  ["企业画像核验产品", "审核中", "2026-06-09"],
  ["车辆维修健康档案查询", "已开通", "2026-06-06"],
  ["民政主体风险识别报告", "待补充材料", "2026-06-03"],
];

const hotProducts = [
  "企业经营风险画像",
  "车辆健康评估报告",
  "医疗机构资源分析",
  "交通出行热力分析",
  "社会组织信用评估",
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FB] pt-[74px]">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#111827] via-[#1F2937] to-[#7F1D1D] px-10 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm tracking-[0.3em] text-red-200">
            USER CENTER
          </p>

          <h1 className="text-4xl font-black">
            欢迎来到北京数据集团数据地图
          </h1>

          <p className="mt-4 max-w-2xl text-white/75">
            数据资源统一门户 · 数据产品运营平台 · 产业场景赋能入口
          </p>

          <div className="mt-8 flex max-w-2xl items-center overflow-hidden rounded-2xl bg-white shadow-2xl">
            <Search className="ml-5 h-5 w-5 text-slate-400" />
            <input
              placeholder="搜索数据资源、数据产品、我的申请..."
              className="h-14 flex-1 px-4 text-sm text-slate-800 outline-none"
            />
            <button className="mr-2 rounded-xl bg-[#B4232A] px-6 py-3 text-sm font-bold text-white">
              搜索
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-10 py-8">
        <div className="grid grid-cols-4 gap-6">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <Icon className="mb-4 h-7 w-7 text-[#B4232A]" />
                <div className="text-3xl font-black text-slate-900">
                  {item.value}
                </div>
                <div className="mt-1 text-sm text-slate-500">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-3 gap-6">
          {quickActions.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#B4232A]">
                <FileText className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {item.desc}
              </p>

              <div className="mt-5 flex items-center text-sm font-bold text-[#B4232A]">
                立即进入
                <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-3 gap-6">
          <div className="col-span-2 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                我的申请
              </h2>

              <Link
                href="/profile/applications"
                className="text-sm font-semibold text-[#B4232A] hover:underline"
              >
                查看全部
              </Link>
            </div>

            <div className="space-y-4">
              {myApps.map(([name, status, date], index) => (
                <Link
                  key={name}
                  href={`/profile/applications/${index + 1}`}
                  className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:border-red-200 hover:bg-white hover:shadow-md"
                >
                  <div>
                    <div className="font-bold text-slate-800">
                      {name}
                    </div>

                    <div className="mt-1 text-sm text-slate-400">
                      {date}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-red-50 px-4 py-1 text-sm font-bold text-[#B4232A]">
                      {status}
                    </span>

                    <ArrowRight className="h-4 w-4 text-[#B4232A]" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                热门产品
              </h2>

              <Link
                href="/data-products"
                className="text-sm font-semibold text-[#B4232A] hover:underline"
              >
                查看更多
              </Link>
            </div>

            <div className="space-y-4">
              {hotProducts.map((item, index) => (
                <Link
                  key={item}
                  href="/data-products"
                  className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-slate-50"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-[#B4232A]">
                    {index + 1}
                  </div>

                  <div className="flex-1 text-sm font-semibold text-slate-700">
                    {item}
                  </div>

                  <Star className="h-4 w-4 text-amber-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <h2 className="mb-5 text-xl font-bold text-slate-900">
            最近使用
          </h2>

          <div className="grid grid-cols-4 gap-4">
            {[
              { name: "数据目录", href: "/data-catalog" },
              { name: "交通专区", href: "/data-resources" },
              { name: "民政专区", href: "/data-resources" },
              { name: "医疗专区", href: "/data-resources" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-red-200 hover:bg-white hover:shadow-md"
              >
                <Clock className="mb-3 h-5 w-5 text-[#B4232A]" />

                <div className="font-bold text-slate-800">
                  {item.name}
                </div>

                <div className="mt-1 text-sm text-slate-400">
                  最近访问 · 今日
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}