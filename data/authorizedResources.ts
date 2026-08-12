export type AuthorizedResourceItem = { id:string; name:string; description:string; examples:string[] };
export type AuthorizedResourceDomain = { id:string; name:string; shortName:string; resourceCount:number; description:string; resources:AuthorizedResourceItem[] };
const r=(id:string,name:string,examples:string[]):AuthorizedResourceItem=>({id,name,description:`包括${examples.slice(0,4).join("、")}等数据。`,examples});
export const authorizedResourceDomains: AuthorizedResourceDomain[] = [
 {id:"medical-health",name:"医疗健康",shortName:"医疗",resourceCount:7,description:"覆盖医保结算、检验检查与医学影像、医药耗材、公共卫生、健康管理、医疗机构运营科研及公共人口服务等数据。",resources:[
  r("medical-insurance","医保参保缴费与结算数据",["医保结算清单信息","医保费用就诊明细信息","医保费用诊断结算明细信息","医保费用项目信息","医保参保人员及单位基本信息","医保持卡人信息","各类人员及单位参保缴费信息","异地申请信息","医保目录信息","医疗机构收费票据信息"]),
  r("medical-examination","检验检查与医学影像数据",["门诊预约挂号信息","患者信息","检查检验结果及病理信息","医学影像信息","医疗机构就诊信息","医疗机构诊断报告信息","电子病历信息","院前急救病历信息","住院记录信息","高血压随访记录信息","糖尿病随访记录信息","医疗机构病案信息","重大慢性疾病防治信息","就诊处方信息","就诊结算费用信息","手术操作信息"]),
  r("medicine-material","医药耗材与许可备案数据",["医疗机构药品统计信息","医疗机构药品不良反应信息","医疗器械不良反应信息","化妆品不良反应信息","定点医疗机构及药店信息"]),
  r("public-health","公共卫生监测与人群筛查数据",["传染病监控信息","呼吸道疾病监测信息","肠道传染病病例信息","两癌筛查报告信息","公共场所卫生许可信息","电子健康证信息"]),
  r("health-management","健康管理与慢病监测数据",["老年人健康分析信息","老年人常见病信息"]),
  r("medical-operation","医疗机构运营与科研数据",["医疗机构基本信息","医疗机构运营信息","医疗机构实验室管理信息","医疗机构科研成果转化信息"]),
  r("population-service","公共人口服务",["自然人失踪信息","自然人死因信息","自然人死亡信息"]),
 ]},
 {id:"education",name:"教育教学",shortName:"教育",resourceCount:6,description:"覆盖学校学生、招生考试、教师管理、全学科教学资源、人才职业技能及学校基础信息。",resources:[
  r("student-basic","学校学生基础信息",["各类学生基础信息","各类学生学籍学历学位信息","学位英语信息","学生家庭信息","学生证书信息"]),
  r("admission-exam","招生与考试信息",["招生考试报名信息","考试结果信息","考试等级信息","公职招录考试考生备案信息"]),
  r("teacher-management","教师管理数据",["教师师德荣誉称号信息","教师优秀成果信息","教师资格证书信息","教师培训评选信息","教师职称评审信息"]),
  r("teaching-resource","中小学全学科教学资源",["全学科的教学教材信息","全学科知识点讲解信息"]),
  r("talent-skill","人才职业技能",["企业人员信息","综合荣誉表彰获奖信息","积分落户信息","人才引进信息","重点人群专项管理信息"]),
  r("school-basic","学校基础信息",["高等教育资源信息","高校硕士博士点信息","民办学校办学许可信息"]),
 ]},
 {id:"financial-services",name:"金融服务",shortName:"金融",resourceCount:9,description:"覆盖不动产、公积金、参保就业、信用评价、市场主体监管、税务、司法、招投标及金融信息。",resources:[
  r("real-estate","不动产数据",["不动产信息","不动产交易信息","抵押人及抵押品信息","房屋许可备案信息","购房资格申请信息","建设工程类企业资质及人员证书信息","工程指标信息","居住项目方案养老配套信息"]),
  r("housing-fund","住房公积金缴存数据",["公积金缴存及提取信息","公积金缴存总账及明细信息","公积金贷款及抵押信息","公积金使用信息","公积金违规不良信息"]),
  r("employment-insurance","参保就业数据",["社保参保单位及自然人基本信息","社保征缴信息","毕业实习就业创业信息","就业就失业人员相关信息","求职档案信息","资格考试考生信息","自然人荣誉信息","自然人黑名单信息","退休人员信息"]),
  r("credit-evaluation","信用评价数据",["各行业企业信用信息","各委办局行政许可信息","失信主体信息","信用评价承诺信息","严重违法失信企业档案信息","自然人信用信息","失信被执行人信息"]),
  r("market-entity","市场主体监管数据",["企业基础信息","企业年报信息","企业登记变更信息","企业股权信息","企业经营异常及严重违法失信信息","企业金融指标信息","企业资质与产业申报信息","投资相关信息","企业主要人员及职务信息","企业许可备案信息","企业荣誉信息","投诉举报信息","个体工商户信息","监督检查信息","经营场所信息","商务楼宇及入驻信息","自贸区信息","科创主体企业画像","统计局行业产业企业统计指标信息","商品交易市场信息"]),
  r("tax","税务征缴数据",["纳税人基本信息","纳税人信用登记信息","增值税申报信息","增值税开票信息","税务处罚及重大涉税违法信息","全税种税收征收信息","企业财务信息","企业资产负债信息","企业利润信息","企业现金流信息","自然人及法人欠税信息"]),
  r("judicial","司法数据",["案件基本信息","涉案当事人信息","刑事案件信息","限制招投标信息","执行案件信息","开庭信息","裁判文书信息","失信公告信息","法院公告信息","案件流程信息","限制高消费信息","限制出境信息"]),
  r("bidding","招投标信息",["招标公告信息","中标信息","合同信息","废标信息","单一来源公告信息","合同相关指标信息"]),
  r("financial-info","金融信息",["创贷信息","存贷款余额增速信息","社会融资规模信息","知识产权质押融资信息","贷款服务中心业务信息"]),
 ]},
 {id:"transportation",name:"交通运输",shortName:"交通",resourceCount:3,description:"覆盖道路车辆、驾驶员以及交通执法监管数据。",resources:[
  r("road-vehicle","道路车辆管理数据",["机动车行驶证信息","机动车基础信息","新能源车辆运行监测信息","网约车相关信息","车辆维保信息","车辆抵押信息","道路运输经营许可信息"]),
  r("driver","驾驶员管理数据",["驾照信息","驾驶员信用信息","驾驶员抄告信息","运单信息","经营性道路客货运输驾驶员从业资格证信息"]),
  r("traffic-enforcement","交通执法监管数据",["交通执法文书信息","交通违法处罚信息","短视频报警信息"]),
 ]},
 {id:"green-low-carbon",name:"绿色低碳",shortName:"低碳",resourceCount:2,description:"覆盖气候碳排放及供电供水相关数据。",resources:[
  r("climate-carbon","气候与碳排放数据",["气象站日值数据","实时天气信息","气象预测信息","气象灾害预警信息","地面气候标准值信息","本市温室气体排放清单信息","碳减排分析信息","碳排放智能核算信息","重点碳排放单位信息","碳排放权交易试点信息"]),
  r("utilities","供电供水信息",["企业用水缴费信息"]),
 ]},
 {id:"culture-tourism",name:"文化旅游",shortName:"文旅",resourceCount:4,description:"覆盖住宿行业、文旅资源普查开发、知识产权及公共文化服务体系。",resources:[
  r("accommodation","住宿行业管理数据",["住宿全维度信息"]),
  r("tourism-resource","文旅资源普查与开发管理",["文化活动及演出信息","A级旅游景区评定管理信息","旅游度假区等级管理信息","乡村旅游重点村镇管理信息","旅行社经营备案管理信息","星级旅游饭店管理信息","导游人员执业管理信息","文旅市场主体信用管理信息"]),
  r("ip","知识产权",["专利信息","商标信息","版权信息"]),
  r("public-culture","公共文化服务体系建设",["公共文化艺术场馆服务管理信息","图书馆服务管理信息","群众文化活动组织管理信息","文旅惠民政策落实管理信息"]),
 ]},
 {id:"government-services",name:"政务服务",shortName:"政务",resourceCount:5,description:"覆盖民生服务、市场运行监测、执业管理、处罚及项目申报信息。",resources:[
  r("livelihood","民生服务管理数据",["养老助残卡信息","老年人福利补贴发放信息","低收入低保特困信息","社会救助信息","临时救助信息","残疾人信息","退役军人及优抚人员信息","公共服务机构信息","养老机构信息","养老服务机构运营补贴发放信息","养老助餐点信息","养老机构经营信息","养老机构检查信息","养老机构重大事项信息","养老机构星级评定信息","养老机构分析评估信息"]),
  r("market-monitor","市场运行监测（发改委）",["农产品行情价格信息","农产品市场监测指标信息","采购相关指标信息"]),
  r("practice-management","执业管理数据",["自然人身份户籍信息（包含涉外身份信息）","流动人口登记信息","婚姻登记信息","出生证明信息","自然人职业/执业/从业资格/职称证照信息","护照信息","人像资源信息","自然人出入境业务信息","居住证信息","工会会员信息","司法涉诉与执业监管信息"]),
  r("penalty","处罚数据",["行政处罚信息","治安处罚信息","违法处罚信息"]),
  r("project-application","项目申报信息",["项目申报及审批结果信息","政策解读信息","政策条款信息","政策文件清单"]),
 ]},
 {id:"urban-governance",name:"城市治理",shortName:"治理",resourceCount:2,description:"覆盖社会救助及防汛监测数据。",resources:[
  r("social-assistance","社会救助数据",["低收入家庭信息","特困人员救助供养证信息","临时救助对象信息"]),
  r("flood-monitor","防汛监测数据",["积水积雪监测信息"]),
 ]},
 {id:"emergency-management",name:"应急管理",shortName:"应急",resourceCount:2,description:"覆盖安全生产及应急管理数据。",resources:[
  r("production-safety","安全生产数据",["安全生产许可证信息","施工许可证工程信息","生产经营单位台账信息","危大工程安全管理信息","建设工程安全隐患和安全风险信息"]),
  r("emergency-resource","应急管理数据",["应急机构信息","应急救援物资信息","应急救援队伍信息"]),
 ]},
];
export const authorizedResourceSummary={domainCount:authorizedResourceDomains.length,resourceCount:authorizedResourceDomains.reduce((t,d)=>t+d.resources.length,0)};
export function getAuthorizedDomainById(id:string){return authorizedResourceDomains.find(d=>d.id===id)}
export function getAuthorizedResourceById(domainId: string, resourceId: string) {
  const domain = getAuthorizedDomainById(domainId);
  if (!domain) return undefined;

  const resource = domain.resources.find((item) => item.id === resourceId);
  if (!resource) return undefined;

  return { domain, resource };
}
