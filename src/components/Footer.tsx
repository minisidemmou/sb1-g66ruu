import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ServiceIcons } from './ServiceIcons';
import { Phone } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <div className="flex flex-col items-center sm:items-start space-y-3 mb-4">
              <Logo size="lg" className="text-white" />
              <ServiceIcons size={16} />
            </div>
            <p className="text-blue-200 text-center sm:text-left">{t('hero.subtitle')}</p>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-xl font-bold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Phone size={16} className="text-blue-200" />
                <p className="text-blue-200">
                  <span className="font-medium">Taxi Service:</span> 22021111
                </p>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Phone size={16} className="text-blue-200" />
                <p className="text-blue-200">
                  <span className="font-medium">General Inquiries:</span> 22031111
                </p>
              </div>
              <p className="text-blue-200">support@sehelli.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Sehelli. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}