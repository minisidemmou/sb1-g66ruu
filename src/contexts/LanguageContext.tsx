import React, { createContext, useContext, useState, useLayoutEffect } from 'react';

type Language = 'en' | 'fr' | 'ar';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
};

const translations = {
  en: {
    'nav.features': 'Features',
    'nav.download': 'Download Now',
    'hero.title': 'Download Sehelli Now',
    'hero.subtitle': 'Sehelli to provide you with an integrated service and to make your life easier. Fast, secure, and convenient.',
    'hero.cta': 'Get it on Google Play',
    'features.title': 'Why Choose Sehelli?',
    'features.247.title': '24/7 Availability',
    'features.247.desc': 'Access trusted services whenever you need them',
    'features.secure.title': 'Secure Platform',
    'features.secure.desc': 'Your safety and security are our top priorities',
    'features.verified.title': 'Verified Providers',
    'features.verified.desc': 'All service providers are thoroughly vetted',
    'testimonials.title': 'What Our Users Say',
    'download.title': 'Ready to Make Your Life Easier?',
    'download.feature1': 'Comprehensive service platform',
    'download.feature2': 'Secure and trusted providers',
    'download.feature3': 'Seamless user experience',
    'footer.contact': 'Contact',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    'service.howItWorks': 'How it works',
    'service.features': 'Features',
    'service.coverage': 'Coverage Area',
    'service.ready': 'Ready to get started?',
    'service.downloadNow': 'Download the Sehelli app now to access our'
  },
  fr: {
    'nav.features': 'Fonctionnalités',
    'nav.download': 'Télécharger',
    'hero.title': 'Téléchargez Sehelli Maintenant',
    'hero.subtitle': 'Sehelli pour vous fournir un service intégré et faciliter votre vie. Rapide, sécurisé et pratique.',
    'hero.cta': 'Obtenir sur Google Play',
    'features.title': 'Pourquoi Choisir Sehelli ?',
    'features.247.title': 'Disponibilité 24/7',
    'features.247.desc': 'Accédez à des services de confiance à tout moment',
    'features.secure.title': 'Plateforme Sécurisée',
    'features.secure.desc': 'Votre sécurité est notre priorité absolue',
    'features.verified.title': 'Prestataires Vérifiés',
    'features.verified.desc': 'Tous les prestataires sont minutieusement contrôlés',
    'testimonials.title': 'Ce Que Disent Nos Utilisateurs',
    'download.title': 'Prêt à Simplifier Votre Vie ?',
    'download.feature1': 'Plateforme de services complète',
    'download.feature2': 'Prestataires sûrs et de confiance',
    'download.feature3': 'Expérience utilisateur fluide',
    'footer.contact': 'Contact',
    'footer.followUs': 'Suivez-nous',
    'footer.rights': 'Tous droits réservés.',
    'service.howItWorks': 'Comment ça marche',
    'service.features': 'Caractéristiques',
    'service.coverage': 'Zone de Couverture',
    'service.ready': 'Prêt à commencer ?',
    'service.downloadNow': 'Téléchargez l\'application Sehelli maintenant pour accéder à nos services de'
  },
  ar: {
    'nav.features': 'المميزات',
    'nav.download': 'حمل التطبيق',
    'hero.title': 'حمل سهلي الآن',
    'hero.subtitle': 'سهلي لتقديم خدمة متكاملة ولجعل حياتك أسهل. سريع، آمن، ومريح.',
    'hero.cta': 'احصل عليه من جوجل بلاي',
    'features.title': 'لماذا تختار سهلي؟',
    'features.247.title': 'متاح 24/7',
    'features.247.desc': 'الوصول إلى خدمات موثوقة في أي وقت تحتاجه',
    'features.secure.title': 'منصة آمنة',
    'features.secure.desc': 'سلامتك وأمنك من أهم أولوياتنا',
    'features.verified.title': 'مزودو خدمات معتمدون',
    'features.verified.desc': 'جميع مزودي الخدمات تم التحقق منهم بدقة',
    'testimonials.title': 'ماذا يقول مستخدمونا',
    'download.title': 'مستعد لتسهيل حياتك؟',
    'download.feature1': 'منصة خدمات متكاملة',
    'download.feature2': 'مزودو خدمات موثوقون وآمنون',
    'download.feature3': 'تجربة مستخدم سلسة',
    'footer.contact': 'اتصل بنا',
    'footer.followUs': 'تابعنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'service.howItWorks': 'كيف تعمل',
    'service.features': 'المميزات',
    'service.coverage': 'منطقة التغطية',
    'service.ready': 'مستعد للبدء؟',
    'service.downloadNow': 'حمل تطبيق سهلي الآن للوصول إلى خدمات'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  useLayoutEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    document.documentElement.className = language === 'ar' ? 'font-arabic' : '';
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}