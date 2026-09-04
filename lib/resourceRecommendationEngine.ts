import { authorizedResourceDomains } from "@/data/authorizedResources";

type IntentRule = {
  id: string;
  name: string;
  keywords: string[];
  goals: string[];
  product: string;
  gaps: string[];
};

const intentRules: IntentRule[] = [
  { id: "enterprise-risk", name: "企业经营与授信风控", keywords: ["企业", "经营", "授信", "贷款", "融资", "风险", "征信", "尽调", "工商", "税务", "发票"], goals: ["判断经营稳定性", "识别信用与履约风险"], product: "企业经营健康度与授信辅助报告", gaps: ["企业实时交易流水", "产业链上下游关系", "银行授信表现"] },
  { id: "vehicle", name: "车辆与交通服务", keywords: ["车辆", "汽车", "新能源车", "维修", "故障", "车险", "保险", "营运", "驾驶", "交通", "物流"], goals: ["形成车辆画像", "识别维修、运营及保险风险"], product: "车辆健康与运营风险评估产品", gaps: ["车辆实时运行数据", "保险理赔记录", "二手车成交价格"] },
  { id: "health", name: "医疗健康与保险", keywords: ["医疗", "医保", "医院", "疾病", "健康", "药品", "商保", "保险", "理赔", "养老"], goals: ["开展人群与机构分析", "支撑核保理赔和服务评价"], product: "医疗健康服务与保险风控分析产品", gaps: ["商业保险承保理赔数据", "连续健康监测数据", "医疗服务满意度"] },
  { id: "elderly", name: "养老服务评价", keywords: ["养老", "老年", "护理", "助餐", "机构评价", "民政"], goals: ["形成机构画像", "评估服务能力与运营风险"], product: "养老机构综合评价与金融服务产品", gaps: ["入住率与床位实时数据", "护理服务过程数据", "机构财务经营数据"] },
  { id: "green", name: "绿色低碳与气候风险", keywords: ["碳", "绿色", "低碳", "气象", "天气", "排放", "能耗", "气候", "环保"], goals: ["核算碳排放", "识别气候与环境风险"], product: "碳排放与气候风险监测产品", gaps: ["企业用电用气数据", "供应链碳足迹", "环境实时监测数据"] },
  { id: "culture", name: "文旅与消费分析", keywords: ["文旅", "旅游", "景区", "酒店", "住宿", "消费", "演出", "文化"], goals: ["分析客群和经营表现", "支撑文旅资源运营"], product: "文旅消费洞察与经营分析产品", gaps: ["游客客流轨迹", "消费交易数据", "网络评价数据"] },
  { id: "city", name: "城市治理与应急", keywords: ["城市", "治理", "应急", "安全", "防汛", "积水", "救援", "灾害"], goals: ["监测城市运行风险", "提升应急响应能力"], product: "城市安全风险监测与应急辅助产品", gaps: ["城市物联网实时感知数据", "应急事件处置过程数据", "重点区域实时人流"] },
  { id: "education", name: "教育人才与就业", keywords: ["教育", "学校", "学生", "教师", "人才", "就业", "招聘", "技能"], goals: ["分析人才供需", "支撑教育与就业服务"], product: "人才供需与教育就业匹配产品", gaps: ["企业岗位实时需求", "人才流动数据", "职业能力标签"] },
];

const synonymGroups = [
  ["公司", "企业", "市场主体", "法人"], ["老板", "股东", "高管", "主要人员"],
  ["挣钱", "营收", "收入", "经营"], ["欠钱", "欠税", "负债", "失信", "债务"],
  ["靠谱", "信用", "风险", "稳定", "合规"], ["车", "车辆", "汽车", "机动车"],
  ["车险", "保险", "理赔", "核保"], ["看病", "医疗", "就诊", "医保", "健康"],
  ["老人", "老年", "养老"], ["天气", "气象", "气候", "灾害"],
  ["工作", "就业", "招聘", "岗位"], ["学校", "教育", "学生", "教师"],
];

