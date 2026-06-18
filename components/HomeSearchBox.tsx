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
    <div className="mt-8 flex max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        placeholder="搜索字段、产品、资源、场景、产业，如 VIN、养老机构、企业授信"
        className="h-14 flex-1 px-5 text-sm text-slate-700 outline-none"
      />

      <button
        onClick={handleSearch}
        className="flex items-center gap-2 bg-[#C41E3A] px-6 font-bold text-white"
      >
        <Search className="h-4 w-4" />
        搜索
      </button>
    </div>
  );
}