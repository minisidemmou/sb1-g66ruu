import React from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function DownloadSection() {
  const { t } = useLanguage();
  
  return (
    <section id="download" className="py-16 sm:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-8">{t('download.title')}</h3>
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-4">
            <CheckCircle className="text-green-500 flex-shrink-0" />
            <span>{t('download.feature1')}</span>
          </div>
          <div className="flex items-center space-x-4">
            <CheckCircle className="text-green-500 flex-shrink-0" />
            <span>{t('download.feature2')}</span>
          </div>
          <div className="flex items-center space-x-4">
            <CheckCircle className="text-green-500 flex-shrink-0" />
            <span>{t('download.feature3')}</span>
          </div>
          
          <a 
            href="https://play.google.com/store/apps/details?id=com.sehelli.client"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition mt-8"
          >
            {t('nav.download')}
            <ChevronRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}