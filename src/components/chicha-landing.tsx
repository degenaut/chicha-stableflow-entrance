import { useState, type ComponentType } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleDollarSign,
  CreditCard,
  Handshake,
  Menu,
  Nfc,
  QrCode,
  ShieldCheck,
  Store,
  Users,
  WalletCards,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  ["Users", "#users"],
  ["Merchants", "#merchants"],
  ["Partners", "#partners"],
  ["Token", "#token"],
  ["News", "#footer"],
] as const;

const entranceItems = [
  ["User Login", "Open your wallet", WalletCards],
  ["Merchant Login", "Manage your business", Store],
  ["Partner Application", "Join the network", Handshake],
  ["Token Portal", "Explore $CHI", CircleDollarSign],
] as const;

function Logo() {
  return (
    <a href="#home" className="inline-flex items-center gap-2.5" aria-label="ChiCha home">
      <span className="grid size-9 place-items-center rounded-lg border border-primary/40 bg-primary/15 text-sm font-extrabold text-primary">C</span>
      <span className="text-lg font-bold text-foreground">ChiCha</span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {nav.map(([label, href]) => <a key={label} href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}
        </nav>
        <div className="hidden items-center justify-end gap-3 lg:flex">
          <Button variant="ghost" asChild><a href="#entrances">Login</a></Button>
          <Button variant="hero" asChild><a href="#roles">Get Started <ArrowRight /></a></Button>
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation" onClick={() => setOpen(true)}><Menu /></Button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 min-h-screen bg-background p-5 lg:hidden">
          <div className="flex items-center justify-between"><Logo /><Button variant="ghost" size="icon" aria-label="Close navigation" onClick={() => setOpen(false)}><X /></Button></div>
          <nav className="mt-14 flex flex-col" aria-label="Mobile navigation">
            {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="border-b border-border py-5 text-xl font-semibold text-foreground">{label}</a>)}
            <Button variant="hero" size="lg" className="mt-8" asChild><a href="#roles" onClick={() => setOpen(false)}>Get Started <ArrowRight /></a></Button>
          </nav>
        </div>
      )}
    </header>
  );
}

function PaymentVisual() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[510px] sm:h-[500px]" aria-label="ChiCha wallet and contactless payment illustration">
      <div className="absolute left-[5%] top-[15%] h-52 w-72 rotate-[-8deg] rounded-2xl border border-primary/30 bg-brand-gradient p-[1px] shadow-glow sm:left-[2%] sm:top-[24%] sm:h-56 sm:w-80">
        <div className="flex h-full flex-col justify-between rounded-2xl bg-card p-6">
          <div className="flex items-center justify-between"><span className="text-lg font-bold">ChiCha</span><Nfc className="text-cyan" /></div>
          <div><span className="text-xs text-muted-foreground">SUPPORTED BALANCE</span><p className="mt-2 text-3xl font-semibold">$2,480.00</p></div>
          <p className="text-sm tracking-widest text-muted-foreground">•••• 8042</p>
        </div>
      </div>
      <div className="panel-glass absolute right-[2%] top-[3%] h-[370px] w-56 rotate-[5deg] rounded-[2rem] p-3 sm:right-[8%] sm:h-[420px] sm:w-64">
        <div className="h-full rounded-[1.5rem] bg-background p-5">
          <div className="mx-auto mb-8 h-1 w-14 rounded-full bg-muted" />
          <p className="text-xs text-muted-foreground">AVAILABLE</p><p className="mt-2 text-3xl font-semibold">$1,264.80</p>
          <div className="mt-7 grid grid-cols-3 gap-2 text-center text-[10px] text-muted-foreground">
            {[WalletCards, QrCode, Nfc].map((Icon, index) => <div key={index} className="rounded-lg bg-muted p-3"><Icon className="mx-auto mb-2 text-cyan" /><span>{["Wallet", "Scan", "Tap"][index]}</span></div>)}
          </div>
          <div className="mt-6 rounded-xl border border-border bg-card p-4"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-lg bg-primary/15"><Check className="text-primary" /></span><div><p className="text-sm font-semibold">Payment ready</p><p className="text-xs text-muted-foreground">Wallet-native flow</p></div></div></div>
        </div>
      </div>
      <div className="panel-glass absolute bottom-2 right-[14%] flex items-center gap-4 rounded-xl px-5 py-4"><span className="grid size-11 place-items-center rounded-full bg-cyan/15"><Nfc className="text-cyan" /></span><div><p className="text-sm font-semibold">Tap to Pay</p><p className="text-xs text-muted-foreground">Where supported</p></div></div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="page-glow relative overflow-hidden border-b border-border pt-28">
      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
        <div className="max-w-3xl">
          <Eyebrow>WEB3 PAYMENT INFRASTRUCTURE</Eyebrow>
          <h1 className="mt-6 text-5xl font-bold leading-[1.08] sm:text-6xl lg:text-7xl">Web3 payment infrastructure for <span className="text-brand-gradient">stablecoin payments.</span></h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">ChiCha helps users, merchants, and partners use stablecoins for real payment activity through non-custodial wallet flows.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button variant="hero" size="lg" asChild><a href="#roles">Get Started <ArrowRight /></a></Button><Button variant="glass" size="lg" asChild><a href="#entrances">Account Entrances</a></Button></div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">{[["For Users", "#users"], ["For Merchants", "#merchants"], ["Become a Partner", "#partners"]].map(([label, href]) => <a key={label} href={href} className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-cyan">{label}<ChevronRight className="size-4" /></a>)}</div>
          <p className="mt-14 text-xs font-semibold uppercase text-muted-foreground">People <span className="px-2 text-primary">•</span> Payments <span className="px-2 text-cyan">•</span> More Possibilities</p>
        </div>
        <PaymentVisual />
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="text-xs font-bold uppercase text-cyan">{children}</p>; }

