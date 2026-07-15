import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project WIS — Web & Internet Solutions",
  description:
    "Project WIS builds custom web platforms — LMS, ordering systems, review systems, and full-stack applications — from architecture to deployment.",
  openGraph: {
    title: "Project WIS — Web & Internet Solutions",
    description:
      "Project WIS builds custom web platforms — LMS, ordering systems, review systems, and full-stack applications — from architecture to deployment.",
    type: "website",
  },
  verification: {
    google: "aGIjOe5giIjNubZCOwk9fsEAUWY1m7-6mNajaKXAmfY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8M33GBX6BJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8M33GBX6BJ');
          `}
        </Script>
      </body>
    </html>
  );
}
