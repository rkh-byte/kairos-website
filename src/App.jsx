import HeroSection from "./paper/HeroSection";
import ServicesSection from "./paper/ServicesSection";
import RoadmapSection from "./paper/RoadmapSection";
import SecuritySection from "./paper/SecuritySection";
import FaqSection from "./paper/FaqSection";
import ClosingSection from "./paper/ClosingSection";
import FooterSection from "./paper/FooterSection";
import HeaderSection from "./paper/HeaderSection";

export default function App() {
  return (
    <div className="@container relative mx-auto min-h-screen w-full max-w-[1473px] overflow-clip bg-white">
      <HeroSection />
      <ServicesSection />
      <RoadmapSection />
      <SecuritySection />
      <FaqSection />
      <ClosingSection />
      <FooterSection />
      <div className="absolute inset-x-0 top-0 z-50">
        <HeaderSection />
      </div>
    </div>
  );
}
