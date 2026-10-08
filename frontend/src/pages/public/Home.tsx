import { Link } from "react-router-dom";
import {
  Activity, ArrowRight, Bell, Check, CheckCircle2, Globe2, LockKeyhole,
  Server, ShieldCheck, Sparkles, Zap,
} from "lucide-react";
import { PublicLayout } from "@/layouts";
import { useAuthStore } from "@/store";

const features = [
  { icon: Activity, title: "Live uptime intelligence", text: "See every service, response time, and incident in one calm command center." },
  { icon: Bell, title: "Alerts that arrive", text: "Email notifications keep your team ahead of outages and recoveries." },
  { icon: Zap, title: "Keep free tiers warm", text: "Scheduled checks help prevent cold starts across modern hosting platforms." },
  { icon: ShieldCheck, title: "Built for local teams", text: "Simple, affordable monitoring for Zimbabwean businesses and global products." },
];

const plans = [
  { name: "Starter", price: "0.30", caption: "For one essential service", features: ["1 monitor", "5-minute checks", "Email alerts", "7-day history"] },
  { name: "Growth", price: "2.50", caption: "For growing digital teams", features: ["10 monitors", "1-minute checks", "Instant alerts", "30-day history"], popular: true },
  { name: "Scale", price: "7.50", caption: "For serious operations", features: ["50 monitors", "30-second checks", "Priority support", "90-day history"] },
];

const partners = [
  { name: "Hostify Zimbabwe", domain: "hostify.co.zw", text: "Zimbabwean hosting and digital infrastructure" },
  { name: "STINGER AI", domain: "stinger.co.zw", text: "AI-powered tools for modern businesses" },
  { name: "Watcher Tools", domain: "decode.top.co.zw", text: "Practical tools for visibility and security" },
  { name: "Netfy", domain: "netfy.co.zw", text: "Connectivity and network services" },
  { name: "TopBoostZim", domain: "topboostzim.co.zw", text: "Digital growth and business solutions" },
];

