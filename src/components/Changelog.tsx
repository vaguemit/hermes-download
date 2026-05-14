import { ChangelogClient } from "./ChangelogClient";
import { getReleases } from "@/lib/api";

export async function Changelog() {
  // Fetch releases and show max 3
  const allReleases = await getReleases();
  const topReleases = Array.isArray(allReleases) ? allReleases.slice(0, 3) : [];

  return <ChangelogClient releases={topReleases} />;
}
