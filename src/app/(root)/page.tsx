import CallToAction from "@/components/call-to-action";
import Features from "@/components/features-4";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <CallToAction />
      <FooterSection />
    </>
  );
}
