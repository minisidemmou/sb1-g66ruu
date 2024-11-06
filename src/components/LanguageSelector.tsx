import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2 bg-emerald-600/90 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 rounded-lg hover:bg-emerald-700/90 transition-colors">
      <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-50" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'en' | 'fr' | 'ar')}
        className="bg-transparent text-emerald-50 border-none focus:ring-0 cursor-pointer text-xs sm:text-sm font-medium"
        style={{
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23ecfdf5\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 0 center',
          backgroundSize: '1.25em',
          paddingRight: '1.5em'
        }}
      >
        <option value="en" className="bg-emerald-600 text-emerald-50">English</option>
        <option value="fr" className="bg-emerald-600 text-emerald-50">Français</option>
        <option value="ar" className="bg-emerald-600 text-emerald-50 font-arabic">العربية</option>
      </select>
    </div>
  );
}