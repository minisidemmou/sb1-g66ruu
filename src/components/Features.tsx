import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { staggerContainer, fadeInUp, scaleHover } from '../utils/animations';

export function Features() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: t('features.247.title'),
      description: t('features.247.desc')
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: t('features.secure.title'),
      description: t('features.secure.desc')
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: t('features.verified.title'),
      description: t('features.verified.desc')
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 bg-white">
      <motion.div 
        className="container mx-auto px-4 sm:px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h3 
          className="text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-16 text-gray-800"
          variants={fadeInUp}
        >
          {t('features.title')}
        </motion.h3>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              variants={fadeInUp}
              whileHover="hover"
              whileTap="tap"
              custom={index}
            >
              <motion.div 
                className="mb-4"
                variants={scaleHover}
              >
                {feature.icon}
              </motion.div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}