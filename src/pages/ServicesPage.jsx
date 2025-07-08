import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Lightbulb, TrendingUp, Layers, Globe, Shield, Users, PieChart, Briefcase, Target, Zap, LineChart } from 'lucide-react';
import CtaSection from '@/components/CtaSection';

const services = [
  {
    title: 'Business Strategy',
    description: 'Develop comprehensive strategies to achieve your business goals and outperform competitors.',
    icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
    details: 'Our strategic planning process helps you clarify your vision, set measurable goals, and create actionable plans to achieve them. We analyze your market position, competitive landscape, and internal capabilities to develop strategies that drive sustainable growth.'
  },
  {
    title: 'Digital Transformation',
    description: 'Leverage technology to revolutionize your business processes and customer experiences.',
    icon: <Globe className="h-10 w-10 text-purple-600" />,
    details: 'We help you navigate the digital landscape by identifying the right technologies and implementation strategies to transform your business. From cloud migration to AI integration, we ensure your digital transformation journey delivers tangible results.'
  },
  {
    title: 'Market Analysis',
    description: 'Gain deep insights into market trends, customer behavior, and competitive landscapes.',
    icon: <BarChart3 className="h-10 w-10 text-green-600" />,
    details: 'Our data-driven market analysis provides you with actionable insights to make informed business decisions. We identify market opportunities, analyze customer segments, and evaluate competitive threats to help you position your business for success.'
  },
  {
    title: 'Innovation Consulting',
    description: 'Foster a culture of innovation and develop new products or services that disrupt the market.',
    icon: <Lightbulb className="h-10 w-10 text-yellow-600" />,
    details: 'We help you build innovation capabilities within your organization and develop processes for generating, evaluating, and implementing new ideas. Our approach combines design thinking, lean startup methodologies, and agile development to bring innovative solutions to market faster.'
  },
  {
    title: 'Operational Excellence',
    description: 'Optimize your operations to increase efficiency, reduce costs, and improve quality.',
    icon: <Layers className="h-10 w-10 text-red-600" />,
    details: 'We analyze your operational processes to identify inefficiencies and implement improvements that enhance productivity and quality while reducing costs. Our approach combines lean principles, process automation, and performance management to drive operational excellence.'
  },
  {
    title: 'Risk Management',
    description: 'Identify, assess, and mitigate risks to protect your business and ensure continuity.',
    icon: <Shield className="h-10 w-10 text-indigo-600" />,
    details: 'Our comprehensive risk management framework helps you identify potential threats to your business, assess their impact, and develop strategies to mitigate them. We cover operational, financial, strategic, and compliance risks to ensure business resilience.'
  },
  {
    title: 'Leadership Development',
    description: 'Build strong leadership capabilities to drive organizational performance and growth.',
    icon: <Users className="h-10 w-10 text-blue-600" />,
    details: 'We help you develop leadership capabilities at all levels of your organization through assessment, coaching, and targeted development programs. Our approach focuses on building the skills and mindsets needed to lead effectively in today\'s complex business environment.',
  },
  {
    title: 'Financial Advisory',
    description: 'Optimize financial performance and make sound investment decisions to maximize value.',
    icon: <PieChart className="h-10 w-10 text-green-600" />,
    details: 'Our financial advisory services help you improve financial performance, optimize capital structure, and make sound investment decisions. We provide financial modeling, valuation, and transaction support to help you maximize value creation.'
  },
  {
    title: 'Change Management',
    description: 'Navigate organizational change successfully to achieve desired business outcomes.',
    icon: <Briefcase className="h-10 w-10 text-purple-600" />,
    details: 'We help you plan and implement organizational changes that stick. Our change management approach addresses the people side of change, ensuring stakeholder buy-in, effective communication, and capability building to achieve sustainable transformation.'
  },
  {
    title: 'Customer Experience Strategy',
    description: 'Design exceptional customer experiences that drive loyalty and business growth.',
    icon: <Target className="h-10 w-10 text-red-600" />,
    details: 'We help you design and deliver exceptional customer experiences that drive loyalty and business growth. Our approach includes customer journey mapping, experience design, and implementation of customer-centric processes and technologies.'
  },
  {
    title: 'Sustainability Consulting',
    description: 'Develop and implement sustainability strategies that create business value.',
    icon: <Zap className="h-10 w-10 text-green-600" />,
    details: 'We help you develop and implement sustainability strategies that create business value while addressing environmental and social challenges. Our approach includes sustainability assessment, strategy development, and implementation support.'
  },
  {
    title: 'Data Analytics',
    description: 'Leverage data to gain insights, make better decisions, and drive business performance.',
    icon: <LineChart className="h-10 w-10 text-blue-600" />,
    details: 'We help you harness the power of data to gain insights, make better decisions, and drive business performance. Our data analytics services include data strategy, analytics implementation, and building data-driven decision-making capabilities.'
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

const ServicesPage = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-white mb-6">Our Services</h1>
            <p className="text-white/90 text-xl">
              Comprehensive consultancy solutions tailored to your business needs. We help you navigate challenges, seize opportunities, and achieve sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
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
                    <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                    <p className="text-gray-700 text-sm">{service.details}</p>
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
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Our <span className="gradient-text">Approach</span></h2>
            <p className="text-gray-600 text-lg mb-12">
              We follow a proven methodology to deliver exceptional results for our clients. Our approach is collaborative, data-driven, and focused on creating sustainable value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Discover', description: 'We start by understanding your business, challenges, and goals through in-depth research and stakeholder interviews.' },
              { number: '02', title: 'Analyze', description: 'Our experts analyze the data to identify root causes, opportunities, and potential solutions tailored to your needs.' },
              { number: '03', title: 'Develop', description: 'We develop comprehensive strategies and implementation plans with clear milestones and measurable outcomes.' },
              { number: '04', title: 'Implement', description: 'We work alongside your team to implement solutions, transfer knowledge, and ensure sustainable results.' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gray-50 rounded-lg p-8 h-full">
                  <div className="text-5xl font-bold text-blue-100 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-blue-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default ServicesPage;