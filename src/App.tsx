import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { IconPage } from './pages/IconPage';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/service/:serviceId" element={<ServicePage />} />
        <Route path="/icon/:iconId" element={<IconPage />} />
      </Routes>
    </AnimatePresence>
  );
}