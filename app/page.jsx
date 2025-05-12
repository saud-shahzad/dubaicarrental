// app/page.js
'use client';

import HeroSection from '@/components/HeroSection';
import WhyRentSection from '@/components/WhyRentSection';
import RentProcessSection from '@/components/RentProcessSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyRentSection />
      <RentProcessSection />
    </>
  );
}
