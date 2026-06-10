"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
  localStorage.setItem("isLogin", "true");
  localStorage.setItem("username", "王楠");
  localStorage.setItem("userType", "企业用户");

  window.location.href = "/dashboard";
};

  return (
    <main className="relative min-h-screen overflow-hidden bg-white pt-[74px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?q=80&w=2400&auto=format&fit=crop"
          alt="Beijing CBD"
          className="h-full w-full object-cover opacity-100 brightness-105 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,30,58,0.16),rgba(0,0,0,0.28))]" />
      </div>

      <img
        src="https://mgx-backend-cdn.metadl.com/generate/images/1258690/2026-05-20/o6g7aoqaagra/decoration-chinese-cloud.png"
        alt=""
        className="absolute right-10 top-28 h-32 w-32 opacity-20"
      />

      <img
        src="https://mgx-backend-cdn.metadl.com/generate/images/1258690/2026-05-20/o6g7aoqaagra/decoration-chinese-cloud.png"
        alt=""
        className="absolute bottom-20 left-10 h-24 w-24 opacity-15"
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl grid-cols-1 items-center gap-20 px-10 lg:grid-cols-2">
        <section className="text-white">
          <div className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4A574]">
            BEIJING DATA GROUP
          </div>

          <h1 className="mb-6 text-6xl font-black leading-tight tracking-tight text-[#F8FAFC] drop-shadow-[0_6px_30px_rgba(0,0,0,0.45)]">
            北京数据集团
            <span className="block text-[#D4383F]">数据地图</span>
          </h1>

          <p className="mb-10 max-w-xl text-xl leading-9 text-white/90 drop-shadow">
            汇聚全国优质数据资源，打造面向产业发展的数据赋能入口。
          </p>

          <div className="grid max-w-[520px] grid-cols-3 gap-4">
            {[
              ["12,680+", "数据资源"],
              ["3,420+", "数据产品"],
              ["580万+", "活跃度"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/25 bg-white/15 p-5 text-center shadow-lg backdrop-blur-md"
              >
                <div className="text-2xl font-bold text-white">{num}</div>
                <div className="mt-1 text-sm text-white/75">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="ml-auto w-[430px] rounded-[28px] border border-white/50 bg-white/92 p-8 shadow-2xl backdrop-blur-xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">
              统一认证中心
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              欢迎登录北京数据集团数据地图
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                手机号 / 邮箱
              </label>
              <input
                type="text"
                placeholder="请输入手机号或邮箱"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                密码
              </label>
              <input
                type="password"
                placeholder="请输入密码"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                验证码
              </label>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="请输入验证码"
                  className="h-12 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100"
                />

                <button
                  type="button"
                  onClick={() => {
                    alert("验证码已发送：123456");
                  }}
                  className="h-12 rounded-xl border border-red-200 px-4 text-sm font-bold text-red-600 hover:bg-red-50"
                >
                  获取验证码
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleLogin}
              className="h-12 w-full rounded-xl bg-gradient-to-r from-[#B4232A] to-[#D4383F] text-base font-bold text-white shadow-lg shadow-red-500/25 transition hover:scale-[1.02]"
            >
              登录
            </button>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm">
            <Link href="/" className="text-slate-500 hover:text-red-600">
              返回首页
            </Link>

            <Link href="/register" className="font-bold text-red-600">
              立即注册
            </Link>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <p className="mb-4 text-center text-xs text-slate-400">
              其他登录方式
            </p>

            <div className="grid grid-cols-3 gap-3">
              {["政务认证", "企业用户", "个人用户"].map((item) => (
                <button
                  type="button"
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white py-3 text-xs font-semibold text-slate-600 hover:border-red-300 hover:text-red-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}