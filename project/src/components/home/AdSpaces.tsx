import React from 'react';
import { motion } from 'framer-motion';

const AdSpaces: React.FC = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Premium Ad Space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-full bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-8 text-center"
          >
            <div className="border-2 border-dashed border-primary-300 rounded-lg p-8">
              <p className="text-primary-600 font-display text-xl">Espace Publicitaire Premium</p>
              <p className="text-primary-500 mt-2">1200 x 200 px</p>
            </div>
          </motion.div>

          {/* Sidebar Ad Spaces */}
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 text-center"
            >
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <p className="text-gray-600 font-display">Espace Publicitaire</p>
                <p className="text-gray-500 mt-2">300 x 250 px</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdSpaces;