import { HeroClient } from "./HeroClient";
import { getLatestRelease } from "@/lib/api";

export async function Hero() {
  const latestRelease = await getLatestRelease();
  const latestVersion = latestRelease?.tag_name || "v0.1.0";

  return <HeroClient latestVersion={latestVersion} />;
}
