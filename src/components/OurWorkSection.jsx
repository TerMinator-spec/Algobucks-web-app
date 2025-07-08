import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Network, Tag, MapPinned, GanttChartSquare, Users, Bot } from 'lucide-react';

const workItems = [
  {
    title: 'Algorithmic trading',
    description: 'Customized Algo trading bots, scanners, market latest news, and backtesting engine',
    icon: <Plane className="h-10 w-10 text-blue-600" />,
    imageAlt: "Algo bot doing trading",
    imagePlaceholder: "Algo bot doing trading"
  },
  {
    title: 'Passenger Demand Forecasting (Aviation)',
    description: 'Advanced analytics to predict airline passenger demand, optimizing routes and revenue.',
    icon: <Plane className="h-10 w-10 text-blue-600" />,
    imageAlt: "Stylized airplane flying over a graph",
    imagePlaceholder: "Airplane and demand chart"
  },
  {
    title: 'Distribution Network Optimization and route optimization',
    description: 'Streamlining logistics and supply chains for maximum efficiency and cost reduction.',
    icon: <Network className="h-10 w-10 text-purple-600" />,
    imageAlt: "Abstract representation of a distribution network",
    imagePlaceholder: "Distribution network nodes"
  },
  {
    title: 'Pricing & Promo Analytics',
    description: 'Data-driven strategies for optimal pricing and effective promotional campaigns.',
    icon: <Tag className="h-10 w-10 text-green-600" />,
    imageAlt: "Price tags and analytical charts",
    imagePlaceholder: "Pricing analytics graph"
  },
  
  {
    title: 'Supply Chain Control Tower',
    description: 'Real-time visibility and control over complex supply chain operations.',
    icon: <GanttChartSquare className="h-10 w-10 text-red-600" />,
    imageAlt: "Dashboard showing supply chain metrics",
    imagePlaceholder: "Supply chain control tower dashboard"
  },
  {
    title: 'HR Analytics',
    description: 'Leveraging data to improve talent acquisition, retention, and workforce performance.',
    icon: <Users className="h-10 w-10 text-indigo-600" />,
    imageAlt: "Charts and graphs related to human resources",
    imagePlaceholder: "HR analytics dashboard"
  },
  {
    title: 'AI Chatbot Assistant',
    description: 'Intelligent chatbots to enhance customer service and automate interactions.',
    icon: <Bot className="h-10 w-10 text-pink-600" />,
    imageAlt: "Chatbot interface with conversation bubbles",
    imagePlaceholder: "AI chatbot conversation"
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const OurWorkSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Areas of <span className="gradient-text">Expertise</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We specialize in transforming complex data into actionable insights across various domains. Explore some of our key solution areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <Card className="h-full card-hover border-0 bg-white shadow-lg overflow-hidden flex flex-col">
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  {index === 0 && <img  alt={item.imageAlt} className="w-full h-full object-cover opacity-70" src="/algo_bot_poster.png" />}
                  {index === 1 && <img  alt={item.imageAlt} className="w-full h-full object-cover opacity-70" src="/aviation.png" />}
                  {index === 2 && <img  alt={item.imageAlt} className="w-full h-full object-cover opacity-70" src="/dno.png" />}
                  {index === 3 && <img  alt={item.imageAlt} className="w-full h-full object-cover opacity-70" src="/pricing_promo.png" />}
                  {index === 4 && <img  alt={item.imageAlt} className="w-full h-full object-cover opacity-70" src="/supply_chain.png" />}
                  {index === 5 && <img  alt={item.imageAlt} className="w-full h-full object-cover opacity-70" src="/hr_analytics.png" />}
                  {index === 6 && <img  alt={item.imageAlt} className="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />}
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
                    {item.icon}
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-center">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 text-sm text-center">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;