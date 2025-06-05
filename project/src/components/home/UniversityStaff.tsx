import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, BookOpen, Building2 } from 'lucide-react';

const staffSections = [
  {
    id: 1,
    title: "Enseignants/Chercheurs",
    description: "Découvrez nos enseignants-chercheurs et leurs domaines d'expertise.",
    icon: BookOpen,
    stats: {
      total: "2,500+",
      publications: "15,000+",
      projects: "500+"
    }
  },
  {
    id: 2,
    title: "Anciens étudiants",
    description: "Rejoignez notre réseau d'anciens élèves et participez à nos événements.",
    icon: GraduationCap,
    stats: {
      total: "50,000+",
      countries: "85+",
      companies: "1,000+"
    }
  },
  {
    id: 3,
    title: "Personnel administratif",
    description: "Notre équipe administrative au service des étudiants et du corps enseignant.",
    icon: Building2,
    stats: {
      total: "1,200+",
      departments: "25+",
      services: "40+"
    }
  }
];

const UniversityStaff: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Notre Communauté Universitaire</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les différents acteurs qui font vivre notre université au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {staffSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-6 mx-auto">
                <section.icon size={24} />
              </div>

              <h3 className="text-xl font-bold text-center mb-4">{section.title}</h3>
              <p className="text-gray-600 text-center mb-6">{section.description}</p>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-600">{section.stats.total}</div>
                  <div className="text-sm text-gray-500">Total</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">
                    {Object.values(section.stats)[1]}
                  </div>
                  <div className="text-sm text-gray-500">
                    {Object.keys(section.stats)[1].charAt(0).toUpperCase() + 
                     Object.keys(section.stats)[1].slice(1)}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">
                    {Object.values(section.stats)[2]}
                  </div>
                  <div className="text-sm text-gray-500">
                    {Object.keys(section.stats)[2].charAt(0).toUpperCase() + 
                     Object.keys(section.stats)[2].slice(1)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversityStaff;