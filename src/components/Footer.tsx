
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { teamName, teamFoundedYear } from '../data/sample-data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-team-primary text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="font-bebas tracking-wider flex items-center mb-4">
              <img 
                src="/lovable-uploads/c744b744-a8d1-4f9c-a717-676e35620d9e.png" 
                alt={teamName}
                className="h-12 mr-3" 
              />
              <span className="text-3xl">{teamName}</span>
            </Link>
            <p className="mb-4 text-gray-300">
              Засновано {teamFoundedYear}. Віддані досконалості у футзалі.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-team-secondary transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-team-secondary transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-team-secondary transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bebas mb-4 tracking-wider">Швидкі Посилання</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-team-secondary transition-colors">Головна</Link></li>
              <li><Link to="/calendar" className="text-gray-300 hover:text-team-secondary transition-colors">Календар</Link></li>
              <li><Link to="/players" className="text-gray-300 hover:text-team-secondary transition-colors">Гравці</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-team-secondary transition-colors">Команда</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-team-secondary transition-colors">Новини</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bebas mb-4 tracking-wider">Контакти</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>вул. Спортивна 123, Київ, Україна, 01001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+380 44 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>info@faynateam.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Додаємо спонсорів у футер */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <h3 className="text-xl font-bebas mb-4 text-center tracking-wider">Наші Спонсори</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a href="https://wookie.com.ua/" target="_blank" rel="noopener noreferrer" className="p-2 transition-opacity hover:opacity-80">
              <img 
                src="/lovable-uploads/17be1360-bd35-40d1-bdcb-0597a6d6a8b4.png" 
                alt="Wookie" 
                className="h-8" 
              />
            </a>
            <a href="https://minimal.com/" target="_blank" rel="noopener noreferrer" className="p-2 transition-opacity hover:opacity-80">
              <img 
                src="/lovable-uploads/b1d04dd8-ab26-49f3-b97f-e41bdba49b25.png" 
                alt="Minimal" 
                className="h-7" 
              />
            </a>
            <a href="https://tosho.agency/" target="_blank" rel="noopener noreferrer" className="p-2 transition-opacity hover:opacity-80">
              <img 
                src="/lovable-uploads/19158e99-38f4-4df9-b6e7-b4dd708a514e.png" 
                alt="ToSHo Agency" 
                className="h-7" 
              />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} {teamName}. Всі права захищені.</p>
          <div className="mt-2 flex justify-center">
            <img 
              src="/lovable-uploads/c744b744-a8d1-4f9c-a717-676e35620d9e.png" 
              alt={`${teamName} Логотип`} 
              className="h-8 opacity-50" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
