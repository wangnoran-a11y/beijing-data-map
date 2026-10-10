"use client";

import { useMemo } from "react";
import { buildSearchPlan, type DataResource } from "../lib/smartSearch";

export function SmartSearchResults({ query, resources }: { query: string; resources: DataResource[] }) {
  const plan = useMemo(() => buildSearchPlan(query, resources), [query, resources]);
  if (!query.trim()) return null;

  return (
    <section className="smart-search-results" aria-live="polite">
      <p className="smart-search-intent">已识别业务意图：{plan.intent}</p>
      <h3>匹配的数据资源</h3>
      {plan.matches.length ? (
        <div className="smart-search-grid">
          {plan.matches.map((resource) => (
            <article key={resource.id} className="smart-search-card">
              <span>{resource.domain}</span><h4>{resource.name}</h4><p>{resource.description}</p>
              <small>匹配原因：{resource.reasons.join("；")}</small>
            </article>
          ))}
        </div>
      ) : <p>暂无直接匹配资源，建议补充资源目录或调整检索描述。</p>}
      {plan.combinations.map((combo) => (
        <div className="smart-search-combination" key={combo.name}>
          <h3>{combo.name}</h3><p>{combo.use}</p><p>建议组合：{combo.resources.join("、")}</p>
        </div>
      ))}
      {plan.gaps.length > 0 && <p className="smart-search-gap">待拓展资源方向：{plan.gaps.join("、")}</p>}
    </section>
  );
}
