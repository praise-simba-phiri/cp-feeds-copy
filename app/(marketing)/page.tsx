import { AboutSection } from "@/components/landing/AboutSection";
import { ContactModal } from "@/components/landing/ContactModal";
import { ContactUs } from "@/components/landing/ContactUs";
import { Hero } from "@/components/landing/Hero";
import { MissionVision } from "@/components/landing/MissionVision";
import { OurDepots } from "@/components/landing/OurDepots";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { StatsStrip } from "@/components/landing/StatsStrip";
import { ValuesGrid } from "@/components/landing/ValuesGrid";

export default function LandingPage() {
  return (
    <main className="w-full">
      <div className="relative">
        <SiteHeader />
        <Hero />
      </div>
      <StatsStrip />
      <AboutSection />
      <MissionVision />
      <ValuesGrid />
      <OurDepots />
      <ContactUs />
      <SiteFooter />
      <ContactModal />
    </main>
  );
}
