import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Hermes GUI — Desktop App for Nous Research Hermes Agent",
  description: "Install, configure, and run Hermes Agent from a native desktop app. No terminal required.",
  openGraph: {
    images: ["/assets/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased" style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
        {children}
      </body>
    </html>
  );
}
