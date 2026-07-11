import type { Metadata } from "next";
import { Montserrat, Anton } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Charisword Gospel Ministry | The Supernatural Community",
    template: "%s | Charisword Gospel Ministry",
  },
  description: "The Supernatural Community",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Charisword Gospel Ministry | The Supernatural Community",
    description:
      "Charisword Gospel Ministry is an End Time Ministry demonstrating the power of God's Word, bringing the Body of Christ to the consciousness of the Super-Life, and raising able ministers of the Gospel of Grace worldwide.",
    url: "https://charisword.org",
    siteName: "ChariswordGospel Ministry",
    type: "website",
    images: [
      {
        url: "https://charisword.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Charisword Gospel Ministry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charisword Gospel Ministry |The Supernatural Community",
    description:
      "Charisword Gospel Ministry is an End Time Ministry demonstrating the power of God's Word, bringing the Body of Christ to the consciousness of the Super-Life, and raising able ministers of the Gospel of Grace worldwide.",
    images: ["https://charisword.org/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          id="fix-language-error"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  Object.defineProperty(navigator, 'language', {
                    get: () => 'en-US',
                    configurable: true,
                  });
                  Object.defineProperty(navigator, 'languages', {
                    get: () => ['en-US', 'en'],
                    configurable: true,
                  });
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>

      <body
        className={`${montserrat.variable} ${anton.variable} antialiased bg-gray-50 text-gray-900`}>
        {children}
        <Toaster position="top-right" />

       
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Charisword Gospel Ministry",
              alternateName: "The Supernatural Community",
              url: "https://charisword.org",
              logo: "https://charisword.org/icon.png",
              description:
                "Charisword Gospel Ministry is an End Time Ministry demonstrating the power of God's Word, bringing the Body of Christ to the consciousness of the Super-Life, and raising able ministers of the Gospel of Grace worldwide.",
              sameAs: [
                "https://web.facebook.com/charisword",
                "https://www.instagram.com/charisword/",
                "https://x.com/ChariswordM",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}