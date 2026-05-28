"use client";

import { useEffect, useState } from "react";
import { Lock, Database } from "lucide-react";

const PASSWORD = "BJData2026";

export default function LoginGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("datamap_authed") === "true") {
      setAuthed(true);
    }
  }, []);

  const handleLogin = () => {
    if (password === PASSWORD) {
      localStorage.setItem("datamap_authed", "true");
      setAuthed(true);
    } else {
      setError("访问密码不正确，请重新输入");
    }
  };

  if (authed) return <>{children}</>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 flex items-center justify-center px-6">
      <div className="w-full max-w-[460px] rounded-[32px] border border-red-100 bg-white p-8 shadow-2xl">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C41E3A]/10">
            <Database className="h-9 w-9 text-[#C41E3A]" />
          </div>

          <h1 className="text-3xl font-black text-gray-950">
            北京数据集团
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            数据地图演示系统
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-bold text-gray-700">
              访问密码
            </label>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleLogin();
                }}
                placeholder="请输入访问密码"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-4 text-sm outline-none transition focus:border-[#C41E3A] focus:bg-white"
              />
            </div>

            {error && (
              <p className="mt-2 text-sm text-[#C41E3A]">
                {error}
              </p>
            )}
          </div>

          <button
            onClick={handleLogin}
            className="w-full rounded-2xl bg-[#C41E3A] py-4 text-sm font-bold text-white shadow-lg shadow-red-100 transition hover:bg-[#A91830]"
          >
            进入数据地图
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          本系统仅用于内部演示，请勿外传
        </p>
      </div>
    </div>
  );
}