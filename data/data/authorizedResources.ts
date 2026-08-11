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
    resourceCount: 8,
    description:
      "覆盖医保结算、检验检查、医药耗材、执业注册、公共卫生、健康管理、医疗机构运营科研及公共人口服务等数据。",
    resources: [
      {
        id: "medical-insurance",
        name: "医保参保缴费与结算数据",
        description:
          "包括医保结算、费用明细、参保缴费、异地申请、医保目录及医疗收费票据等数据。",
        examples: [
          "医保结算清单信息",
          "医保费用就诊明细信息",
          "医保费用诊断结算明细信息",
          "医保费用项目信息",
          "医保参保人员及单位基本信息",
          "医保持卡人信息",
          "各类人员及单位参保缴费信息",
          "异地申请信息",
          "医保目录信息",
          "医疗机构收费票据信息",
        ],
      },
      {
        id: "medical-examination",
        name: "检验检查与医学影像数据",
        description:
          "包括预约挂号、住院、医学影像、检查检验、电子病历、慢病随访、处方及手术操作等数据。",
        examples: [
          "门诊预约挂号",
          "住院记录数据",
          "医学影像数据",
          "医疗机构基本信息",
          "120急救患者信息",
          "检查检验结果及病理信息",
          "医疗机构就诊信息",
          "医疗机构诊断报告信息",
          "电子病历信息",
          "院前急救病历信息",
          "高血压随访记录信息",
          "糖尿病随访记录信息",
          "中医医疗机构病案信息",
          "重大慢性疾病防治信息",
          "就诊处方信息",
          "就诊结算费用信息",
          "手术操作信息",
          "患者信息",
        ],
      },
      {
        id: "medicine-material",
        name: "医药耗材与许可备案数据",
        description:
          "包括药品、医疗器械、化妆品、不良反应监测、生产经营许可备案及定点医药机构等数据。",
        examples: [
          "药店药品信息",
          "药品批准信息",
          "药品经营许可信息",
          "药品不良反应监测信息",
          "医疗器械经营企业信用信息",
          "医疗器械生产经营许可备案",
          "医疗机构制剂许可证与备案数据",
          "医疗机构药品统计信息",
          "医疗机构药品不良反应信息",
          "医疗器械不良反应信息",
          "化妆品不良反应信息",
          "定点医疗机构及药店信息",
        ],
      },
      {
        id: "medical-practice-registration",
        name: "医疗执业与注册登记数据",
        description:
          "包括医师、护士、执业药师以及医疗机构执业许可、注册登记等数据。",
        examples: [
          "医师执业注册信息",
          "护士执业注册信息",
          "执业药师信息",
          "医疗机构注册登记信息",
          "医疗机构执业许可信息",
          "中医医疗机构与医师行政许可信息",
        ],
      },
      {
        id: "public-health",
        name: "公共卫生监测与人群筛查数据",
        description:
          "包括卫生许可、健康体检、传染病监测、新生儿及妇女筛查、呼吸道和肠道疾病监测等数据。",
        examples: [
          "公共场所卫生许可数据",
          "电子健康证数据",
          "公民健康体检信息",
          "传染病监测数据",
          "新生儿基因筛查数据",
          "妇女专项筛查数据",
          "呼吸道疾病监测信息",
          "肠道传染病病例信息",
          "两癌筛查报告信息",
        ],
      },
      {
        id: "health-management",
        name: "健康管理与慢病监测数据",
        description: "包括老年人健康分析、老年人常见病等健康管理数据。",
        examples: ["老年人健康分析信息", "老年人常见病信息"],
      },
      {
        id: "medical-operation",
        name: "医疗机构运营与科研数据",
        description:
          "包括医疗机构运营、实验室管理及科研成果转化等数据。",
        examples: [
          "医疗机构基本信息",
          "医疗机构运营信息",
          "医疗机构实验室管理信息",
          "医疗机构科研成果转化信息",
        ],
      },
      {
        id: "population-service",
        name: "公共人口服务",
        description: "包括自然人失踪、死因和死亡等公共人口服务数据。",
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
      "覆盖学校学生、招生考试、教师管理、中小学全学科教学资源及人才职业技能等数据。",
    resources: [
      {
        id: "student-basic",
        name: "学校学生基础信息",
        description:
          "包括学校、高校、学生基础、学籍学历学位、学生家庭及证书等数据。",
        examples: [
          "中小学学校信息",
          "高招高校信息",
          "高校硕博点信息",
          "高校毕业信息",
          "学生体质数据",
          "各类学生基础信息",
          "各类学生学籍学历学位信息",
          "学位英语信息",
          "学生家庭信息",
          "学生证书信息",
        ],
      },
      {
        id: "admission-exam",
        name: "招生与考试信息",
        description:
          "包括招生计划、报名、录取、试题、考试结果、等级及公职招录备案等数据。",
        examples: [
          "招生通知数据",
          "招生计划信息",
          "招生考试录取数据",
          "考试试题数据",
          "招生考试报名信息",
          "考试结果信息",
          "考试等级信息",
          "公职招录考试考生备案信息",
        ],
      },
      {
        id: "teacher-management",
        name: "教师管理数据",
        description:
          "包括教师资格、培训、职称评审、师德荣誉及优秀成果等数据。",
        examples: [
          "教师资格证书数据",
          "教师培训数据",
          "教师职称评审数据",
          "教师师德荣誉数据",
          "教师优秀成果信息",
          "教师培训评选信息",
        ],
      },
      {
        id: "teaching-resource",
        name: "中小学全学科教学资源",
        description: "包括全学科教学教材及知识点讲解等教学资源。",
        examples: ["全学科教学教材信息", "全学科知识点讲解信息"],
      },
      {
        id: "talent-skill",
        name: "人才职业技能",
        description:
          "包括企业人员、综合荣誉、积分落户、人才引进及重点人群专项管理等数据。",
        examples: [
          "企业人员信息",
          "综合荣誉表彰获奖信息",
          "积分落户信息",
          "人才引进信息",
          "重点人群专项管理信息",
        ],
      },
    ],
  },
  {
    id: "financial-services",
    name: "金融服务",
    shortName: "金融",
    resourceCount: 9,
    description:
      "覆盖不动产、公积金、参保就业、信用评价、市场主体监管、税务征缴、司法、招投标及金融信息等数据。",
    resources: [
      {
        id: "real-estate",
        name: "不动产数据",
        description:
          "包括不动产抵押、交易、网签备案、房屋租赁、购房资格及工程资质等数据。",
        examples: [
          "不动产抵押数据",
          "购房资格申请数据",
          "房屋租赁登记备案数据",
          "房地产交易数据",
          "商品房网签备案数据",
          "不动产信息",
          "不动产交易信息",
          "抵押人及抵押品信息",
          "房屋许可备案信息",
          "建设工程类企业资质及人员证书信息",
          "工程指标信息",
          "居住项目方案养老配套信息",
        ],
      },
      {
        id: "housing-fund",
        name: "住房公积金缴存数据",
        description:
          "包括公积金缴存、提取、贷款、抵押、使用及违规不良等数据。",
        examples: [
          "缴存使用情况统计数据",
          "公积金缴存及提取信息",
          "公积金缴存总账及明细信息",
          "公积金贷款及抵押信息",
          "公积金使用信息",
          "公积金违规不良信息",
        ],
      },
      {
        id: "employment-insurance",
        name: "参保就业数据",
        description:
          "包括就业登记、社会保险、就业创业、求职、资格考试、荣誉、黑名单及退休等数据。",
        examples: [
          "城镇劳动力就业登记档案数据",
          "社保参保单位及自然人基本信息",
          "社保征缴信息",
          "毕业实习就业创业信息",
          "就失业人员相关信息",
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
        description:
          "包括企业信用评价、行业信用、行政许可、失信主体及自然人信用等数据。",
        examples: [
          "严重违法失信企业档案数据",
          "企业信用评价数据",
          "重点行业信用评价数据",
          "各行业企业信用信息",
          "各委办局行政许可信息",
          "失信主体信息",
          "信用评价承诺信息",
          "自然人信用信息",
          "失信被执行人信息",
        ],
      },
      {
        id: "market-supervision",
        name: "市场主体监管数据",
        description:
          "包括市场主体登记、企业年报、股权、经营异常、金融指标、许可备案、投资及产业统计等数据。",
        examples: [
          "市场主体登记注册数据",
          "企业股权质押数据",
          "市场主体监管数据",
          "市场监管行政处罚数据",
          "企业基础信息",
          "企业年报信息",
          "企业登记变更信息",
          "企业股权信息",
          "企业经营异常及严重违法失信信息",
          "企业金融指标信息",
          "企业资质与产业申报信息",
          "投资相关信息",
          "企业主要人员及职务信息",
          "企业许可备案信息",
          "企业荣誉信息",
          "企业网络上报信息",
          "投诉举报信息",
          "个体工商户信息",
          "个体经营异常信息",
          "监督检查信息",
          "经营场所信息",
          "商务楼宇及入驻信息",
          "自贸区信息",
          "科委科技创新主体数据",
          "统计局行业产业企业统计指标信息",
          "商品交易市场信息",
        ],
      },
      {
        id: "taxation",
        name: "税务征缴数据",
        description:
          "包括税收征收、纳税申报、开票、信用、处罚、财务及欠税等数据。",
        examples: [
          "全税种税收征收数据",
          "分行业税收收入数据",
          "规上企业财务指标数据",
          "欠税公告信息",
          "纳税人基本信息",
          "纳税人信用登记信息",
          "增值税申报信息",
          "增值税开票信息",
          "税务处罚及重大涉税违法信息",
          "企业财务信息",
          "企业资产负债信息",
          "企业利润信息",
          "企业滞纳金信息",
          "企业现金流信息",
          "自然人及法人欠税信息",
        ],
      },
      {
        id: "judicial",
        name: "司法数据",
        description:
          "包括案件、涉案当事人、执行、开庭、裁判文书、失信及限制措施等数据。",
        examples: [
          "案件基本信息",
          "涉案当事人信息",
          "刑事案件信息",
          "限制招投标信息",
          "执行案件信息",
          "开庭信息",
          "裁判文书信息",
          "失信公告信息",
          "法院公告信息",
          "案件流程信息",
          "限制高消费信息",
          "限制出境信息",
        ],
      },
      {
        id: "bidding",
        name: "招投标信息",
        description:
          "包括招标、中标、合同、废标、单一来源公告及合同指标等数据。",
        examples: [
          "招标公告信息",
          "中标信息",
          "合同信息",
          "废标信息",
          "单一来源公告信息",
          "合同相关指标信息",
        ],
      },
      {
        id: "financial-information",
        name: "金融信息",
        description:
          "包括创贷、存贷款、社会融资、知识产权质押融资及贷款服务中心业务等数据。",
        examples: [
          "创贷信息",
          "存贷款余额增速信息",
          "社会融资规模信息",
          "知识产权质押融资信息",
          "贷款服务中心业务信息",
        ],
      },
    ],
  },
  {
    id: "transportation",
    name: "交通运输",
    shortName: "交通",
    resourceCount: 6,
    description:
      "覆盖道路车辆、驾驶员、交通执法、停车、货运物流及海关进出口等数据。",
    resources: [
      {
        id: "road-vehicle",
        name: "道路车辆管理数据",
        description:
          "包括机动车登记、行驶证、运行监测、抵押、新能源车辆、网约车及车辆维保等数据。",
        examples: [
          "机动车登记数据",
          "机动车行驶证信息",
          "车辆运行监测数据",
          "机动车涉案抵押数据",
          "共享单车运营监控数据",
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
        description:
          "包括驾驶员基础、道路运输从业资格、网约车驾驶员、出租车驾驶员、驾照、信用及运单等数据。",
        examples: [
          "驾驶员基础信息",
          "道路运输从业人员从业资格证信息",
          "网约车驾驶员数据",
          "出租汽车驾驶员证信息",
          "旅游团队导游司机信息",
          "驾照信息",
          "驾驶员信用信息",
          "驾驶员抄告信息",
          "运单信息",
        ],
      },
      {
        id: "traffic-enforcement",
        name: "交通执法监管数据",
        description:
          "包括交通执法文书、处罚公示、驾驶行为报警、超限预警及交通违法处罚等数据。",
        examples: [
          "交通执法文书信息",
          "行政处罚信用公示信息",
          "驾驶行为短视频报警数据",
          "违法超限预警信息",
          "交通违法处罚信息",
        ],
      },
      {
        id: "parking-management",
        name: "静态停车管理数据",
        description:
          "包括停车场、路侧停车订单、停车设施车位、共享单车站点及智慧停车等数据。",
        examples: [
          "停车场基础数据",
          "路侧停车订单数据",
          "停车设施车位数据",
          "停车场备案数据",
          "共享单车站点数据",
          "智慧停车数据",
        ],
      },
      {
        id: "freight-logistics",
        name: "货运物流数据",
        description:
          "包括道路运输许可、车辆动态、运输运单、运输企业及运输人员等数据。",
        examples: [
          "道路运输经营许可",
          "运输车辆动态信息",
          "运输运单数据",
          "运输企业信息",
          "运输人员信息",
        ],
      },
      {
        id: "customs-import-export",
        name: "海关进出口",
        description:
          "包括进出口货物报关及跨境电商零售进出口报关等数据。",
        examples: [
          "进出口货物报关数据",
          "跨境电商零售进出口报关数据",
        ],
      },
    ],
  },
  {
    id: "culture-tourism",
    name: "文化旅游",
    shortName: "文旅",
    resourceCount: 6,
    description:
      "覆盖旅游治安、住宿行业、文旅资源开发、文物非遗、公共文化服务及知识产权等数据。",
    resources: [
      {
        id: "tourism-security",
        name: "旅游治安管理数据",
        description: "包括酒店、民宿住宿等旅游治安管理数据。",
        examples: ["酒店住宿信息", "民宿住宿信息"],
      },
      {
        id: "accommodation",
        name: "住宿行业管理数据",
        description:
          "包括住宿业接待、乡村民宿、酒店接待及住宿全维度等数据。",
        examples: [
          "住宿业接待情况",
          "乡村民宿信息",
          "酒店接待情况",
          "住宿全维度信息",
        ],
      },
      {
        id: "culture-resource",
        name: "文旅资源普查与开发管理",
        description:
          "包括景区、度假区、乡村旅游、旅行社、星级饭店、导游、信用及演出等数据。",
        examples: [
          "A级旅游景区评定管理数据",
          "旅游度假区等级管理数据",
          "乡村旅游重点村镇管理数据",
          "旅行社经营备案管理数据",
          "星级旅游饭店管理数据",
          "导游人员执业管理数据",
          "文旅市场主体信用管理数据",
          "文化活动及演出信息",
        ],
      },
      {
        id: "cultural-heritage",
        name: "文物保护与非遗传承管理",
        description:
          "包括不可移动文物、可移动文物、非物质文化遗产、博物馆及文物安全等数据。",
        examples: [
          "不可移动文物保护管理数据",
          "可移动文物保护管理数据",
          "非物质文化遗产保护管理数据",
          "博物馆行业管理数据",
          "文物安全管理数据",
        ],
      },
      {
        id: "public-culture-service",
        name: "公共文化服务体系建设",
        description:
          "包括公共文化艺术场馆、图书馆、群众文化活动及文旅惠民政策等数据。",
        examples: [
          "公共文化艺术场馆服务管理数据",
          "图书馆服务管理数据",
          "群众文化活动组织管理数据",
          "文旅惠民政策落实管理数据",
        ],
      },
      {
        id: "intellectual-property",
        name: "知识产权",
        description: "包括专利、商标、版权等知识产权数据。",
        examples: ["专利信息", "商标信息", "版权信息"],
      },
    ],
  },
  {
    id: "emergency-management",
    name: "应急管理",
    shortName: "应急",
    resourceCount: 5,
    description:
      "覆盖防汛抗旱、危险货物运输、气象预警、自然灾害及安全生产监管等数据。",
    resources: [
      {
        id: "flood-drought-monitoring",
        name: "防汛抗旱监测数据",
        description:
          "包括积水点、汛情监测、地质灾害隐患、应急物资及救援队伍等数据。",
        examples: [
          "积水点监测数据",
          "汛情监测站数据",
          "突发地质灾害隐患点信息",
          "应急救灾物资信息",
          "应急救援队伍信息",
        ],
      },
      {
        id: "dangerous-goods-transport",
        name: "道路运输管理数据",
        description:
          "包括危险化学品运输备案、危险货物电子运单及从业人员资格等数据。",
        examples: [
          "危险化学品运输备案数据",
          "危险货物运输电子运单信息",
          "道路危险货物运输从业人员资格数据",
        ],
      },
      {
        id: "weather-warning",
        name: "气象预警数据",
        description: "包括气象站监测和气象预警等数据。",
        examples: ["气象站监测数据", "气象预警数据"],
      },
      {
        id: "natural-disaster",
        name: "自然灾害管理数据",
        description: "包括自然灾害汇总及预警等数据。",
        examples: ["自然灾害汇总情况", "自然灾害预警信息"],
      },
      {
        id: "safety-production",
        name: "安全生产监管数据",
        description:
          "包括安全生产许可、危险化学品、特种作业、高危行业及燃气、建设工程安全风险等数据。",
        examples: [
          "安全生产许可数据",
          "危险化学品建设项目审查数据",
          "危险化学品安全生产风险监测预警数据",
          "特种作业操作许可数据",
          "危险化学品经营许可数据",
          "高危险性体育项目经营许可数据",
          "危险废物经营许可数据",
          "安全生产重点行业企业风险隐患监测数据",
          "燃气安全监管数据",
          "建设工程安全隐患与风险数据",
        ],
      },
    ],
  },
  {
    id: "green-low-carbon",
    name: "绿色低碳",
    shortName: "低碳",
    resourceCount: 2,
    description:
      "覆盖气候与碳排放以及供电供水等绿色低碳相关数据。",
    resources: [
      {
        id: "climate-carbon",
        name: "气候与碳排放数据",
        description:
          "包括气象日值、实时天气、气象预测、灾害预警、气候标准值及温室气体排放清单等数据。",
        examples: [
          "气象站日值数据",
          "实时天气信息",
          "气象预测信息",
          "气象灾害预警信息",
          "地面气候标准值信息",
          "本市温室气体排放清单信息",
        ],
      },
      {
        id: "water-power",
        name: "供电供水信息",
        description: "包括企业用水缴费等公共资源使用数据。",
        examples: ["企业用水缴费信息"],
      },
    ],
  },
  {
    id: "government-services",
    name: "政务服务",
    shortName: "政务",
    resourceCount: 5,
    description:
      "覆盖民生服务、市场运行监测、执业管理、处罚及项目申报等政务服务数据。",
    resources: [
      {
        id: "public-service-management",
        name: "民生服务管理数据",
        description:
          "包括养老、低保、救助、残疾人、退役军人、公共服务机构及养老机构运营等数据。",
        examples: [
          "养老助残卡信息",
          "老年人福利补贴发放信息",
          "低收入低保特困信息",
          "社会救助信息",
          "临时救助信息",
          "残疾人信息",
          "退役军人及优抚人员信息",
          "公共服务机构信息",
          "养老机构信息",
          "养老服务机构运营补贴发放信息",
          "养老助餐点信息",
          "养老机构经营信息",
          "养老机构检查信息",
          "养老机构重大事项信息",
          "养老机构星级评定信息",
          "养老机构分析评估信息",
        ],
      },
      {
        id: "market-operation-monitoring",
        name: "市场运行监测",
        description:
          "包括农产品价格、市场监测及采购相关指标等数据。",
        examples: [
          "农产品行情价格信息",
          "农产品市场监测指标信息",
          "采购相关指标信息",
        ],
      },
      {
        id: "professional-management",
        name: "执业管理数据",
        description:
          "包括身份户籍、流动人口、婚姻出生、职业资格、护照、出入境、居住证、荣誉及司法监管等数据。",
        examples: [
          "自然人身份户籍信息（包含涉外身份信息）",
          "流动人口登记信息",
          "婚姻登记信息",
          "出生证明信息",
          "自然人职业/执业/从业资格/职称证照信息",
          "护照信息",
          "人像资源信息",
          "前科涉毒肇事肇祸涉黑涉恐人员信息",
          "自然人出入境业务信息",
          "居住证信息",
          "工会会员信息",
          "劳模见义勇为五一奖章先进工作者及其他相关荣誉信息",
          "司法涉诉与执业监管信息",
        ],
      },
      {
        id: "punishment",
        name: "处罚数据",
        description: "包括行政处罚、治安处罚及违法处罚等数据。",
        examples: ["行政处罚信息", "治安处罚信息", "违法处罚信息"],
      },
      {
        id: "project-application",
        name: "项目申报信息",
        description:
          "包括项目申报、审批结果、政策解读、政策条款及政策文件清单等数据。",
        examples: [
          "项目申报及审批结果信息",
          "政策解读信息",
          "政策条款信息",
          "政策文件清单",
        ],
      },
    ],
  },
  {
    id: "urban-governance",
    name: "城市治理",
    shortName: "城市",
    resourceCount: 1,
    description: "覆盖城市防汛及积水积雪监测等城市治理数据。",
    resources: [
      {
        id: "flood-control",
        name: "防汛监测数据",
        description: "包括积水积雪监测等城市防汛数据。",
        examples: ["积水积雪监测信息"],
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