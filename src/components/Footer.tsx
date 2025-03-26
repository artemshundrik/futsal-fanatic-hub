
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
              Established {teamFoundedYear}. Committed to excellence in futsal.
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
            <h3 className="text-2xl font-bebas mb-4 tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-team-secondary transition-colors">Home</Link></li>
              <li><Link to="/calendar" className="text-gray-300 hover:text-team-secondary transition-colors">Calendar</Link></li>
              <li><Link to="/players" className="text-gray-300 hover:text-team-secondary transition-colors">Players</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-team-secondary transition-colors">Team</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-team-secondary transition-colors">News</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bebas mb-4 tracking-wider">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Sportyvna St, Kyiv, Ukraine, 01001</span>
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

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} {teamName}. All rights reserved.</p>
          <div className="mt-2 flex justify-center">
            <img 
              src="/lovable-uploads/c744b744-a8d1-4f9c-a717-676e35620d9e.png" 
              alt={`${teamName} Logo`} 
              className="h-8 opacity-50" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
