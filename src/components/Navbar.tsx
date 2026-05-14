import { NavbarClient } from "./NavbarClient";
import { getGithubStars, getLatestRelease } from "@/lib/api";

export async function Navbar() {
  const stars = await getGithubStars();
  const latestRelease = await getLatestRelease();
  const latestVersion = latestRelease?.tag_name || "v0.1.0";

  return <NavbarClient stars={stars} latestVersion={latestVersion} />;
}
