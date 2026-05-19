import { AboutSection } from "@/components/landing/AboutSection";
import { Hero } from "@/components/landing/Hero";
import { MissionVision } from "@/components/landing/MissionVision";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { StatsStrip } from "@/components/landing/StatsStrip";
import { ValuesGrid } from "@/components/landing/ValuesGrid";

export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <Hero />
        <StatsStrip />
        <AboutSection />
        <MissionVision />
        <ValuesGrid />
        <SiteFooter />
      </main>
    </>
  );
}
