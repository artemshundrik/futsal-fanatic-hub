
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

  const getAttendanceRate = () => {
    return Math.round((player.stats.matchesPlayed / player.stats.totalMatches) * 100);
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-[1.01] ${className}`}>
      <div className="relative h-64 overflow-hidden">
        <img 
          src={player.image} 
          alt={player.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <div className="absolute top-4 left-4 bg-team-primary text-white text-xl font-bold w-10 h-10 rounded-full flex items-center justify-center">
          {player.number}
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-semibold bg-team-primary px-3 py-1 rounded-full inline-block">
            {getPositionFullName(player.position)}
          </p>
          <h3 className="font-bebas text-2xl mt-2">{player.name}</h3>
        </div>
      </div>

      {showStats && (
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="stat-card">
              <span className="text-gray-500 text-sm">Голи</span>
              <span className="text-4xl font-bebas text-team-primary">{player.stats.goals}</span>
            </div>
            <div className="stat-card">
              <span className="text-gray-500 text-sm">Передачі</span>
              <span className="text-4xl font-bebas text-team-primary">{player.stats.assists}</span>
            </div>
            {player.position === 'GK' && (
              <>
                <div className="stat-card">
                  <span className="text-gray-500 text-sm">Сейви</span>
                  <span className="text-4xl font-bebas text-team-primary">{player.stats.saves}</span>
                </div>
                <div className="stat-card">
                  <span className="text-gray-500 text-sm">Сухі матчі</span>
                  <span className="text-4xl font-bebas text-team-primary">{player.stats.cleanSheets}</span>
                </div>
              </>
            )}
            <div className="stat-card">
              <span className="text-gray-500 text-sm">Фоли</span>
              <span className="text-4xl font-bebas text-team-primary">{player.stats.fouls}</span>
            </div>
            <div className="stat-card">
              <span className="text-gray-500 text-sm">Відвідуваність</span>
              <span className="text-4xl font-bebas text-team-primary">{getAttendanceRate()}%</span>
            </div>
          </div>
        </div>
      )}

      {player.social && (
        <div className="px-4 py-3 border-t border-gray-100 flex justify-center space-x-4">
          {player.social.facebook && (
            <a 
              href={player.social.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-team-primary transition-colors"
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
              className="text-gray-500 hover:text-team-primary transition-colors"
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
              className="text-gray-500 hover:text-team-primary transition-colors"
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
