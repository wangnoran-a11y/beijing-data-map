"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, LoaderCircle, Search, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import styles from "./HomeSearchBox.module.css";

export default function HomeSearchBox() {
  const [keyword, setKeyword] = useState("");
  const [answer, setAnswer] = useState("");
  const [answerMode, setAnswerMode] = useState<"ai" | "rules" | "">("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSearch(value = keyword) {
    const question = value.trim();
    if (!question || loading) return;
    const isBusinessQuestion = question.length >= 10 || /如何|怎么|哪些|需要|判断|分析|评估|评价|规划|组合|场景|风险|能否|可以|支撑|解决|推荐|开发|形成|是否|想/.test(question);
    if (!isBusinessQuestion) {
      router.push(`/search?q=${encodeURIComponent(question)}`);
      return;
    }
    setKeyword(question);
    setLoading(true);
    setAnswer("");
    setAnswerMode("");
    try {
      const response = await fetch("/api/ai-resource-recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setAnswer(data.answer || data.error || "暂时无法生成建议，请稍后再试。");
      setAnswerMode(data.mode === "ai" ? "ai" : data.answer ? "rules" : "");
      window.dispatchEvent(new CustomEvent("datamap:recommendation-updated", {
        detail: { question, resources: data.recommendation?.resources ?? [] },
      }));
    } catch {
      setAnswer("AI 服务暂时无法连接，请稍后重试；普通资源关键词仍可正常检索。");
    } finally {
      setLoading(false);
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    void handleSearch();
  }

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <div>
          <div className={styles.title}><Sparkles className="h-4 w-4" />AI 智能搜索与资源规划助手</div>
          <p className={styles.description}>可直接搜索资源，也可以描述业务问题，由大模型组合现有资源并识别资源缺口。</p>
        </div>
        <span className={styles.intentTag}>自动识别检索与分析意图</span>
      </div>

      <form onSubmit={submit} className={styles.searchForm}>
        <textarea
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          rows={2}
          placeholder="搜索数据资源，或输入：判断一家新能源物流企业是否值得授信，需要组合哪些数据？"
          className={styles.input}
        />
        <button type="submit" disabled={loading || !keyword.trim()} className={styles.searchButton}>
          {loading ? <LoaderCircle className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5" />}
          {loading ? "正在分析" : "智能搜索"}
        </button>
      </form>

      <div className={styles.suggestions}>
        <span className={styles.suggestionLabel}>试试这样问：</span>
        {["判断企业经营风险需要哪些数据", "分析车辆维修和故障情况", "医保结算可以支撑哪些场景", "养老机构评价需要哪些资源"].map((item) => (
          <button key={item} type="button" onClick={() => void handleSearch(item)} className={styles.suggestion}>{item}</button>
        ))}
      </div>

      {loading && <div className={styles.loading}><LoaderCircle className="h-5 w-5 animate-spin" />正在理解业务问题、匹配现有资源并生成组合建议…</div>}
      {answer && !loading && (
        <div className={styles.answerBox}>
          <div className={styles.answerMode}>{answerMode === "ai" ? "大模型 + 资源规则联合分析" : answerMode === "rules" ? "资源规则分析（大模型繁忙时自动生成）" : "分析结果"}</div>
          <div className={styles.answerBody}>{answer}</div>
          <a href="#smart-resource-recommendations" className={styles.answerLink}>查看本次推荐资源组合<ArrowRight className="h-4 w-4" /></a>
        </div>
      )}
    </div>
  );
}
