import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center hero-gradient">
      <div className="absolute inset-0 overflow-hidden">
        <img  
          alt="Modern office with business professionals in a meeting" 
          className="w-full h-full object-cover opacity-40"
          src="/hero-bg.jpg"
        />
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-white mb-6">
              Transform Your Business with <span className="gradient-text">Strategic Insights</span>
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="text-gray-200 text-xl mb-8">
              We provide innovative consultancy solutions to help your business thrive in today's competitive landscape.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollDown} className="button-gradient text-lg h-12 px-8" size="lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6, repeat: Infinity, repeatType: "reverse" }}>
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
