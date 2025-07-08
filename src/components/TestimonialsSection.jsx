import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

const testimonials = [
  {
    quote: "As a new venture, Algobucks provided us with critical market insights that shaped our initial strategy. Their agile approach was exactly what we needed.",
    author: "Alex Green",
    position: "Founder, Innovate Startups",
    image: "alex-green" 
  },
  {
    quote: "The team at Algobucks is passionate and dedicated. They helped us optimize our early-stage analytics, setting a strong foundation for future growth.",
    author: "Maria Bello",
    position: "Director, Tech Sprouts LLC",
    image: "maria-bello"
  },
  {
    quote: "Algobucks's custom solutions were instrumental in helping us understand our niche market. Their dedication to our success was evident from day one.",
    author: "Sam Lee",
    position: "Co-founder, NextGen Analytics",
    image: "sam-lee" 
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) {
    return (
      <section className="section-padding bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container-custom text-center">
          <Sparkles className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h2 className="mb-4">Building <span className="gradient-text">Success Stories</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're passionate about helping businesses like yours achieve their goals. As we grow, we look forward to sharing our client successes here.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Early <span className="gradient-text">Successes</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear from some of our early partners and clients.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <Quote className="h-12 w-12 text-blue-500/20 mb-6" />
                  <p className="text-xl md:text-2xl text-gray-700 italic mb-8">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4 rounded-full overflow-hidden w-16 h-16 border-2 border-blue-100 bg-gray-200 flex items-center justify-center">
                      {testimonials[currentIndex].image === "alex-green" && <img  alt="Portrait of Alex Green" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1586880244386-8b3e34c8382c" />}
                      {testimonials[currentIndex].image === "maria-bello" && <img  alt="Portrait of Maria Bello" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1698435249654-9fa1b3abf79f" />}
                      {testimonials[currentIndex].image === "sam-lee" && <img  alt="Portrait of Sam Lee" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1695480497603-381a2bee1c05" />}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{testimonials[currentIndex].author}</p>
                      <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;