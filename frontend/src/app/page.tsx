import Comparison from "@/components/landing/Comparison";
import FeatureGrid from "@/components/landing/FeatureGrid";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import LivePreview from "@/components/landing/LivePreview";
import Navbar from "@/components/landing/Navbar";
import Pricing from "@/components/landing/Pricing";

export default function Home() {
  return (
    <div className="bg-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <Comparison />
        <LivePreview />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
