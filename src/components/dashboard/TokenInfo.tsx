import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Info } from "lucide-react";

export function TokenInfo() {
  return (
    <Card className="glass border-none h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          <Coins className="w-4 h-4 text-amber-400" />
          Token Info
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Token Name</span>
          <span className="font-bold text-amber-400">ARM (Gold-backed)</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Standard</span>
          <span className="font-mono text-foreground">QIE20</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Created via</span>
          <span className="text-primary">QIEDEX Token Creator</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Supply</span>
          <span className="text-foreground">Fixed</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Minting</span>
          <span className="text-red-400 font-medium">Disabled</span>
        </div>
        <div className="mt-2 p-2 bg-amber-500/10 border border-amber-500/20 rounded text-xs text-amber-200 flex gap-2 items-start">
          <Info className="w-4 h-4 shrink-0 mt-0.5" />
          <span>Verified QIEDEX Asset. Fully backed by physical gold reserves.</span>
        </div>
      </CardContent>
    </Card>
  );
}
