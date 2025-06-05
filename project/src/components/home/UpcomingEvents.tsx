import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data for upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: 'Forum des Associations 2025',
    description: 'Le plus grand rassemblement d\'associations étudiantes de l\'année, avec plus de 200 participants.',
    date: '20 septembre 2025',
    time: '10:00 - 18:00',
    location: 'Paris Expo Porte de Versailles',
    category: 'Salon',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Soirée d\'intégration BDE Centrale Paris',
    description: 'La soirée annuelle d\'accueil des nouveaux étudiants organisée par le BDE de Centrale Paris.',
    date: '15 octobre 2025',
    time: '22:00 - 05:00',
    location: 'Le Duplex, Paris',
    category: 'Soirée',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Conférence : L\'avenir de l\'IA dans l\'éducation',
    description: 'Une conférence sur l\'impact de l\'intelligence artificielle sur les méthodes d\'enseignement et d\'apprentissage.',
    date: '25 septembre 2025',
    time: '14:00 - 17:00',
    location: 'Amphi Richelieu, Sorbonne',
    category: 'Conférence',
    image: 'https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'Tournoi Inter-universitaire de Football',
    description: 'Compétition sportive réunissant les équipes de football des universités de la région parisienne.',
    date: '10 octobre 2025',
    time: '09:00 - 18:00',
    location: 'Stade Charléty, Paris',
    category: 'Sport',
    image: 'https://images.pexels.com/photos/918798/pexels-photo-918798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const UpcomingEvents: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Événements à venir</h2>
            <p className="text-gray-600 max-w-2xl">Ne manquez aucun des événements majeurs de la vie étudiante en France.</p>
          </div>
          <Link to="/events" className="group inline-flex items-center text-primary-600 font-medium mt-4 md:mt-0 hover:text-primary-700 transition-colors">
            Tous les événements
            <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link to={`/events/${event.id}`} className="card overflow-hidden h-full flex flex-col">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute top-0 right-0 m-3">
                    <span className={`
                      px-2 py-1 text-xs font-bold rounded-full
                      ${event.category === 'Salon' ? 'bg-primary-100 text-primary-700' : ''}
                      ${event.category === 'Soirée' ? 'bg-secondary-100 text-secondary-700' : ''}
                      ${event.category === 'Conférence' ? 'bg-accent-100 text-accent-700' : ''}
                      ${event.category === 'Sport' ? 'bg-success-100 text-success-700' : ''}
                    `}>
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{event.description}</p>
                  <div className="text-sm text-gray-500 space-y-1 mt-auto">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{event.location}</span>
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

export default UpcomingEvents;