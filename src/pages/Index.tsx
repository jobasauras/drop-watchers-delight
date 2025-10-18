import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LiveStatusSection } from "@/components/LiveStatusSection";
import { StatsBar } from "@/components/StatsBar";
import { FeaturedDrops } from "@/components/FeaturedDrops";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <LiveStatusSection activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <FeaturedDrops />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
