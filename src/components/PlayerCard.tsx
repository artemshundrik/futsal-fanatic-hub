
import React from 'react';
import { Player } from '../data/types';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { 
  HoverCard,
  HoverCardTrigger,
  HoverCardContent 
} from '@/components/ui/hover-card';
import { useIsMobile } from '@/hooks/use-mobile';

interface PlayerCardProps {
  player: Player;
  className?: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ 
  player,
  className = '' 
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative group">
      <HoverCard openDelay={isMobile ? 0 : 100} closeDelay={isMobile ? 0 : 200}>
        <HoverCardTrigger asChild>
          <div 
            className={`relative overflow-hidden rounded-lg ${className} cursor-pointer w-full h-[320px] group-hover:ring-2 group-hover:ring-team-accent transition-all`}
          >
            {/* Player number in top-left corner */}
            <div className="absolute top-2 left-2 z-10">
              <div className="text-white text-6xl font-bold drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                {player.number}
              </div>
            </div>

            {/* Player Image */}
            <div className="w-full h-[320px] flex items-center justify-center overflow-hidden bg-black">
              <img 
                src={player.image} 
                alt={player.name} 
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
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
          </div>
        </HoverCardTrigger>
        
        <HoverCardContent 
          className="w-full h-[320px] rounded-lg overflow-hidden p-0 border-0"
        >
          <div className="absolute inset-0 bg-black/85 flex flex-col p-5 h-full text-white rounded-lg border border-team-accent animate-scale-in">
            <div className="mb-4">
              <h3 className="text-2xl font-bebas tracking-wider text-team-accent mb-1">{player.name}</h3>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-300">
                  {player.position === 'GK' ? 'Голкіпер' : 'Універсал'}
                </p>
                <span className="text-3xl font-bold text-team-accent">#{player.number}</span>
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="border-t border-gray-700 my-2 pt-2">
                <h4 className="text-xl font-bebas mb-3 text-team-accent tracking-wider">СТАТИСТИКА</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Матчі:</span>
                    <span className="font-semibold">{player.stats.matchesPlayed}/{player.stats.totalMatches}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Голи:</span>
                    <span className="font-semibold">{player.stats.goals}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Передачі:</span>
                    <span className="font-semibold">{player.stats.assists}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Фоли:</span>
                    <span className="font-semibold">{player.stats.fouls}</span>
                  </div>
                  
                  {player.position === 'GK' && player.stats.saves !== undefined && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Сейви:</span>
                      <span className="font-semibold">{player.stats.saves}</span>
                    </div>
                  )}
                  {player.position === 'GK' && player.stats.cleanSheets !== undefined && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Сухі матчі:</span>
                      <span className="font-semibold">{player.stats.cleanSheets}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {player.social && Object.values(player.social).some(link => link) && (
              <div className="flex justify-end space-x-4 mt-3">
                {player.social.facebook && (
                  <a 
                    href={player.social.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-team-accent transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                )}
                {player.social.instagram && (
                  <a 
                    href={player.social.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-team-accent transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                )}
                {player.social.twitter && (
                  <a 
                    href={player.social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-team-accent transition-colors"
                  >
                    <Twitter size={24} />
                  </a>
                )}
              </div>
            )}
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default PlayerCard;
