import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 py-12 px-4 border-t border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-black" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight">Aurum-AI</span>
            <span className="text-xs text-muted-foreground">Built for QIE Blockchain Hackathon 2025</span>
          </div>
        </div>
        <div className="text-sm text-muted-foreground text-center md:text-left">
          <p>© 2025 Aurum-AI Protocol. All rights reserved.</p>
          <div className="flex gap-3 mt-2 text-xs text-primary/60 justify-center md:justify-start">
            <span>AI x Blockchain</span>
            <span>•</span>
            <span>QIEDEX</span>
            <span>•</span>
            <span>QIE Oracles</span>
            <span>•</span>
            <span>Autonomous Vault</span>
          </div>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Discord</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Github</a>
        </div>
      </div>
    </footer>
  );
}