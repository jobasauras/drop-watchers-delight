import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, Users } from "lucide-react";

const featuredItems = [
  {
    title: "Taylor Swift Eras Tour",
    venue: "Multiple Cities",
    demand: "Extreme",
    ticketsSold: "2.4M+",
    icon: Users,
  },
  {
    title: "RTX 4090 Restocks",
    venue: "Major Retailers",
    demand: "Very High",
    ticketsSold: "Live Tracking",
    icon: TrendingUp,
  },
  {
    title: "Supreme Box Logo",
    venue: "Supreme NYC",
    demand: "High",
    ticketsSold: "Weekly Drop",
    icon: Clock,
  },
];

export const FeaturedDrops = () => {
  return (
    <section className="border-t border-border bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-black">Trending Right Now</h2>
          <p className="text-muted-foreground">Most sought-after drops across all categories</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                    {item.demand}
                  </Badge>
                </div>

                <h3 className="mb-1 text-xl font-bold">{item.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{item.venue}</p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Activity:</span>
                  <span className="font-bold text-primary">{item.ticketsSold}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
