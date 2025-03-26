
import React from 'react';
import { Player } from '../data/sample-data';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface PlayerCardProps {
  player: Player;
  className?: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ 
  player,
  className = '' 
}) => {
  const getPositionFullName = (pos: string) => {
    switch(pos) {
      case 'GK': return 'Голкіпер';
      case 'UN': return 'Універсал';
      default: return pos;
    }
  };

  // Use the uploaded Dovbyk image as placeholder
  const playerImage = "public/lovable-uploads/51024c31-41f7-4022-8a86-273e102b414b.png";

  return (
    <div className={`relative ${className}`}>
      {/* Number and Name section */}
      <div className="mb-4">
        <div className="flex items-end">
          <div className="text-white text-7xl md:text-8xl font-bold leading-none mr-4">
            {player.number}
          </div>
          <div className="flex flex-col text-left">
            <span className="text-team-accent text-xl md:text-2xl font-bebas mb-1">
              {player.name.split(' ')[0]}
            </span>
            <span className="text-white text-2xl md:text-3xl font-bebas">
              {player.name.split(' ')[1] || ''}
            </span>
          </div>
        </div>
        <div className="text-white text-sm mt-1">
          {getPositionFullName(player.position)}
        </div>
      </div>

      {/* Player Image */}
      <div className="w-full h-[400px] flex items-end justify-center overflow-hidden">
        <img 
          src={playerImage} 
          alt={player.name} 
          className="max-w-full h-auto object-contain"
        />
      </div>

      {/* Social Media Links */}
      {player.social && (
        <div className="flex justify-start space-x-4 mt-4">
          {player.social.facebook && (
            <a 
              href={player.social.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-team-accent transition-colors"
              aria-label={`${player.name}'s Facebook profile`}
            >
              <Facebook size={20} />
            </a>
          )}
          {player.social.instagram && (
            <a 
              href={player.social.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-team-accent transition-colors"
              aria-label={`${player.name}'s Instagram profile`}
            >
              <Instagram size={20} />
            </a>
          )}
          {player.social.twitter && (
            <a 
              href={player.social.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-team-accent transition-colors"
              aria-label={`${player.name}'s Twitter profile`}
            >
              <Twitter size={20} />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default PlayerCard;
