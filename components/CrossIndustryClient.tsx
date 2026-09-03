"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, GitCompareArrows, Layers3, PlusCircle, Sparkles } from "lucide-react";

const scenarios = [
  {
    id: "enterprise-credit", name: "企业经营与授信风险", tag: "金融＋政务", goal: "综合判断企业主体真实性、经营稳定性、履约能力和潜在风险。",
    domains: ["市场主体", "经营财务", "信用司法", "参保就业"],
    resources: [
      ["市场主体监管数据", "企业主体、股权、年报及经营异常", "/authorized-resources/financial-services/market-entity"],
      ["税务征缴数据", "开票、纳税、资产负债和现金流", "/authorized-resources/financial-services/tax"],
      ["信用评价数据", "行政许可、信用评价及失信情况", "/authorized-resources/financial-services/credit-evaluation"],
      ["司法数据", "诉讼、执行、限高及裁判信息", "/authorized-resources/financial-services/judicial"],
      ["参保就业数据", "企业参保规模及用工稳定性", "/authorized-resources/financial-services/employment-insurance"],
      ["招投标信息", "中标、合同和市场经营能力", "/authorized-resources/financial-services/bidding"],
    ],
    gaps: ["企业订单与应收账款数据", "供应链上下游关系数据"], products: ["企业经营稳定性指数", "企业授信辅助报告", "企业风险预警名单"],
  },
  {
    id: "new-energy-logistics", name: "新能源物流企业综合风险", tag: "交通＋金融＋低碳", goal: "联动企业经营、车辆运行和交通风险，形成物流企业综合评价。",
    domains: ["企业经营", "车辆营运", "维修故障", "交通执法", "绿色低碳"],
    resources: [
      ["市场主体监管数据", "核验物流企业主体和经营情况", "/authorized-resources/financial-services/market-entity"],
      ["道路车辆管理数据", "车辆、营运许可及新能源运行信息", "/authorized-resources/transportation/road-vehicle"],
      ["汽车维修电子健康档案", "维修、里程、故障和配件情况", "/data-catalog/transport"],
      ["驾驶员管理数据", "驾驶资质、信用及从业资格", "/authorized-resources/transportation/driver"],
      ["交通执法监管数据", "交通违法及行政处罚", "/authorized-resources/transportation/traffic-enforcement"],
      ["气候与碳排放数据", "低碳运营和环境风险分析", "/authorized-resources/green-low-carbon/climate-carbon"],
    ],
    gaps: ["动力电池健康数据", "实时物流订单与轨迹数据", "车辆保险理赔数据"], products: ["物流企业综合风险评分", "新能源车队健康报告", "绿色物流评价指数"],
  },
  {
    id: "medical-insurance", name: "医保商保协同风控", tag: "医疗＋金融", goal: "联动参保、诊疗、费用和机构信息，支撑保险核验与风险识别。",
    domains: ["参保结算", "诊疗检查", "医药耗材", "机构运营", "信用风险"],
    resources: [
      ["医保参保缴费与结算数据", "参保、就诊费用和医保结算", "/authorized-resources/medical-health/medical-insurance"],
      ["检验检查与医学影像数据", "诊疗过程、病案和检查结果", "/authorized-resources/medical-health/medical-examination"],
      ["医药耗材与许可备案数据", "药品、耗材和定点机构", "/authorized-resources/medical-health/medicine-material"],
      ["医疗机构运营与科研数据", "医疗机构主体和运营情况", "/authorized-resources/medical-health/medical-operation"],
      ["信用评价数据", "机构信用及失信风险", "/authorized-resources/financial-services/credit-evaluation"],
    ],
    gaps: ["商业保险保单数据", "商保理赔及调查结论数据"], products: ["医保商保费用核验", "医疗机构风险画像", "理赔风险辅助分析"],
  },
  {
    id: "eldercare", name: "养老机构综合评价", tag: "养老＋医疗＋金融", goal: "从运营、健康、信用和安全等维度评价养老机构服务能力。",
    domains: ["机构运营", "健康管理", "信用评价", "行政处罚", "养老配套"],
    resources: [
      ["民生服务管理数据", "养老机构、补贴、检查和星级评定", "/authorized-resources/government-services/livelihood"],
      ["健康管理与慢病监测数据", "老年人健康与常见病信息", "/authorized-resources/medical-health/health-management"],
      ["信用评价数据", "机构信用、许可和失信风险", "/authorized-resources/financial-services/credit-evaluation"],
      ["处罚数据", "行政、治安和违法处罚", "/authorized-resources/government-services/penalty"],
      ["不动产数据", "养老机构场地和配套信息", "/authorized-resources/financial-services/real-estate"],
    ],
    gaps: ["床位实时使用数据", "护理人员排班和服务质量数据", "用户满意度数据"], products: ["养老机构综合评分", "养老服务能力画像", "养老金融准入辅助报告"],
  },
  {
    id: "used-car", name: "二手车交易与金融服务", tag: "交通＋金融", goal: "围绕车辆真实性、使用强度、维修风险和交易融资形成综合判断。",
    domains: ["车辆基础", "维修健康", "交通风险", "抵押信息", "交易金融"],
    resources: [
      ["道路车辆管理数据", "车辆基础、抵押、营运和维保信息", "/authorized-resources/transportation/road-vehicle"],
      ["汽车维修电子健康档案", "维修次数、里程、故障和配件", "/data-catalog/transport"],
      ["交通执法监管数据", "车辆交通违法和处罚情况", "/authorized-resources/transportation/traffic-enforcement"],
      ["金融信息", "贷款和质押融资信息", "/authorized-resources/financial-services/financial-info"],
      ["信用评价数据", "交易主体信用风险", "/authorized-resources/financial-services/credit-evaluation"],
    ],
    gaps: ["车辆过户交易价格数据", "保险出险与理赔数据", "动力电池检测数据"], products: ["二手车车况辅助报告", "车辆融资风险评分", "车辆残值评估辅助指标"],
  },
  {
    id: "climate-insurance", name: "城市气候风险与保险服务", tag: "气象＋治理＋金融", goal: "融合天气、灾害、城市运行和保险需求，识别区域与主体气候风险。",
    domains: ["气象预警", "城市运行", "应急救援", "主体资产", "保险服务"],
    resources: [
      ["气候与碳排放数据", "实时天气、灾害预警和气候指标", "/authorized-resources/green-low-carbon/climate-carbon"],
      ["防汛监测数据", "积水积雪和城市运行风险", "/authorized-resources/urban-governance/flood-monitor"],
      ["应急管理数据", "应急机构、物资和救援队伍", "/authorized-resources/emergency-management/emergency-resource"],
      ["不动产数据", "房屋、项目和抵押资产信息", "/authorized-resources/financial-services/real-estate"],
      ["市场主体监管数据", "受影响企业和经营主体信息", "/authorized-resources/financial-services/market-entity"],
    ],
    gaps: ["历史灾损数据", "保险承保与赔付数据", "高精度空间暴露数据"], products: ["区域气候风险地图", "企业气候风险评分", "保险定价辅助因子"],
  },
];

