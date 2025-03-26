
import React from 'react';
import { Player } from '../data/sample-data';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface PlayerCardProps {
  player: Player;
  showStats?: boolean;
  className?: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ 
  player, 
  showStats = false,
  className = '' 
}) => {
  const getPositionFullName = (pos: string) => {
    switch(pos) {
      case 'GK': return 'Голкіпер';
      case 'UN': return 'Універсал';
      default: return pos;
    }
  };

  return (
    <div className={`group relative bg-black rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] ${className}`}>
      <div className="relative h-96 overflow-hidden flex items-center justify-center">
        {/* Dark background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black"></div>
        
        {/* Player image */}
        <img 
          src={player.image} 
          alt={player.name} 
          className="h-full object-contain z-10 mix-blend-normal transform group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Pink accent line at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-team-accent"></div>
      </div>

      <div className="p-5 bg-black text-white z-20 relative">
        {/* Position and number */}
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-semibold bg-team-accent px-3 py-1 rounded-full inline-block">
            {getPositionFullName(player.position)}
          </p>
          <span className="font-bebas text-4xl text-team-accent opacity-90">#{player.number}</span>
        </div>
        
        {/* Player name */}
        <h3 className="font-bebas text-3xl tracking-wider text-white mb-4">{player.name}</h3>
        
        {/* Stats section */}
        {showStats && (
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="stat-card bg-gray-900 border-gray-800">
              <span className="text-gray-400 text-xs uppercase tracking-wider">Голи</span>
              <span className="text-4xl font-bebas text-team-accent">{player.stats.goals}</span>
            </div>
            <div className="stat-card bg-gray-900 border-gray-800">
              <span className="text-gray-400 text-xs uppercase tracking-wider">Передачі</span>
              <span className="text-4xl font-bebas text-team-accent">{player.stats.assists}</span>
            </div>
            {player.position === 'GK' && (
              <>
                <div className="stat-card bg-gray-900 border-gray-800">
                  <span className="text-gray-400 text-xs uppercase tracking-wider">Сейви</span>
                  <span className="text-4xl font-bebas text-team-accent">{player.stats.saves}</span>
                </div>
                <div className="stat-card bg-gray-900 border-gray-800">
                  <span className="text-gray-400 text-xs uppercase tracking-wider">Сухі матчі</span>
                  <span className="text-4xl font-bebas text-team-accent">{player.stats.cleanSheets}</span>
                </div>
              </>
            )}
          </div>
        )}

        {/* Social media icons */}
        {player.social && (
          <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-800">
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
    </div>
  );
};

export default PlayerCard;
