import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const benefits = [
    'Fresh perspectives and innovative ideas',
    'Agile and adaptable to your needs',
    'Dedicated to understanding your unique challenges',
    'Passionate about delivering tangible results',
    'Direct collaboration with founding consultants',
  ];
  const companyName = "Algobucks Consultancy";
  const foundingYear = new Date().getFullYear() - 2;


  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h2 className="mb-6">About <span className="gradient-text">{companyName}</span></h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              Founded in {foundingYear}, {companyName} is a dynamic and forward-thinking consultancy firm specializing in analytics and trading solutions. We bring fresh perspectives and agile methodologies to help your business navigate the complexities of modern markets.
            </p>
            
            <p className="text-gray-600 mb-8 text-lg">
              Our passionate team is dedicated to understanding your unique challenges and crafting tailored strategies that deliver tangible results. We believe in building strong partnerships and empowering your success.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <Link to="/about">
              <Button className="button-gradient text-lg h-12 px-8" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-100 rounded-full opacity-50 filter blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-100 rounded-full opacity-50 filter blur-xl"></div>
              <img  
                alt="Abstract representation of data analytics and growth" 
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;