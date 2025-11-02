import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropCard } from "@/components/DropCard";
import { useDrops } from "@/hooks/useDrops";
import { Skeleton } from "@/components/ui/skeleton";

interface LiveStatusSectionProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const filters = [
  { id: "all", label: "All Drops" },
  { id: "sneakers", label: "Sneakers" },
  { id: "tech", label: "Tech" },
  { id: "tickets", label: "Tickets" },
  { id: "collectibles", label: "Collectibles" },
  { id: "gaming", label: "Gaming" },
];

export const LiveStatusSection = ({ activeFilter, setActiveFilter }: LiveStatusSectionProps) => {
  const { data: drops, isLoading } = useDrops(activeFilter);

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
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-[400px] w-full" />
            ))
          ) : drops && drops.length > 0 ? (
            drops.map((drop) => (
              <DropCard
                key={drop.id}
                title={drop.title}
                subtitle={drop.subtitle || ""}
                status={drop.status as "live" | "upcoming" | "soldout"}
                timeLeft={drop.time_left || ""}
                image={drop.image_url || ""}
                description={drop.description || ""}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No drops found in this category</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
