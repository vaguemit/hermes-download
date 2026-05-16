import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechTicker } from "@/components/TechTicker";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Architecture } from "@/components/Architecture";
import { InstallTabs } from "@/components/InstallTabs";
import { Roadmap } from "@/components/Roadmap";
import { OpenSourceCTA } from "@/components/OpenSourceCTA";
import { Footer } from "@/components/Footer";
import { getLatestRelease, getGithubStars } from "@/lib/api";

export default async function Home() {
  const latestRelease = await getLatestRelease();
  const latestVersion = latestRelease?.tag_name || "v0.1.0";
  const stars = await getGithubStars();

  return (
    <main
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        backgroundColor: "#0a0a0a",
        width: "100%",
      }}
    >
      <Navbar />
      <Hero />
      <TechTicker />
      <FeatureGrid />
      <Architecture />
      <InstallTabs latestVersion={latestVersion} />
      <Roadmap />
      <OpenSourceCTA stars={stars} />
      <Footer />
    </main>
  );
}
