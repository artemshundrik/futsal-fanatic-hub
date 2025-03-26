
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { teamName } from '../data/sample-data';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Головна', path: '/' },
    { name: 'Календар', path: '/calendar' },
    { name: 'Гравці', path: '/players' },
    { name: 'Команда', path: '/team' },
    { name: 'Новини', path: '/news' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Закриваємо мобільне меню при зміні маршруту
    setIsMobileMenuOpen(false);
  }, [location]);

  // Запобігаємо прокрутці body, коли відкрите мобільне меню
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-team-primary text-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className={`font-bebas ${isScrolled ? 'text-team-primary' : 'text-white'} tracking-wider flex items-center`}
        >
          <img 
            src="/lovable-uploads/c744b744-a8d1-4f9c-a717-676e35620d9e.png" 
            alt={teamName} 
            className="h-10 mr-3" 
          />
          <span className="text-3xl">{teamName}</span>
        </Link>

        {/* Десктопна навігація */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${
                isScrolled ? 'text-team-primary hover:text-team-accent' : 'text-white hover:text-team-accent'
              } ${
                location.pathname === link.path ? 'font-semibold' : 'font-medium'
              } uppercase tracking-wider text-sm py-2`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Кнопка мобільного меню */}
        <button
          className={`md:hidden ${isScrolled ? 'text-team-primary' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Перемикач меню"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Мобільна навігація */}
      <div
        className={`fixed inset-0 bg-team-primary z-40 flex flex-col pt-20 px-8 md:hidden transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-xl uppercase font-medium py-4 border-b border-gray-700 ${
              location.pathname === link.path ? 'text-team-accent' : 'text-white'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
