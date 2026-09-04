"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomeSearchBox() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  function handleSearch(value = keyword) {
    const q = value.trim();
    if (!q) return;

    const isBusinessQuestion =
      q.length >= 10 ||
      /如何|怎么|哪些|需要|判断|分析|评估|评价|规划|组合|场景|风险|能否|可以|支撑|解决|推荐|开发|形成|是否|想/.test(q);

    if (!isBusinessQuestion) {
      router.push(`/search?q=${encodeURIComponent(q)}`);
      return;
    }

    setKeyword(q);
    window.dispatchEvent(
      new CustomEvent("datamap:resource-plan", { detail: { question: q } })
    );
    window.requestAnimationFrame(() => {
      document
        .getElementById("smart-resource-recommendations")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <div className="mt-8 w-full max-w-4xl">
      <div className="flex overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          placeholder="搜索资源，或描述业务问题让 AI 规划资源组合"
          className="h-14 flex-1 px-5 text-sm text-slate-700 placeholder:text-slate-400 outline-none"
        />

        <button
          onClick={() => handleSearch()}
          className="flex items-center gap-2 bg-[#C41E3A] px-8 font-bold text-white transition hover:bg-[#A81831]"
        >
          <Sparkles className="h-4 w-4" />
          智能搜索
        </button>
      </div>

      {/* 热门搜索 */}
      <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
        <span className="text-slate-400">试试这样问：</span>

        {[
          "判断企业经营风险需要哪些数据",
          "分析车辆维修和故障情况",
          "医保结算可以支撑哪些场景",
          "养老机构评价需要哪些资源",
        ].map((item) => (
          <button
            key={item}
            onClick={() => handleSearch(item)}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 transition hover:bg-red-50 hover:text-[#C41E3A]"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
