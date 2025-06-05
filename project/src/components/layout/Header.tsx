import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, UserCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);
  
  const navLinks = [
    { name: 'Accueil', path: '/' },
    { 
      name: 'Associations', 
      path: '/associations',
      dropdown: [
        { name: 'BDE', path: '/associations?type=bde' },
        { name: 'BDS', path: '/associations?type=bds' },
        { name: 'BDA', path: '/associations?type=bda' },
        { name: 'Autres', path: '/associations?type=other' },
      ] 
    },
    { 
      name: 'Actualités', 
      path: '/news',
      dropdown: [
        { name: 'Articles', path: '/news/articles' },
        { name: 'Interviews', path: '/news/interviews' },
        { name: 'Vidéos', path: '/news/videos' },
      ] 
    },
    { name: 'Événements', path: '/events' },
    { name: 'Bons Plans', path: '/deals' },
  ];
  
  const headerClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  return (
    <>
      <header className={headerClasses}>
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Logo size={32} />
              <span className="text-xl font-display font-bold text-primary-700">SMARTSTUD</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.dropdown ? (
                    <>
                      <button 
                        onClick={() => toggleDropdown(link.name)}
                        className={`px-3 py-2 rounded-lg flex items-center space-x-1 text-sm font-medium transition-colors ${
                          location.pathname === link.path 
                            ? 'text-primary-700' 
                            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown size={16} />
                      </button>
                      {activeDropdown === link.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === link.path 
                          ? 'text-primary-700' 
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="input-field pl-10 pr-4 py-2 text-sm w-64"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className="btn btn-primary text-sm font-medium flex items-center space-x-2"
              >
                <UserCircle2 size={18} />
                <span>Connexion</span>
              </button>
            </div>
            
            <button onClick={toggleMenu} className="md:hidden text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Login Modal */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsLoginModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full"
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-2xl font-display font-bold mb-6 text-center">Connexion</h2>
              <div className="space-y-4">
                <button className="w-full btn bg-primary-600 text-white hover:bg-primary-700 transition-colors py-3 rounded-lg font-medium">
                  Connexion Étudiant
                </button>
                <button className="w-full btn bg-secondary-600 text-white hover:bg-secondary-700 transition-colors py-3 rounded-lg font-medium">
                  Connexion Admin BDE
                </button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  En vous connectant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;