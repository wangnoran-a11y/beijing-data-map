import { ArrowRight, Factory, Landmark, Leaf, Plane, Shield, Wheat } from "lucide-react";

export default function IndustryExtendPage() {
  const industries = [
    {
      title: "金融服务",
      icon: Landmark,
      desc: "围绕企业征信、风险评估、产业金融、普惠金融等方向，形成金融行业数据服务能力。",
      scenes: ["企业信用评估", "贷前审核", "风险预警", "产业金融"],
    },
    {
      title: "农业农村",
      icon: Wheat,
      desc: "围绕农业监测、乡村治理、农产品流通、涉农金融等方向，服务乡村振兴和农业产业发展。",
      scenes: ["农业监测", "乡村治理", "农产品流通", "涉农金融"],
    },
    {
      title: "低空经济",
      icon: Plane,
      desc: "围绕飞行监管、空域服务、物流运输、低空产业服务等方向，支撑低空经济数据应用。",
      scenes: ["飞行监管", "空域服务", "低空物流", "产业服务"],
    },
    {
      title: "绿色低碳",
      icon: Leaf,
      desc: "围绕碳排放监测、ESG评价、绿色金融及产业分析方向，服务绿色低碳转型。",
      scenes: ["碳排监测", "ESG评价", "绿色金融", "产业分析"],
    },
    {
      title: "先进制造",
      icon: Factory,
      desc: "围绕产业链画像、企业运行监测、供应链风险识别等方向，提升制造业数据服务能力。",
      scenes: ["产业链画像", "企业监测", "供应链风控", "智能制造"],
    },
    {
      title: "应急安全",
      icon: Shield,
      desc: "围绕城市安全、应急管理、风险预警、重点场所监管等方向，支撑城市安全治理。",
      scenes: ["风险预警", "应急管理", "城市安全", "场所监管"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F8FA] pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-10">
        <div className="mb-10">
          <h1 className="text-[42px] font-black text-slate-900">
            行业拓展
          </h1>
          <p className="mt-3 text-slate-500">
            除交通、医疗、教育、民政等重点行业外，持续拓展金融、农业农村、低空经济、绿色低碳等行业数据资源与产品能力。
          </p>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-4">
          {[
            ["拓展行业", "12+"],
            ["应用场景", "40+"],
            ["数据产品", "60+"],
            ["服务方向", "20+"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="text-sm text-slate-500">{label}</div>
              <div className="mt-2 text-4xl font-black text-[#C41E3A]">
                {value}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {industries.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C41E3A]">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h2 className="text-xl font-black text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                  {item.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.scenes.map((scene) => (
                    <span
                      key={scene}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600"
                    >
                      {scene}
                    </span>
                  ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-2 font-bold text-[#C41E3A]">
                  查看行业资源
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}