export default function CrossIndustryClient() {
  const [active, setActive] = useState(0);
  const scenario = scenarios[active];
  return <>
    <section className="border-b border-slate-100 bg-white"><div className="mx-auto max-w-7xl px-6 py-10 lg:px-10"><div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-black text-[#C41E3A]"><Layers3 className="h-4 w-4" />跨行业数据联动</div><h1 className="mt-4 text-4xl font-black text-slate-900">一个业务问题，需要哪些数据共同解决？</h1><p className="mt-3 max-w-3xl text-slate-500">选择业务场景，查看需要判断什么、现有数据如何支撑、还缺什么，以及最终能够形成什么产品。</p></div></section>
    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
      <div className="mb-3 text-sm font-black text-slate-500">第一步：选择要解决的业务问题</div>
      <div className="flex snap-x gap-3 overflow-x-auto pb-3">{scenarios.map((item, index) => <button key={item.id} onClick={() => setActive(index)} className={`min-w-[230px] snap-start rounded-2xl border p-4 text-left ${active === index ? "border-[#C41E3A] bg-[#C41E3A] text-white shadow-md" : "border-slate-200 bg-white text-slate-700 hover:border-red-200"}`}><div className="text-xs font-bold opacity-70">{item.tag}</div><div className="mt-2 font-black">{item.name}</div></button>)}</div>

      <div className="mt-6 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-7 lg:p-9"><div className="text-sm font-bold text-[#C41E3A]">当前业务问题</div><h2 className="mt-2 text-3xl font-black text-slate-900">{scenario.name}</h2><p className="mt-3 text-base leading-7 text-slate-600">{scenario.goal}</p></div>

        <div className="border-b border-slate-100 bg-slate-50/70 p-7 lg:p-9">
          <div className="text-sm font-black text-slate-500">第二步：这个问题需要判断什么？</div>
          <div className="mt-4 flex flex-wrap gap-3">{scenario.domains.map((domain, index) => <div key={domain} className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-xs font-black text-[#C41E3A]">{index + 1}</span><span className="font-black text-slate-800">{domain}</span></div>)}</div>
        </div>

        <div className="p-7 lg:p-9">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><div className="text-sm font-black text-slate-500">第三步：现有数据如何支撑判断？</div><h3 className="mt-1 text-2xl font-black text-slate-900">数据资源及其作用</h3></div><Link href="/resource-compare" className="inline-flex items-center gap-2 text-sm font-bold text-[#C41E3A]"><GitCompareArrows className="h-4 w-4" />进入资源对比</Link></div>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
            <div className="hidden grid-cols-[64px_1fr_1.4fr_100px] bg-slate-100 px-5 py-3 text-xs font-black text-slate-500 md:grid"><div>序号</div><div>使用的数据资源</div><div>它解决什么问题</div><div>状态</div></div>
            {scenario.resources.map((resource, index) => <Link key={resource[0]} href={resource[2]} className="grid gap-3 border-t border-slate-100 p-5 first:border-t-0 hover:bg-red-50/40 md:grid-cols-[64px_1fr_1.4fr_100px] md:items-center"><div className="text-sm font-black text-[#C41E3A]">{String(index + 1).padStart(2, "0")}</div><div className="font-black text-slate-900">{resource[0]}</div><div className="text-sm leading-6 text-slate-500">{resource[1]}</div><div className="inline-flex w-fit items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700"><CheckCircle2 className="h-3.5 w-3.5" />已具备</div></Link>)}
          </div>
        </div>

        <div className="grid border-t border-slate-100 lg:grid-cols-2">
          <div className="bg-amber-50/70 p-7 lg:p-9"><div className="text-sm font-black text-slate-500">第四步：现有数据还缺什么？</div><div className="mt-2 flex items-center gap-2 text-xl font-black text-amber-900"><PlusCircle className="h-5 w-5" />待拓展资源</div><div className="mt-4 space-y-3">{scenario.gaps.map((gap) => <div key={gap} className="rounded-xl border border-amber-100 bg-white p-4 text-sm font-bold text-amber-900">{gap}</div>)}</div></div>
          <div className="bg-slate-950 p-7 text-white lg:p-9"><div className="text-sm font-black text-slate-400">第五步：数据联动后能形成什么？</div><div className="mt-2 flex items-center gap-2 text-xl font-black text-red-300"><Sparkles className="h-5 w-5" />可形成的数据产品</div><div className="mt-4 space-y-3">{scenario.products.map((product) => <div key={product} className="flex items-center gap-3 rounded-xl bg-white/10 p-4 text-sm font-bold"><CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" /><span>{product}</span></div>)}</div></div>
        </div>
      </div>
    </section>
  </>;
}
