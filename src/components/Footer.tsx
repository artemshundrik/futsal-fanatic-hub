import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { teamName, teamFoundedYear } from '../data/sample-data';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-team-primary text-white">
      {/* Top section with gradient overlay */}
      <div className="relative overflow-hidden py-4 bg-gradient-to-r from-team-primary to-team-secondary">
        <div className="container mx-auto px-4 py-2 flex flex-wrap justify-center gap-8 items-center">
          <span className="font-bebas text-xl tracking-wider">НАШІ СПОНСОРИ</span>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a href="https://wookie.com.ua/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 duration-200">
              <img src="/lovable-uploads/17be1360-bd35-40d1-bdcb-0597a6d6a8b4.png" alt="Wookie" className="h-8" />
            </a>
            <a href="https://minimal.com/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 duration-200">
              <img src="/lovable-uploads/b1d04dd8-ab26-49f3-b97f-e41bdba49b25.png" alt="Minimal" className="h-7" />
            </a>
            <a href="https://tosho.agency/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 duration-200">
              <img src="/lovable-uploads/19158e99-38f4-4df9-b6e7-b4dd708a514e.png" alt="ToSHo Agency" className="h-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-6">
            <Link to="/" className="font-bebas tracking-wider flex items-center mb-4">
              <img alt="Fayna Team" className="h-14 mr-3" src="/lovable-uploads/90ccb9d8-0569-46cd-aa07-564bef7a710d.png" />
              
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Засновано {teamFoundedYear}. Віддані досконалості у футзалі.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-team-accent p-2.5 rounded-full transition-all duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-team-accent p-2.5 rounded-full transition-all duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-team-accent p-2.5 rounded-full transition-all duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bebas mb-6 tracking-wider border-b border-white/10 pb-2 text-lg font-extrabold">ШВИДКІ ПОСИЛАННЯ</h3>
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
            <h3 className="font-bebas mb-6 tracking-wider border-b border-white/10 pb-2 text-lg font-extrabold">КОНТАКТИ</h3>
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
            <img src="/lovable-uploads/db5ef50d-8ab1-404b-a3ce-b0b22c55455c.png" alt="Fayna Team Логотип" className="h-10 opacity-70" />
          </div>
          <p className="text-gray-400 text-sm">© {currentYear} Fayna Team. Всі права захищені.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;