import Link from "next/link";
import { Database, ArrowRight } from "lucide-react";

export default function DataCatalogPage() {
  const catalogs = [
    {
      title: "交通运输专区",
      desc: "交通运输部汽车电子健康档案数据资源",
      href: "/industry/traffic",
      items: [
        "车辆基础信息",
        "维修记录",
        "保养记录",
        "维修企业信息",
        "维修配件信息",
        "车辆故障记录",
      ],
    },
    {
      title: "民政专区",
      desc: "民政领域重点数据资源目录",
      href: "/industry/civil",
      items: [
        "婚姻登记",
        "社会组织",
        "养老机构",
        "社会救助",
        "殡葬服务",
        "低保对象",
      ],
    },
    {
      title: "医疗健康专区",
      desc: "医疗健康领域数据资源目录",
      href: "/industry/medical",
      items: [
        "电子病历",
        "医保结算",
        "健康档案",
        "门诊记录",
        "住院记录",
        "医疗机构信息",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F8FA] pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-10">
        <div className="mb-10">
          <h1 className="text-[42px] font-black text-slate-900">
            数据目录
          </h1>

          <p className="mt-3 text-slate-500">
            汇聚北京市及国家部委重点数据资源目录，展示核心数据表、字段及资源能力。
          </p>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">目录总数</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              3,286
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">数据表</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              1,248
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">字段总量</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              56,832
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {catalogs.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C41E3A]">
                  <Database className="h-6 w-6 text-white" />
                </div>

                <div>
                  <h2 className="font-black text-slate-900">
                    {item.title}
                  </h2>

                  <p className="text-xs text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {item.items.map((field) => (
                  <div
                    key={field}
                    className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {field}
                  </div>
                ))}
              </div>

              <Link
                href={item.href}
                className="mt-6 inline-flex items-center gap-2 font-bold text-[#C41E3A]"
              >
                查看专区
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}