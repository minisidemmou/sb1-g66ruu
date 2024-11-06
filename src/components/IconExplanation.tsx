import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface IconExplanationProps {
  icon: React.ReactNode;
  title: {
    en: string;
    fr: string;
    ar: string;
  };
  description: {
    en: string;
    fr: string;
    ar: string;
  };
  symbolism: {
    en: string;
    fr: string;
    ar: string;
  };
}

export function IconExplanation({ icon, title, description, symbolism }: IconExplanationProps) {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="w-20 h-20 flex items-center justify-center bg-white/10 rounded-full mb-6">
                {React.cloneElement(icon as React.ReactElement, { 
                  size: 40,
                  className: "text-white"
                })}
              </div>
              <h1 className="text-3xl font-bold mb-4">
                {title[language]}
              </h1>
              <p className="text-lg text-blue-100 max-w-2xl">
                {description[language]}
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  {language === 'en' ? 'Symbolism' : 
                   language === 'fr' ? 'Symbolisme' : 
                   'الرمزية'}
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  {symbolism[language]}
                </p>
              </div>

              <div className="border-t border-blue-500 pt-8">
                <h2 className="text-xl font-semibold mb-4">
                  {language === 'en' ? 'Translations' :
                   language === 'fr' ? 'Traductions' :
                   'الترجمات'}
                </h2>
                <div className="grid gap-6">
                  {Object.entries({
                    English: 'en',
                    Français: 'fr',
                    العربية: 'ar'
                  }).map(([langName, langCode]) => (
                    <div key={langCode} className={`p-4 rounded-lg bg-white/10 ${
                      langCode === language ? 'ring-2 ring-white' : ''
                    }`}>
                      <h3 className="font-medium mb-2">{langName}</h3>
                      <p className="text-blue-100">{title[langCode as keyof typeof title]}</p>
                      <p className="text-sm text-blue-200 mt-1">{description[langCode as keyof typeof description]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}