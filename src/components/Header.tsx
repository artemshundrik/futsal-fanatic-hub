
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
        {/* Логотип зліва */}
        <Link 
          to="/" 
          className="font-bebas text-team-primary tracking-wider flex items-center"
        >
          <img 
            src="/lovable-uploads/c744b744-a8d1-4f9c-a717-676e35620d9e.png" 
            alt={teamName} 
            className="h-12 mr-3" 
          />
          <span className="text-3xl">{teamName}</span>
        </Link>

        {/* Центрована десктопна навігація */}
        <nav className="hidden md:flex space-x-8 justify-center">
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

        {/* Логотипи спонсорів справа */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://wookie.com.ua/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img 
              src="https://wookie.com.ua/wp-content/uploads/2020/12/wookie-new-logo.svg" 
              alt="Wookie" 
              className="h-8" 
            />
          </a>
          <a href="https://www.nike.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" 
              alt="Nike" 
              className="h-6" 
            />
          </a>
          <a href="https://www.adidas.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png" 
              alt="Adidas" 
              className="h-6" 
            />
          </a>
        </div>

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
        
        {/* Додаємо спонсорів у мобільне меню */}
        <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-100">
          <a href="https://wookie.com.ua/" target="_blank" rel="noopener noreferrer">
            <img src="https://wookie.com.ua/wp-content/uploads/2020/12/wookie-new-logo.svg" alt="Wookie" className="h-8" />
          </a>
          <a href="https://www.nike.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" alt="Nike" className="h-6" />
          </a>
          <a href="https://www.adidas.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png" alt="Adidas" className="h-6" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
