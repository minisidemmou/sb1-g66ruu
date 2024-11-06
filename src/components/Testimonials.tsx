import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from '../utils/animations';

export function Testimonials() {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      text: "Sehelli has made finding reliable service providers so much easier. Great app!",
      author: "Mohammed A.",
      rating: 5,
      variants: slideInLeft
    },
    {
      text: "The verification process gives me peace of mind. Highly recommended!",
      author: "Sara K.",
      rating: 5,
      variants: slideInRight
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
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
          {t('testimonials.title')}
        </motion.h3>
        
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-sm"
              variants={testimonial.variants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div>
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base font-semibold">{testimonial.author}</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}