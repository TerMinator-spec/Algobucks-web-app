import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Clock } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: 'Our Location',
      details: ['Dwarka Mor', 'New Delhi', 'India'],
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: 'Email Address',
      details: ['info@algobucks.com'],
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday - Sunday: Closed'],
    },
  ];

  const handleSubmit = () => {
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

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
            <h1 className="text-white mb-6">Contact Us</h1>
            <p className="text-white/90 text-xl">
              Have questions or ready to start your business transformation journey? Get in touch with our team today.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm card-hover"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <div className="space-y-2">
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="mb-6">Send Us a <span className="gradient-text">Message</span></h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <form
                  action="https://formsubmit.co/info@algobucks.com"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://algobucks.com/contact-success" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="bg-gray-200 h-96 lg:h-auto">
                <img
                  alt="Map showing office location"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1681689377699-caa51c35ea46"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-white/90 text-xl max-w-3xl mx-auto mb-8">
            Schedule a free consultation with our experts and take the first step towards business excellence.
          </p>
          <button className="bg-white text-blue-600 hover:bg-white/90 py-3 px-8 rounded-md text-lg font-medium">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
