import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data for latest news
const latestNews = [
  {
    id: 1,
    title: 'Les nouvelles mesures pour les étudiants internationaux',
    excerpt: 'Découvrez les changements récents concernant les visas et l\'accueil des étudiants étrangers en France.',
    category: 'Actualité',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '15 mai 2025',
    readTime: '5 min'
  },
  {
    id: 2,
    title: 'Interview : le parcours inspirant d\'une jeune entrepreneure',
    excerpt: 'Rencontre avec Sophie Martin, qui a lancé sa startup pendant ses études à HEC Paris.',
    category: 'Interview',
    image: 'https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '10 mai 2025',
    readTime: '8 min'
  },
  {
    id: 3,
    title: 'Festival des Associations : retour sur l\'édition 2025',
    excerpt: 'Revivez les moments forts du plus grand rassemblement d\'associations étudiantes de l\'année.',
    category: 'Événement',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '5 mai 2025',
    readTime: '4 min'
  }
];

const LatestNews: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Dernières actualités</h2>
            <p className="text-gray-600 max-w-2xl">Restez informé des dernières nouvelles et tendances du monde étudiant.</p>
          </div>
          <Link to="/news" className="group inline-flex items-center text-primary-600 font-medium mt-4 md:mt-0 hover:text-primary-700 transition-colors">
            Toutes les actualités
            <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link to={`/news/${news.id}`} className="card overflow-hidden h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className={`
                      px-2 py-1 text-xs font-medium rounded-full
                      ${news.category === 'Actualité' ? 'bg-primary-100 text-primary-700' : ''}
                      ${news.category === 'Interview' ? 'bg-secondary-100 text-secondary-700' : ''}
                      ${news.category === 'Événement' ? 'bg-accent-100 text-accent-700' : ''}
                    `}>
                      {news.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{news.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{news.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-auto">
                    <span className="mr-4">{news.date}</span>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      <span>{news.readTime}</span>
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

export default LatestNews;