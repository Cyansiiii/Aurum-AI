import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Network } from "lucide-react";

export function OnChainProof() {
  return (
    <Card className="glass border-none h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          <Network className="w-4 h-4 text-primary" />
          QIE On-Chain Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Network</span>
          <span className="font-mono text-green-400 font-bold">QIE Mainnet</span>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>ARM Token Contract</span>
            <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
              View <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="font-mono text-xs bg-black/20 p-2 rounded border border-white/5 truncate text-muted-foreground">
            0x7a2...3f91
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Aurum Vault Contract</span>
            <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
              View <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="font-mono text-xs bg-black/20 p-2 rounded border border-white/5 truncate text-muted-foreground">
            0x8b3...4e22
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Oracle Contract</span>
            <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
              View <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="font-mono text-xs bg-black/20 p-2 rounded border border-white/5 truncate text-muted-foreground">
            0x9c4...5d33
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
