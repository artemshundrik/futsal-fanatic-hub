
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
    <div className={`group relative bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] ${className}`}>
      <div className="relative h-72 overflow-hidden">
        <img 
          src={player.image} 
          alt={player.name} 
          className="w-full h-full object-cover filter grayscale transition-all duration-300 group-hover:grayscale-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-80"></div>
        
        {/* Номер гравця */}
        <div className="absolute top-4 left-4 font-bebas text-white text-4xl opacity-80">
          {player.number}
        </div>
        
        {/* Ім'я гравця */}
        <div className="absolute bottom-4 left-0 w-full text-white px-4">
          <p className="text-sm font-semibold bg-team-accent px-3 py-1 rounded-full inline-block mb-2">
            {getPositionFullName(player.position)}
          </p>
          <h3 className="font-bebas text-3xl tracking-wider">{player.name}</h3>
        </div>
      </div>

      {/* Опціональна статистика */}
      {showStats && (
        <div className="bg-black p-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="stat-card bg-gray-800 border-gray-700">
              <span className="text-gray-400 text-xs uppercase tracking-wider">Голи</span>
              <span className="text-4xl font-bebas text-team-accent">{player.stats.goals}</span>
            </div>
            <div className="stat-card bg-gray-800 border-gray-700">
              <span className="text-gray-400 text-xs uppercase tracking-wider">Передачі</span>
              <span className="text-4xl font-bebas text-team-accent">{player.stats.assists}</span>
            </div>
            {player.position === 'GK' && (
              <>
                <div className="stat-card bg-gray-800 border-gray-700">
                  <span className="text-gray-400 text-xs uppercase tracking-wider">Сейви</span>
                  <span className="text-4xl font-bebas text-team-accent">{player.stats.saves}</span>
                </div>
                <div className="stat-card bg-gray-800 border-gray-700">
                  <span className="text-gray-400 text-xs uppercase tracking-wider">Сухі матчі</span>
                  <span className="text-4xl font-bebas text-team-accent">{player.stats.cleanSheets}</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Соціальні мережі */}
      {player.social && (
        <div className="px-4 py-3 bg-gray-800 border-t border-gray-700 flex justify-center space-x-4">
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
