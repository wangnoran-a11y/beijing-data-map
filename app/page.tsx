import Link from "next/link";
import LoginGate from "@/components/LoginGate";
import Header from "@/components/Header";
import HomeSearchBox from "@/components/HomeSearchBox";
import {
  ArrowRight,
  Building2,
  Database,
  Factory,
  FileText,
  Layers,
  Package,
  ShieldCheck,
} from "lucide-react";

const beijingSources = [
  "市公安局",
  "市卫健委",
  "市民政局",
  "市医保局",
  "市税务局",
  "市教委",
  "市生态环境局",
  "市规划自然资源委",
];

const ministrySources = [
  "交通运输部",
  "国家医保局",
  "国家市场监督管理总局",
  "国家知识产权局",
  "国家统计局",
  "中国气象局",
  "住房城乡建设部",
  "应急管理部",
];

const projects = [
  {
    title: "汽车电子健康档案",
    tag: "交通运输部",
    desc: "首批产品发布，持续推进全国数据验证与产品能力扩展。",
    stats: ["4项已发布", "18项规划"],
    href: "/data-catalog/transport",
  },
  {
    title: "公共数据授权运营",
    tag: "北京市",
    desc: "围绕第一批公共数据资源，推进场景建设和产品服务清单完善。",
    stats: ["8个领域", "19个场景"],
    href: "/authorized-resources",
  },
  {
    title: "养老金融服务",
    tag: "民政数据",
    desc: "支撑养老机构评级、授信调查和养老金融场景应用。",
    stats: ["机构画像", "风险评级"],
    href: "/data-catalog/civil",
  },
  {
    title: "企业授信风控",
    tag: "金融服务",
    desc: "整合企业经营、税务、发票和年报数据，支撑贷前风控。",
    stats: ["企业画像", "授信评估"],
    href: "/data-catalog/finance",
  },
];

const products = [
  "车维全景动察",
  "车辆健康评分",
  "维修风险预测",
  "企业授信调查报告",
  "养老机构风险评级",
  "医保基础画像",
  "自动驾驶脱敏数据集",
  "碳排放智能核算",
];

const industries = [
  "集成电路",
  "人工智能",
  "医药健康",
  "智能网联汽车",
  "新能源与储能",
  "商业航天与低空经济",
  "新材料",
  "数字经济与现代服务业",
];

const industryLinks: Record<string, string> = {
  集成电路: "ic",
  人工智能: "ai",
  医药健康: "health",
  智能网联汽车: "auto",
  新能源与储能: "energy",
  商业航天与低空经济: "space",
  新材料: "material",
  数字经济与现代服务业: "digital",
};

export default function Home() {
  return (
    <LoginGate>
      <main className="min-h-screen bg-[#F7F8FA] text-slate-900">
        <Header />

        <section className="pt-32 pb-14">
          <div className="mx-auto max-w-7xl px-10">
            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
                <Database className="h-4 w-4" />
                北京数据地图
              </div>

              <h1 className="max-w-4xl text-[52px] font-black leading-tight text-slate-900">
                汇聚公共数据资源，
                <br />
                形成产品能力，赋能重点产业。
              </h1>

              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-500">
                面向公共数据授权运营、数据资源管理、产品服务发布和产业场景应用，构建可查看、可检索、可落地的数据地图门户。
              </p>

              <HomeSearchBox />

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/data-catalog"
                  className="inline-flex items-center gap-2 rounded-full bg-[#C41E3A] px-6 py-3 text-sm font-bold text-white"
                >
                  查看数据目录
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/authorized-resources"
                  className="inline-flex items-center gap-2 rounded-full bg-red-50 px-6 py-3 text-sm font-bold text-[#C41E3A]"
                >
                  查看授权运营清单
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/industry"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3 text-sm font-bold text-slate-700"
                >
                  查看产业地图
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-4">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Database className="h-5 w-5 text-[#C41E3A]" />
                    数据领域
                  </div>
                  <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                    8+
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Layers className="h-5 w-5 text-[#C41E3A]" />
                    应用场景
                  </div>
                  <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                    19
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Package className="h-5 w-5 text-[#C41E3A]" />
                    产品能力
                  </div>
                  <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                    50+
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Factory className="h-5 w-5 text-[#C41E3A]" />
                    赋能产业
                  </div>
                  <div className="mt-2 text-3xl font-black text-[#C41E3A]">
                    8
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-10 py-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-900">
                数据资源来源
              </h2>
              <p className="mt-3 text-slate-500">
                汇聚北京市公共数据资源、国家部委数据资源及重点行业数据资源，形成统一资源视图。
              </p>
            </div>

            <Link
              href="/data-sources"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#C41E3A] shadow-sm"
            >
              查看资源来源
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] bg-white p-7 shadow-sm">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50">
                  <Building2 className="h-6 w-6 text-[#C41E3A]" />
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    北京市公共数据
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    已接入重点市级部门数据资源
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {beijingSources.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-7 shadow-sm">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50">
                  <Database className="h-6 w-6 text-[#C41E3A]" />
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    国家部委数据
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    已接入国家部委重点数据资源
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {ministrySources.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-10 py-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-900">
                数据产品成果
              </h2>
              <p className="mt-3 text-slate-500">
                面向金融、交通、医疗、民政、双碳等场景形成可运营产品服务。
              </p>
            </div>

            <Link
              href="/data-products"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#C41E3A] shadow-sm"
            >
              查看数据产品
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {products.map((item) => (
              <div key={item} className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50">
                  <FileText className="h-5 w-5 text-[#C41E3A]" />
                </div>
                <div className="font-black text-slate-900">{item}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-10 py-10">
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
                  <ShieldCheck className="h-4 w-4" />
                  授权运营
                </div>

                <h2 className="text-3xl font-black text-slate-900">
                  第一批授权运营资源展示
                </h2>

                <p className="mt-3 text-slate-500">
                  覆盖8个重点领域、19个应用场景，支撑公共治理、公益事业和产业发展。
                </p>
              </div>

              <Link
                href="/authorized-resources"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#C41E3A] px-5 py-3 text-sm font-bold text-white"
              >
                查看完整清单
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {[
                "应急管理",
                "绿色低碳",
                "金融服务",
                "医疗健康",
                "交通运输",
                "教育教学",
                "城市治理",
                "科技创新",
              ].map((item) => (
                <Link
                  key={item}
                  href="/authorized-resources"
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-sm"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                    <Database className="h-5 w-5 text-[#C41E3A]" />
                  </div>
                  <div className="font-bold text-slate-900">{item}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-10 py-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-900">
                数据赋能重点产业
              </h2>
              <p className="mt-3 text-slate-500">
                从“数据从哪来”进一步延伸到“数据能赋能哪些产业”。
              </p>
            </div>

            <Link
              href="/industry"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#C41E3A] shadow-sm"
            >
              查看产业地图
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {industries.map((item) => (
              <Link
                key={item}
                href={`/industry/${industryLinks[item]}`}
                className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50">
                  <Factory className="h-5 w-5 text-[#C41E3A]" />
                </div>

                <div className="font-black text-slate-900">{item}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-10 pt-6 pb-20">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                重点项目
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                轻量展示当前重点推进的数据资源建设、产品开发和场景落地项目。
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {projects.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-3 inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
                  {item.tag}
                </div>

                <h3 className="text-base font-black text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
                  {item.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600"
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                <div className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#C41E3A]">
                  查看
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </LoginGate>
  );
}