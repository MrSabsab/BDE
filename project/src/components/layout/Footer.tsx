import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo size={32} />
              <span className="text-xl font-bold text-white">SMARTSTUD</span>
            </div>
            <p className="text-gray-400 mb-4">
              La plateforme nationale pour les étudiants, les associations et les établissements d'enseignement supérieur.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Accueil</Link></li>
              <li><Link to="/associations" className="hover:text-primary-400 transition-colors">Associations</Link></li>
              <li><Link to="/news" className="hover:text-primary-400 transition-colors">Actualités</Link></li>
              <li><Link to="/events" className="hover:text-primary-400 transition-colors">Événements</Link></li>
              <li><Link to="/deals" className="hover:text-primary-400 transition-colors">Bons Plans</Link></li>
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">À Propos</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Ajouter votre association</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Devenir partenaire</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Guide des étudiants</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact</h4>
            <p className="flex items-center space-x-2 mb-2">
              <Mail size={18} />
              <span>contact@smartstud.fr</span>
            </p>
            <p className="mb-4">123 Avenue de l'Université<br />75005 Paris, France</p>
            <div className="mt-4">
              <button className="btn btn-primary">
                Nous Contacter
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} SMARTSTUD. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;