import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { BackButton } from '../components/BackButton';
import { LanguageSelector } from '../components/LanguageSelector';
import { getServiceDetails } from '../utils/serviceDetails';
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

export function ServicePage() {
  const { serviceId } = useParams();
  const { language, t } = useLanguage();
  const service = getServiceDetails(serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Service not found</h2>
          <BackButton className="text-blue-600 hover:text-blue-700" />
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-blue-50">
        <motion.header 
          className="bg-white text-blue-900 py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container mx-auto px-6">
            <motion.div 
              className="flex justify-between items-center mb-8"
              variants={itemVariants}
            >
              <BackButton className="text-blue-600 hover:text-blue-700" />
              <LanguageSelector />
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4 mb-6"
              variants={itemVariants}
            >
              <service.icon size={40} className="text-blue-600" />
              <h1 className="text-4xl font-bold">{service.title[language]}</h1>
            </motion.div>
            <motion.p 
              className="text-xl text-blue-600"
              variants={itemVariants}
            >
              {service.description[language]}
            </motion.p>
          </div>
        </motion.header>

        <main className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">{t('service.howItWorks')}</h2>
              <ol className="space-y-4">
                {service.steps[language].map((step, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                      {index + 1}
                    </span>
                    <p className="text-gray-700">{step}</p>
                  </motion.li>
                ))}
              </ol>
            </motion.div>

            <div className="space-y-8">
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-6">{t('service.features')}</h2>
                <ul className="space-y-4">
                  {service.features[language].map((feature, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <CheckCircle className="text-green-500 mr-4" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">{t('service.coverage')}</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img 
                    src={service.coverageMapUrl} 
                    alt={`${service.title[language]} coverage area in Nouakchott`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-4 text-gray-600">{service.coverageDescription[language]}</p>
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="mt-12 bg-white rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4">{t('service.ready')}</h2>
            <p className="text-gray-600 mb-8">
              {t('service.downloadNow')} {service.title[language].toLowerCase()}
            </p>
            <motion.a 
              href="https://play.google.com/store/apps/details?id=com.sehelli.client"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.download')}
              <ChevronRight className="ml-2" size={20} />
            </motion.a>
          </motion.div>
        </main>
      </div>
    </PageTransition>
  );
}