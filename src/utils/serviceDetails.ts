import { 
  Car,
  Bus,
  Plane,
  Box,
  Hammer
} from 'lucide-react';

const services = {
  taxi: {
    id: 'taxi',
    icon: Car,
    title: {
      en: 'Taxi Service',
      fr: 'Service de Taxi',
      ar: 'خدمة سيارات الأجرة'
    },
    description: {
      en: 'Professional and reliable taxi service throughout Nouakchott.',
      fr: 'Service de taxi professionnel et fiable dans tout Nouakchott.',
      ar: 'خدمة سيارات أجرة محترفة وموثوقة في جميع أنحاء نواكشوط.'
    },
    steps: {
      en: [
        'Open the Sehelli app and select Taxi service',
        'Enter your pickup location and destination',
        'Confirm your booking and track your ride',
        'Pay and rate your experience'
      ],
      fr: [
        'Ouvrez l\'application Sehelli et sélectionnez le service Taxi',
        'Entrez votre lieu de prise en charge et votre destination',
        'Confirmez votre réservation et suivez votre course',
        'Payez et évaluez votre expérience'
      ],
      ar: [
        'افتح تطبيق سهلي واختر خدمة سيارات الأجرة',
        'أدخل موقع الاستلام والوجهة',
        'أكد حجزك وتتبع رحلتك',
        'ادفع وقيم تجربتك'
      ]
    },
    features: {
      en: [
        'Professional drivers',
        'GPS tracking',
        'Secure payments',
        'Rating system'
      ],
      fr: [
        'Chauffeurs professionnels',
        'Suivi GPS',
        'Paiements sécurisés',
        'Système d\'évaluation'
      ],
      ar: [
        'سائقون محترفون',
        'تتبع عبر GPS',
        'مدفوعات آمنة',
        'نظام تقييم'
      ]
    },
    coverageMapUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
    coverageDescription: {
      en: 'Available throughout Nouakchott with quick pickup times.',
      fr: 'Disponible dans tout Nouakchott avec des temps de prise en charge rapides.',
      ar: 'متوفر في جميع أنحاء نواكشوط مع أوقات استلام سريعة.'
    }
  },
  transport: {
    id: 'transport',
    icon: Bus,
    title: {
      en: 'Ground Transportation',
      fr: 'Transport Terrestre',
      ar: 'النقل البري'
    },
    description: {
      en: 'Reliable ground transportation services for groups and events.',
      fr: 'Services de transport terrestre fiables pour groupes et événements.',
      ar: 'خدمات نقل بري موثوقة للمجموعات والفعاليات.'
    },
    steps: {
      en: [
        'Select ground transportation service',
        'Specify your group size and requirements',
        'Choose vehicle type and duration',
        'Confirm booking details',
        'Track your service'
      ],
      fr: [
        'Sélectionnez le service de transport terrestre',
        'Précisez la taille de votre groupe et vos besoins',
        'Choisissez le type de véhicule et la durée',
        'Confirmez les détails de la réservation',
        'Suivez votre service'
      ],
      ar: [
        'اختر خدمة النقل البري',
        'حدد حجم مجموعتك ومتطلباتك',
        'اختر نوع المركبة والمدة',
        'أكد تفاصيل الحجز',
        'تتبع خدمتك'
      ]
    },
    features: {
      en: [
        'Multiple vehicle sizes',
        'Professional drivers',
        'Event transportation',
        'Corporate services',
        'Group bookings'
      ],
      fr: [
        'Plusieurs tailles de véhicules',
        'Chauffeurs professionnels',
        'Transport événementiel',
        'Services aux entreprises',
        'Réservations de groupe'
      ],
      ar: [
        'أحجام متعددة للمركبات',
        'سائقون محترفون',
        'نقل للفعاليات',
        'خدمات للشركات',
        'حجوزات جماعية'
      ]
    },
    coverageMapUrl: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=800&q=80',
    coverageDescription: {
      en: 'Serving all major routes and destinations in Nouakchott.',
      fr: 'Dessert toutes les routes et destinations principales de Nouakchott.',
      ar: 'نخدم جميع الطرق والوجهات الرئيسية في نواكشوط.'
    }
  },
  flight: {
    id: 'flight',
    icon: Plane,
    title: {
      en: 'Flight Service',
      fr: 'Service de Vol',
      ar: 'خدمة الطيران'
    },
    description: {
      en: 'Book domestic and international flights with ease.',
      fr: 'Réservez facilement des vols intérieurs et internationaux.',
      ar: 'احجز رحلات محلية ودولية بسهولة.'
    },
    steps: {
      en: [
        'Search available flights',
        'Select your preferred options',
        'Enter passenger details',
        'Choose add-on services',
        'Confirm and pay'
      ],
      fr: [
        'Recherchez les vols disponibles',
        'Sélectionnez vos options préférées',
        'Saisissez les détails des passagers',
        'Choisissez les services supplémentaires',
        'Confirmez et payez'
      ],
      ar: [
        'ابحث عن الرحلات المتاحة',
        'اختر خياراتك المفضلة',
        'أدخل تفاصيل المسافرين',
        'اختر الخدمات الإضافية',
        'أكد وادفع'
      ]
    },
    features: {
      en: [
        'Multiple airlines',
        'Competitive prices',
        'Flight tracking',
        'Easy booking',
        'Customer support'
      ],
      fr: [
        'Plusieurs compagnies aériennes',
        'Prix compétitifs',
        'Suivi des vols',
        'Réservation facile',
        'Support client'
      ],
      ar: [
        'شركات طيران متعددة',
        'أسعار تنافسية',
        'تتبع الرحلات',
        'حجز سهل',
        'دعم العملاء'
      ]
    },
    coverageMapUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    coverageDescription: {
      en: 'International and domestic flights from Nouakchott International Airport.',
      fr: 'Vols internationaux et intérieurs depuis l\'aéroport international de Nouakchott.',
      ar: 'رحلات دولية ومحلية من مطار نواكشوط الدولي.'
    }
  },
  rental: {
    id: 'rental',
    icon: Car,
    title: {
      en: 'Car Rental',
      fr: 'Location de Voiture',
      ar: 'تأجير السيارات'
    },
    description: {
      en: 'Rent vehicles for your personal or business needs.',
      fr: 'Louez des véhicules pour vos besoins personnels ou professionnels.',
      ar: 'استأجر سيارات لاحتياجاتك الشخصية أو التجارية.'
    },
    steps: {
      en: [
        'Choose rental duration',
        'Select vehicle type',
        'Add optional services',
        'Confirm pickup location',
        'Complete booking'
      ],
      fr: [
        'Choisissez la durée de location',
        'Sélectionnez le type de véhicule',
        'Ajoutez des services optionnels',
        'Confirmez le lieu de prise en charge',
        'Complétez la réservation'
      ],
      ar: [
        'اختر مدة الإيجار',
        'حدد نوع السيارة',
        'أضف خدمات اختيارية',
        'أكد موقع الاستلام',
        'أكمل الحجز'
      ]
    },
    features: {
      en: [
        'Various vehicle types',
        'Flexible duration',
        'Insurance options',
        'GPS included'
      ],
      fr: [
        'Différents types de véhicules',
        'Durée flexible',
        'Options d\'assurance',
        'GPS inclus'
      ],
      ar: [
        'أنواع متعددة من السيارات',
        'مدة مرنة',
        'خيارات التأمين',
        'نظام تحديد المواقع مضمن'
      ]
    },
    coverageMapUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    coverageDescription: {
      en: 'Multiple pickup locations throughout Nouakchott.',
      fr: 'Plusieurs points de prise en charge dans tout Nouakchott.',
      ar: 'مواقع استلام متعددة في جميع أنحاء نواكشوط.'
    }
  },
  delivery: {
    id: 'delivery',
    icon: Box,
    title: {
      en: 'Delivery Service',
      fr: 'Service de Livraison',
      ar: 'خدمة التوصيل'
    },
    description: {
      en: 'Fast and reliable delivery service within Nouakchott.',
      fr: 'Service de livraison rapide et fiable dans Nouakchott.',
      ar: 'خدمة توصيل سريعة وموثوقة في نواكشوط.'
    },
    steps: {
      en: [
        'Enter pickup and delivery locations',
        'Specify package details',
        'Choose delivery speed',
        'Track your delivery',
        'Confirm receipt'
      ],
      fr: [
        'Entrez les lieux de ramassage et de livraison',
        'Précisez les détails du colis',
        'Choisissez la vitesse de livraison',
        'Suivez votre livraison',
        'Confirmez la réception'
      ],
      ar: [
        'أدخل مواقع الاستلام والتسليم',
        'حدد تفاصيل الطرد',
        'اختر سرعة التوصيل',
        'تتبع توصيلك',
        'أكد الاستلام'
      ]
    },
    features: {
      en: [
        'Real-time tracking',
        'Express delivery',
        'Secure handling',
        'Insurance coverage',
        'Proof of delivery'
      ],
      fr: [
        'Suivi en temps réel',
        'Livraison express',
        'Manipulation sécurisée',
        'Couverture d\'assurance',
        'Preuve de livraison'
      ],
      ar: [
        'تتبع في الوقت الحقيقي',
        'توصيل سريع',
        'معالجة آمنة',
        'تغطية تأمينية',
        'إثبات التسليم'
      ]
    },
    coverageMapUrl: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80',
    coverageDescription: {
      en: 'Comprehensive coverage across all districts of Nouakchott.',
      fr: 'Couverture complète dans tous les quartiers de Nouakchott.',
      ar: 'تغطية شاملة في جميع مناطق نواكشوط.'
    }
  },
  craft: {
    id: 'craft',
    icon: Hammer,
    title: {
      en: 'Craft Service',
      fr: 'Service Artisanal',
      ar: 'خدمة الحرف'
    },
    description: {
      en: 'Professional craft and repair services for your needs.',
      fr: 'Services professionnels d\'artisanat et de réparation pour vos besoins.',
      ar: 'خدمات حرفية وإصلاح احترافية لتلبية احتياجاتك.'
    },
    steps: {
      en: [
        'Describe your service need',
        'Get matched with craftsmen',
        'Review quotes',
        'Schedule service',
        'Rate the service'
      ],
      fr: [
        'Décrivez votre besoin de service',
        'Soyez mis en relation avec des artisans',
        'Examinez les devis',
        'Planifiez le service',
        'Évaluez le service'
      ],
      ar: [
        'صف احتياجك للخدمة',
        'احصل على تطابق مع الحرفيين',
        'راجع العروض',
        'جدول الخدمة',
        'قيم الخدمة'
      ]
    },
    features: {
      en: [
        'Skilled craftsmen',
        'Quality guarantee',
        'Fair pricing',
        'Multiple services',
        'After-service support'
      ],
      fr: [
        'Artisans qualifiés',
        'Garantie qualité',
        'Prix équitables',
        'Services multiples',
        'Support après-service'
      ],
      ar: [
        'حرفيون ماهرون',
        'ضمان الجودة',
        'أسعار عادلة',
        'خدمات متعددة',
        'دعم ما بعد الخدمة'
      ]
    },
    coverageMapUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
    coverageDescription: {
      en: 'Available for all residential and commercial areas in Nouakchott.',
      fr: 'Disponible pour toutes les zones résidentielles et commerciales de Nouakchott.',
      ar: 'متوفر لجميع المناطق السكنية والتجارية في نواكشوط.'
    }
  }
};

export type Service = typeof services[keyof typeof services];

export function getServiceDetails(serviceId: string | undefined): Service | null {
  if (!serviceId) return null;
  return services[serviceId as keyof typeof services] || null;
}

export default services;