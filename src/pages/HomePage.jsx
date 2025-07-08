import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StatsSection from '@/components/StatsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import OurWorkSection from '@/components/OurWorkSection';
import CtaSection from '@/components/CtaSection';
import ContactForm from '@/components/ContactForm';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <OurWorkSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactForm />
      <CtaSection />
    </>
  );
};

export default HomePage;