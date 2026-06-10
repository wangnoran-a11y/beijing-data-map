import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb]">
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(10,20,40,0.75), rgba(10,20,40,0.35)), url('/hero-beijing.jpg')",
        }}
      >
        <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-between px-10">
          <section className="max-w-xl text-white">
            <div className="mb-6 text-sm tracking-[0.35em] text-red-300">
              BEIJING DATA GROUP
            </div>

            <h1 className="mb-6 text-6xl font-extrabold leading-tight">
              北京数据集团
              <span className="block text-red-500">数据地图</span>
            </h1>

            <p className="text-xl text-white/85">
              面向政府、企业、科研机构和开发者，提供统一的数据资源注册入口。
            </p>
          </section>

          <section className="w-[470px] rounded-[28px] border border-white/40 bg-white/90 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-extrabold text-slate-900">
                用户注册
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                创建账号后可申请数据产品与服务
              </p>
            </div>

            <div className="mb-5 grid grid-cols-5 gap-2">
              {["政府机构", "企业用户", "科研机构", "开发者", "个人用户"].map(
                (item) => (
                  <button
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-600 hover:border-red-400 hover:text-red-600"
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input className="input" placeholder="用户名" />
              <input className="input" placeholder="手机号" />
              <input className="input col-span-2" placeholder="邮箱" />
              <input className="input col-span-2" placeholder="单位名称" />

              <select className="input col-span-2">
                <option>请选择所属行业</option>
                <option>金融</option>
                <option>医疗健康</option>
                <option>交通出行</option>
                <option>教育科研</option>
                <option>农业农村</option>
                <option>社会民生</option>
                <option>其他</option>
              </select>

              <input className="input" type="password" placeholder="密码" />
              <input className="input" type="password" placeholder="确认密码" />

              <div className="col-span-2 flex gap-3">
                <input className="input flex-1" placeholder="短信验证码" />
                <button className="h-12 rounded-xl border border-red-200 px-4 text-sm font-bold text-red-600 hover:bg-red-50">
                  获取验证码
                </button>
              </div>
            </div>

            <button className="mt-6 h-12 w-full rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-base font-bold text-white shadow-lg shadow-red-500/25 transition hover:scale-[1.02]">
              立即注册
            </button>

            <div className="mt-6 flex items-center justify-between text-sm">
              <Link href="/" className="text-slate-500 hover:text-red-600">
                返回首页
              </Link>

              <Link href="/login" className="font-bold text-red-600">
                已有账号，去登录
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}