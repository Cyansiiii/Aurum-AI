import { Cpu, Network, Layers, BarChart3, Wallet, ArrowRightLeft, BrainCircuit } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative z-10 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A seamless integration of AI intelligence and QIE Blockchain security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {[
            { 
              icon: <Wallet className="w-8 h-8 text-primary" />, 
              title: "1. Connect Wallet", 
              desc: "Connect your QIE-compatible wallet to the dApp." 
            },
            { 
              icon: <ArrowRightLeft className="w-8 h-8 text-blue-400" />, 
              title: "2. Deposit QIE", 
              desc: "Deposit QIE into the Aurum Vault smart contract." 
            },
            { 
              icon: <BrainCircuit className="w-8 h-8 text-purple-400" />, 
              title: "3. AI Analysis", 
              desc: "AI Agent analyzes oracle data & volatility 24/7." 
            },
            { 
              icon: <Layers className="w-8 h-8 text-green-400" />, 
              title: "4. Auto-Rebalance", 
              desc: "Smart contracts swap between QIE and ARM (Gold)." 
            }
          ].map((step, i) => (
            <div key={i} className="glass p-6 rounded-xl text-center relative group hover:bg-white/5 transition-colors">
              <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-white/10" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
              <Cpu className="w-4 h-4" />
              <span>Powered by QIE Blockchain</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
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
                    We utilize QIE's native oracle infrastructure to fetch tamper-proof price feeds for Gold (XAU) and QIE tokens every 3 seconds.
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
                    The AurumVault smart contract is deployed directly on QIE Mainnet. It autonomously handles asset swapping and liquidity provision.
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
  );
}