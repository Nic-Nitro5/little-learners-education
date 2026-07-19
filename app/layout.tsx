import type { Metadata } from "next";
import { Playfair_Display, Parisienne } from "next/font/google";
import { MotionConfig } from "framer-motion";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const parisienne = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl = "https://littlelearnerseducation.global";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Little Learners Education | Teaching, Tuition & Therapy",
    template: "%s | Little Learners Education",
  },
  description:
    "Helping children to thrive by understanding how they think, feel and learn as individuals. Private teaching, tuition, educational psychology and therapy services led by Jasmin, Teacher & Therapist, since 2015.",
  keywords: [
    "private teaching",
    "tuition",
    "educational psychology",
    "play therapy",
    "TEFL",
    "TESOL",
    "TESL",
    "coding for kids",
    "South Africa",
  ],
  openGraph: {
    title: "Little Learners Education",
    description:
      "Helping children to thrive by understanding how they think, feel and learn as individuals.",
    url: siteUrl,
    siteName: "Little Learners Education",
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Learners Education",
    description:
      "Helping children to thrive by understanding how they think, feel and learn as individuals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${parisienne.variable}`}>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-brown antialiased">
        <MotionConfig reducedMotion="user">
          <ScrollProgress />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </MotionConfig>
      </body>
    </html>
  );
}
