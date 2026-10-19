import type { Metadata } from "next";
import { Inter, Lilita_One, Newsreader } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import AdminTrigger from "@/components/admin/AdminTrigger";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Jeffrey Li",
  description: "Jeffrey Li's personal site",
};

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Newsreader({ subsets: ["latin"], variable: "--font-serif" });
const display = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${display.variable}`}
    >
      <body className="flex min-h-screen flex-col font-sans">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <AdminTrigger />
        </Providers>
      </body>
    </html>
  );
}
