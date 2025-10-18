import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-border py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <TrendingUp className="h-4 w-4" />
            <span>Live monitoring 247 drops across 50+ retailers</span>
          </div>

          <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Stop Missing Out.
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Start Winning.
            </span>
          </h1>

          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            Your centralized hub for every high-demand drop and ticket release—plus the automation tools you need to secure them.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg hover:shadow-primary/50 transition-all group">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              View Live Drops
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-8">
            <div>
              <div className="text-3xl font-bold text-primary">98.4%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">247</div>
              <div className="text-sm text-muted-foreground">Active Drops</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">15K+</div>
              <div className="text-sm text-muted-foreground">Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