export default function Home() {
  const { token } = useAuthStore();
  const cta = token ? "/dashboard" : "/signup";

  return (
    <PublicLayout>
      <section className="relative overflow-hidden bg-[#091121] px-4 pb-24 pt-20 text-white md:pb-32 md:pt-28">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="main relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div data-aos="fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-200">
              <span className="size-1.5 animate-pulse rounded-full bg-cyan-300" /> Zimbabwe-built monitoring for the always-on web
            </div>
            <h1 className="max-w-3xl font-outfit text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Know first. <span className="text-cyan-300">Fix faster.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Hostify Monitor watches your websites, APIs, and webhooks around the clock. Get a clear signal when something changes, without enterprise pricing.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to={cta} className="btn h-12 rounded-xl bg-cyan-300 px-6 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">
                Start for $0.30 <ArrowRight data-icon="inline-end" />
              </Link>
              <Link to="/#features" className="btn h-12 rounded-xl border border-white/20 px-6 text-sm font-semibold text-white transition hover:bg-white/10">Explore platform</Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400">
              {["No credit card", "Local-friendly pricing", "Cancel anytime"].map(item => <span key={item} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-cyan-300" />{item}</span>)}
            </div>
          </div>

          <div data-aos="fade-left" className="relative mx-auto w-full max-w-lg">
            <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-3 shadow-2xl backdrop-blur-xl">
              <div className="rounded-2xl border border-white/10 bg-[#101b31] p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div><p className="text-xs text-slate-400">Workspace overview</p><p className="mt-1 font-outfit text-xl font-semibold">Good morning, team</p></div>
                  <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300"><Activity className="size-5" /></div>
                </div>
                <div className="grid grid-cols-3 gap-3 py-5">
                  {[['99.98%', 'Uptime'], ['08', 'Monitors'], ['142ms', 'Avg. latency']].map(([value, label]) => <div key={label} className="rounded-xl bg-white/[0.06] p-3"><p className="font-outfit text-xl font-semibold text-white">{value}</p><p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">{label}</p></div>)}
                </div>
                <div className="rounded-xl border border-emerald-300/15 bg-emerald-300/[0.06] p-4"><div className="flex items-center justify-between"><span className="flex items-center gap-2 text-sm font-medium"><span className="size-2 rounded-full bg-emerald-300" /> All systems operational</span><span className="text-xs text-emerald-300">Live</span></div><div className="mt-4 flex h-10 items-end gap-1">{Array.from({ length: 32 }, (_, i) => <span key={i} className="flex-1 rounded-sm bg-cyan-300/70" style={{ height: `${35 + ((i * 17) % 55)}%` }} />)}</div></div>
                <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3"><div className="flex size-8 items-center justify-center rounded-lg bg-amber-300/10 text-amber-200"><Bell className="size-4" /></div><div><p className="text-xs font-medium">Alerts are quiet</p><p className="text-[10px] text-slate-500">Last check completed 24 seconds ago</p></div></div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#14223c] px-4 py-3 shadow-xl sm:flex"><div className="flex size-9 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-300"><ShieldCheck className="size-5" /></div><div><p className="text-xs font-semibold">Protected</p><p className="text-[10px] text-slate-400">Every 30 seconds</p></div></div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-background px-4 py-7"><div className="main flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center text-xs text-muted md:justify-between"><span className="font-semibold uppercase tracking-[0.18em]">Trusted across the local digital ecosystem</span>{partners.slice(0, 4).map(partner => <span key={partner.name} className="font-outfit text-sm font-semibold text-main/70">{partner.name}</span>)}</div></section>

      <section id="features" className="px-4 py-24"><div className="main"><div className="max-w-2xl" data-aos="fade-up"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">Everything under control</p><h2 className="font-outfit text-4xl font-semibold tracking-tight md:text-5xl">A quieter way to run your online business.</h2><p className="mt-5 text-base leading-7 text-muted">From a personal portfolio to a production API, Hostify gives you the confidence to ship without constantly refreshing a status page.</p></div><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{features.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-line bg-foreground p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-xl"><div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-600"><Icon className="size-5" /></div><h3 className="font-outfit text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted">{text}</p></article>)}</div></div></section>

      <section id="how-it-works" className="bg-secondary px-4 py-24"><div className="main grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">Simple by design</p><h2 className="font-outfit text-4xl font-semibold tracking-tight md:text-5xl">From URL to peace of mind in minutes.</h2><p className="mt-5 text-base leading-7 text-muted">No agents, no complicated infrastructure, and no long contracts. Add a target, choose a cadence, and let Hostify keep watch.</p><Link to={cta} className="mt-7 btn inline-flex h-11 rounded-xl bg-main px-5 text-sm font-semibold text-white">Create your workspace <ArrowRight data-icon="inline-end" /></Link></div><div className="grid gap-4 sm:grid-cols-2">{[['01', 'Add your target', 'Paste a website, API, or webhook endpoint.'], ['02', 'Choose your cadence', 'Check every 30 seconds, 1 minute, or on your schedule.'], ['03', 'Get the signal', 'Receive clear email alerts when a service changes.'], ['04', 'Resolve with context', 'Use history and response data to act quickly.']].map(([num, title, text]) => <div key={num} className="rounded-2xl border border-line bg-background p-6"><span className="font-outfit text-3xl font-semibold text-cyan-600/50">{num}</span><h3 className="mt-6 font-outfit text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></div>)}</div></div></section>

      <section id="pricing" className="px-4 py-24"><div className="main"><div className="mx-auto max-w-2xl text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">Fair pricing</p><h2 className="font-outfit text-4xl font-semibold tracking-tight md:text-5xl">Start small. Scale when ready.</h2><p className="mt-5 text-base leading-7 text-muted">Straightforward plans priced for Zimbabwean founders, teams, and side projects.</p></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{plans.map(plan => <article key={plan.name} className={`relative rounded-2xl border p-7 ${plan.popular ? "border-cyan-400 bg-[#0b172c] text-white shadow-2xl shadow-cyan-900/20" : "border-line bg-foreground"}`}>{plan.popular && <span className="absolute right-5 top-5 rounded-full bg-cyan-300 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-950">Most popular</span>}<p className={`text-sm font-semibold ${plan.popular ? "text-cyan-200" : "text-cyan-600"}`}>{plan.name}</p><p className={`mt-2 text-sm ${plan.popular ? "text-slate-400" : "text-muted"}`}>{plan.caption}</p><div className="mt-7 flex items-end gap-1"><span className="font-outfit text-5xl font-semibold">${plan.price}</span><span className={`mb-2 text-xs ${plan.popular ? "text-slate-400" : "text-muted"}`}>/ month</span></div><ul className="mt-7 grid gap-3">{plan.features.map(feature => <li key={feature} className="flex items-center gap-2 text-sm"><Check className={`size-4 ${plan.popular ? "text-cyan-300" : "text-cyan-600"}`} />{feature}</li>)}</ul><Link to={cta} className={`mt-8 btn h-11 w-full rounded-xl text-sm font-bold ${plan.popular ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200" : "border border-line hover:bg-secondary"}`}>Choose {plan.name}</Link></article>)}</div><div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-muted"><span className="flex items-center gap-2"><LockKeyhole className="size-4" /> Secure payments</span><span>EcoCash</span><span>OneMoney</span><span>InnBucks</span><span>Visa</span><span>Mastercard</span></div></div></section>

      <section className="bg-[#091121] px-4 py-24 text-white"><div className="main"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Partner network</p><h2 className="font-outfit text-4xl font-semibold tracking-tight md:text-5xl">Built alongside teams doing the work.</h2><p className="mt-5 max-w-xl text-base leading-7 text-slate-400">Explore the Zimbabwean businesses and tools in our trusted ecosystem.</p></div><Globe2 className="hidden size-16 text-cyan-300/30 md:block" /></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{partners.map(partner => <a key={partner.name} href={`https://${partner.domain}`} target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.08]"><div className="flex items-center justify-between"><Server className="size-5 text-cyan-300" /><ArrowRight className="size-4 text-slate-600 transition group-hover:translate-x-1 group-hover:text-cyan-300" /></div><h3 className="mt-8 font-outfit text-lg font-semibold">{partner.name}</h3><p className="mt-2 text-xs leading-5 text-slate-400">{partner.text}</p><p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-cyan-300/70">{partner.domain}</p></a>)}</div></div></section>

      <section className="px-4 py-20"><div className="main rounded-3xl bg-cyan-300 px-6 py-14 text-center text-slate-950 md:px-10"><Sparkles className="mx-auto size-7" /><h2 className="mt-5 font-outfit text-4xl font-semibold tracking-tight md:text-5xl">Make uptime your advantage.</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-800/75">Join Hostify and keep your customers confident in every click.</p><Link to={cta} className="mt-8 btn mx-auto h-12 w-fit rounded-xl bg-slate-950 px-7 text-sm font-bold text-white hover:bg-slate-800">Get started today <ArrowRight data-icon="inline-end" /></Link></div></section>
    </PublicLayout>
  );
}
