import Link from "next/link";
import {
  ArrowRight,
  Package,
  ShieldCheck,
  Car,
  HeartPulse,
  Users,
  Building2,
  Leaf,
  Brain,
} from "lucide-react";

export default function DataProductsPage() {
  const products = [
    {
      title: "车维全景动察系列产品",
      category: "交通运输产品",
      type: "查询类 / 核验类",
      icon: Car,
      desc: "基于汽车维修电子健康档案，提供维修次数、结算时间、维修里程、故障情况、配件情况、项目工时、维修单位、营运属性识别等能力。",
      scenes: ["保险风控", "二手车评估", "汽车金融", "车辆核验"],
      href: "/data-catalog/transport",
    },
    {
      title: "车辆基础健康评分",
      category: "交通运输产品",
      type: "评分类",
      icon: ShieldCheck,
      desc: "围绕维修记录、故障记录、配件更换、维修里程等指标，形成综合健康评分、评分维度、风险等级和扣分说明。",
      scenes: ["二手车交易", "车辆残值评估", "保险定价", "金融授信"],
      href: "/data-catalog/transport",
    },
    {
      title: "车辆维修风险预测评分模型",
      category: "交通运输产品",
      type: "预测类 / 模型类",
      icon: Car,
      desc: "基于车辆历史维修记录、车型、车龄、里程、故障和配件更换情况，预测未来维修风险和重点故障部位。",
      scenes: ["汽车金融", "保险续保", "车辆管理", "风险预警"],
      href: "/data-catalog/transport",
    },
    {
      title: "维修行为异常识别",
      category: "交通运输产品",
      type: "模型类",
      icon: ShieldCheck,
      desc: "识别异常维修、频繁维修、重大维修、费用异常等风险特征，辅助保险理赔和金融机构风险判断。",
      scenes: ["保险反欺诈", "理赔风控", "贷前审核", "风险筛查"],
      href: "/data-catalog/transport",
    },
    {
      title: "企业授信调查报告服务",
      category: "金融服务产品",
      type: "报告类",
      icon: Building2,
      desc: "整合企业登记注册、税务申报、发票交易、创投、企业年报、高精尖资金申报等数据，形成企业授信调查报告。",
      scenes: ["银行授信审批", "贷前调查", "普惠金融", "企业风控"],
      href: "/data-catalog/finance",
    },
    {
      title: "企业信用画像服务",
      category: "金融服务产品",
      type: "画像类",
      icon: Building2,
      desc: "从主体资质、经营状态、纳税能力、交易关系、成长性和风险预警等维度形成企业信用画像。",
      scenes: ["企业授信", "供应链金融", "产业金融", "风险预警"],
      href: "/data-catalog/finance",
    },
    {
      title: "企业发票真实性核验服务",
      category: "金融服务产品",
      type: "核验类",
      icon: ShieldCheck,
      desc: "基于发票交易数据，对企业交易真实性、上下游交易关系、异常发票风险等进行辅助核验。",
      scenes: ["供应链金融", "授信风控", "贷前准入", "交易核验"],
      href: "/data-catalog/finance",
    },
    {
      title: "养老机构授信调查报告服务",
      category: "民政养老产品",
      type: "报告类",
      icon: Users,
      desc: "围绕养老机构基础信息、床位规模、运营能力、护理能力、补贴情况和经营收入情况，形成授信调查报告。",
      scenes: ["养老金融", "银行授信", "机构评估", "产业风控"],
      href: "/data-catalog/civil",
    },
    {
      title: "养老机构综合风险评级服务",
      category: "民政养老产品",
      type: "评分类",
      icon: Users,
      desc: "基于机构运营质量、政策合规、人员队伍、经营收入、补贴发放、检查结果等信息，形成综合风险评级。",
      scenes: ["养老监管", "金融风控", "机构筛查", "风险预警"],
      href: "/data-catalog/civil",
    },
    {
      title: "商业保险反欺诈与理赔核验服务",
      category: "医疗健康产品",
      type: "核验类 / 风控类",
      icon: HeartPulse,
      desc: "基于死亡医学证明、死亡登记、死亡原因、死亡时间、死亡地点等信息，支撑寿险理赔真实性核验和反欺诈识别。",
      scenes: ["寿险理赔", "保险反欺诈", "身故赔付核验", "风险预警"],
      href: "/authorized-resources",
    },
    {
      title: "医疗病历电子档案服务",
      category: "医疗健康产品",
      type: "查询类 / 档案类",
      icon: HeartPulse,
      desc: "整合电子病历、检验检查、体检记录、诊断明细、门诊处方、医保结算等信息，形成医疗病历电子档案服务。",
      scenes: ["健康管理", "商业保险直赔", "跨院辅助诊疗", "医疗服务"],
      href: "/authorized-resources",
    },
    {
      title: "医保基础画像服务",
      category: "医疗健康产品",
      type: "画像类",
      icon: HeartPulse,
      desc: "基于医保参保、医保费用、医保结算清单、诊疗服务、异地就医和生育服务等信息，形成医保基础画像。",
      scenes: ["健康保险产品设计", "医保服务监测", "保险定价", "健康管理"],
      href: "/authorized-resources",
    },
    {
      title: "自动驾驶脱敏视频数据集",
      category: "智能网联汽车产品",
      type: "数据集类",
      icon: Brain,
      desc: "基于自动驾驶车辆信息、路侧设备视频和点云信息，形成自动驾驶算法模型训练与优化所需的数据集。",
      scenes: ["自动驾驶训练", "道路感知", "车路协同", "算法优化"],
      href: "/industry/auto",
    },
    {
      title: "新能源车辆状态监测服务",
      category: "智能网联汽车产品",
      type: "监测类",
      icon: Car,
      desc: "基于新能源车辆信息、充电信息、故障信息和行驶信息，支撑车辆状态监测及风险预警。",
      scenes: ["新能源车辆监测", "充电状态查询", "故障预警", "车企服务"],
      href: "/industry/auto",
    },
    {
      title: "碳排放智能核算服务",
      category: "绿色低碳产品",
      type: "核算类 / 分析类",
      icon: Leaf,
      desc: "基于行业碳排放核算、区域碳减排分析、重点碳排放单位和碳交易试点信息，支撑双碳监测分析。",
      scenes: ["碳排放监测", "绿色金融", "双碳监管", "区域减排分析"],
      href: "/authorized-resources",
    },
    {
      title: "城市闲置资产高效配置监测分析",
      category: "城市治理产品",
      type: "分析类",
      icon: Building2,
      desc: "基于物业项目、商务楼宇、房屋租赁、企业经营场所、重点园区等数据，支撑空置物业盘活和城市更新。",
      scenes: ["城市更新", "楼宇经济", "资产盘活", "园区运营"],
      href: "/authorized-resources",
    },
  ];

  const categories = Array.from(new Set(products.map((item) => item.category)));
  const sceneCount = new Set(products.flatMap((item) => item.scenes)).size;
  const typeCount = new Set(products.map((item) => item.type)).size;

  return (
    <main className="min-h-screen bg-[#F7F8FA] pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-10">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A]">
            <Package className="h-4 w-4" />
            数据产品
          </div>

          <h1 className="text-[42px] font-black text-slate-900">
            数据产品总览
          </h1>

          <p className="mt-3 max-w-4xl text-slate-500">
            面向金融、保险、交通、医疗、民政、双碳、城市治理和产业赋能等场景，展示可发布、可交付、可运营的数据产品服务能力。
          </p>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">产品数量</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              {products.length}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">产品类别</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              {categories.length}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">服务场景</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              {sceneCount}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">产品类型</div>
            <div className="mt-2 text-4xl font-black text-[#C41E3A]">
              {typeCount}
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                        {item.category}
                      </div>

                      <h2 className="font-black text-slate-900">
                        {item.title}
                      </h2>

                      <div className="mt-1 text-xs text-slate-400">
                        {item.type}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mb-5 min-h-[96px] text-sm leading-6 text-slate-500">
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