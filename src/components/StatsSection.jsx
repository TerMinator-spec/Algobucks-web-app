import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '2+', label: 'Years of Experience' },
  { value: '100%', label: 'Client Focus' },
  { value: 'Agile', label: 'Methodology' },
  { value: 'Custom', label: 'Solutions' },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-lg"></div>
                <div className="relative bg-gray-800 rounded-lg p-6 h-full flex flex-col justify-center items-center min-h-[150px]">
                  <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;