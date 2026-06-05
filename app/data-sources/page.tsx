import { Building2, Database, ArrowRight } from "lucide-react";

export default function DataSourcesPage() {
  const sources = [
    {
      title: "北京市公共数据资源",
      desc: "覆盖金融服务、医疗健康、交通运输、教育教学、城市治理、应急管理、科技创新、绿色低碳等方向。",
      items: ["金融服务", "医疗健康", "交通运输", "教育教学", "城市治理", "应急管理", "科技创新", "绿色低碳"],
    },
    {
      title: "国家部委数据资源",
      desc: "汇聚交通运输部、民政部、国家卫健委、公安部、农业农村部、教育部、市场监管总局等国家部委权威数据资源。",
      items: ["交通运输部", "民政部", "国家卫健委", "公安部", "农业农村部", "教育部", "市场监管总局"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F8FA] pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-10">
        <div className="mb-10">
          <h1 className="text-[42px] font-black text-slate-900">数据来源</h1>
          <p className="mt-3 text-slate-500">
            展示北京市公共数据资源与国家部委数据资源的来源体系，构建统一的数据发现入口。
          </p>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">来源数量</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">38+</div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">北京市资源方向</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">8</div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">国家部委来源</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">7+</div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {sources.map((source) => (
            <div key={source.title} className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C41E3A]">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900">{source.title}</h2>
                  <p className="mt-1 text-sm text-slate-500">{source.desc}</p>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {source.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700"
                  >
                    <span>{item}</span>
                    <ArrowRight className="h-4 w-4 text-[#C41E3A]" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <Building2 className="h-6 w-6 text-[#C41E3A]" />
            <h2 className="text-2xl font-black text-slate-900">来源接入说明</h2>
          </div>
          <p className="text-sm leading-7 text-slate-500">
            后续可按照数据来源、行业领域、授权状态、数据规模、更新频率等维度继续完善展示。
          </p>
        </div>
      </div>
    </main>
  );
}