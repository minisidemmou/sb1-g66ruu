import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Car,
  Truck,
  Plane,
  Box,
  Hammer,
  Bus
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceIconProps {
  size?: number;
  className?: string;
}

const iconColors = {
  taxi: 'text-yellow-500 hover:text-yellow-400',
  transport: 'text-blue-500 hover:text-blue-400',
  flight: 'text-purple-500 hover:text-purple-400',
  rental: 'text-green-500 hover:text-green-400',
  delivery: 'text-red-500 hover:text-red-400',
  craft: 'text-orange-500 hover:text-orange-400'
};

const ServiceIcon: React.FC<{ 
  children: React.ReactNode;
  isActive?: boolean;
  description: string;
  label: string;
  onClick: () => void;
  colorClass: string;
}> = ({ children, isActive = false, description, label, onClick, colorClass }) => (
  <div 
    className={`relative group cursor-pointer transition-transform duration-300 hover:scale-110 ${
      isActive ? 'scale-125' : ''
    }`}
    onClick={onClick}
  >
    <div className="flex flex-col items-center">
      <div className={`transform transition-all duration-300 ${colorClass} mb-2`}>
        {children}
      </div>
      <span className={`text-xs sm:text-sm font-medium ${colorClass} text-center`}>
        {label}
      </span>
    </div>
    
    <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-current transform -translate-x-1/2 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
    
    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 px-3 py-2 bg-gray-900 text-white text-xs sm:text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
      <div className="font-medium mb-1">{description}</div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border-4 border-transparent border-t-gray-900" />
    </div>
  </div>
);

export const ServiceIcons: React.FC<ServiceIconProps> = ({ 
  size = 64,
  className = "" 
}) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(-1);
  const navigate = useNavigate();
  const { language } = useLanguage();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    { 
      icon: Car,
      label: {
        en: 'Taxi',
        fr: 'Taxi',
        ar: 'تاكسي'
      },
      id: 'taxi',
      description: 'Professional taxi service in Nouakchott'
    },
    { 
      icon: Bus,
      label: {
        en: 'Transport',
        fr: 'Transport',
        ar: 'نقل'
      },
      id: 'transport',
      description: 'Reliable ground transportation services'
    },
    { 
      icon: Plane,
      label: {
        en: 'Flights',
        fr: 'Vols',
        ar: 'رحلات'
      },
      id: 'flight',
      description: 'Book domestic and international flights'
    },
    { 
      icon: Car,
      label: {
        en: 'Rental',
        fr: 'Location',
        ar: 'تأجير'
      },
      id: 'rental',
      description: 'Rent vehicles for your needs'
    },
    { 
      icon: Box,
      label: {
        en: 'Delivery',
        fr: 'Livraison',
        ar: 'توصيل'
      },
      id: 'delivery',
      description: 'Fast delivery service within Nouakchott'
    },
    { 
      icon: Hammer,
      label: {
        en: 'Craft',
        fr: 'Artisanat',
        ar: 'حرف'
      },
      id: 'craft',
      description: 'Professional craft and repair services'
    }
  ];

  const iconSize = typeof window !== 'undefined' && window.innerWidth < 640 ? size * 0.75 : size;

  return (
    <div className={`flex items-center ${className}`}>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-8">
        {services.map((service, index) => (
          <ServiceIcon 
            key={service.label[language]}
            isActive={index === activeIndex}
            description={service.description}
            label={service.label[language]}
            onClick={() => navigate(`/service/${service.id}`)}
            colorClass={iconColors[service.id as keyof typeof iconColors]}
          >
            <service.icon 
              size={iconSize} 
              strokeWidth={1.5}
              className="transition-transform duration-300"
            />
          </ServiceIcon>
        ))}
      </div>
    </div>
  );
};