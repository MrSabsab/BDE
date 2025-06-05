import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const NewsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Actualités Étudiantes | SMARTSTUD';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-20"
    >
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold mb-4">Actualités Étudiantes</h1>
        <p>Contenu de la page des actualités à venir...</p>
      </div>
    </motion.div>
  );
};

export default NewsPage;