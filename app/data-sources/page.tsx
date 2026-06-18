import Link from "next/link";
import {
  Building2,
  Database,
  ArrowRight,
  Landmark,
  ShieldCheck,
  Factory,
} from "lucide-react";

export default function DataSourcesPage() {
  const citySources = [
    {
      name: "市民政局",
      desc: "养老机构、社会组织、婚姻登记、社会救助等民政领域数据。",
      tags: ["养老金融", "机构评级", "社会治理"],
      href: "/data-catalog/civil",
    },
    {
      name: "市卫健委",
      desc: "医疗机构、电子病历、死亡医学证明、诊疗服务等医疗健康数据。",
      tags: ["医疗健康", "理赔核验", "辅助诊疗"],
      href: "/authorized-resources",
    },
    {
      name: "市医保局",
      desc: "医保参保、医保结算、医保费用、医保三目录、药品采购等数据。",
      tags: ["医保画像", "商业保险", "创新医药"],
      href: "/authorized-resources",
    },
    {
      name: "市交通委",
      desc: "营运车辆、网约车备案、冷链运输、网络货运、危险驾驶报警等数据。",
      tags: ["车辆投保", "货车保险", "交通风控"],
      href: "/authorized-resources",
    },
    {
      name: "市公安局",
      desc: "车辆抵押、车辆违章、车辆过户、卡口过车、交通管制等数据。",
      tags: ["车辆交易", "车路安全", "风险核验"],
      href: "/authorized-resources",
    },
    {
      name: "市税务局",
      desc: "税务申报、发票交易、企业所得税征收、单位征缴明细等数据。",
      tags: ["企业授信", "发票核验", "经营监测"],
      href: "/data-catalog/finance",
    },
    {
      name: "市教委",
      desc: "课程资源、课程表、班级课程、名师讲堂、学科资料等教育教学数据。",
      tags: ["教育大模型", "课程资源", "知识服务"],
      href: "/data-catalog/education",
    },
    {
      name: "市生态环境局",
      desc: "碳排放核算、碳减排分析、重点碳排放单位、碳交易试点等数据。",
      tags: ["双碳监测", "绿色金融", "碳核算"],
      href: "/authorized-resources",
    },
    {
      name: "市市场监管局",
      desc: "企业登记注册、企业年报、经营状态、主体资质等市场主体数据。",
      tags: ["企业画像", "信用风控", "产业监测"],
      href: "/data-catalog/finance",
    },
    {
      name: "市住建委",
      desc: "物业项目、物业小区检查、房屋租赁、城市更新相关数据。",
      tags: ["城市治理", "资产盘活", "楼宇经济"],
      href: "/authorized-resources",
    },
    {
      name: "市经信局",
      desc: "高精尖产业发展资金申报、专精特新企业、新能源车辆等数据。",
      tags: ["产业金融", "新能源", "企业成长性"],
      href: "/authorized-resources",
    },
    {
      name: "市气象局",
      desc: "实时气象信息及交通、低空经济、应急调度相关气象服务数据。",
      tags: ["低空经济", "交通安全", "应急调度"],
      href: "/industry/space",
    },
  ];

  const ministrySources = [
    {
      name: "交通运输部",
      desc: "汽车维修电子健康档案，覆盖维修基础信息、维修配件信息、维修工时信息等。",
      tags: ["3张核心表", "58个字段", "18个产品"],
      href: "/data-catalog/transport",
    },
    {
      name: "民政部",
      desc: "养老机构、社会组织、婚姻登记、社会救助等民政领域部委数据资源。",
      tags: ["养老服务", "社会组织", "民政治理"],
      href: "/data-catalog/civil",
    },
    {
      name: "国家卫健委",
      desc: "医疗健康、居民健康管理、诊疗服务、疾病防控等领域数据资源。",
      tags: ["居民健康", "诊疗服务", "疾控数据"],
      href: "/authorized-resources",
    },
    {
      name: "国家医保局",
      desc: "医保目录、医保结算、医保费用、药品招采和医保追溯等数据。",
      tags: ["医保三目录", "医保结算", "药品招采"],
      href: "/authorized-resources",
    },
    {
      name: "公安部",
      desc: "车辆管理、交通违法、车辆过户、车辆抵押等相关数据资源。",
      tags: ["车辆交易", "违法核验", "车辆风控"],
      href: "/authorized-resources",
    },
    {
      name: "教育部",
      desc: "基础教育课程、课标、考点、知识点及教育行业大模型基础资源。",
      tags: ["教育教学", "课标资源", "教育大模型"],
      href: "/data-catalog/education",
    },
    {
      name: "市场监管总局",
      desc: "市场主体登记、企业年报、经营异常、主体资质等企业基础数据。",
      tags: ["企业主体", "年报信息", "信用画像"],
      href: "/data-catalog/finance",
    },
  ];

  const industrySources = [
    {
      name: "公共数据授权运营资源",
      desc: "第一批覆盖8个领域、19个应用场景，支撑公共治理、公益事业和产业发展。",
      href: "/authorized-resources",
    },
    {
      name: "汽车维修电子健康档案",
      desc: "支撑保险风控、二手车交易、汽车金融、车辆健康评估等重点场景。",
      href: "/data-catalog/transport",
    },
    {
      name: "企业授信风控数据",
      desc: "整合税务、发票、创投、登记注册、年报等数据，支撑金融机构授信风控。",
      href: "/data-catalog/finance",
    },
    {
      name: "数据赋能重点产业",
      desc: "围绕集成电路、人工智能、医药健康、智能网联汽车等八大产业进行数据赋能。",
      href: "/industry",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F8FA] pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-10">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
            <Database className="h-4 w-4" />
            数据来源
          </div>

          <h1 className="text-[42px] font-black text-slate-900">
            数据资源来源体系
          </h1>

          <p className="mt-3 max-w-4xl text-slate-500">
            展示北京市公共数据资源、国家部委数据资源及重点行业数据资源的来源体系，支撑数据目录、产品开发和产业赋能。
          </p>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">市级部门来源</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              {citySources.length}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">国家部委来源</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              {ministrySources.length}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">重点行业资源</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              {industrySources.length}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">授权运营场景</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              19
            </div>
          </div>
        </div>

        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <Building2 className="h-6 w-6 text-[#C41E3A]" />
            <h2 className="text-2xl font-black text-slate-900">
              市级部门数据来源
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {citySources.map((source) => (
              <Link
                key={source.name}
                href={source.href}
                className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50">
                  <Building2 className="h-5 w-5 text-[#C41E3A]" />
                </div>

                <h3 className="text-xl font-black text-slate-900">
                  {source.name}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                  {source.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {source.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 inline-flex items-center gap-2 font-bold text-[#C41E3A]">
                  查看相关资源
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <Landmark className="h-6 w-6 text-[#C41E3A]" />
            <h2 className="text-2xl font-black text-slate-900">
              国家部委数据来源
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {ministrySources.map((source) => (
              <Link
                key={source.name}
                href={source.href}
                className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50">
                  <Landmark className="h-5 w-5 text-[#C41E3A]" />
                </div>

                <h3 className="text-xl font-black text-slate-900">
                  {source.name}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                  {source.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {source.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 inline-flex items-center gap-2 font-bold text-[#C41E3A]">
                  查看相关资源
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6 flex items-center gap-3">
            <Factory className="h-6 w-6 text-[#C41E3A]" />
            <h2 className="text-2xl font-black text-slate-900">
              重点行业数据资源
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {industrySources.map((source) => (
              <Link
                key={source.name}
                href={source.href}
                className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
                  <ShieldCheck className="h-4 w-4" />
                  重点资源
                </div>

                <h3 className="text-xl font-black text-slate-900">
                  {source.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {source.desc}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 font-bold text-[#C41E3A]">
                  查看详情
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}