type RoleCardProps = { icon: ComponentType<{ className?: string }>; title: string; copy: string; cta: string; href: string; tone?: "purple" | "cyan" | "gold"; secondary?: boolean };
export function RoleCard({ icon: Icon, title, copy, cta, href, tone = "purple", secondary }: RoleCardProps) {
  return <article className={cn("group flex min-h-72 flex-col rounded-xl border border-border bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card", secondary && "bg-muted/35 opacity-85 hover:opacity-100")}><span className={cn("grid size-12 place-items-center rounded-lg", tone === "cyan" ? "bg-cyan/15 text-cyan" : tone === "gold" ? "bg-gold/15 text-gold" : "bg-primary/15 text-primary")}><Icon /></span><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 leading-6 text-muted-foreground">{copy}</p><a href={href} className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-foreground">{cta}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a></article>;
}

export function Roles() {
  return <section id="roles" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><Eyebrow>CHOOSE YOUR ROLE</Eyebrow><h2 className="mt-4 text-3xl font-bold sm:text-5xl">How do you want to get started?</h2><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><RoleCard icon={Users} title="I’m a User" copy="Use stablecoins for everyday payment activity." cta="Get Started as User" href="#users"/><RoleCard icon={Store} title="I’m a Merchant" copy="Accept stablecoin payments online or in person." cta="Start Accepting Payments" href="#merchants" tone="cyan"/><RoleCard icon={Handshake} title="I’m a Partner" copy="Help onboard merchants and expand payment access." cta="Become a Partner" href="#partners"/><RoleCard icon={CircleDollarSign} title="Learn About $CHI" copy="Explore the ecosystem and participation." cta="Explore Token" href="#token" tone="gold" secondary/></div></section>;
}

type FeatureSectionProps = { id: string; eyebrow: string; title: string; copy: string; bullets: string[]; cta: string; icon: ComponentType<{ className?: string }>; align?: "left" | "right"; note?: string; secondary?: boolean };
export function FeatureSection({ id, eyebrow, title, copy, bullets, cta, icon: Icon, align = "right", note, secondary }: FeatureSectionProps) {
  return <section id={id} className={cn("border-t border-border", secondary ? "bg-muted/20" : "bg-card/20")}><div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-32"><div className={cn(align === "left" && "lg:order-2")}><Eyebrow>{eyebrow}</Eyebrow><h2 className="mt-4 text-4xl font-bold sm:text-5xl">{title}</h2><p className="mt-6 max-w-xl leading-7 text-muted-foreground">{copy}</p><ul className="mt-8 space-y-4">{bullets.map((bullet) => <li key={bullet} className="flex items-center gap-3 text-sm text-foreground"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/15"><Check className="size-3.5 text-primary" /></span>{bullet}</li>)}</ul><Button variant={secondary ? "glass" : "hero"} size="lg" className="mt-9" asChild><a href="#entrances">{cta}<ArrowRight /></a></Button>{note && <p className="mt-4 text-xs text-muted-foreground">{note}</p>}</div><div className={cn("relative grid min-h-[390px] place-items-center overflow-hidden rounded-2xl border border-border bg-card/55 p-8", align === "left" && "lg:order-1")}><div className="absolute inset-10 rounded-full bg-primary/10 blur-3xl"/><div className="panel-glass relative w-full max-w-sm rounded-2xl p-6"><div className="flex items-center justify-between border-b border-border pb-5"><span className="grid size-12 place-items-center rounded-xl bg-brand-gradient"><Icon /></span><span className="text-xs font-semibold text-muted-foreground">ChiCha</span></div><div className="mt-8 space-y-3">{bullets.slice(0, 3).map((bullet, index) => <div key={bullet} className="flex items-center gap-3 rounded-lg border border-border bg-background/60 p-4"><span className={cn("size-2 shrink-0 rounded-full", index === 1 ? "bg-cyan" : "bg-primary")}/><p className="text-sm text-muted-foreground">{bullet}</p></div>)}</div><div className="mt-6 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full w-2/3 bg-brand-gradient" /></div></div></div></div></section>;
}

