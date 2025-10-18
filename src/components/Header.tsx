import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
              <Zap className="h-7 w-7 text-primary-foreground" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-primary">FOMO</h1>
              <p className="text-xs text-muted-foreground">Fear of Missing Out</p>
            </div>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            <Button variant="ghost" size="sm">Drops</Button>
            <Button variant="ghost" size="sm">Releases</Button>
            <Button variant="ghost" size="sm">Tickets</Button>
            <Button variant="ghost" size="sm">Alerts</Button>
          </nav>

          <Button className="bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg hover:shadow-primary/50 transition-all">
            Get Bot Access
          </Button>
        </div>
      </div>
    </header>
  );
};
