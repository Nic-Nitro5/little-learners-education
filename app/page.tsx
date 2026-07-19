import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import About from "./components/About";
import IndividualNeedsPanel from "./components/IndividualNeedsPanel";
import Specialties from "./components/Specialties";
import Services from "./components/Services";
import PricingCTA from "./components/PricingCTA";
import CodingSection from "./components/CodingSection";
import CalloutBanner from "./components/CalloutBanner";
import Gallery from "./components/Gallery";
import BookingCTA from "./components/BookingCTA";
import VideoSection from "./components/VideoSection";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <About />
      <IndividualNeedsPanel />
      <Specialties />
      <Services />
      <PricingCTA />
      <CodingSection />
      <CalloutBanner />
      <Gallery />
      <BookingCTA />
      <VideoSection />
      <Contact />
    </>
  );
}
