import { motion, animate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { useAuth } from "@/hooks/use-auth";
import { ArrowRight, Shield, Zap, Globe, Lock, Cpu, Network, BarChart3, Layers } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0 }: { value: number, prefix?: string, suffix?: string, decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [value, prefix, suffix, decimals]);

  return <span ref={ref} />;
}

export default function Landing() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const vaultState = useQuery(api.vault.getVaultState);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight">Aurum-AI</span>
        </div>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Features
          </button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            How it Works
          </button>
          <button onClick={() => scrollToSection('roadmap')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Roadmap
          </button>
        </div>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/auth")}
            className="hidden md:flex"
          >
            Sign In
          </Button>
          <Button 
            onClick={() => navigate(isAuthenticated ? "/dashboard" : "/auth")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isAuthenticated ? "Dashboard" : "Launch App"}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-primary/80">
            <Zap className="w-4 h-4" />
            <span>AI-Powered Liquidity Protocol on QIE Blockchain</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Autonomous Wealth <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">
              Preservation & Growth
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Aurum-AI automatically rebalances your portfolio between Gold and QIE based on real-time volatility analysis, ensuring optimal risk-adjusted returns.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="h-12 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => navigate(isAuthenticated ? "/dashboard" : "/auth")}
            >
              Start Earning
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-12 px-8 text-lg glass hover:bg-white/10"
              onClick={() => scrollToSection('how-it-works')}
            >
              View Documentation
            </Button>
          </div>
        </motion.div>

        {/* Stats Ticker */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-24 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <StatBox 
            label="Total Value Locked" 
            value={vaultState?.tvl || 1250000} 
            prefix="$" 
            decimals={0}
          />
          <StatBox 
            label="Current APY" 
            value={vaultState?.current_apy || 12.5} 
            suffix="%" 
            decimals={2}
          />
          <StatBox 
            label="Gold Price" 
            value={vaultState?.gold_price || 2045} 
            prefix="$" 
            decimals={2}
          />
          <StatBox 
            label="QIE Price" 
            value={vaultState?.qie_price || 0.45} 
            prefix="$" 
            decimals={4}
          />
        </motion.div>
      </main>

      {/* Features Grid */}
      <section id="features" className="relative z-10 py-24 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built on advanced blockchain technology to provide secure, automated, and efficient asset management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Globe className="w-8 h-8 text-primary" />}
              title="RWA Integration"
              description="Direct exposure to real-world assets like Gold, tokenized and liquid on the blockchain."
            />
            <FeatureCard 
              icon={<Zap className="w-8 h-8 text-primary" />}
              title="AI Rebalancing"
              description="Smart algorithms monitor market volatility 24/7 to protect your principal and maximize yield."
            />
            <FeatureCard 
              icon={<Lock className="w-8 h-8 text-primary" />}
              title="Non-Custodial"
              description="You retain full control of your assets. Smart contracts handle the logic, you hold the keys."
            />
          </div>
        </div>
      </section>

      {/* How It Works / QIE Integration Section */}
      <section id="how-it-works" className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                <Cpu className="w-4 h-4" />
                <span>Powered by QIE Blockchain</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Intelligent Liquidity <br />
                <span className="text-muted-foreground">Meets High-Speed Consensus</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Aurum-AI leverages the QIE Blockchain's high throughput and low latency to execute complex AI-driven strategies in real-time.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Network className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">QIE Native Oracles</h3>
                    <p className="text-muted-foreground">
                      We utilize QIE's native oracle infrastructure to fetch tamper-proof price feeds for Gold (XAU) and QIE tokens every 3 seconds, ensuring our AI models always act on the freshest data.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                    <Layers className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Smart Contract Automation</h3>
                    <p className="text-muted-foreground">
                      The AurumVault smart contract is deployed directly on QIE Mainnet. It autonomously handles asset swapping and liquidity provision without human intervention, reducing counterparty risk.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                    <BarChart3 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">AI-Driven Rebalancing</h3>
                    <p className="text-muted-foreground">
                      Our off-chain AI agents analyze global market sentiment and volatility indices. When risk is detected, the agent signals the QIE smart contract to shift liquidity to Gold (Stable). When markets are bullish, it shifts to QIE (Growth).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-[100px] rounded-full" />
              <div className="relative glass p-8 rounded-3xl border border-white/10 bg-black/40">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-6 border-b border-white/10">
                    <span className="text-sm font-mono text-muted-foreground">LIVE SYSTEM STATUS</span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-bold text-green-500">OPERATIONAL</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Network</span>
                      <span>QIE Mainnet</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Block Height</span>
                      <span className="text-primary">#12,458,992</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Oracle Latency</span>
                      <span className="text-green-400">12ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Gas Price</span>
                      <span>2.5 Gwei</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 mt-4">
                      <p className="text-xs text-muted-foreground mb-2">LATEST AI DECISION</p>
                      <p className="text-green-400">
                        {">"} DETECTED_LOW_VOLATILITY<br/>
                        {">"} EXECUTING_STRATEGY: YIELD_FARMING<br/>
                        {">"} ALLOCATION: 60% QIE / 40% GOLD
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="relative z-10 py-24 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Roadmap</h2>
            <p className="text-muted-foreground">Our journey to decentralized financial freedom.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { phase: "Phase 1", title: "Foundation", status: "Completed", items: ["QIE Contract Deployment", "Basic AI Integration", "Beta Launch"] },
              { phase: "Phase 2", title: "Expansion", status: "In Progress", items: ["Advanced Oracle Feeds", "Mobile App Beta", "Staking Pools"] },
              { phase: "Phase 3", title: "Autonomy", status: "Upcoming", items: ["DAO Governance", "Cross-chain Bridge", "Institutional API"] },
              { phase: "Phase 4", title: "Global", status: "Future", items: ["Debit Card Integration", "Physical Gold Redemption", "Global Partnerships"] }
            ].map((item, i) => (
              <div key={i} className="glass p-6 rounded-xl border-t-4 border-t-primary/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <h4 className="text-6xl font-bold">{i + 1}</h4>
                </div>
                <div className="relative z-10">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.status === 'Completed' ? 'bg-green-500/20 text-green-500' : item.status === 'In Progress' ? 'bg-amber-500/20 text-amber-500' : 'bg-white/10 text-muted-foreground'}`}>
                    {item.status}
                  </span>
                  <h3 className="text-xl font-bold mt-4 mb-2">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.items.map((li, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 border-t border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tight">Aurum-AI</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2024 Aurum-AI Protocol. Built on QIE Blockchain.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Discord</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Github</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatBox({ label, value, prefix, suffix, decimals }: { label: string, value: number, prefix?: string, suffix?: string, decimals?: number }) {
  return (
    <div className="glass p-4 rounded-xl text-center">
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      <p className="text-xl font-bold text-foreground">
        <AnimatedNumber value={value} prefix={prefix} suffix={suffix} decimals={decimals} />
      </p>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors">
      <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}