"use client";

import Link from "next/link";
import { Database } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "首页", href: "/" },
  { name: "数据目录", href: "/data-catalog" },
  { name: "授权运营资源", href: "/authorized-resources" },
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
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-100 bg-white/90 shadow-[0_4px_30px_rgba(0,0,0,0.04)] backdrop-blur-2xl">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-10">
        <Link href="/" className="group flex items-center gap-3 transition-all">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#C41E3A]">
            <Database className="h-6 w-6 text-white" />
          </div>

          <div className="leading-tight">
            <div className="text-[22px] font-black tracking-tight text-slate-900">
              北京数据集团
            </div>
            <div className="text-xs font-medium text-slate-400">
              数据地图
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[15px] font-bold tracking-wide text-slate-600 transition hover:text-[#C41E3A]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {isLogin ? (
          <div className="flex items-center gap-4">
            <Link href="/profile" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C41E3A] text-sm font-bold text-white">
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
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:border-red-300 hover:text-red-600"
            >
              退出
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="rounded-full bg-[#C41E3A] px-7 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-200/40 transition hover:scale-105"
          >
            登录 / 注册
          </Link>
        )}
      </div>
    </header>
  );
}