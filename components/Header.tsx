"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Database,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "首页", href: "/" },
  { name: "数据目录", href: "/data-catalog" },
  { name: "数据产品", href: "/data-products" },
  { name: "数据赋能产业", href: "/industry" },
];

const resourceNavItems = [
  {
    name: "数据资源体系",
    description: "查看北京市公共数据、国家部委数据及境外企业数据资源布局",
    href: "/data-resources",
    icon: "database",
  },
  {
    name: "首批授权资源",
    description: "查看首批授权运营范围内的9个领域、40类公共数据资源",
    href: "/authorized-resources",
    icon: "shield",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [resourceMenuOpen, setResourceMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isResourceActive =
    pathname.startsWith("/data-resources") ||
    pathname.startsWith("/authorized-resources");

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-100 bg-white/85 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-2xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C41E3A] to-[#8F1428] shadow-md shadow-red-200/50 transition group-hover:scale-105">
            <Database className="h-6 w-6 text-white" />
          </div>

          <div className="leading-tight">
            <div className="text-[22px] font-black tracking-tight text-slate-950">
              北京数据集团
            </div>

            <div className="mt-0.5 text-xs font-semibold tracking-[0.28em] text-slate-400">
              DATA MAP
            </div>
          </div>
        </Link>

        {/* 主导航 */}
        <nav className="hidden items-center gap-1 rounded-full bg-slate-50 p-1 md:flex">
          {navItems.slice(0, 2).map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={[
                  "relative rounded-full px-4 py-2 text-[14px] font-bold transition-all",
                  active
                    ? "bg-white text-[#C41E3A] shadow-sm"
                    : "text-slate-600 hover:bg-white hover:text-[#C41E3A]",
                ].join(" ")}
              >
                {item.name}
              </Link>
            );
          })}

          {/* 资源体系下拉菜单 */}
          <div
            className="relative"
            onMouseEnter={() => setResourceMenuOpen(true)}
            onMouseLeave={() => setResourceMenuOpen(false)}
          >
            <button
              type="button"
              onClick={() => setResourceMenuOpen((open) => !open)}
              className={[
                "flex items-center gap-1 rounded-full px-4 py-2 text-[14px] font-bold transition-all",
                isResourceActive
                  ? "bg-white text-[#C41E3A] shadow-sm"
                  : "text-slate-600 hover:bg-white hover:text-[#C41E3A]",
              ].join(" ")}
              aria-expanded={resourceMenuOpen}
              aria-haspopup="menu"
            >
              资源体系

              <ChevronDown
                className={[
                  "h-4 w-4 transition-transform",
                  resourceMenuOpen ? "rotate-180" : "",
                ].join(" ")}
              />
            </button>

            {resourceMenuOpen && (
              <div className="absolute left-1/2 top-full w-[330px] -translate-x-1/2 pt-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
                  {resourceNavItems.map((item) => {
                    const active = isActive(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setResourceMenuOpen(false)}
                        className={[
                          "flex gap-3 rounded-xl px-4 py-3 transition",
                          active
                            ? "bg-red-50"
                            : "hover:bg-slate-50",
                        ].join(" ")}
                      >
                        <div
                          className={[
                            "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                            active
                              ? "bg-[#C41E3A] text-white"
                              : "bg-slate-100 text-slate-500",
                          ].join(" ")}
                        >
                         {item.icon === "database" ? (
  <Database className="h-4 w-4" />
) : (
  <ShieldCheck className="h-4 w-4" />
)}
                        </div>

                        <div>
                          <div
                            className={[
                              "text-sm font-bold",
                              active
                                ? "text-[#C41E3A]"
                                : "text-slate-800",
                            ].join(" ")}
                          >
                            {item.name}
                          </div>

                          <div className="mt-1 text-xs leading-5 text-slate-500">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {navItems.slice(2).map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={[
                  "relative rounded-full px-4 py-2 text-[14px] font-bold transition-all",
                  active
                    ? "bg-white text-[#C41E3A] shadow-sm"
                    : "text-slate-600 hover:bg-white hover:text-[#C41E3A]",
                ].join(" ")}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* 右侧状态 */}
        <div className="hidden shrink-0 items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A] lg:flex">
          <ShieldCheck className="h-4 w-4" />
          数据门户
        </div>
      </div>
    </header>
  );
}