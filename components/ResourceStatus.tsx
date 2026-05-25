"use client";

import { Activity, CheckCircle, AlertCircle, Clock, RefreshCw, Server } from "lucide-react";

const statusData = {
  summary: {
    total: 12680,
    online: 11842,
    offline: 324,
    updating: 514,
  },
  recentUpdates: [
    { name: "交通流量实时数据", status: "online", time: "刚刚" },
    { name: "空气质量指数", status: "online", time: "2分钟前" },
    { name: "公交到站预测", status: "updating", time: "更新中" },
    { name: "水质监测数据", status: "online", time: "5分钟前" },
    { name: "能耗统计月报", status: "offline", time: "维护中" },
    { name: "人才招聘数据", status: "online", time: "10分钟前" },
  ],
  systemHealth: [
    { name: "API网关", status: "healthy", uptime: "99.97%" },
    { name: "数据仓库", status: "healthy", uptime: "99.95%" },
    { name: "文件存储", status: "healthy", uptime: "99.99%" },
    { name: "计算集群", status: "warning", uptime: "99.82%" },
  ],
};

const statusConfig = {
  online: { color: "text-green-500", bg: "bg-green-500", icon: CheckCircle, label: "在线" },
  offline: { color: "text-red-500", bg: "bg-red-500", icon: AlertCircle, label: "离线" },
  updating: { color: "text-[#D4A574]", bg: "bg-[#D4A574]", icon: RefreshCw, label: "更新中" },
  healthy: { color: "text-green-500", bg: "bg-green-500", icon: CheckCircle, label: "正常" },
  warning: { color: "text-yellow-500", bg: "bg-yellow-500", icon: AlertCircle, label: "告警" },
};

export default function ResourceStatus() {
  const onlineRate = ((statusData.summary.online / statusData.summary.total) * 100).toFixed(1);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <Activity className="w-6 h-6 text-green-500" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">资源状态</h2>
              <p className="text-gray-500 text-sm">数据资源实时运行状态监控</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-green-600 font-medium">系统正常</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Summary Stats */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-4">资源概览</h3>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="text-center p-3 rounded-lg bg-gray-50">
                <div className="text-2xl font-bold text-gray-900">{statusData.summary.total.toLocaleString()}</div>
                <div className="text-xs text-gray-500 mt-1">总数据集</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-green-50">
                <div className="text-2xl font-bold text-green-600">{onlineRate}%</div>
                <div className="text-xs text-gray-500 mt-1">在线率</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-orange-50">
                <div className="text-2xl font-bold text-[#D4A574]">{statusData.summary.updating}</div>
                <div className="text-xs text-gray-500 mt-1">更新中</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-red-50">
                <div className="text-2xl font-bold text-red-500">{statusData.summary.offline}</div>
                <div className="text-xs text-gray-500 mt-1">离线</div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">在线状态分布</span>
              </div>
              <div className="h-2 rounded-full bg-gray-100 overflow-hidden flex">
                <div className="bg-green-500 h-full" style={{ width: `${onlineRate}%` }} />
                <div className="bg-[#D4A574] h-full" style={{ width: `${(statusData.summary.updating / statusData.summary.total * 100)}%` }} />
                <div className="bg-red-500 h-full" style={{ width: `${(statusData.summary.offline / statusData.summary.total * 100)}%` }} />
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500" />在线</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#D4A574]" />更新中</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500" />离线</span>
              </div>
            </div>
          </div>

          {/* Recent Updates */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-4">最近更新</h3>
            <div className="space-y-3">
              {statusData.recentUpdates.map((item) => {
                const config = statusConfig[item.status as keyof typeof statusConfig];
                const StatusIcon = config.icon;
                return (
                  <div key={item.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <StatusIcon className={`w-4 h-4 shrink-0 ${config.color}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 truncate">{item.name}</p>
                    </div>
                    <span className="text-xs text-gray-400 shrink-0">{item.time}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* System Health */}
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Server className="w-4 h-4 text-gray-500" />
              <h3 className="text-sm font-medium text-gray-500">系统健康</h3>
            </div>
            <div className="space-y-3">
              {statusData.systemHealth.map((item) => {
                const config = statusConfig[item.status as keyof typeof statusConfig];
                return (
                  <div key={item.name} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${config.bg}`} />
                      <span className="text-sm text-gray-900">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs ${config.color}`}>{config.label}</span>
                      <span className="text-xs text-gray-400">{item.uptime}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">上次检查</span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  30秒前
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}