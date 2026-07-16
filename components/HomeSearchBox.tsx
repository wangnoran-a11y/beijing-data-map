"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomeSearchBox() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  function handleSearch() {
    const q = keyword.trim();
    if (!q) return;

    router.push(`/search?q=${encodeURIComponent(q)}`);
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
          placeholder="搜索数据表、字段、数据产品、部委、应用场景，例如：维修总次数、医保结算、交通运输部、民政部、车辆健康评分"
          className="h-14 flex-1 px-5 text-sm text-slate-700 placeholder:text-slate-400 outline-none"
        />

        <button
          onClick={handleSearch}
          className="flex items-center gap-2 bg-[#C41E3A] px-8 font-bold text-white transition hover:bg-[#A81831]"
        >
          <Search className="h-4 w-4" />
          搜索
        </button>
      </div>

      {/* 热门搜索 */}
      <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
        <span className="text-slate-400">热门搜索：</span>

        {[
          "交通运输部",
          "民政部",
          "教育部",
          "国家卫生健康委",
          "国家医保局",
          "公安部",
          "车维全景动察-01",
          "车辆健康评分",
          "医保结算",
          "养老机构",
        ].map((item) => (
          <button
            key={item}
            onClick={() =>
              router.push(`/search?q=${encodeURIComponent(item)}`)
            }
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 transition hover:bg-red-50 hover:text-[#C41E3A]"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}