"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Database, ShieldCheck } from "lucide-react";

const navItems = [
  { name: "首页", href: "/" },
  { name: "数据目录", href: "/data-catalog" },
  { name: "授权运营资源", href: "/authorized-resources" },
  { name: "数据产品", href: "/data-products" },
  { name: "数据赋能产业", href: "/industry" },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-100 bg-white/85 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-2xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-10">
        <Link href="/" className="group flex items-center gap-3">
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

        <nav className="hidden items-center gap-1 rounded-full bg-slate-50 p-1 md:flex">
          {navItems.map((item) => {
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

        <div className="hidden items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-bold text-[#C41E3A] md:flex">
          <ShieldCheck className="h-4 w-4" />
          数据门户
        </div>
      </div>
    </header>
  );
}