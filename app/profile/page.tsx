import Link from "next/link";
import {
  Building2,
  Phone,
  Mail,
  ShieldCheck,
  FileText,
  Star,
  Clock,
  ArrowRight,
} from "lucide-react";

const stats = [
  { num: "3", label: "我的申请", href: "/profile/applications" },
  { num: "8", label: "我的收藏", href: "/profile/favorites" },
  { num: "12", label: "访问记录", href: "/profile/history" },
];

const quickActions = [
  {
    title: "我的申请",
    desc: "查看数据资源申请进度",
    href: "/profile/applications",
    icon: FileText,
  },
  {
    title: "我的收藏",
    desc: "管理已收藏资源产品",
    href: "/profile/favorites",
    icon: Star,
  },
  {
    title: "访问记录",
    desc: "查看近期访问内容",
    href: "/profile/history",
    icon: Clock,
  },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#F5F7FB] pt-[74px]">
      <section className="bg-gradient-to-r from-[#111827] via-[#1F2937] to-[#7F1D1D] px-10 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm tracking-[0.3em] text-red-200">
            ACCOUNT CENTER
          </p>
          <h1 className="text-4xl font-black">个人信息中心</h1>
          <p className="mt-4 text-white/75">
            管理账户资料、数据申请、产品订阅与访问记录
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-3 gap-6 px-10 py-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-[#B4232A] to-[#D4383F] text-3xl font-black text-white">
            王
          </div>

          <div className="mt-5 text-center">
            <h2 className="text-2xl font-black text-slate-900">王楠</h2>
            <p className="mt-1 text-sm text-slate-500">企业用户</p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Building2 className="h-5 w-5 text-[#B4232A]" />
              北京数据集团合作用户
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Phone className="h-5 w-5 text-[#B4232A]" />
              151****1812
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Mail className="h-5 w-5 text-[#B4232A]" />
              wangnoran@gmail.com
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-600">
              <ShieldCheck className="h-5 w-5 text-[#B4232A]" />
              已完成基础认证
            </div>
          </div>

          <Link
            href="/dashboard"
            className="mt-8 flex h-12 items-center justify-center rounded-xl bg-[#B4232A] text-sm font-bold text-white"
          >
            返回用户中心
          </Link>
        </div>

        <div className="col-span-2 space-y-6">
          <div className="grid grid-cols-3 gap-6">
            {stats.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-3xl font-black text-slate-900">
                  {item.num}
                </div>
                <div className="mt-1 flex items-center justify-between text-sm text-slate-500">
                  {item.label}
                  <ArrowRight className="h-4 w-4 text-[#B4232A]" />
                </div>
              </Link>
            ))}
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <h2 className="mb-5 text-xl font-bold text-slate-900">
              账户信息
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["用户姓名", "王楠"],
                ["用户类型", "企业用户"],
                ["认证状态", "已认证"],
                ["所属机构", "北京数据集团合作用户"],
                ["注册时间", "2026-06-09"],
                ["账户状态", "正常"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                >
                  <div className="text-sm text-slate-500">{label}</div>
                  <div className="mt-1 font-bold text-slate-900">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <h2 className="mb-5 text-xl font-bold text-slate-900">
              常用功能
            </h2>

            <div className="grid grid-cols-3 gap-4">
              {quickActions.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-red-200 hover:bg-white hover:shadow-lg"
                  >
                    <Icon className="mb-4 h-6 w-6 text-[#B4232A]" />
                    <div className="font-bold text-slate-900">
                      {item.title}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      {item.desc}
                    </div>
                    <div className="mt-4 flex items-center text-sm font-bold text-[#B4232A]">
                      进入
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}