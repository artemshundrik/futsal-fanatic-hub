
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { teamName } from '../data/sample-data';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'ГОЛОВНА', path: '/' },
    { name: 'КАЛЕНДАР', path: '/calendar' },
    { name: 'ГРАВЦІ', path: '/players' },
    { name: 'КОМАНДА', path: '/team' },
    { name: 'НОВИНИ', path: '/news' },
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
        {/* Логотип зліва - збільшений розмір */}
        <Link 
          to="/" 
          className="font-bebas text-team-primary tracking-wider flex items-center"
        >
          <img 
            src="/lovable-uploads/c744b744-a8d1-4f9c-a717-676e35620d9e.png" 
            alt={teamName} 
            className="h-16" 
          />
        </Link>

        {/* Центрована десктопна навігація */}
        <nav className="hidden md:flex space-x-8 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-bebas text-base font-bold tracking-wide text-team-primary transition-all duration-300 hover:text-team-secondary relative ${
                location.pathname === link.path 
                ? 'text-team-secondary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-team-accent' 
                : 'hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-team-accent after:transition-all after:duration-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Логотипи спонсорів справа - зменшені розміри */}
        <div className="hidden md:flex items-center space-x-3">
          <a href="https://wookie.com.ua/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img 
              src="/lovable-uploads/ebd1c9df-c27b-4c0d-b1cf-40c450737893.png" 
              alt="Wookie" 
              className="h-6" 
            />
          </a>
          <a href="https://minimal.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img 
              src="/lovable-uploads/25342c6e-21a4-492d-91c4-01c142b6fa6f.png" 
              alt="Minimal" 
              className="h-5" 
            />
          </a>
          <a href="https://tosho.agency/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img 
              src="/lovable-uploads/be9f4c7d-9e8b-4e37-9c39-f3054dc401a0.png" 
              alt="ToSHo Agency" 
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
              location.pathname === link.path ? 'text-team-accent' : 'text-team-primary'
            }`}
          >
            {link.name}
          </Link>
        ))}
        
        {/* Зменшені логотипи спонсорів у мобільному меню */}
        <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-100">
          <a href="https://wookie.com.ua/" target="_blank" rel="noopener noreferrer">
            <img src="/lovable-uploads/ebd1c9df-c27b-4c0d-b1cf-40c450737893.png" alt="Wookie" className="h-6" />
          </a>
          <a href="https://minimal.com/" target="_blank" rel="noopener noreferrer">
            <img src="/lovable-uploads/25342c6e-21a4-492d-91c4-01c142b6fa6f.png" alt="Minimal" className="h-5" />
          </a>
          <a href="https://tosho.agency/" target="_blank" rel="noopener noreferrer">
            <img src="/lovable-uploads/be9f4c7d-9e8b-4e37-9c39-f3054dc401a0.png" alt="ToSHo Agency" className="h-6" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
