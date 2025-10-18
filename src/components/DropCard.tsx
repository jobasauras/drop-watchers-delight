import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Zap } from "lucide-react";

interface DropCardProps {
  title: string;
  subtitle: string;
  status: "live" | "upcoming" | "soldout";
  timeLeft: string;
  image: string;
  description: string;
}

const statusConfig = {
  live: {
    badge: "Live Now",
    color: "bg-success text-white",
    glow: "shadow-lg shadow-success/50",
  },
  upcoming: {
    badge: "Upcoming",
    color: "bg-warning text-black",
    glow: "shadow-lg shadow-warning/50",
  },
  soldout: {
    badge: "Sold Out",
    color: "bg-destructive text-white",
    glow: "shadow-lg shadow-destructive/50",
  },
};

export const DropCard = ({ title, subtitle, status, timeLeft, image, description }: DropCardProps) => {
  const config = statusConfig[status];

  return (
    <Card className="group overflow-hidden border-border bg-card transition-all hover:scale-[1.02] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Badge className={`absolute right-3 top-3 ${config.color} ${config.glow} font-bold`}>
          {config.badge}
        </Badge>
      </div>

      <div className="p-5">
        <div className="mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

        <p className="mb-4 text-sm text-foreground/80">{description}</p>

        <div className="mb-4 flex items-center justify-between rounded-lg bg-muted px-3 py-2">
          <span className="text-xs font-semibold text-muted-foreground">Drop Time:</span>
          <span className="text-sm font-bold text-primary">{timeLeft}</span>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Drop
          </Button>
          <Button size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
            <Zap className="mr-2 h-4 w-4" />
            Use Bot
          </Button>
        </div>
      </div>
    </Card>
  );
};
