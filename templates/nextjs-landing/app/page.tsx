"use client";

import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import PropertyTypeBrowse from '@/components/PropertyTypeBrowse';
import AgentSpotlight from '@/components/AgentSpotlight';
import Testimonials from '@/components/Testimonials';
import CtaAgentsSellers from '@/components/CtaAgentsSellers';
import Footer from '@/components/Footer';
import React from 'react';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProperties />
      <PropertyTypeBrowse />
      <AgentSpotlight />
      <Testimonials />
      <CtaAgentsSellers />
      <Footer />
    </main>
  );
}
