
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
          ? 'bg-white shadow-md py-3'
          : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className={`font-bebas text-team-primary tracking-wider flex items-center`}
        >
          <img 
            src="/lovable-uploads/c744b744-a8d1-4f9c-a717-676e35620d9e.png" 
            alt={teamName} 
            className="h-12 mr-3" 
          />
          <span className="text-3xl">{teamName}</span>
        </Link>

        {/* Десктопна навігація */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link text-team-primary ${
                location.pathname === link.path ? 'text-team-secondary after:w-full' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Кнопка мобільного меню */}
        <button
          className="md:hidden text-team-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Перемикач меню"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Мобільна навігація */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col pt-24 px-8 md:hidden transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-2xl font-bebas py-4 border-b border-gray-100 ${
              location.pathname === link.path ? 'text-team-secondary' : 'text-team-primary'
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
