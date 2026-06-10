"use client";

import Link from "next/link";
import { Database } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "首页", href: "/" },
  { name: "数据目录", href: "/data-catalog" },
  { name: "数据资源", href: "/data-resources" },
  { name: "数据产品", href: "/data-products" },
  { name: "数据赋能产业", href: "/industry" },
];

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("用户");

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin");
    const user = localStorage.getItem("username");

    setIsLogin(loginStatus === "true");
    setUsername(user || "王楠");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("username");
    window.location.href = "/";
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-10">
        <Link href="/" className="group flex items-center gap-3 transition-all">
          <Database className="h-7 w-7 text-[#B4232A]" />
          <span className="text-[28px] font-bold tracking-tight text-[#1F2937]">
            北京数据集团
          </span>
          <span className="text-sm text-[#94A3B8]">数据地图</span>
        </Link>

        <nav className="hidden items-center gap-12 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[15px] font-semibold tracking-wide text-[#334155] transition hover:text-[#B4232A]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {isLogin ? (
          <div className="flex items-center gap-4">
            <Link href="/profile" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#B4232A] to-[#D4383F] text-sm font-bold text-white">
                王
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold text-slate-800">
                  {username}
                </div>
                <div className="text-xs text-slate-400">企业用户</div>
              </div>
            </Link>

            <button
              onClick={handleLogout}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-red-300 hover:text-red-600"
            >
              退出
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="rounded-full bg-gradient-to-r from-[#B4232A] to-[#D4383F] px-7 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-200/40 transition hover:scale-105"
          >
            登录 / 注册
          </Link>
        )}
      </div>
    </header>
  );
}