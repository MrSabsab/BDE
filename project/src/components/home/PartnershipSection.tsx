import React from 'react';
import { motion } from 'framer-motion';

const PartnershipSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container-custom"
      >
        <div className="bg-white rounded-xl shadow-xl p-8 text-gray-900 max-w-2xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6 text-center text-primary-700">
            Devenez Partenaire
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de l'entreprise
                </label>
                <input
                  type="text"
                  className="input-field w-full"
                  placeholder="Votre entreprise"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Secteur d'activité
                </label>
                <input
                  type="text"
                  className="input-field w-full"
                  placeholder="Ex: Technologie, Retail..."
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email professionnel
              </label>
              <input
                type="email"
                className="input-field w-full"
                placeholder="contact@entreprise.fr"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de partenariat souhaité
              </label>
              <select className="input-field w-full">
                <option value="">Sélectionnez une option</option>
                <option value="sponsorship">Sponsoring d'événements</option>
                <option value="discount">Offres étudiantes</option>
                <option value="recruitment">Recrutement</option>
                <option value="other">Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                className="input-field w-full h-32 resize-none"
                placeholder="Décrivez votre projet de partenariat..."
              />
            </div>
            <button type="submit" className="btn btn-primary w-full py-3">
              Envoyer ma demande
            </button>
            <p className="text-xs text-gray-500 text-center">
              En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe partenariats.
            </p>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default PartnershipSection;