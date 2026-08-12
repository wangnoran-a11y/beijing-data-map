export type IndustryResource = {
  name: string;
  source: string;
  sourceType: "北京市公共数据" | "国家部委数据" | "境外企业数据";
  href: string;
  note?: string;
};

export type IndustryProduct = {
  name: string;
  href: string;
  note?: string;
};

export type IndustryItem = {
  id: string;
  name: string;
  policyName: string;
  desc: string;
  directions: string[];
  resources: IndustryResource[];
  products: IndustryProduct[];
  scenarios: string[];
  maturity: "高" | "较高" | "中" | "基础";
};

export const industries: IndustryItem[] = [
  {
    id: "information",
    name: "新一代信息技术",
    policyName: "深化新一代信息技术和制造业服务业融合",
    desc:
      "围绕人工智能、大数据、工业互联网、云计算、物联网等方向，关联企业、人才、知识产权、项目及境外企业数据，支撑产业数字化和智能化应用。",
    directions: ["人工智能", "工业互联网", "大数据", "云计算", "物联网", "数字化服务"],
    resources: [
      {
        name: "市场主体监管数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/financial-services/market-supervision",
      },
      {
        name: "信用评价数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/financial-services/credit-evaluation",
      },
      {
        name: "知识产权",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/culture-tourism/intellectual-property",
      },
      {
        name: "人才职业技能",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/education/talent-skill",
      },
      {
        name: "项目申报信息",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/government-services/project-application",
      },
      {
        name: "招投标信息",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/financial-services/bidding",
      },
      {
        name: "教育部教育教学数据",
        source: "教育部",
        sourceType: "国家部委数据",
        href: "/data-catalog/education",
        note: "已接入",
      },
      {
        name: "境外企业数据资源",
        source: "欧洲企业信息与信用数据",
        sourceType: "境外企业数据",
        href: "/overseas-resources",
        note: "储备待接入",
      },
    ],
    products: [
      {
        name: "企业经营发展监测报告",
        href: "/data-products",
      },
      {
        name: "企业授信风控画像报告",
        href: "/data-products",
      },
      {
        name: "教师队伍结构分析报告",
        href: "/data-products",
      },
    ],
    scenarios: [
      "企业数字化画像",
      "产业知识图谱",
      "人才结构分析",
      "产业链识别",
      "AI知识库与智能分析",
    ],
    maturity: "中",
  },
  {
    id: "health",
    name: "医药健康",
    policyName: "推动医药制造与健康服务有机融合",
    desc:
      "围绕生物医药、医疗服务、医保商保、健康管理和养老康养，重点关联北京市医疗健康公共数据及已接入民政养老数据。",
    directions: ["生物医药", "医疗服务", "医保商保", "健康管理", "医疗器械", "养老康养"],
    resources: [
      {
        name: "医保参保缴费与结算数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/medical-health/medical-insurance",
      },
      {
        name: "检验检查与医学影像数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/medical-health/medical-examination",
      },
      {
        name: "医药耗材与许可备案数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/medical-health/medicine-material",
      },
      {
        name: "医疗执业与注册登记数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/medical-health/medical-practice-registration",
      },
      {
        name: "公共卫生监测与人群筛查数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/medical-health/public-health",
      },
      {
        name: "健康管理与慢病监测数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/medical-health/health-management",
      },
      {
        name: "医疗机构运营与科研数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/medical-health/medical-operation",
      },
      {
        name: "公共人口服务",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/medical-health/population-service",
      },
      {
        name: "民政部养老机构信息",
        source: "民政部",
        sourceType: "国家部委数据",
        href: "/data-catalog/civil",
        note: "已接入",
      },
    ],
    products: [
      {
        name: "养老机构基础画像报告",
        href: "/data-products",
      },
      {
        name: "养老机构运营风险识别报告",
        href: "/data-products",
      },
      {
        name: "养老机构服务能力评分",
        href: "/data-products",
      },
    ],
    scenarios: [
      "医药研发与真实世界研究",
      "医保基金监管与反欺诈",
      "商业保险核保理赔",
      "医疗机构运营",
      "健康管理",
      "养老机构评估",
    ],
    maturity: "高",
  },
  {
    id: "auto",
    name: "智能网联汽车",
    policyName: "打造智能网联汽车制造和服务全链条体系",
    desc:
      "围绕车辆、驾驶人、维修、交通运行及身份核验等数据，支撑车险、汽车金融、二手车、汽车后市场和智能驾驶相关应用。",
    directions: ["智能驾驶", "车联网", "汽车后市场", "车险", "汽车金融", "二手车"],
    resources: [
      {
        name: "道路车辆管理数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/transportation/road-vehicle",
      },
      {
        name: "驾驶员管理数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/transportation/driver-management",
      },
      {
        name: "交通执法监管数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/transportation/traffic-enforcement",
      },
      {
        name: "静态停车管理数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/transportation/parking-management",
      },
      {
        name: "汽车维修电子健康档案",
        source: "交通运输部",
        sourceType: "国家部委数据",
        href: "/data-catalog/transport",
        note: "已接入",
      },
      {
        name: "网证数据核验",
        source: "公安部",
        sourceType: "国家部委数据",
        href: "/data-catalog#mps-catalog",
        note: "已接入",
      },
      {
        name: "第三方身份核验",
        source: "公安部",
        sourceType: "国家部委数据",
        href: "/data-catalog#mps-catalog",
        note: "已接入",
      },
    ],
    products: [
      { name: "车维全景动察-01（维修总次数）", href: "/data-products" },
      { name: "车维全景动察-02（结算时间）", href: "/data-products" },
      { name: "车维全景动察-03（维修里程）", href: "/data-products" },
      { name: "车维全景动察-04（维修故障情况）", href: "/data-products" },
      { name: "车维全景动察-05（维修配件情况）", href: "/data-products" },
      { name: "车维全景动察-06（维修项目工时）", href: "/data-products" },
      { name: "车维全景动察-07（维修单位）", href: "/data-products" },
      { name: "车维全景动察-08（营运车）", href: "/data-products" },
      { name: "车辆健康评分", href: "/data-products" },
    ],
    scenarios: [
      "车险风控",
      "汽车金融",
      "二手车评估",
      "汽车后市场服务",
      "驾驶人画像",
      "智能驾驶数据应用",
    ],
    maturity: "高",
  },
  {
    id: "ic",
    name: "集成电路",
    policyName: "促进集成电路制造与研发设计服务一体化发展",
    desc:
      "当前以企业、知识产权、项目、招投标、进出口和境外企业等现有数据作为关联支撑，不虚构晶圆制造、封装测试等尚未接入的专项数据。",
    directions: ["研发设计", "制造", "封装测试", "产业链", "供应链", "产业招商"],
    resources: [
      {
        name: "市场主体监管数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/financial-services/market-supervision",
      },
      {
        name: "信用评价数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/financial-services/credit-evaluation",
      },
      {
        name: "知识产权",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/culture-tourism/intellectual-property",
      },
      {
        name: "项目申报信息",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/government-services/project-application",
      },
      {
        name: "招投标信息",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/financial-services/bidding",
      },
      {
        name: "海关进出口",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/transportation/customs-import-export",
      },
      {
        name: "境外企业数据资源",
        source: "欧洲企业信息与信用数据",
        sourceType: "境外企业数据",
        href: "/overseas-resources",
        note: "储备待接入",
      },
    ],
    products: [
      { name: "企业经营发展监测报告", href: "/data-products" },
      { name: "企业授信风控画像报告", href: "/data-products" },
      { name: "四流一致性核验服务", href: "/data-products" },
    ],
    scenarios: [
      "产业链企业识别",
      "供应链风险分析",
      "知识产权分析",
      "境外供应商尽调",
      "产业招商",
    ],
    maturity: "中",
  },
  {
    id: "equipment",
    name: "高端装备",
    policyName: "提升高端装备与服务业融合水平",
    desc:
      "覆盖航空航天、低空经济、机器人、智能装备、轨道交通等方向，当前主要关联企业、知识产权、项目、物流、进出口及安全生产等现有数据。",
    directions: ["航空航天", "低空经济", "机器人", "智能装备", "轨道交通", "高端制造"],
    resources: [
      {
        name: "市场主体监管数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/financial-services/market-supervision",
      },
      {
        name: "知识产权",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/culture-tourism/intellectual-property",
      },
      {
        name: "项目申报信息",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/government-services/project-application",
      },
      {
        name: "招投标信息",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/financial-services/bidding",
      },
      {
        name: "货运物流数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/transportation/freight-logistics",
      },
      {
        name: "海关进出口",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/transportation/customs-import-export",
      },
      {
        name: "安全生产监管数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/emergency-management/safety-production",
      },
      {
        name: "境外企业数据资源",
        source: "欧洲企业信息与信用数据",
        sourceType: "境外企业数据",
        href: "/overseas-resources",
        note: "储备待接入",
      },
    ],
    products: [
      { name: "企业经营发展监测报告", href: "/data-products" },
      { name: "企业授信风控画像报告", href: "/data-products" },
      { name: "四流一致性核验服务", href: "/data-products" },
    ],
    scenarios: [
      "装备产业链分析",
      "供应链风险监测",
      "境外企业尽调",
      "科技企业画像",
      "生产安全辅助分析",
    ],
    maturity: "中",
  },
  {
    id: "energy",
    name: "新能源与节能环保",
    policyName: "推进新能源和节能环保与相关产业绿色融合",
    desc:
      "围绕新能源、储能、节能环保、碳管理和绿色制造，关联碳排放、供电供水、新能源车辆及企业经营等现有数据资源。",
    directions: ["新能源", "储能", "节能环保", "碳管理", "绿色制造", "绿色金融"],
    resources: [
      {
        name: "气候与碳排放数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/green-low-carbon/climate-carbon",
      },
      {
        name: "供电供水信息",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/green-low-carbon/water-power",
      },
      {
        name: "道路车辆管理数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/transportation/road-vehicle",
        note: "包含新能源车辆运行监测等信息",
      },
      {
        name: "市场主体监管数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/financial-services/market-supervision",
      },
      {
        name: "安全生产监管数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/emergency-management/safety-production",
      },
    ],
    products: [],
    scenarios: [
      "碳排放监测分析",
      "企业绿色画像",
      "能源使用分析",
      "新能源车辆监测",
      "绿色供应链分析",
    ],
    maturity: "较高",
  },
  {
    id: "logistics",
    name: "现代物流",
    policyName: "促进现代物流和制造业高效融合",
    desc:
      "围绕智慧物流、供应链、仓储配送和跨境物流，重点关联货运、车辆、驾驶人、停车、海关进出口及气象预警等现有数据。",
    directions: ["智慧物流", "供应链", "仓储配送", "跨境物流", "城市配送", "物流风控"],
    resources: [
      {
        name: "货运物流数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/transportation/freight-logistics",
      },
      {
        name: "海关进出口",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/transportation/customs-import-export",
      },
      {
        name: "道路车辆管理数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/transportation/road-vehicle",
      },
      {
        name: "驾驶员管理数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/transportation/driver-management",
      },
      {
        name: "静态停车管理数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/transportation/parking-management",
      },
      {
        name: "交通执法监管数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/transportation/traffic-enforcement",
      },
      {
        name: "气象预警数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/emergency-management/weather-warning",
      },
      {
        name: "汽车维修电子健康档案",
        source: "交通运输部",
        sourceType: "国家部委数据",
        href: "/data-catalog/transport",
        note: "已接入",
      },
    ],
    products: [
      { name: "车维全景动察-03（维修里程）", href: "/data-products" },
      { name: "车维全景动察-08（营运车）", href: "/data-products" },
      { name: "车辆健康评分", href: "/data-products" },
    ],
    scenarios: [
      "运输企业画像",
      "营运车辆识别",
      "运力与线路分析",
      "跨境物流分析",
      "物流安全风险分析",
    ],
    maturity: "较高",
  },
  {
    id: "consumption",
    name: "消费与生活服务",
    policyName: "释放消费领域服务与制造融合潜力",
    desc:
      "围绕文化旅游、本地生活、住宿、文体消费和消费服务，关联文旅、人口、市场运行及身份核验等现有数据资源。",
    directions: ["文化旅游", "本地生活", "住宿", "文体消费", "商业服务", "消费画像"],
    resources: [
      {
        name: "旅游治安管理数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/culture-tourism/tourism-security",
      },
      {
        name: "住宿行业管理数据",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/culture-tourism/accommodation",
      },
      {
        name: "文旅资源普查与开发管理",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/culture-tourism/culture-resource",
      },
      {
        name: "文物保护与非遗传承管理",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/culture-tourism/cultural-heritage",
      },
      {
        name: "公共文化服务体系建设",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/culture-tourism/public-culture-service",
      },
      {
        name: "知识产权",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/culture-tourism/intellectual-property",
      },
      {
        name: "公共人口服务",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/medical-health/population-service",
      },
      {
        name: "市场运行监测",
        source: "北京市公共数据",
        sourceType: "北京市公共数据",
        href: "/authorized-resources/government-services/market-operation-monitoring",
      },
      {
        name: "网证数据核验",
        source: "公安部",
        sourceType: "国家部委数据",
        href: "/data-catalog#mps-catalog",
        note: "已接入",
      },
      {
        name: "第三方身份核验",
        source: "公安部",
        sourceType: "国家部委数据",
        href: "/data-catalog#mps-catalog",
        note: "已接入",
      },
    ],
    products: [
      { name: "文化资源地图服务", href: "/data-products" },
      { name: "文艺活动效果评估服务", href: "/data-products" },
      { name: "文化产业发展监测服务", href: "/data-products" },
      { name: "文艺传播热度分析服务", href: "/data-products" },
      { name: "非遗资源分布分析服务", href: "/data-products" },
    ],
    scenarios: [
      "文旅资源查询",
      "住宿与客群分析",
      "本地生活用户画像",
      "身份与优惠资格核验",
      "文化消费分析",
    ],
    maturity: "较高",
  },
];