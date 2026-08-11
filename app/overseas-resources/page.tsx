import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  Database,
  FileCheck2,
  Fingerprint,
  Globe2,
  Landmark,
  Network,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

type CompanyKey = "orlen" | "metro";

type CompanyProfile = {
  key: CompanyKey;
  name: string;
  englishName: string;
  country: string;
  city: string;
  status: string;
  etlId: string;
  registerNo: string;
  taxNo: string;
  euid: string;
  lei?: string;
  founded: string;
  companyType: string;
  industry: string;
  exchange?: string;
  ticker?: string;
  capital?: string;
  shareCapital?: string;
  trademark?: string;
  shareholder?: string;
  votingRights?: string;
  address: string;
  business: string;
  tags: string[];
  executives: string[];
  finance: { label: string; value: string; note: string }[];
  graphNodes: {
    id: string;
    label: string;
    sublabel: string;
    x: number;
    y: number;
    kind: "company" | "person" | "holder" | "identity" | "market" | "region";
  }[];
  graphEdges: { from: string; to: string; label: string }[];
};

const companies: Record<CompanyKey, CompanyProfile> = {
  orlen: {
    key: "orlen",
    name: "波兰奥伦股份公司",
    englishName: "Orlen S.A.",
    country: "波兰",
    city: "普沃茨克",
    status: "正常存续",
    etlId: "ETL0000028860PL",
    registerNo: "0000028860",
    taxNo: "7740001454",
    euid: "PLKRS.0000028860",
    lei: "259400VVMM70CQREJT74",
    founded: "1999年",
    companyType: "股份公司",
    industry: "能源 / 石油炼化",
    exchange: "华沙证券交易所",
    ticker: "PKN",
    capital: "14.51亿波兰兹罗提",
    shareCapital: "1,160,942,049股",
    trademark: "106个欧盟商标",
    address: "波兰普沃茨克",
    business:
      "业务覆盖原油炼化、油气开采、化工、发电与配电、燃气、商贸零售、物流仓储、工程建设及相关服务。",
    tags: ["能源集团", "上市企业", "LEI已签发", "欧盟商标", "多元化经营"],
    executives: [
      "Ireneusz Fąfara｜董事长",
      "Witold Literacki｜公司事务副董事长",
      "Robert Soszyński｜运营事务副董事长",
      "Wiesław Prugar｜上游事务董事",
      "Marcin Wasilewski｜转型事务董事",
    ],
    finance: [
      { label: "注册资本", value: "14.51亿 PLN", note: "实缴资本同额" },
      { label: "总股本", value: "11.61亿股", note: "每股面值1.25 PLN" },
      { label: "2025净利润", value: "112亿 PLN", note: "较2024年恢复增长" },
      { label: "2025经营现金流", value: "474亿 PLN", note: "经营现金流增强" },
    ],
    graphNodes: [
      { id: "company", label: "Orlen S.A.", sublabel: "波兰奥伦股份公司", x: 50, y: 50, kind: "company" },
      { id: "country", label: "波兰", sublabel: "注册地", x: 15, y: 18, kind: "region" },
      { id: "lei", label: "259400VV…", sublabel: "LEI", x: 84, y: 18, kind: "identity" },
      { id: "board", label: "董事会", sublabel: "治理机构", x: 14, y: 78, kind: "person" },
      { id: "trademark", label: "106个商标", sublabel: "欧盟商标", x: 85, y: 78, kind: "identity" },
      { id: "market", label: "华沙证券交易所", sublabel: "证券市场", x: 50, y: 9, kind: "market" },
      { id: "industry", label: "能源/炼化", sublabel: "核心行业", x: 50, y: 91, kind: "market" },
    ],
    graphEdges: [
      { from: "company", to: "country", label: "注册于" },
      { from: "company", to: "lei", label: "机构识别" },
      { from: "company", to: "board", label: "治理" },
      { from: "company", to: "trademark", label: "持有" },
      { from: "company", to: "market", label: "上市" },
      { from: "company", to: "industry", label: "从事" },
    ],
  },
  metro: {
    key: "metro",
    name: "大都会银行公共有限公司",
    englishName: "METRO BANK PLC",
    country: "英国",
    city: "伦敦",
    status: "正常存续",
    etlId: "ETL06419578UK",
    registerNo: "06419578",
    taxNo: "GB974822778",
    euid: "英国不适用",
    founded: "2007年11月06日",
    companyType: "公开股份有限公司",
    industry: "银行业（64191）",
    exchange: "伦敦证券交易所（母公司）",
    ticker: "MTRO（母公司）",
    shareholder: "Metro Bank Holdings Plc",
    votingRights: "持股及投票权75%–100%",
    address: "伦敦南安普顿路1号，WC1B 5HA",
    business:
      "在英国开展零售银行与商业银行业务，覆盖个人银行、企业银行、私人银行、贷款、资产融资、发票融资等。",
    tags: ["银行业", "英国企业", "集团控股", "LSE关联", "跨境信用样例"],
    executives: [
      "Catherine Martina Doran｜董事",
      "Paul Jonathan Coby｜董事",
      "Marc Stephen Page｜董事",
      "Jaime Gilinski Bacal｜董事",
      "Cristina Alba Ochoa｜董事",
    ],
    finance: [
      { label: "2025基础净利息收入", value: "£460.3m", note: "同比+22%" },
      { label: "2025基础非利息净收入", value: "£124.8m", note: "同比-1%" },
      { label: "2025基础总营业收入", value: "£585.1m", note: "同比+16%" },
      { label: "控股股东权益", value: "75%–100%", note: "持股及投票权" },
    ],
    graphNodes: [
      { id: "company", label: "METRO BANK PLC", sublabel: "大都会银行", x: 50, y: 50, kind: "company" },
      { id: "holder", label: "Metro Bank Holdings", sublabel: "控股公司", x: 18, y: 17, kind: "holder" },
      { id: "country", label: "英国·伦敦", sublabel: "注册地", x: 82, y: 17, kind: "region" },
      { id: "director", label: "董事/管理人员", sublabel: "治理关系", x: 16, y: 80, kind: "person" },
      { id: "tax", label: "GB974822778", sublabel: "税号", x: 84, y: 80, kind: "identity" },
      { id: "market", label: "LSE · MTRO", sublabel: "母公司上市", x: 50, y: 9, kind: "market" },
      { id: "industry", label: "银行业", sublabel: "64191", x: 50, y: 91, kind: "market" },
    ],
    graphEdges: [
      { from: "company", to: "holder", label: "控股75%–100%" },
      { from: "company", to: "country", label: "注册于" },
      { from: "company", to: "director", label: "任职" },
      { from: "company", to: "tax", label: "税务标识" },
      { from: "holder", to: "market", label: "上市" },
      { from: "company", to: "industry", label: "从事" },
    ],
  },
};

