import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import EcosystemSection from "@/components/EcosystemSection";
import AppShowcase from "@/components/AppShowcase";
import ShowcaseSection from "@/components/ShowcaseSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <AppShowcase />
        <EcosystemSection />
        <TrustSection />
        <ShowcaseSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
