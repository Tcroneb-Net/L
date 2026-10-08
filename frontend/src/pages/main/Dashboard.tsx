import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Plus, Activity, TrendingUp, AlertTriangle, Clock, RefreshCw, ArrowUpRight, ShieldCheck, Zap, Bell, PhoneCall, LockKeyhole, Settings2 } from "lucide-react";
import { AppLayout } from "@/layouts";
import { MonitorCard } from "@/components/main";
import { Breadcrumb } from "@/components/ui";
import { useAuthStore } from "@/store";
import type { Monitor } from "@/types";
import api from "@/config/api";

function StatCard({ label, value, icon: Icon, color }: { label: string; value: number | string; icon: React.ElementType; color: string }) {
  return (
    <div className="bg-background border border-line rounded-xl p-4 flex items-center gap-4">
      <div className={`w-10 h-10 rounded-xl center ${color}`}>
        <Icon size={20} />
      </div>
      <div>
        <p className="text-2xl font-bold font-outfit">{value}</p>
        <p className="text-xs text-muted">{label}</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { user } = useAuthStore();
  const qc = useQueryClient();

  const { data: monitors, isLoading, isFetching } = useQuery<Monitor[]>({
    queryKey: ["monitors"],
    queryFn: () => api.get("/monitors").then(r => r.data),
    refetchInterval: 5000,
  });

  const up    = monitors?.filter(m => m.last_status === "up").length ?? 0;
  const down  = monitors?.filter(m => m.last_status === "down").length ?? 0;
  const avgUptime = monitors?.length
    ? (monitors.reduce((s, m) => s + parseFloat(String(m.uptime_pct ?? 100)), 0) / monitors.length).toFixed(1)
    : "100.0";

  const recentMonitors = monitors ? [...monitors].sort((a, b) =>
    new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime()
  ).slice(0, 3) : [];

  return (
    <AppLayout>
      <div className="flex flex-col gap-6">
        <Breadcrumb crumbs={[{ label: "Dashboard" }]} />
        <section className="relative overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-2xl shadow-cyan-950/10 sm:p-7 dark:bg-slate-900">
          <div className="absolute -right-20 -top-24 size-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 size-56 rounded-full bg-violet-500/15 blur-3xl" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300"><ShieldCheck size={15} /> Live operations</div>
              <h1 className="text-2xl font-bold font-outfit sm:text-4xl">Good to see you, {user?.name?.split(" ")[0] || "there"}.</h1>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">Watch your websites, APIs, and customer journeys with Hostify Monitor.</p>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:flex">
              <button onClick={() => qc.invalidateQueries({ queryKey: ["monitors"] })} disabled={isFetching} className="btn h-11 rounded-xl border border-white/15 bg-white/10 px-3 text-sm text-white hover:bg-white/15" title="Refresh monitors"><RefreshCw size={15} className={isFetching ? "animate-spin" : ""} /> Refresh</button>
              <Link to="/monitors/new" className="btn h-11 rounded-xl bg-cyan-400 px-4 text-sm font-semibold text-slate-950 hover:bg-cyan-300"><Plus size={16} /> New monitor</Link>
            </div>
          </div>
        </section>

        <section className="grid gap-3 lg:grid-cols-[1fr_1.4fr]">
          <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-5">
            <div className="mb-4 flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/5 px-3 py-2 dark:bg-white/5"><span className="text-xs font-medium text-muted">Available balance</span><span className="font-outfit text-lg font-bold">${Number(user?.balance ?? 0).toFixed(2)}</span></div>
            <div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-300">Starter plan</p><h2 className="mt-1 text-xl font-bold font-outfit">Unlock control room</h2></div><Zap className="text-cyan-500" size={20} /></div>
            <p className="mt-2 text-sm text-muted">Upgrade from $0.30/month for faster checks, longer history, and premium alert routing.</p>
            <Link to="/profile" className="btn mt-4 h-9 rounded-xl bg-slate-950 px-4 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950">View plans <ArrowUpRight size={14} /></Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-line bg-background p-4"><Bell className="text-cyan-500" size={18} /><p className="mt-3 text-sm font-semibold">Smart alerts</p><p className="mt-1 text-xs text-muted">Email and web push</p></div>
            <div className="rounded-2xl border border-line bg-background p-4"><PhoneCall className="text-violet-500" size={18} /><p className="mt-3 text-sm font-semibold">Voice fallback</p><p className="mt-1 text-xs text-muted">Premium add-on</p></div>
            <div className="rounded-2xl border border-line bg-background p-4"><LockKeyhole className="text-amber-500" size={18} /><p className="mt-3 text-sm font-semibold">Access rules</p><p className="mt-1 text-xs text-muted">Teams and roles</p></div>
            <div className="rounded-2xl border border-line bg-background p-4"><Settings2 className="text-emerald-500" size={18} /><p className="mt-3 text-sm font-semibold">Automation</p><p className="mt-1 text-xs text-muted">Escalations and retries</p></div>
          </div>
        </section>

        <div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Service health</p><h2 className="mt-1 text-lg font-bold font-outfit">Your monitored services</h2></div><Link to="/monitors" className="btn h-9 rounded-xl border border-line bg-background px-3 text-xs font-semibold hover:bg-secondary">View all <ArrowUpRight size={14} /></Link></div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4"><StatCard label="Total monitors" value={monitors?.length ?? 0} icon={Activity} color="bg-blue-50 dark:bg-blue-950/30 text-blue-500" /><StatCard label="Online" value={up} icon={TrendingUp} color="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-500" /><StatCard label="Down" value={down} icon={AlertTriangle} color="bg-red-50 dark:bg-red-950/30 text-red-500" /><StatCard label="Avg uptime" value={`${avgUptime}%`} icon={Clock} color="bg-purple-50 dark:bg-purple-950/30 text-purple-500" /></div>
        <div><div className="mb-3 flex items-center justify-between"><h2 className="text-sm font-semibold">Recently added monitors</h2>{monitors && monitors.length > 0 && <Link to="/monitors" className="btn btn-primary h-8 rounded-lg px-3 text-xs">View all monitors <ArrowUpRight size={13} /></Link>}</div>{isLoading && <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">{[1,2,3].map(i => <div key={i} className="h-32 animate-pulse rounded-xl bg-foreground" />)}</div>}{!isLoading && monitors?.length === 0 && <div className="rounded-xl border border-dashed border-line py-16 text-center"><Activity size={32} className="mx-auto mb-3 text-muted" /><p className="text-sm font-medium">No monitors yet</p><p className="mb-4 mt-1 text-xs text-muted">Start monitoring your websites and APIs</p><Link to="/monitors/new" className="btn btn-primary inline-flex h-9 rounded-xl px-5 text-sm"><Plus size={15} /> Add monitor</Link></div>}{!isLoading && recentMonitors.length > 0 && <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">{recentMonitors.map(m => <MonitorCard key={m.id} monitor={m} />)}</div>}</div>
      </div>
    </AppLayout>
  );
}
