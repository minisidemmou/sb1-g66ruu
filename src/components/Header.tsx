import React from 'react';
import { Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { ServiceIcons } from './ServiceIcons';
import { Logo } from './Logo';

export function Header() {
  const { t } = useLanguage();
  
  return (
    <header className="bg-white text-blue-900">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo size="md" />
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <LanguageSelector />
            <a href="#features" className="hover:text-blue-600 transition">{t('nav.features')}</a>
            <a href="#download" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              {t('nav.download')}
            </a>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-2xl mx-auto text-center sm:text-left">
          <div className="mb-8 flex justify-center sm:justify-start">
            <ServiceIcons size={24} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            {t('hero.title')}
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-600">
            {t('hero.subtitle')}
          </p>
          <a 
            href="https://play.google.com/store/apps/details?id=com.sehelli.client"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
          >
            <Download className="mr-2" size={20} />
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </header>
  );
}