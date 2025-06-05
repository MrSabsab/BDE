import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AssociationsPage from './pages/AssociationsPage';
import NewsPage from './pages/NewsPage';
import EventsPage from './pages/EventsPage';
import DealsPage from './pages/DealsPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/associations" element={<AssociationsPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/deals" element={<DealsPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App