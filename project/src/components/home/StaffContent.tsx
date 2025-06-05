import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Building2, Tag, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const staffContent = {
  teachers: {
    deals: [
      {
        id: 1,
        title: "Accès Premium aux Bases de Données",
        description: "Accès illimité aux bases de données scientifiques majeures",
        discount: "-50%"
      },
      {
        id: 2,
        title: "Conférences Internationales",
        description: "Réductions sur les inscriptions aux conférences partenaires",
        discount: "-30%"
      }
    ],
    articles: [
      {
        id: 1,
        title: "Innovation Pédagogique 2025",
        excerpt: "Les nouvelles méthodes d'enseignement à l'ère du numérique",
        date: "10 mai 2025"
      },
      {
        id: 2,
        title: "Guide de la Recherche",
        excerpt: "Optimisez vos demandes de financement pour vos projets",
        date: "5 mai 2025"
      }
    ]
  },
  alumni: {
    deals: [
      {
        id: 1,
        title: "Formation Continue",
        description: "Programmes de formation continue à tarifs préférentiels",
        discount: "-25%"
      },
      {
        id: 2,
        title: "Événements Networking",
        description: "Accès VIP aux événements du réseau des anciens",
        discount: "GRATUIT"
      }
    ],
    articles: [
      {
        id: 1,
        title: "Parcours Inspirants",
        excerpt: "Découvrez les success stories de nos anciens élèves",
        date: "12 mai 2025"
      },
      {
        id: 2,
        title: "Mentorat Alumni",
        excerpt: "Comment devenir mentor pour les étudiants actuels",
        date: "8 mai 2025"
      }
    ]
  },
  administrative: {
    deals: [
      {
        id: 1,
        title: "Logiciels Professionnels",
        description: "Suite logicielle administrative complète",
        discount: "-40%"
      },
      {
        id: 2,
        title: "Formations Spécialisées",
        description: "Programmes de développement professionnel",
        discount: "-35%"
      }
    ],
    articles: [
      {
        id: 1,
        title: "Digitalisation Administrative",
        excerpt: "Les meilleures pratiques pour une administration moderne",
        date: "15 mai 2025"
      },
      {
        id: 2,
        title: "Bien-être au Travail",
        excerpt: "Créer un environnement de travail positif",
        date: "7 mai 2025"
      }
    ]
  }
};

const StaffContent: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Enseignants/Chercheurs */}
          <div>
            <div className="flex items-center mb-8">
              <BookOpen size={24} className="text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold">Espace Enseignants/Chercheurs</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Bons plans */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold flex items-center">
                  <Tag size={20} className="text-secondary-600 mr-2" />
                  Offres Spéciales
                </h3>
                <div className="space-y-4">
                  {staffContent.teachers.deals.map(deal => (
                    <div key={deal.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{deal.title}</h4>
                          <p className="text-sm text-gray-600">{deal.description}</p>
                        </div>
                        <span className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded-full text-sm font-medium">
                          {deal.discount}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Articles */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold flex items-center">
                  <FileText size={20} className="text-primary-600 mr-2" />
                  Articles Dédiés
                </h3>
                <div className="space-y-4">
                  {staffContent.teachers.articles.map(article => (
                    <Link
                      key={article.id}
                      to={`/blog/${article.id}`}
                      className="block bg-gray-50 rounded-lg p-4 border border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium">{article.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{article.excerpt}</p>
                      <p className="text-sm text-primary-600 mt-2">{article.date}</p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Anciens étudiants */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap size={24} className="text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold">Espace Anciens Étudiants</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Bons plans */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold flex items-center">
                  <Tag size={20} className="text-secondary-600 mr-2" />
                  Avantages Alumni
                </h3>
                <div className="space-y-4">
                  {staffContent.alumni.deals.map(deal => (
                    <div key={deal.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{deal.title}</h4>
                          <p className="text-sm text-gray-600">{deal.description}</p>
                        </div>
                        <span className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded-full text-sm font-medium">
                          {deal.discount}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Articles */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold flex items-center">
                  <FileText size={20} className="text-primary-600 mr-2" />
                  Actualités Alumni
                </h3>
                <div className="space-y-4">
                  {staffContent.alumni.articles.map(article => (
                    <Link
                      key={article.id}
                      to={`/blog/${article.id}`}
                      className="block bg-gray-50 rounded-lg p-4 border border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium">{article.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{article.excerpt}</p>
                      <p className="text-sm text-primary-600 mt-2">{article.date}</p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Personnel administratif */}
          <div>
            <div className="flex items-center mb-8">
              <Building2 size={24} className="text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold">Espace Personnel Administratif</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Bons plans */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold flex items-center">
                  <Tag size={20} className="text-secondary-600 mr-2" />
                  Offres Spéciales
                </h3>
                <div className="space-y-4">
                  {staffContent.administrative.deals.map(deal => (
                    <div key={deal.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{deal.title}</h4>
                          <p className="text-sm text-gray-600">{deal.description}</p>
                        </div>
                        <span className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded-full text-sm font-medium">
                          {deal.discount}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Articles */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold flex items-center">
                  <FileText size={20} className="text-primary-600 mr-2" />
                  Ressources Dédiées
                </h3>
                <div className="space-y-4">
                  {staffContent.administrative.articles.map(article => (
                    <Link
                      key={article.id}
                      to={`/blog/${article.id}`}
                      className="block bg-gray-50 rounded-lg p-4 border border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium">{article.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{article.excerpt}</p>
                      <p className="text-sm text-primary-600 mt-2">{article.date}</p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffContent;