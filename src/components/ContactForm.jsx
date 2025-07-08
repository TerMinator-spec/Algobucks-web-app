import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    e.target.submit();
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">Get in <span className="gradient-text">Touch</span></h2>
            <p className="text-gray-600 mb-8 text-lg">
              Have a question or ready to start your business transformation journey? 
              Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Our Office</h3>
              <p className="text-gray-600 mb-2">Dwarka mor, New Delhi</p>
              <p className="text-gray-600 mb-2">Delhi </p>
              <p className="text-gray-600 mb-2">India</p>
              <p className="text-gray-600">info@algobucks.com</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <p className="text-gray-600 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday - Sunday: Closed</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              action="https://formsubmit.co/info@algobucks.com"
              method="POST"
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
            >
              {/* FormSubmit hidden inputs */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://algobucks.com/contact-success" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="How can we help you?"
                  rows={5}
                />
              </div>
              
              <Button 
                type="submit" 
                className="button-gradient w-full text-lg h-12"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