export function Entrances() { return <section id="entrances" className="border-y border-border bg-surface-strong/20"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10"><Eyebrow>ACCOUNT ENTRANCES</Eyebrow><div className="mt-4 flex flex-col justify-between gap-4 lg:flex-row lg:items-end"><h2 className="text-4xl font-bold sm:text-5xl">Choose your entrance.</h2><p className="text-muted-foreground">Already have an account? Jump in here.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{entranceItems.map(([title, copy, Icon], index) => <a href="#home" key={title} className="group flex min-h-44 flex-col rounded-xl border border-border bg-card/65 p-5 transition-all hover:border-primary/50 hover:bg-card"><div className="flex items-start justify-between"><Icon className={index === 3 ? "text-gold" : index === 1 ? "text-cyan" : "text-primary"}/><ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" /></div><div className="mt-auto"><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{copy}</p></div></a>)}</div></div></section>; }

const footerGroups = { Product: ["UCard", "QRush", "Tap to Pay", "Genie"], Company: ["About", "News", "Partnerships", "Careers"], Support: ["Help Center", "Contact Us"], Legal: ["Terms", "Privacy", "Risk Disclosure"] };
export function Footer() { return <footer id="footer"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.4fr_2fr] lg:px-10"><div><Logo/><p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">Stablecoin payments for a more open economy.</p><div className="mt-8 flex gap-3">{["X", "in", "YT", "D"].map((social) => <a key={social} href="#home" aria-label={social} className="grid size-9 place-items-center rounded-lg border border-border text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground">{social}</a>)}</div></div><div className="grid grid-cols-2 gap-10 sm:grid-cols-4">{Object.entries(footerGroups).map(([group, links]) => <div key={group}><h3 className="text-sm font-semibold">{group}</h3><ul className="mt-5 space-y-3">{links.map((link) => <li key={link}><a href="#home" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link}</a></li>)}</ul></div>)}</div></div><div className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><p>© 2026 ChiCha. All rights reserved.</p><p>Supported stablecoin payment infrastructure.</p></div></div></footer>; }

export function ChiChaLanding() { return <main><Header/><Hero/><Roles/><FeatureSection id="users" eyebrow="FOR USERS" title="Use stablecoins in everyday life." copy="Prepare, spend, pay, and manage supported stablecoin activity through ChiCha Wallet, UCard, Tap to Pay, and Genie." bullets={["Fund your wallet for supported payment activity", "Use UCard for supported spend flows", "Tap to pay with your wallet where supported", "Use Genie for safety and account assistance"]} cta="Explore User Tools" icon={CreditCard}/><FeatureSection id="merchants" eyebrow="FOR MERCHANTS" title="Accept stablecoins with ease." copy="Accept supported stablecoin payments online with QRush or offline through Tap to Pay / NFC point of sale." bullets={["Online payments with QRush", "Tap to Pay / NFC point of sale", "Zero or minimal integration", "Manage payment activity"]} cta="Explore Merchant Tools" icon={QrCode} align="left"/><FeatureSection id="partners" eyebrow="FOR PARTNERS" title="Expand payment access together." copy="ChiCha partners and agents help expand stablecoin payment access by supporting merchant onboarding, Tap to Pay adoption, demo education, and ecosystem growth." bullets={["Merchant onboarding opportunities", "Tap to Pay adoption", "Demo education and materials", "Ecosystem participation, subject to policy"]} cta="Become a Partner" icon={Handshake} note="For partners, agents, and ambassadors."/><FeatureSection id="token" eyebrow="TOKEN & ECOSYSTEM" title="A stronger ecosystem together." copy="$CHI is designed to support ChiCha’s ecosystem by connecting users, agents, participation, rewards, access, and long-term ecosystem alignment." bullets={["Learn about $CHI", "Agent-weighted participation", "Connect users and partners", "Long-term ecosystem alignment"]} cta="Learn About $CHI" icon={ShieldCheck} align="left" secondary/><Entrances/><Footer/></main>; }