import React from 'react';
import { Player } from '../data/types';
import { Facebook, Instagram, Twitter, CalendarCheck } from 'lucide-react';

interface PlayerCardProps {
  player: Player;
  className?: string;
  isTopScorer?: boolean;
  isTopAssistant?: boolean;
  isTopGoalkeeper?: boolean;
  isTopFouls?: boolean;
  isMostMatches?: boolean;
  isTopMVP?: boolean;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ 
  player,
  className = '',
  isTopScorer,
  isTopAssistant,
  isTopGoalkeeper,
  isTopFouls,
  isMostMatches,
  isTopMVP,
}) => {

  return (
    <div className={`relative overflow-hidden rounded-lg ${className} cursor-pointer group animate-fade-in-up`}>
      {/* Player number in top-left corner */}
      <div className="absolute top-2 left-2 z-20">
        <div className="text-white text-5xl font-bold drop-shadow-xl pointer-events-none" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          {player.number}
        </div>
      </div>

      {/* Player Image */}
      <div className="w-full h-[320px] flex items-center justify-center overflow-hidden bg-black">
        <img 
          src={player.image} 
          alt={player.name} 
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Player Name at bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 z-20">
        <div className="text-center">
          <div className="text-white text-2xl font-bebas font-bold uppercase tracking-wide">
            {player.name.split(' ')[0]}
          </div>
          <div className="text-white text-2xl font-bebas font-bold uppercase tracking-wide">
            {player.name.split(' ')[1] || ''}
          </div>
        </div>
      </div>

      {/* Overlay with stats */}
      <div className="absolute inset-0 bg-black/90 text-white p-4 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 z-30 flex flex-col justify-between pointer-events-none transition-all duration-500 ease-in-out">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bebas tracking-wider text-team-accent">
                {player.name}
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium uppercase ${
                    player.position === 'GK' ? 'bg-green-700 text-white' : 'bg-blue-700 text-white'
                  }`}
                >
                  {player.position === 'GK' ? 'Голкіпер' : 'Універсал'}
                </span>
                {(() => {
                  const birthDate = new Date(player.birthYear, player.birthMonth - 1, player.birthDay);
                  const today = new Date();
                  let age = today.getFullYear() - birthDate.getFullYear();
                  const m = today.getMonth() - birthDate.getMonth();
                  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                  }
                  return (
                    <span className="text-sm text-gray-300">
                      {age} років ({player.birthDay}.{player.birthMonth}.{player.birthYear})
                    </span>
                  );
                })()}
              </div>
              {player.bio && (
                <p className="text-sm text-gray-400 mt-2 italic">{player.bio}</p>
              )}
            </div>
          </div>

          <div className="border-t border-gray-700 my-4 pt-4">
            <div className="flex flex-col gap-2 text-sm">
              <div>
                <div className="flex justify-start items-center gap-3 pr-2 mb-1">
                  <span className="text-gray-400">📅 Матчі:</span>
                  <span className="font-semibold">{player.stats.matchesPlayed}/{player.stats.totalMatches}</span>
                </div>
              </div>
              {player.position !== 'GK' && (
                <>
                  <div className="flex justify-start items-center gap-3 pr-2">
                    <span className="text-gray-400">⚽ Голи:</span>
                    <span className="font-semibold">{player.stats.goals}</span>
                  </div>
                  <div className="flex justify-start items-center gap-3 pr-2">
                    <span className="text-gray-400">🎯 Передачі:</span>
                    <span className="font-semibold">{player.stats.assists}</span>
                  </div>
                  <div className="flex justify-start items-center gap-3 pr-2">
                    <span className="text-gray-400">🟨 Картки:</span>
                    <span className="font-semibold">{player.stats.yellowCards ?? 0}</span>
                  </div>
                  <div className="flex justify-start items-center gap-3 pr-2">
                    <span className="text-gray-400">🟥 Картки:</span>
                    <span className="font-semibold">{player.stats.redCards ?? 0}</span>
                  </div>
                  <div className="flex justify-start items-center gap-3 pr-2">
                    <span className="text-gray-400">🍺 MVP матчів:</span>
                    <span className="font-semibold">{player.stats.mvpCount ?? 0}</span>
                  </div>
                </>
              )}
              {player.position === 'GK' && (
                <>
                  <div className="flex justify-start items-center gap-3 pr-2">
                    <span className="text-gray-400">⚽ Голи:</span>
                    <span className="font-semibold">{player.stats.goals}</span>
                  </div>
                  <div className="flex justify-start items-center gap-3 pr-2">
                    <span className="text-gray-400">🎯 Передачі:</span>
                    <span className="font-semibold">{player.stats.assists}</span>
                  </div>
                  <div className="flex justify-start items-center gap-3 pr-2">
                    <span className="text-gray-400">🧱 Сухі матчі:</span>
                    <span className="font-semibold">{player.stats.cleanSheets}</span>
                  </div>
                  <div className="flex justify-start items-center gap-3 pr-2">
                    <span className="text-gray-400">🟨 Картки:</span>
                    <span className="font-semibold">{player.stats.yellowCards ?? 0}</span>
                  </div>
                  <div className="flex justify-start items-center gap-3 pr-2">
                    <span className="text-gray-400">🟥 Картки:</span>
                    <span className="font-semibold">{player.stats.redCards ?? 0}</span>
                  </div>
                  <div className="flex justify-start items-center gap-3 pr-2">
                    <span className="text-gray-400">🍺 MVP матчів:</span>
                    <span className="font-semibold">{player.stats.mvpCount ?? 0}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Player role in top-right corner */}
      <div className="absolute top-2 right-2 z-30 flex flex-col items-end space-y-1">
        {player.isCaptain && (
          <div
            className="text-white transition-transform duration-300 hover:scale-110 hover:brightness-110 animate-pulse-icon"
            title="Капітан"
          >
            <span className="text-4xl">🧢</span>
          </div>
        )}
        {isTopScorer && (
          <div
            className="text-white p-1.5 rounded-full shadow-md transition-transform duration-300 hover:scale-110 hover:brightness-110 animate-pulse-icon"
            title="Найкращий бомбардир"
          >
            <span className="text-4xl">⚽</span>
          </div>
        )}
        {isTopAssistant && (
          <div
            className="text-white p-1.5 rounded-full shadow-md transition-transform duration-300 hover:scale-110 hover:brightness-110 animate-pulse-icon"
            title="Найкращий асистент"
          >
            <span className="text-4xl">🎯</span>
          </div>
        )}
        {isTopGoalkeeper && (
          <div
            className="text-white p-1.5 rounded-full shadow-md transition-transform duration-300 hover:scale-110 hover:brightness-110 animate-pulse-icon"
            title="Найкращий воротар"
          >
            <span className="text-4xl">🧤</span>
          </div>
        )}
        {isTopFouls && ((player.stats.yellowCards ?? 0) + 3 * (player.stats.redCards ?? 0)) > 0 && (
          <div
            className="text-white transition-transform duration-300 hover:scale-110 hover:brightness-110 animate-pulse-icon"
            title="Хуліган команди"
          >
            <span className="text-4xl">🔥</span>
          </div>
        )}
        {isMostMatches && (
          <div
            className="text-white transition-transform duration-300 hover:scale-110 hover:brightness-110 animate-pulse-icon"
            title="Залізний гравець"
          >
            <span className="text-4xl">🏅</span>
          </div>
        )}
        {/* MVP Icon */}
        {isTopMVP && (
            <div
              className="text-white transition-transform duration-300 hover:scale-110 hover:brightness-110 animate-pulse-icon"
              title="Король матчу 🍺"
            >
              <span className="text-4xl">🍺</span>
            </div>
          )}
      </div>

      {player.social && (
        <div className="flex justify-end space-x-4 mt-3">
          {player.social.twitter && (
            <a 
              href={player.social.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Twitter ${player.name}`}
              className="text-gray-400 hover:text-team-accent transition-colors"
            >
              <Twitter size={24} />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default PlayerCard;
