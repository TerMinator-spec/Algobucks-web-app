import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Users, TrendingUp, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-10 w-10 text-purple-600" />,
    title: 'Agile & Adaptive',
    description: 'We respond quickly to market changes and tailor our strategies to your evolving needs, ensuring relevance and impact.',
  },
  {
    icon: <Target className="h-10 w-10 text-blue-600" />,
    title: 'Results-Driven Focus',
    description: 'Our primary goal is to deliver measurable results that contribute directly to your business growth and success.',
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-yellow-600" />,
    title: 'Innovative Solutions',
    description: 'We leverage the latest in analytics and trading technology to provide fresh, innovative solutions to complex problems.',
  },
  {
    icon: <Users className="h-10 w-10 text-green-600" />,
    title: 'Client-Centric Partnership',
    description: 'We work as an extension of your team, fostering close collaboration and a deep understanding of your objectives.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Why Partner With <span className="gradient-text">Algobucks?</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            As a dedicated startup, we offer a unique blend of cutting-edge expertise, personalized attention, and a commitment to your growth. Discover what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 h-full"
            >
              <div className="mb-6 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center p-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl">
              <TrendingUp className="h-8 w-8 mr-4" />
              <p className="text-lg font-semibold">
                Committed to growing with you, every step of the way.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;