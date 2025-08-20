import CallToAction from "@/components/call-to-action";
import Features from "@/components/features-4";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    redirect("/dashboard");
  }
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
