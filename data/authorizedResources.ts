export type AuthorizedResourceItem = {
  id: string;
  name: string;
  description: string;
  examples: string[];
};

export type AuthorizedResourceDomain = {
  id: string;
  name: string;
  shortName: string;
  resourceCount: number;
  description: string;
  resources: AuthorizedResourceItem[];
};

export const authorizedResourceDomains: AuthorizedResourceDomain[] = [
  {
    id: "medical-health",
    name: "医疗健康",
    shortName: "医疗",
    resourceCount: 7,
    description:
      "覆盖医保结算、医疗诊疗、公共卫生、健康管理及医疗机构运营等公共数据资源。",
    resources: [
      {
        id: "medical-insurance",
        name: "医保参保缴费与结算数据",
        description:
          "包括医保参保、缴费、就诊、费用结算、医保目录及定点医药机构等数据。",
        examples: [
          "医保结算清单",
          "医保费用就诊明细",
          "医保费用诊断结算明细",
          "医保费用项目",
          "医保参保人员及单位基本信息",
          "持卡人信息",
          "参保缴费信息",
          "异地申请信息",
          "医保目录信息",
          "医疗机构收费票据",
          "定点医药机构基础信息",
        ],
      },
      {
        id: "medical-examination",
        name: "检验检查与医学影像数据",
        description:
          "包括检验检查、医学影像、电子病历、诊断报告、慢病随访及院前急救等数据。",
        examples: [
          "检查检验结果及病理信息",
          "医学影像数据",
          "医疗机构就诊信息",
          "医疗机构诊断报告",
          "电子病历",
          "院前急救病历",
          "住院记录",
          "高血压随访记录",
          "糖尿病随访记录",
          "中医医疗机构病案",
          "重大慢性疾病防治数据",
          "就诊处方",
          "就诊结算费用",
        ],
      },
      {
        id: "medicine-material",
        name: "医药耗材与许可备案数据",
        description:
          "包括药品统计，以及药品、医疗器械和化妆品不良反应等数据。",
        examples: [
          "医疗机构药品统计数据",
          "医疗机构药品不良反应数据",
          "医疗器械不良反应数据",
          "化妆品不良反应数据",
        ],
      },
      {
        id: "public-health",
        name: "公共卫生监测与人群筛查数据",
        description:
          "包括传染病、呼吸道疾病、肠道传染病及重点人群筛查数据。",
        examples: [
          "传染病监控数据",
          "呼吸道疾病监测数据",
          "肠道传染病病例",
          "两癌筛查报告",
        ],
      },
      {
        id: "health-management",
        name: "健康管理与慢病监测数据",
        description: "包括老年人健康分析、常见病及慢病健康管理等数据。",
        examples: ["老年人健康分析", "老年人常见病"],
      },
      {
        id: "medical-operation",
        name: "医疗机构运营与科研数据",
        description:
          "包括医疗机构运营、实验室管理及医疗科研成果转化等数据。",
        examples: [
          "医疗机构基本信息",
          "医疗机构运营数据",
          "医疗机构实验室管理数据",
          "医疗机构科研成果转化数据",
        ],
      },
      {
        id: "population-service",
        name: "公共人口服务",
        description: "包括自然人失踪、死亡及死因等公共人口服务数据。",
        examples: ["自然人失踪信息", "自然人死因信息", "自然人死亡信息"],
      },
    ],
  },
  {
    id: "education",
    name: "教育教学",
    shortName: "教育",
    resourceCount: 5,
    description:
      "覆盖学生、招生考试、教师管理、教学资源及人才职业技能分析等数据。",
    resources: [
      {
        id: "student-basic",
        name: "学校学生基础信息",
        description: "包括学生基础、学籍学历学位、家庭及就业等信息。",
        examples: [
          "各类学生基础信息",
          "学生学籍学历学位信息",
          "学位英语信息",
          "学生家庭信息",
          "学生证书信息",
          "毕业生就业信息",
        ],
      },
      {
        id: "admission-exam",
        name: "招生与考试信息",
        description: "包括招生考试报名、考试结果等信息。",
        examples: ["招生考试报名信息", "考试结果信息"],
      },
      {
        id: "teacher-management",
        name: "教师管理数据",
        description: "包括教师资格、职称、培训、荣誉及优秀成果等数据。",
        examples: [
          "教师师德荣誉称号",
          "教师优秀成果",
          "教师资格证书",
          "教师培训评选",
          "教师职称评审",
        ],
      },
      {
        id: "teaching-resource",
        name: "中小学全学科教学资源",
        description: "包括全学科教材、教学资源及知识点讲解信息。",
        examples: ["全学科教学教材", "全学科知识点讲解"],
      },
      {
        id: "talent-skill",
        name: "人才职业技能分析",
        description:
          "包括企业人员、教育学籍、综合荣誉及重点人群管理等数据。",
        examples: [
          "行政处罚及公示信息",
          "企业人员信息",
          "教育学籍与校园荣誉",
          "综合荣誉表彰",
          "积分落户专项获奖",
          "重点人群专项管理",
        ],
      },
    ],
  },
  {
    id: "financial-services",
    name: "金融服务",
    shortName: "金融",
    resourceCount: 6,
    description:
      "覆盖不动产、公积金、参保就业、信用评价、市场主体监管及税务征缴等数据。",
    resources: [
      {
        id: "real-estate",
        name: "不动产数据",
        description: "包括不动产登记、交易、抵押及房屋许可备案等数据。",
        examples: [
          "不动产信息",
          "不动产交易信息",
          "抵押人及抵押品信息",
          "房屋许可备案信息",
          "购房资格申请信息",
          "建设工程类企业资质及人员证书",
          "工程指标信息",
          "居住项目方案养老配套信息",
        ],
      },
      {
        id: "housing-fund",
        name: "住房公积金缴存数据",
        description: "包括公积金缴存、提取、贷款、抵押及违规不良信息。",
        examples: [
          "公积金缴存及提取信息",
          "公积金贷款抵押信息",
          "公积金使用信息",
          "公积金违规不良信息",
        ],
      },
      {
        id: "employment-insurance",
        name: "参保就业数据",
        description: "包括社会保险、就业创业、求职、退休及人员资格等数据。",
        examples: [
          "社保参保单位及自然人基本信息",
          "社保征缴信息",
          "毕业生就业创业信息",
          "就失业人员信息",
          "求职档案信息",
          "资格考试考生信息",
          "自然人荣誉信息",
          "自然人黑名单信息",
          "退休人员信息",
        ],
      },
      {
        id: "credit-evaluation",
        name: "信用评价数据",
        description: "包括企业和自然人信用、行政许可及失信信息。",
        examples: [
          "行业企业信用信息",
          "行政许可信息",
          "失信主体信息",
          "信用评价承诺信息",
          "严重违法失信企业档案",
          "自然人信用信息",
          "失信被执行人信息",
        ],
      },
      {
        id: "market-supervision",
        name: "市场主体监管数据",
        description:
          "包括企业登记、年报、经营异常、资质、股权、投资及行业监管数据。",
        examples: [
          "企业年报信息",
          "商务楼宇及入驻信息",
          "企业资质与产业申报信息",
          "企业登记变更注销信息",
          "企业经营异常及严重违法失信信息",
          "企业基础信息",
          "企业股权质押信息",
          "企业金融指标信息",
          "投资人相关信息",
          "企业主要人员及职务信息",
          "企业许可备案信息",
          "企业荣誉信息",
          "行业统计指标信息",
          "投诉举报信息",
        ],
      },
      {
        id: "taxation",
        name: "税务征缴数据",
        description: "包括增值税开票、税收征收、欠税及涉税违法等数据。",
        examples: [
          "增值税开票信息",
          "税务处罚及重大涉税违法信息",
          "全税种税收征收信息",
          "分行业税收收入信息",
          "自然人及法人欠税信息",
        ],
      },
    ],
  },
  {
    id: "transportation",
    name: "交通运输",
    shortName: "交通",
    resourceCount: 3,
    description: "覆盖道路车辆、驾驶员及交通执法监管等数据。",
    resources: [
      {
        id: "road-vehicle",
        name: "道路车辆管理数据",
        description:
          "包括机动车、新能源车辆、网约车、车辆维保及车辆抵押等数据。",
        examples: [
          "机动车行驶证信息",
          "机动车基础信息",
          "新能源车辆运行监测信息",
          "网约车相关信息",
          "车辆维保信息",
          "车辆抵押信息",
        ],
      },
      {
        id: "driver-management",
        name: "驾驶员管理数据",
        description: "包括驾驶员信用、驾驶员抄告及运单等信息。",
        examples: ["驾驶员信用信息", "驾驶员抄告信息", "运单信息"],
      },
      {
        id: "traffic-enforcement",
        name: "交通执法监管数据",
        description: "包括交通执法文书、违法处罚和报警等数据。",
        examples: ["交通执法文书信息", "交通违法处罚信息", "短视频报警信息"],
      },
    ],
  },
  {
    id: "green-low-carbon",
    name: "绿色低碳",
    shortName: "低碳",
    resourceCount: 2,
    description: "覆盖气象、碳排放、供水及公共资源消耗数据。",
    resources: [
      {
        id: "climate-carbon",
        name: "气候与碳排放数据",
        description: "包括气象日值、实时天气及温室气体排放清单。",
        examples: ["气象站日值数据", "实时天气信息", "本市温室气体排放清单"],
      },
      {
        id: "water-power",
        name: "供电供水信息",
        description: "包括企业用水缴费等公共资源使用信息。",
        examples: ["企业用水缴费信息"],
      },
    ],
  },
  {
    id: "culture-tourism",
    name: "文化旅游",
    shortName: "文旅",
    resourceCount: 2,
    description: "覆盖住宿行业、文化活动及文旅资源开发管理数据。",
    resources: [
      {
        id: "accommodation",
        name: "住宿行业管理数据",
        description: "包括住宿登记及住宿行业管理相关信息。",
        examples: ["住宿信息"],
      },
      {
        id: "culture-resource",
        name: "文旅资源普查与开发管理",
        description: "包括文化活动、演出及相关文旅资源信息。",
        examples: ["文化活动及演出信息"],
      },
    ],
  },
  {
    id: "government-services",
    name: "政务服务",
    shortName: "政务",
    resourceCount: 3,
    description: "覆盖民生服务、执业管理和行政处罚等数据。",
    resources: [
      {
        id: "public-service-management",
        name: "民生服务管理数据",
        description:
          "包括社会救助、养老服务、残疾人、退役军人及农产品监测等数据。",
        examples: [
          "老年人福利补贴发放信息",
          "低收入低保特困信息",
          "社会救助信息",
          "临时救助信息",
          "残疾人信息",
          "退役军人及优抚人员信息",
          "公共服务机构信息",
          "养老机构信息",
          "养老机构运营数据",
          "农产品行情价格信息",
          "农产品市场监测指标信息",
        ],
      },
      {
        id: "professional-management",
        name: "执业管理数据",
        description:
          "包括身份户籍、婚姻、出生证明、职业资格、出入境及司法执业监管等数据。",
        examples: [
          "自然人身份户籍信息",
          "流动人口登记信息",
          "婚姻登记信息",
          "出生证明信息",
          "职业执业从业资格证照",
          "护照信息",
          "人像资源信息",
          "个人出入境业务信息",
          "居住证信息",
          "司法涉诉与执业监管信息",
        ],
      },
      {
        id: "punishment",
        name: "处罚数据",
        description: "包括行政处罚、治安处罚及其他违法处罚信息。",
        examples: ["行政处罚信息", "治安处罚信息", "违法处罚信息"],
      },
    ],
  },
  {
    id: "urban-governance",
    name: "城市治理",
    shortName: "城市",
    resourceCount: 1,
    description: "覆盖城市防汛及积水监测等城市运行数据。",
    resources: [
      {
        id: "flood-control",
        name: "防汛监测数据",
        description: "包括城市道路、区域积水等防汛监测信息。",
        examples: ["积水监测信息"],
      },
    ],
  },
];

export const authorizedResourceSummary = {
  domainCount: authorizedResourceDomains.length,
  resourceCount: authorizedResourceDomains.reduce(
    (total, domain) => total + domain.resources.length,
    0
  ),
};

export function getAuthorizedDomainById(id: string) {
  return authorizedResourceDomains.find((item) => item.id === id);
}

export function getAuthorizedResourceById(
  domainId: string,
  resourceId: string
) {
  const domain = getAuthorizedDomainById(domainId);

  if (!domain) {
    return undefined;
  }

  const resource = domain.resources.find((item) => item.id === resourceId);

  if (!resource) {
    return undefined;
  }

  return {
    domain,
    resource,
  };
}