const overviewStats = [
  ["8000万+", "企业主体"],
  ["13亿+", "数据记录"],
  ["欧洲", "重点区域"],
  ["2个", "企业样例"],
];

const profileMenu = [
  "企业概览",
  "基本信息",
  "知识图谱",
  "股权治理",
  "管理人员",
  "财务信息",
  "经营信息",
];

function nodeClass(kind: CompanyProfile["graphNodes"][number]["kind"]) {
  if (kind === "company") return "border-red-200 bg-red-50 text-[#C41E3A]";
  if (kind === "holder") return "border-amber-200 bg-amber-50 text-amber-700";
  if (kind === "person") return "border-blue-100 bg-blue-50 text-blue-700";
  if (kind === "market") return "border-violet-100 bg-violet-50 text-violet-700";
  if (kind === "region") return "border-emerald-100 bg-emerald-50 text-emerald-700";
  return "border-slate-200 bg-white text-slate-700";
}

function RelationshipGraph({ company }: { company: CompanyProfile }) {
  const nodeMap = Object.fromEntries(company.graphNodes.map((node) => [node.id, node]));

  return (
    <div className="relative h-[440px] overflow-hidden rounded-3xl border border-slate-100 bg-[radial-gradient(circle_at_center,#ffffff_0%,#f8fafc_72%)]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {company.graphEdges.map((edge, index) => {
          const from = nodeMap[edge.from];
          const to = nodeMap[edge.to];
          return (
            <g key={`${edge.from}-${edge.to}`}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#cbd5e1"
                strokeWidth="0.45"
                strokeDasharray={index % 2 === 0 ? "2 1" : undefined}
              />
              <circle cx={to.x} cy={to.y} r="0.75" fill="#C41E3A" opacity="0.55" />
            </g>
          );
        })}
      </svg>

      {company.graphNodes.map((node) => (
        <div
          key={node.id}
          className={`absolute min-w-[116px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border px-3 py-2.5 text-center shadow-sm ${nodeClass(
            node.kind
          )}`}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <div className={node.kind === "company" ? "text-sm font-black" : "text-xs font-black"}>
            {node.label}
          </div>
          <div className="mt-1 text-[10px] opacity-65">{node.sublabel}</div>
        </div>
      ))}

      <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-medium text-slate-400 shadow-sm">
        企业关系知识图谱 · 样例
      </div>
    </div>
  );
}

type PageProps = {
  searchParams: Promise<{
    company?: string;
  }>;
};

