"use client";

import { useEffect, useState } from "react";

const DEMO_PASSWORD = "bjdatamap2026";

export default function LoginGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("bjdatamap_authed");
    if (saved === "true") setAuthed(true);
  }, []);

  const handleLogin = () => {
    if (password === DEMO_PASSWORD) {
      localStorage.setItem("bjdatamap_authed", "true");
      setAuthed(true);
    } else {
      setError("密码不正确，请重新输入");
    }
  };

  if (authed) return <>{children}</>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50/40 to-gray-100 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl border border-red-100">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C41E3A]/10 text-[#C41E3A] text-3xl">
            ⬢
          </div>
          <h1 className="text-2xl font-bold text-gray-950">北京数据地图</h1>
          <p className="mt-2 text-sm text-gray-500">内部 Demo 访问验证</p>
        </div>

        <input
          type="password"
          placeholder="请输入访问密码"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleLogin();
          }}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#C41E3A]"
        />

        {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

        <button
          onClick={handleLogin}
          className="mt-5 w-full rounded-xl bg-[#C41E3A] py-3 text-sm font-bold text-white hover:bg-[#A91830]"
        >
          进入系统
        </button>

        <p className="mt-5 text-center text-xs text-gray-400">
          仅用于内部演示与产品原型验证
        </p>
      </div>
    </div>
  );
}