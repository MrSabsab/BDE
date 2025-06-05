import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data for student deals
const studentDeals = [
  {
    id: 1,
    title: '-50% sur les abonnements TGVmax',
    description: 'Offre spéciale pour les étudiants : abonnement à moitié prix pour voyager en illimité.',
    category: 'Transport',
    partner: 'SNCF',
    logo: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    validUntil: '30 septembre 2025',
  },
  {
    id: 2,
    title: 'Logement étudiant à tarif préférentiel',
    description: 'Bénéficiez de réductions sur les frais de dossier et les premiers mois de loyer.',
    category: 'Logement',
    partner: 'Studéa',
    logo: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    validUntil: '31 octobre 2025',
  },
  {
    id: 3,
    title: 'Offre bancaire étudiante',
    description: 'Carte bancaire gratuite et 80€ offerts pour l\'ouverture d\'un compte étudiant.',
    category: 'Finance',
    partner: 'BNP Paribas',
    logo: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    validUntil: '31 décembre 2025',
  }
];

const StudentDeals: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Bons plans étudiants</h2>
            <p className="text-gray-600 max-w-2xl">Des offres exclusives négociées pour les étudiants.</p>
          </div>
          <Link to="/deals" className="group inline-flex items-center text-primary-600 font-medium mt-4 md:mt-0 hover:text-primary-700 transition-colors">
            Tous les bons plans
            <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studentDeals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link to={`/deals/${deal.id}`} className="card overflow-hidden h-full flex flex-col group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={deal.logo} 
                    alt={deal.partner} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <div className="mb-2">
                      <span className={`
                        px-2 py-1 text-xs font-medium rounded-full
                        ${deal.category === 'Transport' ? 'bg-primary-100 text-primary-700' : ''}
                        ${deal.category === 'Logement' ? 'bg-secondary-100 text-secondary-700' : ''}
                        ${deal.category === 'Finance' ? 'bg-accent-100 text-accent-700' : ''}
                      `}>
                        {deal.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-white">{deal.title}</h3>
                    <div className="text-sm text-white/80 mt-1">Partenaire: {deal.partner}</div>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{deal.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-auto">
                    <Tag size={16} className="mr-2" />
                    <span className="mr-1">Valide jusqu'au</span>
                    <span className="font-medium">{deal.validUntil}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentDeals;