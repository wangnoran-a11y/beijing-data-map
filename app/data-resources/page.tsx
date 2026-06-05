import Link from "next/link";
import { ArrowRight, Server } from "lucide-react";

export default function DataResourcesPage() {
  const resources = [
    {
      title: "交通运输专区",
      count: "4.8亿+",
      desc: "覆盖全国汽车电子健康档案数据资源",
      href: "/industry/traffic?from=resource",
      fields: [
        "VIN车辆识别码",
        "维修记录",
        "保养记录",
        "故障记录",
        "维修企业信息",
        "维修配件信息",
      ],
    },
    {
      title: "民政专区",
      count: "1.2亿+",
      desc: "婚姻、养老、社会组织等重点数据资源",
      href: "/industry/civil?from=resource",
      fields: [
        "婚姻登记信息",
        "养老机构信息",
        "社会组织信息",
        "社会救助信息",
        "低保对象信息",
        "殡葬服务信息",
      ],
    },
    {
      title: "医疗健康专区",
      count: "10亿+",
      desc: "医疗健康及医保数据资源",
      href: "/industry/medical?from=resource",
      fields: [
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
    数据资源
  </h1>

          <p className="mt-3 text-slate-500">
            汇聚北京市及国家部委重点数据资源，构建覆盖交通、医疗、民政等领域的数据资源体系。
          </p>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">资源总量</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              126PB
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">数据表</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              1,248
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">字段总数</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              56,832
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">数据来源</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              38
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {resources.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C41E3A]">
                  <Server className="h-6 w-6 text-white" />
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

              <div className="mb-5 rounded-2xl bg-[#FAFAFA] p-4">
                <div className="text-xs text-slate-500">
                  数据规模
                </div>

                <div className="mt-1 text-3xl font-black text-[#C41E3A]">
                  {item.count}
                </div>
              </div>

              <div className="space-y-2">
                {item.fields.map((field) => (
                  <div
                    key={field}
                    className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  >
                    {field}
                  </div>
                ))}
              </div>

              <Link
                href={item.href}
                className="mt-6 inline-flex items-center gap-2 font-bold text-[#C41E3A]"
              >
                查看资源详情
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}