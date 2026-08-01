import Hero from "./_components/Hero";
import CategorySection from "./_components/CategorySection";
import FeaturedGear from "./_components/FeaturedGear";
import HowItWorks from "./_components/HowItWorks";
import CTA from "./_components/CTA";

export default function HomePage() {
  return (
    <main className="space-y-28 pb-20">
      <Hero />
      <CategorySection />
      <FeaturedGear />
      <HowItWorks />
      <CTA />
    </main>
  );
}