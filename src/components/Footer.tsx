
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { teamName, teamFoundedYear } from '../data/sample-data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-team-primary text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-6">
            <Link to="/" className="font-bebas tracking-wider flex items-center mb-4">
              <img 
                src="/lovable-uploads/db5ef50d-8ab1-404b-a3ce-b0b22c55455c.png" 
                alt="Fayna Team"
                className="h-14 mr-3" 
              />
              <span className="text-4xl">Fayna Team</span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Засновано {teamFoundedYear}. Віддані досконалості у футзалі.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-team-accent p-2.5 rounded-full transition-all duration-300" 
                aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-team-accent p-2.5 rounded-full transition-all duration-300" 
                aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-team-accent p-2.5 rounded-full transition-all duration-300" 
                aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bebas mb-6 tracking-wider border-b border-white/10 pb-2">ШВИДКІ ПОСИЛАННЯ</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-team-accent transition-colors flex items-center">
                  <span className="mr-2">•</span>
                  <span>Головна</span>
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="text-gray-300 hover:text-team-accent transition-colors flex items-center">
                  <span className="mr-2">•</span>
                  <span>Календар</span>
                </Link>
              </li>
              <li>
                <Link to="/players" className="text-gray-300 hover:text-team-accent transition-colors flex items-center">
                  <span className="mr-2">•</span>
                  <span>Гравці</span>
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-team-accent transition-colors flex items-center">
                  <span className="mr-2">•</span>
                  <span>Команда</span>
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-team-accent transition-colors flex items-center">
                  <span className="mr-2">•</span>
                  <span>Новини</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bebas mb-6 tracking-wider border-b border-white/10 pb-2">КОНТАКТИ</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-team-accent" />
                <span className="text-gray-300 group-hover:text-white transition-colors">вул. Спортивна 123, Київ, Україна, 01001</span>
              </li>
              <li className="flex items-center group">
                <Phone size={20} className="mr-3 flex-shrink-0 text-team-accent" />
                <span className="text-gray-300 group-hover:text-white transition-colors">+380 44 123 4567</span>
              </li>
              <li className="flex items-center group">
                <Mail size={20} className="mr-3 flex-shrink-0 text-team-accent" />
                <span className="text-gray-300 group-hover:text-white transition-colors">info@faynateam.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <div className="mb-4 flex justify-center">
            <img 
              src="/lovable-uploads/db5ef50d-8ab1-404b-a3ce-b0b22c55455c.png" 
              alt="Fayna Team Логотип" 
              className="h-10 opacity-70" 
            />
          </div>
          <p className="text-gray-400 text-sm">© {currentYear} Fayna Team. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
