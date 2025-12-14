import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, TrendingUp, ShieldAlert, Activity } from "lucide-react";

export function AIDecisionLog() {
  const logs = [
    { time: "2 mins ago", action: "RISK_OFF", reason: "Volatility Spike Detected (>15%)", type: "safety" },
    { time: "15 mins ago", action: "INCREASE_GOLD", reason: "Oracle Signal: Gold Price +2.5%", type: "growth" },
    { time: "1 hour ago", action: "HOLD", reason: "Market Sentiment Neutral", type: "neutral" },
    { time: "4 hours ago", action: "RISK_ON", reason: "Low Volatility, Bullish QIE Trend", type: "growth" },
  ];

  return (
    <Card className="glass border-none h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BrainCircuit className="w-5 h-5 text-primary" />
          AI Decision Log
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {logs.map((log, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <div className={`mt-1 p-1.5 rounded-full ${
                log.type === 'safety' ? 'bg-red-500/20 text-red-400' : 
                log.type === 'growth' ? 'bg-green-500/20 text-green-400' : 
                'bg-blue-500/20 text-blue-400'
              }`}>
                {log.type === 'safety' ? <ShieldAlert className="w-3 h-3" /> : 
                 log.type === 'growth' ? <TrendingUp className="w-3 h-3" /> : 
                 <Activity className="w-3 h-3" />}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <span className={`text-sm font-bold ${
                    log.type === 'safety' ? 'text-red-400' : 
                    log.type === 'growth' ? 'text-green-400' : 
                    'text-blue-400'
                  }`}>{log.action}</span>
                  <span className="text-xs text-muted-foreground">{log.time}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{log.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
