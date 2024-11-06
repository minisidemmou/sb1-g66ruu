import { Clock, Shield, Users, Star, Truck, Stethoscope, Bike, Wrench, Plane } from 'lucide-react';

export const iconExplanations = {
  clock: {
    icon: Clock,
    title: {
      en: "24/7 Availability",
      fr: "Disponibilité 24/7",
      ar: "متاح 24/7"
    },
    description: {
      en: "Representing our constant availability and commitment to serve you at any time",
      fr: "Représentant notre disponibilité constante et notre engagement à vous servir à tout moment",
      ar: "يمثل توفرنا المستمر والتزامنا بخدمتك في أي وقت"
    },
    symbolism: {
      en: "The clock symbolizes reliability, punctuality, and our commitment to being there whenever you need us. It represents the continuous cycle of service and support we provide.",
      fr: "L'horloge symbolise la fiabilité, la ponctualité et notre engagement à être présents chaque fois que vous avez besoin de nous. Elle représente le cycle continu de service et de support que nous fournissons.",
      ar: "تمثل الساعة الموثوقية والدقة والتزامنا بالتواجد كلما احتجت إلينا. إنها تمثل دورة الخدمة والدعم المستمرة التي نقدمها."
    }
  },
  shield: {
    icon: Shield,
    title: {
      en: "Secure Platform",
      fr: "Plateforme Sécurisée",
      ar: "منصة آمنة"
    },
    description: {
      en: "Your safety and security are our top priorities",
      fr: "Votre sûreté et votre sécurité sont nos principales priorités",
      ar: "سلامتك وأمنك من أهم أولوياتنا"
    },
    symbolism: {
      en: "The shield represents protection, security, and trust. It embodies our commitment to safeguarding your data and ensuring safe transactions on our platform.",
      fr: "Le bouclier représente la protection, la sécurité et la confiance. Il incarne notre engagement à protéger vos données et à garantir des transactions sûres sur notre plateforme.",
      ar: "يمثل الدرع الحماية والأمان والثقة. إنه يجسد التزامنا بحماية بياناتك وضمان المعاملات الآمنة على منصتنا."
    }
  },
  users: {
    icon: Users,
    title: {
      en: "Verified Providers",
      fr: "Prestataires Vérifiés",
      ar: "مزودو خدمات معتمدون"
    },
    description: {
      en: "All service providers are thoroughly vetted and verified",
      fr: "Tous les prestataires de services sont minutieusement contrôlés et vérifiés",
      ar: "جميع مزودي الخدمات تم فحصهم والتحقق منهم بدقة"
    },
    symbolism: {
      en: "The users icon symbolizes community, collaboration, and trust within our network. It represents our verified service providers and the connections we build.",
      fr: "L'icône des utilisateurs symbolise la communauté, la collaboration et la confiance au sein de notre réseau. Elle représente nos prestataires de services vérifiés et les connexions que nous établissons.",
      ar: "يرمز رمز المستخدمين إلى المجتمع والتعاون والثقة داخل شبكتنا. إنه يمثل مزودي الخدمات المعتمدين لدينا والروابط التي نبنيها."
    }
  }
};

export type IconKey = keyof typeof iconExplanations;