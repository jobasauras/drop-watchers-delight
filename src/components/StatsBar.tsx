import { Activity } from "lucide-react";

export const StatsBar = () => {
  return (
    <div className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <div className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-success"></span>
            </div>
            <span className="text-sm font-semibold text-foreground">LIVE MONITORING ACTIVE</span>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <Activity className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Real-time feeds locked on all major vendors</span>
          </div>
        </div>
      </div>
    </div>
  );
};
