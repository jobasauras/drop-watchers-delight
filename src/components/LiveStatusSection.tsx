import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropCard } from "@/components/DropCard";

interface LiveStatusSectionProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const drops = [
  {
    id: 1,
    title: "iPhone 16 Pro Max",
    subtitle: "Pre-Order Wave 2",
    status: "upcoming" as const,
    timeLeft: "48h 23m",
    image: "https://i.postimg.cc/v47KY6h4/iphone-jpeg.png",
    category: "tech",
    description: "Next drop Friday, 8 AM EST. High-speed automation critical.",
  },
  {
    id: 2,
    title: "Jordan 1 Retro",
    subtitle: "Shadow 2.0",
    status: "live" as const,
    timeLeft: "Live Now",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    category: "sneakers",
    description: "Nike SNKRS drop active. Limited stock detected.",
  },
  {
    id: 3,
    title: "Cosmic Echo Premiere",
    subtitle: "IMAX Fan Event",
    status: "live" as const,
    timeLeft: "Live Now",
    image: "https://i.postimg.cc/nsHPCcSZ/movie-jpeg.png",
    category: "tickets",
    description: "Limited tickets released for LA, NYC, London venues.",
  },
  {
    id: 4,
    title: "PS5 Restock",
    subtitle: "Major Retailers",
    status: "upcoming" as const,
    timeLeft: "12h 45m",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
    category: "tech",
    description: "Walmart & Target confirmed drops. Bot advantage high.",
  },
  {
    id: 5,
    title: "Supreme Drop",
    subtitle: "Week 12 FW24",
    status: "live" as const,
    timeLeft: "Live Now",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    category: "streetwear",
    description: "Thursday 11 AM drop. Jackets and accessories live.",
  },
];

const filters = [
  { id: "all", label: "All Drops" },
  { id: "sneakers", label: "Sneakers" },
  { id: "tech", label: "Tech" },
  { id: "tickets", label: "Tickets" },
  { id: "streetwear", label: "Streetwear" },
];

export const LiveStatusSection = ({ activeFilter, setActiveFilter }: LiveStatusSectionProps) => {
  const filteredDrops = activeFilter === "all" 
    ? drops 
    : drops.filter(drop => drop.category === activeFilter);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-black">Live Drop Status</h2>
          <p className="text-muted-foreground">Real-time monitoring across all major platforms</p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className={activeFilter === filter.id ? "bg-primary text-primary-foreground" : ""}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDrops.map((drop) => (
            <DropCard key={drop.id} {...drop} />
          ))}
        </div>
      </div>
    </section>
  );
};