export default async function OverseasResourcesPage({ searchParams }: PageProps) {
  const query = await searchParams;
  const selectedKey: CompanyKey =
    query.company === "metro" ? "metro" : "orlen";
  const company = companies[selectedKey];

  return (
    <main className="min-h-screen bg-[#F7F8FA] pb-16 pt-24 text-slate-900">
      {/* 头部 */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-[#C41E3A]">
              首页
            </Link>
            <span>/</span>
            <span className="text-slate-600">境外企业数据资源</span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-[#C41E3A]">
                <Globe2 className="h-4 w-4" />
                境外企业数据
              </div>

              <h1 className="text-3xl font-black tracking-tight">
                欧洲企业信息与信用数据
              </h1>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                参考企业信息查询平台的展示逻辑，以“企业画像 + 关系图谱 + 基础信息 +
                股权治理 + 管理人员 + 财务经营”的方式展示境外企业数据能力。
              </p>
            </div>

            <span className="w-fit rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-500">
              储备待接入
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-8 px-6 py-8 lg:px-10">
        {/* 总体资源规模 */}
        <section className="grid gap-4 md:grid-cols-4">
          {overviewStats.map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-slate-100 bg-white px-6 py-5 shadow-sm"
            >
              <div className="text-[24px] font-black leading-none text-[#C41E3A]">
                {value}
              </div>
              <div className="mt-2 text-sm font-bold text-slate-700">{label}</div>
            </div>
          ))}
        </section>

        {/* 搜索/样例企业切换 */}
        <section className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="flex h-12 flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4">
              <Search className="h-5 w-5 text-slate-400" />
              <span className="text-sm text-slate-400">
                搜索欧洲企业名称、注册编号、税号、LEI、ETL-ID
              </span>
              <span className="ml-auto rounded-xl bg-[#C41E3A] px-4 py-2 text-xs font-bold text-white">
                企业查询
              </span>
            </div>

            <div className="flex gap-2">
              {Object.values(companies).map((item) => (
                <Link
                  key={item.key}
                  href={`/overseas-resources?company=${item.key}`}
                  className={`rounded-xl px-4 py-3 text-sm font-bold transition ${
                    item.key === selectedKey
                      ? "bg-[#C41E3A] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-[#C41E3A]"
                  }`}
                >
                  {item.country}样例
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 企业抬头 */}
        <section className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#C41E3A] text-white">
                <Building2 className="h-8 w-8" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-black">{company.name}</h2>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    {company.status}
                  </span>
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-400">
                  {company.englishName}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {company.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid min-w-[330px] grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xs text-slate-400">ETL-ID</div>
                <div className="mt-1 text-sm font-black text-slate-700">{company.etlId}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xs text-slate-400">注册编号</div>
                <div className="mt-1 text-sm font-black text-slate-700">{company.registerNo}</div>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
            {profileMenu.map((item, index) => (
              <a
                key={item}
                href={
                  index === 0
                    ? "#overview"
                    : index === 1
                    ? "#basic"
                    : index === 2
                    ? "#graph"
                    : index === 3
                    ? "#governance"
                    : index === 4
                    ? "#executives"
                    : index === 5
                    ? "#finance"
                    : "#business"
                }
                className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-600 transition hover:bg-red-50 hover:text-[#C41E3A]"
              >
                {item}
              </a>
            ))}
          </div>
        </section>

        {/* 企业概览 */}
        <section id="overview" className="grid scroll-mt-28 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
            <div className="mb-5 flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-[#C41E3A]" />
              <h2 className="text-xl font-black">企业概览</h2>
            </div>

            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {[
                ["国家/地区", `${company.country} · ${company.city}`],
                ["成立时间", company.founded],
                ["企业类型", company.companyType],
                ["所属行业", company.industry],
                ["注册编号", company.registerNo],
                ["税号", company.taxNo],
                ["EUID", company.euid],
                ["LEI", company.lei ?? "—"],
                ["证券交易所", company.exchange ?? "—"],
                ["股票代码", company.ticker ?? "—"],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-slate-100 pb-4">
                  <div className="text-xs text-slate-400">{label}</div>
                  <div className="mt-1.5 text-sm font-bold text-slate-700">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
            <div className="mb-5 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#C41E3A]" />
              <h2 className="text-xl font-black">企业信息标签</h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                ["身份信息", "已覆盖"],
                ["注册信息", "已覆盖"],
                ["治理关系", "已覆盖"],
                ["管理人员", "已覆盖"],
                ["财务经营", "已覆盖"],
                ["知识产权", selectedKey === "orlen" ? "已覆盖" : "部分覆盖"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-xs text-slate-400">{label}</div>
                  <div className="mt-1 text-sm font-black text-[#C41E3A]">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 知识图谱 */}
        <section id="graph" className="scroll-mt-28">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C41E3A]">
                <Network className="h-4 w-4" />
                企业关系
              </div>
              <h2 className="text-2xl font-black">企业知识图谱</h2>
              <p className="mt-2 text-sm text-slate-500">
                以企业为中心关联股东、管理人员、机构标识、注册地、行业及证券市场等关系。
              </p>
            </div>

            <span className="hidden rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-500 sm:block">
              样例关系图
            </span>
          </div>

          <RelationshipGraph company={company} />
        </section>

        {/* 基本信息 */}
        <section id="basic" className="scroll-mt-28 rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
          <div className="mb-5 flex items-center gap-2">
            <Fingerprint className="h-5 w-5 text-[#C41E3A]" />
            <h2 className="text-xl font-black">工商与身份信息</h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-100">
            {[
              ["企业名称", company.name],
              ["英文名称", company.englishName],
              ["ETL-ID", company.etlId],
              ["注册编号", company.registerNo],
              ["税号", company.taxNo],
              ["EUID", company.euid],
              ["LEI", company.lei ?? "—"],
              ["注册地址", company.address],
              ["企业类型", company.companyType],
              ["经营状态", company.status],
              ["成立时间", company.founded],
              ["所属行业", company.industry],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`grid grid-cols-[160px_1fr] ${
                  index === 0 ? "" : "border-t border-slate-100"
                }`}
              >
                <div className="bg-slate-50 px-5 py-4 text-sm font-bold text-slate-500">
                  {label}
                </div>
                <div className="px-5 py-4 text-sm font-semibold text-slate-700">{value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 股权治理 + 管理人员 */}
        <section className="grid gap-6 lg:grid-cols-2">
          <div id="governance" className="scroll-mt-28 rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
            <div className="mb-5 flex items-center gap-2">
              <Landmark className="h-5 w-5 text-[#C41E3A]" />
              <h2 className="text-xl font-black">股权与治理</h2>
            </div>

            <div className="space-y-3">
              {selectedKey === "orlen" ? (
                <>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-xs text-slate-400">注册资本</div>
                    <div className="mt-1 text-sm font-black">{company.capital}</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-xs text-slate-400">总股本</div>
                    <div className="mt-1 text-sm font-black">{company.shareCapital}</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-xs text-slate-400">治理结构</div>
                    <div className="mt-1 text-sm font-bold leading-6 text-slate-700">
                      董事会为代表机构，报告中包含签字及决策权限信息。
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-xs text-slate-400">知识产权</div>
                    <div className="mt-1 text-sm font-black">{company.trademark}</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-xs text-slate-400">控股股东</div>
                    <div className="mt-1 text-sm font-black">{company.shareholder}</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-xs text-slate-400">持股及投票权</div>
                    <div className="mt-1 text-sm font-black">{company.votingRights}</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-xs text-slate-400">上市关系</div>
                    <div className="mt-1 text-sm font-bold leading-6 text-slate-700">
                      母公司大都会银行控股有限公司为伦敦证券交易所上市主体，股票代码MTRO。
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div id="executives" className="scroll-mt-28 rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
            <div className="mb-5 flex items-center gap-2">
              <Users className="h-5 w-5 text-[#C41E3A]" />
              <h2 className="text-xl font-black">主要管理人员</h2>
            </div>

            <div className="space-y-2.5">
              {company.executives.map((person, index) => {
                const [name, role] = person.split("｜");
                return (
                  <div
                    key={person}
                    className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black text-[#C41E3A] shadow-sm">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-sm font-black text-slate-800">{name}</div>
                      <div className="mt-0.5 text-xs text-slate-400">{role}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 财务经营 */}
        <section id="finance" className="scroll-mt-28">
          <div className="mb-5 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-[#C41E3A]" />
            <h2 className="text-2xl font-black">财务与经营指标</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {company.finance.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="text-xs font-bold text-slate-400">{item.label}</div>
                <div className="mt-3 text-xl font-black text-[#C41E3A]">{item.value}</div>
                <div className="mt-2 text-xs leading-5 text-slate-500">{item.note}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="business" className="scroll-mt-28 rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
          <div className="mb-5 flex items-center gap-2">
            <Database className="h-5 w-5 text-[#C41E3A]" />
            <h2 className="text-xl font-black">经营范围与业务信息</h2>
          </div>
          <p className="text-sm leading-7 text-slate-600">{company.business}</p>
        </section>

        {/* 接入状态 */}
        <section className="rounded-3xl border border-red-100 bg-red-50/40 p-6">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C41E3A]" />
              <div>
                <div className="font-black text-slate-800">当前为数据能力样例展示</div>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  境外企业数据仍处于资源储备和平台接入准备阶段，当前页面基于已形成的欧洲企业标准化信任报告样例展示数据颗粒度和关系能力。
                </p>
              </div>
            </div>
            <span className="shrink-0 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-500">
              数据接入建设中
            </span>
          </div>
        </section>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#C41E3A]"
        >
          <ArrowLeft className="h-4 w-4" />
          返回首页
        </Link>
      </div>
    </main>
  );
}
