import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OurStoryTeaser from '@/components/OurStoryTeaser';
import FeaturedMenu from '@/components/FeaturedMenu';
import WhyChooseUs from '@/components/WhyChooseUs';
import CallToActionSection from '@/components/CallToActionSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurStoryTeaser />
        <FeaturedMenu />
        <WhyChooseUs />
        <CallToActionSection />
      </main>
      <Footer />
    </>
  );
}
