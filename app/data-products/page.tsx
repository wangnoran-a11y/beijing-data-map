import Link from "next/link";
import {
  ArrowRight,
  Package,
  ShieldCheck,
  Car,
  HeartPulse,
  Users,
} from "lucide-react";

export default function DataProductsPage() {
  const products = [
    {
      title: "车辆健康评估报告",
      tag: "交通产品",
      icon: Car,
      desc: "基于汽车电子健康档案数据，生成车辆健康评分、维修频次、异常维修记录等分析结果。",
      scenes: ["保险风控", "二手车评估", "汽车金融"],
      href: "/industry/traffic?from=product",
    },
    {
      title: "车辆维修风险识别",
      tag: "交通产品",
      icon: ShieldCheck,
      desc: "识别车辆重大维修、异常维修、频繁进厂等风险特征，辅助金融机构和保险机构进行风险判断。",
      scenes: ["车险定价", "贷前审核", "风险筛查"],
      href: "/industry/traffic?from=product",
    },
    {
      title: "婚姻状态核验服务",
      tag: "民政产品",
      icon: Users,
      desc: "面向金融、政务和公共服务场景，提供婚姻状态核验能力，支撑身份关系与风险审核。",
      scenes: ["金融风控", "政务审核", "资格核验"],
      href: "/industry/civil?from=product",
    },
    {
      title: "养老机构画像报告",
      tag: "民政产品",
      icon: Package,
      desc: "围绕养老机构基础信息、服务能力、运营状态等维度，形成机构画像与分析报告。",
      scenes: ["养老监管", "机构评估", "资源配置"],
      href: "/industry/civil?from=product",
    },
    {
      title: "医疗风险画像",
      tag: "医疗产品",
      icon: HeartPulse,
      desc: "基于医疗健康及医保相关数据，形成风险画像、就医行为分析和健康服务辅助判断。",
      scenes: ["医保风控", "健康管理", "医疗服务"],
      href: "/industry/medical?from=product",
    },
    {
      title: "医保结算分析报告",
      tag: "医疗产品",
      icon: ShieldCheck,
      desc: "围绕医保结算、费用结构、就医频次等指标，支撑医保风控和医疗资源分析。",
      scenes: ["医保监管", "费用分析", "风险预警"],
      href: "/industry/medical?from=product",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F8FA] pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-10">
        <div className="mb-10">
          <h1 className="text-[42px] font-black text-slate-900">
            数据产品
          </h1>

          <p className="mt-3 text-slate-500">
            面向金融、保险、医疗、民生治理等场景，形成标准化、可交付、可运营的数据产品体系。
          </p>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">产品总数</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              86
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">重点产品</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              24
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">服务场景</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              32
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">产业方向</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              8
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C41E3A]">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <div>
                      <div className="mb-1 text-xs font-bold text-[#C41E3A]">
                        {item.tag}
                      </div>

                      <h2 className="font-black text-slate-900">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <p className="mb-5 min-h-[72px] text-sm leading-6 text-slate-500">
                  {item.desc}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {item.scenes.map((scene) => (
                    <span
                      key={scene}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600"
                    >
                      {scene}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 font-bold text-[#C41E3A]"
                >
                  查看产品详情
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}