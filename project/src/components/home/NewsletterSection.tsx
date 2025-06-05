import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your API
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };
  
  return (
    <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
            <p className="text-xl text-blue-100 mb-8">
              Inscrivez-vous à notre newsletter et recevez les dernières actualités et opportunités pour les étudiants.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="input-field flex-grow py-3 text-gray-800"
                required
              />
              <button 
                type="submit" 
                className="btn bg-white text-primary-700 hover:bg-blue-50 py-3 px-6"
              >
                {isSubmitted ? (
                  "Merci !"
                ) : (
                  <>
                    S'abonner
                    <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
            
            <p className="text-sm text-blue-200 mt-4">
              En vous inscrivant, vous acceptez notre politique de confidentialité. Vous pourrez vous désinscrire à tout moment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;