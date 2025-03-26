
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
  // Use the uploaded Dovbyk image as placeholder
  const playerImage = "public/lovable-uploads/51024c31-41f7-4022-8a86-273e102b414b.png";

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {/* Player number in top-left corner */}
      <div className="absolute top-2 left-2 z-10">
        <div className="text-white text-6xl font-bold drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          {player.number}
        </div>
      </div>

      {/* Player Image */}
      <div className="w-full h-[320px] flex items-center justify-center overflow-hidden bg-black">
        <img 
          src={playerImage} 
          alt={player.name} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Player Name at bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3">
        <div className="text-center">
          <div className="text-white text-2xl font-bebas font-bold uppercase tracking-wide">
            {player.name.split(' ')[0]}
          </div>
          <div className="text-white text-2xl font-bebas font-bold uppercase tracking-wide">
            {player.name.split(' ')[1] || ''}
          </div>
        </div>
      </div>

      {/* Social Media Links - without position info */}
      <div className="mt-2">
        {player.social && (
          <div className="flex justify-start space-x-4">
            {player.social.facebook && (
              <a 
                href={player.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-team-accent transition-colors"
                aria-label={`${player.name}'s Facebook profile`}
              >
                <Facebook size={16} />
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
                <Instagram size={16} />
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
                <Twitter size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerCard;
