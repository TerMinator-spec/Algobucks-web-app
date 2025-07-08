import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img  
            alt="Abstract pattern background" 
            className="w-full h-full object-cover"
           src="https://images.unsplash.com/photo-1646435607157-5e6d56546f52" />
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-white/90 text-xl mb-8">
            Take the first step towards business excellence. Schedule a free consultation with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-blue-600 hover:bg-white/90 text-lg h-12 px-8" size="lg">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg h-12 px-8" size="lg">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;