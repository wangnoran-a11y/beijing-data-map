import Link from "next/link";
import { Database } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/20 bg-white/78 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
      
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-10">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Database className="h-7 w-7 text-[#B4232A]" />

          <span className="text-[28px] font-bold tracking-tight text-[#1F2937]">
            北京数据集团
          </span>

          <span className="text-sm text-[#94A3B8]">
            数据地图
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden items-center gap-12 md:flex">
          {[
            { name: "首页", href: "/" },
            { name: "数据目录", href: "/catalog" },
            { name: "API市场", href: "/api" },
            { name: "应用场景", href: "/scenario" },
            { name: "开发者", href: "/developer" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
                text-[15px]
                font-semibold
                tracking-wide
                text-[#334155]
                transition-all
                duration-200
                hover:text-[#B4232A]
                hover:-translate-y-[1px]
              "
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Button */}
        <button className="
          rounded-full
          bg-gradient-to-r
          from-[#B4232A]
          to-[#D4383F]
          px-7
          py-2.5
          text-sm
          font-semibold
          text-white
          shadow-lg
          shadow-red-200/40
          transition-all
          hover:scale-[1.03]
          hover:shadow-red-300/50
        ">
          登录 / 注册
        </button>
      </div>
    </header>
  );
}