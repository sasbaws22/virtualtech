import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardCheck, Mail, Presentation, MessageSquare, FileSpreadsheet, Calendar, ArrowRight, Menu, X, ChevronUp, Gift, Star } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <ClipboardCheck className="w-12 h-12 text-blue-600" />,
      title: "Data Entry",
      description: "Fast & accurate data handling with administrative assistance"
    },
    {
      icon: <Presentation className="w-12 h-12 text-blue-600" />,
      title: "Presentation Design",
      description: "Professional slides & business decks that make an impact"
    },
    {
      icon: <Mail className="w-12 h-12 text-blue-600" />,
      title: "Email Support",
      description: "Efficient inbox management & client communication"
    },
    {
      icon: <FileSpreadsheet className="w-12 h-12 text-blue-600" />,
      title: "Data Analysis",
      description: "Professional analysis using Excel and Tableau"
    }
  ];

  const benefits = [
    "24/7 Availability",
    "Cost-Effective Solutions",
    "Quick Turnaround",
    "Professional Expertise"
  ];

  // Trending blog topics related to your services
  const blogPosts = [
    {
      title: "Transforming Data Entry: AI & Automation Trends in 2025",
      date: "March 15, 2025",
      excerpt: "Explore how AI-driven automation is revolutionizing data entry processes for enhanced efficiency and accuracy.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Innovative Presentation Design: Engaging Your Audience in 2025",
      date: "March 10, 2025",
      excerpt: "Discover cutting-edge trends in presentation design that captivate audiences and drive business success.",
      image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Data Analysis in the Modern Era: Tools and Techniques for 2025",
      date: "March 5, 2025",
      excerpt: "Learn about the latest tools and techniques in data analysis to turn complex data into actionable insights.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  // Testimonials with ratings (first testimonial: 5 stars, second: 4 stars)
  const testimonials = [
    {
      clientName: "Mr.Evans Asimah (CEO Of BR20)",
      clientLogo: "https://drive.google.com/uc?export=view&id=1cxUDHArMLi-SPOe0X3XiAoK_Ocglnhmc",
      testimonial: "VirtualTech transformed our workflow with their innovative automation solutions. Their team is professional and dedicated.",
      rating: 5
    },
    {
      clientName: "Mr.Gershon Ako (Internal Auditor SIC Life Insurance)",
      clientLogo: "https://drive.google.com/uc?export=view&id=1Ia4lR9MY2OwUgyffE4Q3PPa_Bd6YGz_W", 
      testimonial: "Their presentation design and data analysis services exceeded our expectations. Highly recommended!",
      rating: 4
    }
  ];

  // Duplicate testimonials to enable seamless auto-scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'blog', label: 'Blog' },
    { id: 'why-choose-us', label: 'Why Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-blue-600"
            >
              VirtualTech
            </motion.h1>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 py-2">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-3 px-4 rounded-lg transition-colors duration-300 ${
                      activeSection === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Office Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            VirtualTech
          </h1>
          {/* Simplified Payment Policy Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-lg font-medium text-blue-600"
          >
            No Upfront Payment – Pay Only When You're 100% Satisfied!
          </motion.div>
          <div className="bg-blue-800/50 px-6 py-2 rounded-full inline-block mb-6">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400">Special Offer: Up to 20% off on your first project!</span>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Streamline your business with our professional virtual assistance services.
            We handle the details while you focus on growth.
          </p>
          {/* CTA placed on its own line */}
          <motion.a
            href={`https://wa.me/+233595703977`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageSquare className="w-6 h-6 mr-2" />
            Chat with Us
          </motion.a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Recommendations Section */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-900"
          >
            What Our Clients Say
          </motion.h2>
          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-6"
              // Auto-scroll horizontally continuously
              animate={{ x: -300 }}
              transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              {duplicatedTestimonials.map((t, index) => (
                <motion.div
                  key={index}
                  className="min-w-[300px] flex-shrink-0 bg-gray-50 p-6 rounded-xl shadow-lg"
                >
                  <p className="text-gray-700 mb-4">{t.testimonial}</p>
                  {/* Render five stars with filled based on rating */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => {
                      const starColor = i < t.rating ? "text-yellow-400" : "text-gray-300";
                      return <Star key={i} className={`w-4 h-4 ${starColor}`} />;
                    })}
                  </div>
                  <div className="flex items-center">
                    <img src={t.clientLogo} alt={t.clientName} className="w-10 h-10 rounded-full mr-3" />
                    <span className="text-gray-900 font-semibold">{t.clientName}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Latest Insights
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Our Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Discovery & Consultation: We dive deep into your business requirements.",
              "Strategy & Planning: Tailored solutions are mapped out to meet your goals.",
              "Implementation & Testing: We bring ideas to life with precision and care.",
              "Deployment & Support: Your success is our priority, with ongoing assistance."
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Step {index + 1}</h3>
                <p className="text-gray-600">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Policy Section */}
      <section id="payment-policy" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-8 text-gray-900"
          >
            Client-First Payment Policy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-center text-gray-700 max-w-3xl mx-auto"
          >
            At VirtualTech, your satisfaction is our top priority. Payment is only required once you are completely satisfied with our work.
          </motion.p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 text-blue-600">✓</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 px-4 bg-blue-600">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-12">
            Connect with us now and experience the difference professional virtual assistance can make.
          </p>
          <motion.a
            href={`https://wa.me/+233595703977`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageSquare className="w-6 h-6 mr-2" />
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
