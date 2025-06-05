import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FranceMap from '../map/FranceMap';

const HeroSection: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-accent-500 to-secondary-600 text-white pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ rotate: 0, scale: 1.5 }}
          animate={{ 
            rotate: 360,
            scale: [1.5, 1.7, 1.5],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-400/30 to-secondary-400/30 rounded-full"
        />
        <motion.div
          initial={{ rotate: 180, scale: 1.2 }}
          animate={{ 
            rotate: -180,
            scale: [1.2, 1.4, 1.2],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-secondary-400/30 to-primary-400/30 rounded-full"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Trouvez votre association étudiante en France
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Découvrez les BDE, BDS, et BDA qui animent la vie étudiante près de chez vous.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <button className="btn bg-secondary-600 text-white hover:bg-secondary-700">
                Explorer les associations
                <ChevronRight size={18} className="ml-1" />
              </button>
              <button className="btn bg-transparent border-2 border-white hover:bg-white/10">
                En savoir plus
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center"
          >
            <FranceMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;