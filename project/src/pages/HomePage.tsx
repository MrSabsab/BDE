import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import HeroSection from '../components/home/HeroSection';
import AdSpaces from '../components/home/AdSpaces';
import FeaturedAssociations from '../components/home/FeaturedAssociations';
import UniversityRankings from '../components/home/UniversityRankings';
import UniversityStaff from '../components/home/UniversityStaff';
import StaffContent from '../components/home/StaffContent';
import LatestNews from '../components/home/LatestNews';
import UpcomingEvents from '../components/home/UpcomingEvents';
import StudentDeals from '../components/home/StudentDeals';
import NewsletterSection from '../components/home/NewsletterSection';
import PartnershipSection from '../components/home/PartnershipSection';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'SMARTSTUD | Plateforme nationale étudiante';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      <AdSpaces />
      <FeaturedAssociations />
      <UniversityRankings />
      <AdSpaces />
      <UniversityStaff />
      <StaffContent />
      <LatestNews />
      <AdSpaces />
      <UpcomingEvents />
      <StudentDeals />
      <NewsletterSection />
      <PartnershipSection />
    </motion.div>
  );
};

export default HomePage;