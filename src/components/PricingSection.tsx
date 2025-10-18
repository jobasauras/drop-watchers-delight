import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Zap } from "lucide-react";

const plans = [
  {
    name: "Standard Bot",
    price: "$149",
    description: "Perfect for casual drops",
    features: [
      "Sneaker drops (Nike, Adidas)",
      "Single account operation",
      "Basic anti-bot bypass",
      "Email notifications",
      "Discord access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Apex Master",
    price: "$399",
    description: "For serious collectors",
    features: [
      "ALL drop bots included",
      "Ticketmaster/Live Nation bypass",
      "Multi-proxy support",
      "Premium resale scraper",
      "Priority Discord access",
      "24/7 support",
      "Early drop alerts",
    ],
    cta: "Go Pro",
    popular: true,
  },
];

export const PricingSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary">Premium Service</Badge>
          <h2 className="mb-4 text-4xl font-black">Beat the Bots</h2>
          <p className="text-lg text-muted-foreground">
            Proprietary automation technology designed for exclusive drops
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-2 p-8 transition-all ${
                plan.popular
                  ? "border-primary bg-gradient-to-br from-card to-primary/5 shadow-2xl shadow-primary/20 scale-105"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute right-4 top-4 bg-primary text-primary-foreground font-bold">
                  <Crown className="mr-1 h-3 w-3" />
                  RECOMMENDED
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-black">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">/ lifetime</span>
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/50"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                } font-bold transition-all`}
                size="lg"
              >
                <Zap className="mr-2 h-5 w-5" />
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