function normalize(value: string) {
  return value.toLowerCase().replace(/[，。！？、；：,.!?;:\s]+/g, "");
}

function expandTerms(question: string) {
  const normalized = normalize(question);
  const terms = new Set<string>();
  for (const group of synonymGroups) {
    if (group.some((word) => normalized.includes(normalize(word)))) group.forEach((word) => terms.add(word));
  }
  for (const rule of intentRules) {
    rule.keywords.forEach((word) => { if (normalized.includes(normalize(word))) terms.add(word); });
  }
  return [...terms];
}

export function recommendResources(question: string) {
  const normalizedQuestion = normalize(question);
  const expandedTerms = expandTerms(question);
  const intents = intentRules.map((rule) => ({
    ...rule,
    score: rule.keywords.reduce((score, keyword) => score + (normalizedQuestion.includes(normalize(keyword)) ? 5 : expandedTerms.includes(keyword) ? 2 : 0), 0),
  })).filter((rule) => rule.score > 0).sort((a, b) => b.score - a.score);
  const primaryIntent = intents[0];
  const searchTerms = [...new Set([question, ...expandedTerms, ...(primaryIntent?.keywords ?? [])])].filter(Boolean);

  const resources = authorizedResourceDomains.flatMap((domain) => domain.resources.map((resource) => {
    const name = normalize(resource.name);
    const domainText = normalize(domain.name);
    const examples = resource.examples.map(normalize);
    const description = normalize(resource.description);
    const evidence: string[] = [];
    let score = 0;
    for (const term of searchTerms) {
      const t = normalize(term);
      if (!t) continue;
      if (name.includes(t) || t.includes(name)) { score += 14; evidence.push(resource.name); }
      if (domainText.includes(t)) score += 5;
      if (description.includes(t)) score += 3;
      const hits = resource.examples.filter((_, index) => examples[index].includes(t));
      if (hits.length) { score += Math.min(hits.length, 4) * 4; evidence.push(...hits.slice(0, 3)); }
    }
    return { domainId: domain.id, domainName: domain.name, resourceId: resource.id, resourceName: resource.name, description: resource.description, examples: resource.examples.slice(0, 8), score, evidence: [...new Set(evidence)].slice(0, 5) };
  })).filter((resource) => resource.score > 0).sort((a, b) => b.score - a.score || b.examples.length - a.examples.length).slice(0, 10);

  const fallbackIntent = primaryIntent ?? { name: "综合数据分析", goals: ["明确业务对象与判断目标", "识别可利用的数据证据"], product: "专题数据分析与决策辅助产品", gaps: ["与该问题直接相关的业务数据", "可验证分析结论的结果数据"] };
  return {
    question,
    intent: fallbackIntent.name,
    goals: fallbackIntent.goals,
    expandedTerms,
    resources,
    coverage: resources.length >= 4 ? "较高" : resources.length > 0 ? "部分覆盖" : "暂无直接匹配",
    product: fallbackIntent.product,
    gaps: fallbackIntent.gaps,
  };
}

export type RecommendationResult = ReturnType<typeof recommendResources>;

export function buildRuleAnswer(result: RecommendationResult) {
  const resourceLines = result.resources.length
    ? result.resources.slice(0, 6).map((item, index) => `${index + 1}. ${item.resourceName}（${item.domainName}）：${item.examples.slice(0, 3).join("、")}`).join("\n")
    : "当前目录暂无能够直接支撑该问题的数据资源。";
  return `【需求理解】\n${result.intent}；重点目标：${result.goals.join("、")}。\n\n【现有资源组合｜覆盖度：${result.coverage}】\n${resourceLines}\n\n【可形成的数据产品】\n${result.product}。建议先用现有资源形成基础画像、核验指标和风险提示，再通过真实业务结果校准规则。\n\n【待拓展资源】\n${result.gaps.map((item) => `- ${item}`).join("\n")}\n\n【使用提示】\n推荐结果用于资源规划和产品设计，涉及个人、医疗、金融等数据时应落实授权、最小必要、脱敏和用途控制。`;
}
