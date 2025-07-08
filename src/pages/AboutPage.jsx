import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Users, Globe, Calendar, ArrowRight, TrendingUp, Target, Lightbulb } from 'lucide-react';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const companyName = "Algobucks Consultancy";
  const foundingYear = new Date().getFullYear() - 2;

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering the highest quality solutions to our clients.',
      icon: <Award className="h-10 w-10 text-blue-600" />,
    },
    {
      title: 'Integrity',
      description: 'We act with honesty, transparency, and ethical conduct in all our business relationships.',
      icon: <CheckCircle className="h-10 w-10 text-green-600" />,
    },
    {
      title: 'Client Focus',
      description: 'Our clients are at the heart of everything. We build partnerships based on mutual trust and respect.',
      icon: <Users className="h-10 w-10 text-purple-600" />,
    },
    {
      title: 'Innovation',
      description: 'We embrace innovative thinking and agile approaches to develop cutting-edge solutions for complex challenges.',
      icon: <Lightbulb className="h-10 w-10 text-yellow-600" />,
    },
  ];

  const timeline = [
    {
      year: `${foundingYear}`,
      title: 'Founded',
      description: `${companyName} was established with a vision to provide innovative analytics and trading solutions for emerging businesses.`,
    },
    {
      year: `${foundingYear + 1}`,
      title: 'First Milestones',
      description: 'Successfully delivered initial projects, helping early clients achieve their analytical goals and establish key strategies.',
    },
    {
      year: 'Today',
      title: 'Growing Strong',
      description: `Focused on expanding our expertise, building strong client relationships, and innovating in the analytics and trading space.`,
    },
  ];

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
            <h1 className="text-white mb-6">About {companyName}</h1>
            <p className="text-white/90 text-xl">
              We are a young, passionate team of consultants dedicated to helping businesses transform, innovate, and grow through smart analytics and trading solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Our <span className="gradient-text">Story</span></h2>
              
              <p className="text-gray-600 mb-6 text-lg">
                Founded in {foundingYear}, {companyName} emerged from a shared passion for data-driven decision-making and a desire to help businesses unlock their full potential. We saw an opportunity to provide specialized, agile consultancy services tailored to the fast-paced world of analytics and trading.
              </p>
              
              <p className="text-gray-600 mb-6 text-lg">
                In our initial two years, we've focused on building a strong foundation of expertise, developing innovative methodologies, and forging close partnerships with our early clients. Our journey is fueled by a commitment to continuous learning and a drive to deliver exceptional value.
              </p>
              
              <p className="text-gray-600 mb-8 text-lg">
                We are excited about the future and the opportunity to help more businesses thrive through strategic insights and cutting-edge solutions.
              </p>

              <Link to="/services">
                <Button className="button-gradient text-lg h-12 px-8" size="lg">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-100 rounded-full opacity-70"></div>
              
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img  
                  alt={`${companyName} team collaborating`} 
                  className="w-full h-auto rounded-lg"
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Our Core <span className="gradient-text">Values</span></h2>
            <p className="text-gray-600 text-lg">
              Our values define who we are and how we operate, guiding our decisions and interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm card-hover h-full flex flex-col"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 flex-grow">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Our <span className="gradient-text">Journey So Far</span></h2>
            <p className="text-gray-600 text-lg">
              A brief look at our key milestones as a growing consultancy.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative flex items-center md:flex-row flex-col"
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                      <div className="text-xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center hidden md:flex">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  
                  <div className="w-full md:w-1/2 hidden md:block"></div>
                   <div className="md:hidden w-full h-8 flex justify-center items-center">
                    <div className="w-1 h-full bg-gray-200"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Meet Our <span className="gradient-text">Founding Team</span></h2>
            <p className="text-gray-600 text-lg">
              Our dedicated founders bring expertise and passion to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Aman Rathore", title: "Founder & CTO", imageAlt: "Portrait of Jane Doe", imagePlaceholder: "Dynamic female leader", srcKey:"Aman_Rathore" },
              { name: "Gaurav Kumar", title: "Founder & CEO", imageAlt: "Portrait of John Smith", imagePlaceholder: "Focused male analyst", srcKey: "Gaurav_Kumar" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-sm card-hover"
              >
                <div className="h-64 bg-gray-200">
                   {member.srcKey === "Aman_Rathore" && <img  alt={member.imageAlt} className="w-full h-full object-cover" src="/aman_img.jpeg" />}
                   {member.srcKey === "Gaurav_Kumar" && <img  alt={member.imageAlt} className="w-full h-full object-cover" src="/gaurav_img.jpeg" />}
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.title}</p>
                  <p className="text-gray-600 text-sm">
                    Passionate about leveraging data to drive growth and innovation.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default AboutPage;