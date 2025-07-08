import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Lightbulb, TrendingUp, Layers, Globe, Shield } from 'lucide-react';

const services = [
  {
    title: 'Business Strategy',
    description: 'Develop comprehensive strategies to achieve your business goals and outperform competitors.',
    icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
  },
  {
    title: 'Digital Transformation',
    description: 'Leverage technology to revolutionize your business processes and customer experiences.',
    icon: <Globe className="h-10 w-10 text-purple-600" />,
  },
  {
    title: 'Market Analysis',
    description: 'Gain deep insights into market trends, customer behavior, and competitive landscapes.',
    icon: <BarChart3 className="h-10 w-10 text-green-600" />,
  },
  {
    title: 'Innovation Consulting',
    description: 'Foster a culture of innovation and develop new products or services that disrupt the market.',
    icon: <Lightbulb className="h-10 w-10 text-yellow-600" />,
  },
  {
    title: 'Operational Excellence',
    description: 'Optimize your operations to increase efficiency, reduce costs, and improve quality.',
    icon: <Layers className="h-10 w-10 text-red-600" />,
  },
  {
    title: 'Risk Management',
    description: 'Identify, assess, and mitigate risks to protect your business and ensure continuity.',
    icon: <Shield className="h-10 w-10 text-indigo-600" />,
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

const ServicesSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our <span className="gradient-text">Services</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer a comprehensive range of consultancy services designed to help your business grow, innovate, and succeed in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <Card className="h-full card-hover border-0 bg-white">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="p-0 hover:bg-transparent text-blue-600 hover:text-blue-800">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="button-gradient text-lg h-12 px-8" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;