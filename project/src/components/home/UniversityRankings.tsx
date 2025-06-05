import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight, Star, Users, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const rankings = [
  {
    id: 1,
    name: "Université Paris-Saclay",
    rank: 1,
    score: 98,
    students: "48,000+",
    location: "Paris-Saclay",
    image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "PSL Université",
    rank: 2,
    score: 96,
    students: "17,000+",
    location: "Paris",
    image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Sorbonne Université",
    rank: 3,
    score: 94,
    students: "55,000+",
    location: "Paris",
    image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const UniversityRankings: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Classement des Universités</h2>
            <p className="text-gray-600 max-w-2xl">Découvrez les meilleures universités et grandes écoles de France.</p>
          </div>
          <Link to="/rankings" className="group inline-flex items-center text-primary-600 font-medium mt-4 md:mt-0 hover:text-primary-700 transition-colors">
            Voir le classement complet
            <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rankings.map((university, index) => (
            <motion.div
              key={university.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold z-10">
                #{university.rank}
              </div>
              <div className="card overflow-hidden h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{university.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Star size={16} className="text-primary-600 mr-2" />
                      <span>Score: {university.score}/100</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="text-primary-600 mr-2" />
                      <span>{university.students} étudiants</span>
                    </div>
                    <div className="flex items-center">
                      <GraduationCap size={16} className="text-primary-600 mr-2" />
                      <span>{university.location}</span>
                    </div>
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

export default UniversityRankings;