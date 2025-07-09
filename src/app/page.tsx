import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CompanyDescription } from "@/components/CompanyDescription";
import { ServicesSection } from "@/components/ServicesSection";
import { InsuranceProducts } from "@/components/InsuranceProducts";
import { WhyChooseScib } from "@/components/WhyChooseScib";
import { SectorsSection } from "@/components/SectorsSection";
import { CommitmentSection } from "@/components/CommitmentSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <CompanyDescription />
      <ServicesSection />
      <InsuranceProducts />
      <WhyChooseScib />
      <SectorsSection />
      <CommitmentSection />
      <Footer />
    </main>
  );
}
