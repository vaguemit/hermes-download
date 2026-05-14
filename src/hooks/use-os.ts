"use client";

import { useEffect, useState } from "react";

export type OS = "macOS" | "Windows" | "Linux" | "Unknown";

export function useOS() {
  const [os, setOs] = useState<OS>("Unknown");

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes("mac")) {
      setOs("macOS");
    } else if (userAgent.includes("win")) {
      setOs("Windows");
    } else if (userAgent.includes("linux")) {
      setOs("Linux");
    }
  }, []);

  return os;
}
