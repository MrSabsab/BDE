import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data for featured associations
const featuredAssociations = [
  {
    id: 1,
    name: 'BDE Sorbonne',
    type: 'BDE',
    logo: 'https://images.pexels.com/photos/3184660/pexels-photo-3184660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Paris',
    members: 1200,
    description: 'Bureau des étudiants de la Sorbonne, organisant des événements tout au long de l\'année.',
  },
  {
    id: 2,
    name: 'BDS Lyon 3',
    type: 'BDS',
    logo: 'https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Lyon',
    members: 850,
    description: 'Bureau des sports de l\'Université Jean Moulin Lyon 3, proposant diverses activités sportives.',
  },
  {
    id: 3,
    name: 'BDA Bordeaux',
    type: 'BDA',
    logo: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Bordeaux',
    members: 620,
    description: 'Bureau des arts de l\'Université de Bordeaux, promouvant la culture et les arts sur le campus.',
  },
  {
    id: 4,
    name: 'ASSOS Montpellier',
    type: 'Autre',
    logo: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Montpellier',
    members: 750,
    description: 'Association étudiante multidisciplinaire de l\'Université de Montpellier.',
  }
];

const FeaturedAssociations: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Associations à découvrir</h2>
            <p className="text-gray-600 max-w-2xl">Découvrez des associations étudiantes dynamiques à travers la France.</p>
          </div>
          <Link to="/associations" className="group inline-flex items-center text-primary-600 font-medium mt-4 md:mt-0 hover:text-primary-700 transition-colors">
            Voir toutes les associations
            <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAssociations.map((association, index) => (
            <motion.div
              key={association.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link to={`/associations/${association.id}`} className="card overflow-hidden h-full flex flex-col">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={association.logo} 
                    alt={association.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="mb-2 flex items-center space-x-2">
                    <span className={`
                      px-2 py-1 text-xs font-medium rounded-full
                      ${association.type === 'BDE' ? 'bg-primary-100 text-primary-700' : ''}
                      ${association.type === 'BDS' ? 'bg-success-100 text-success-700' : ''}
                      ${association.type === 'BDA' ? 'bg-secondary-100 text-secondary-700' : ''}
                      ${association.type === 'Autre' ? 'bg-gray-100 text-gray-700' : ''}
                    `}>
                      {association.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{association.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{association.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span>{association.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      <span>{association.members}</span>
                    </div>
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

export default FeaturedAssociations;