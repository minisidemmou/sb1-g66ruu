import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { DownloadSection } from '../components/DownloadSection';
import { Footer } from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Users, Clock } from 'lucide-react';
import { ServiceIcons } from '../components/ServiceIcons';
import { PageTransition } from '../components/PageTransition';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export function HomePage() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header />
        
        <motion.section 
          className="py-12 bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Shield className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Trusted Platform</h3>
                  <p className="text-gray-600">Your security and satisfaction are our top priorities</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Verified Providers</h3>
                  <p className="text-gray-600">All service providers are thoroughly vetted</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Clock className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Always here when you need assistance</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <Features />
        <Testimonials />
        <DownloadSection />
        <Footer />
      </div>
    </PageTransition>
  );
}