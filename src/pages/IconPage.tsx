import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconExplanation } from '../components/IconExplanation';
import { BackButton } from '../components/BackButton';
import { LanguageSelector } from '../components/LanguageSelector';
import { iconExplanations, type IconKey } from '../data/iconExplanations';
import { PageTransition } from '../components/PageTransition';

export function IconPage() {
  const { iconId } = useParams<{ iconId: string }>();
  
  if (!iconId || !(iconId in iconExplanations)) {
    return <Navigate to="/" replace />;
  }

  const iconData = iconExplanations[iconId as IconKey];
  
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <motion.div 
          className="container mx-auto px-6 py-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center">
            <BackButton className="text-blue-600 hover:text-blue-700" />
            <LanguageSelector />
          </div>
        </motion.div>
        <IconExplanation
          icon={<iconData.icon />}
          title={iconData.title}
          description={iconData.description}
          symbolism={iconData.symbolism}
        />
      </div>
    </PageTransition>
  );
}