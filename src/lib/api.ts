const REPO = "vaguemit/hermes-gui";

export async function getGithubStars() {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return 0;
    const data = await res.json();
    return data.stargazers_count || 0;
  } catch (e) {
    console.error("Failed to fetch github stars", e);
    return 0;
  }
}

export async function getLatestRelease() {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch (e) {
    console.error("Failed to fetch latest release", e);
    return null;
  }
}

export async function getReleases() {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data;
  } catch (e) {
    console.error("Failed to fetch releases", e);
    return [];
  }
}
