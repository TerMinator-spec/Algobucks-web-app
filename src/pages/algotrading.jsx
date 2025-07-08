import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Settings2, Activity, UploadCloud, PieChart, BarChart3 } from 'lucide-react';
import CtaSection from '@/components/CtaSection';
import { toast } from '@/components/ui/use-toast';

const services = [
  {
    title: 'Strategy to Code',
    description: 'We convert your unique trading ideas into fully functional algorithmic bots.',
    icon: <Code className="h-10 w-10 text-blue-600" />, 
    details: 'You describe your trading rules — we build bots using Python, Node.js, or other frameworks and integrate with your preferred broker APIs (e.g., Shoonya, Zerodha, Flattrade).'
  },
  {
    title: 'Backtesting & Optimization',
    description: 'Test your strategy on historical data and fine-tune parameters for optimal performance.',
    icon: <PieChart className="h-10 w-10 text-green-600" />, 
    details: 'We run your bot on years of historical market data to analyze profitability, drawdowns, and risk metrics. Based on results, we iterate and optimize the logic.'
  },
  {
    title: 'Deployment & Live Trading',
    description: 'Deploy your bots for live trading on cloud servers with monitoring dashboards.',
    icon: <UploadCloud className="h-10 w-10 text-purple-600" />, 
    details: 'We help you set up bots on AWS, GCP, or VPS with secure credential management, fail-safes, and real-time monitoring interfaces.'
  },
  {
    title: 'Monitoring & Maintenance',
    description: 'We maintain, monitor, and update your bot to adapt to market conditions.',
    icon: <Settings2 className="h-10 w-10 text-yellow-600" />, 
    details: 'We provide optional ongoing maintenance to ensure bots perform consistently, notify you of anomalies, and integrate version upgrades or new logic.'
  },
  {
    title: 'Performance Analytics',
    description: 'Understand how your bot is performing and where improvements are possible.',
    icon: <Activity className="h-10 w-10 text-red-600" />, 
    details: 'We offer reports and dashboards with PnL, trade logs, risk analytics, and strategy comparisons for full transparency.'
  }
];

const topBots = [
  {
    name: 'Trend Rider',
    accuracy: '82%',
    roi: '68% annualized',
    description: 'Momentum-based bot that rides trends using moving average crossovers.',
    image: '/mavg_bot.png'
  },
  {
    name: 'Mean Reverter',
    accuracy: '76%',
    roi: '54% annualized',
    description: 'Capitalizes on price deviations and statistical reversals on hourly charts.',
    image: '/mean_reversion.png'
  },
  {
    name: 'Opening Range Breakout',
    accuracy: '88%',
    roi: '73% annualized',
    description: 'Scalping strategy based on high/low breakout of the first 15-minute candle.',
    image: '/scalping.png'
  }
];

const products = [
  {
    name: 'AI Sentiment-based Market Pulse',
    description: 'Get real-time market mood from financial news and social media powered by AI-driven sentiment analysis.',
    image: '/ai_sentiment.png',
    link: '/news_sentiment.html'
  },
  {
    name: 'AI-enhanced Stock Screener',
    description: 'Discover high-potential stocks using AI filters, pattern recognition, and predictive analytics.',
    image: '/stock_screener.png',
    link: '/products/sentiment-market-pulse'
  }
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

const AlgorithmicTradingPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@algobucks.com?subject=Algo Strategy Request from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="pt-20">
      <section className="relative py-32 bg-gradient-to-r from-indigo-600 to-blue-600 text-white overflow-hidden">
        <img 
          src="/trading_img.png"
          alt="Algorithmic trading concept"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">Custom Algorithmic Trading Bots</h1>
            <p className="text-white/90 text-xl mb-4">
              Turn your trading ideas into intelligent bots. We handle everything — from strategy coding and backtesting to deployment and monitoring.
            </p>
            <Button size="lg" className="mt-4 bg-white text-blue-600 hover:text-white hover:bg-blue-700 transition-all">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
            <h2 className="mb-6">How It <span className="gradient-text">Works</span></h2>
            <p className="text-gray-600 text-lg mb-12">
              A transparent, collaborative process — from your raw idea to live deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Submit Strategy', description: 'You provide us with clear rules, conditions, and indicators used in your trading idea.' },
              { number: '02', title: 'Build & Backtest', description: 'We write code, backtest it on historical data, and share performance reports with you.' },
              { number: '03', title: 'Deploy & Monitor', description: 'Your bot is deployed on your preferred broker and monitored in real-time.' },
              { number: '04', title: 'Iterate & Improve', description: 'Based on results and market changes, we update and optimize the bot.' },
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

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Top Performing <span className="gradient-text">Bots</span></h2>
            <p className="text-gray-600 text-lg mb-12">
              These are some of our most reliable bots built for real-world trading scenarios.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topBots.map((bot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border bg-white hover:shadow-lg transition-all duration-300">
                  <img src={bot.image} alt={bot.name} className="w-full h-40 object-cover rounded-t" />
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold mb-2">{bot.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-2">{bot.description}</p>
                    <p className="text-sm text-blue-600">Accuracy: {bot.accuracy}</p>
                    <p className="text-sm text-green-600">ROI: {bot.roi}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our <span className="gradient-text">Products</span></h2>
            <p className="text-gray-600 text-lg">AI-powered tools designed to give traders an edge in dynamic markets.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.a
                key={index}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="block"
              >
                <Card className="h-full border bg-white hover:shadow-lg transition-all duration-300">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t" />
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold mb-2">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">{product.description}</p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-100">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Want your trading strategy to be automated?</h2>
          <p className="text-gray-700 mb-8">Send us your idea and we'll get in touch!</p>

          <form
            action="https://formsubmit.co/info@algobucks.com"
            method="POST"
            onSubmit={() => toast({
              title: "Message sent!",
              description: "We'll get back to you within 24 hours.",
            })}
            className="grid gap-4 text-left"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://algobucks.com/contact-success" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded border"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded border"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Describe your trading idea"
              required
              className="p-3 rounded border"
            ></textarea>
            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">Send Request</Button>
          </form>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default AlgorithmicTradingPage;
