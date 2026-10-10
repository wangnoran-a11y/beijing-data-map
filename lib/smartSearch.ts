export type DataResource = {
  id: string;
  name: string;
  domain: string;
  description: string;
  fields: string[];
  tags: string[];
  scenarios: string[];
};

export type SearchMatch = DataResource & {
  score: number;
  reasons: string[];
};

export type SearchPlan = {
  query: string;
  intent: string;
  matches: SearchMatch[];
  combinations: { name: string; resources: string[]; use: string }[];
  gaps: string[];
};

// 先作为前端稳定兜底。接入 RAG 后，可用向量召回结果替换 `matches`，页面无需重做。
const intentRules = [
  { words: ["授信", "贷款", "经营风险", "企业风险", "尽调", "融资"], intent: "企业经营与授信" },
  { words: ["维修", "故障", "车辆", "车险", "残值", "vin"], intent: "车辆与交通服务" },
  { words: ["医保", "医疗", "结算", "商保", "理赔", "医院"], intent: "医疗与保险服务" },
  { words: ["养老", "老年", "机构评级", "护理"], intent: "养老服务评价" },
  { words: ["碳", "绿色", "排放", "能耗"], intent: "绿色金融与碳管理" },
];

const normalize = (value: string) => value.toLowerCase().replace(/[，。！？、,.!?\s]/g, "");

function includes(text: string, term: string) {
  return normalize(text).includes(normalize(term));
}

export function detectIntent(query: string) {
  return intentRules.find((rule) => rule.words.some((word) => includes(query, word)))?.intent || "资源智能检索";
}

export function buildSearchPlan(query: string, resources: DataResource[]): SearchPlan {
  const intent = detectIntent(query);
  const matched = resources
    .map((resource) => {
      const reasons: string[] = [];
      let score = 0;
      const searchable = [resource.name, resource.domain, resource.description, ...resource.fields, ...resource.tags, ...resource.scenarios];

      for (const item of searchable) {
        if (includes(query, item)) {
          score += resource.name === item ? 10 : 4;
          reasons.push(`与“${item}”直接相关`);
        }
      }
      if (resource.scenarios.includes(intent) || resource.tags.includes(intent)) {
        score += 8;
        reasons.push(`适用于${intent}`);
      }
      return { ...resource, score, reasons: [...new Set(reasons)] };
    })
    .filter((resource) => resource.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  const fallback = resources
    .filter((resource) => resource.scenarios.includes(intent))
    .slice(0, 6)
    .map((resource) => ({ ...resource, score: 1, reasons: [`按${intent}场景推荐`] }));

  const matches = matched.length ? matched : fallback;
  return {
    query,
    intent,
    matches,
    combinations: buildCombinations(intent, matches),
    gaps: buildGaps(intent, matches.length),
  };
}

function buildCombinations(intent: string, matches: SearchMatch[]) {
  const names = matches.slice(0, 5).map((item) => item.name);
  const templates: Record<string, { name: string; use: string }> = {
    企业经营与授信: { name: "企业经营风险评估组合", use: "用于贷前尽调、授信审批和贷后预警。" },
    车辆与交通服务: { name: "车辆全生命周期评估组合", use: "用于车辆风险识别、维修记录核验和残值评估。" },
    医疗与保险服务: { name: "医保商保协同风控组合", use: "用于核保、理赔审核和异常结算识别。" },
    养老服务评价: { name: "养老机构综合评价组合", use: "用于机构画像、服务质量评价和养老金融服务。" },
    绿色金融与碳管理: { name: "绿色经营与碳排放评价组合", use: "用于绿色授信、碳核算和减排分析。" },
  };
  const template = templates[intent];
  return template && names.length ? [{ ...template, resources: names }] : [];
}

function buildGaps(intent: string, matchCount: number) {
  if (matchCount >= 3) return [];
  const gaps: Record<string, string[]> = {
    企业经营与授信: ["企业实时经营流水", "关联交易与供应链履约信息"],
    车辆与交通服务: ["新能源车电池健康度", "二手车市场成交与残值数据"],
    医疗与保险服务: ["商保理赔记录", "医疗服务价格与药品耗材目录"],
    养老服务评价: ["养老机构服务评价", "床位使用与护理人员配置信息"],
    绿色金融与碳管理: ["企业能耗明细", "产品碳足迹与减排项目数据"],
  };
  return gaps[intent] || ["补充与当前业务问题直接相关的行业数据资源"];
}
