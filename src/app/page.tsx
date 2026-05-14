import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Architecture } from "@/components/Architecture";
import { InstallTabs } from "@/components/InstallTabs";
import { Changelog } from "@/components/Changelog";
import { Roadmap } from "@/components/Roadmap";
import { OpenSourceCTA } from "@/components/OpenSourceCTA";
import { Footer } from "@/components/Footer";
import { getLatestRelease } from "@/lib/api";

export default async function Home() {
  const latestRelease = await getLatestRelease();
  const latestVersion = latestRelease?.tag_name || "v0.1.0";

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <TrustBar />
      <FeatureGrid />
      <Architecture />
      <InstallTabs latestVersion={latestVersion} />
      <Changelog />
      <Roadmap />
      <OpenSourceCTA />
      <Footer />
    </main>
  );
}
