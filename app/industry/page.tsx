import Link from "next/link";
import {ArrowRight, Building2, Car, HeartPulse, Users,} from "lucide-react";

export default function IndustryPage() {
  const industries = [
    {
      title: "交通产业",
      desc: "车辆风控、保险定价、二手车评估、汽车金融等场景。",
      icon: Car,
      href: "/industry/traffic?from=industry",
    },
    {
      title: "医疗健康",
      desc: "健康画像、医保风控、医疗服务优化等场景。",
      icon: HeartPulse,
      href: "/industry/medical?from=industry",
    },
    {
      title: "社会民生",
      desc: "婚姻核验、养老服务、社会组织治理等场景。",
      icon: Users,
      href: "/industry/civil?from=industry",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F8FA] pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-10">
        <div className="mb-6">
  

  <h1 className="text-[42px] font-black text-slate-900">
            数据赋能产业
          </h1>
          <p className="mt-3 text-slate-500">
            围绕重点行业应用场景，推动数据资源向数据产品、产业服务和应用价值转化。
          </p>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">产业方向</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">8</div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">应用场景</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">32</div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">数据产品</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">86</div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">服务机构</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">120+</div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {industries.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C41E3A]">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h2 className="text-xl font-black text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-3 min-h-[52px] text-sm leading-6 text-slate-500">
                  {item.desc}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 font-bold text-[#C41E3A]">
                  查看产业专区
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <Building2 className="h-6 w-6 text-[#C41E3A]" />
            <h2 className="text-2xl font-black text-slate-900">
              产业赋能路径
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {["数据资源汇聚", "数据产品开发", "场景应用落地", "产业价值转化"].map(
              (item, index) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 p-5 text-sm font-bold text-slate-700"
                >
                  <span className="mr-2 text-[#C41E3A]">0{index + 1}</span>
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}