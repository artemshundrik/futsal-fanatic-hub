
import React, { useState } from 'react';
import { players } from '../data/sample-data';
import PlayerCard from '../components/PlayerCard';
import { teamName } from '../data/sample-data';

const Team = () => {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  const positions = [
    { code: 'GK', name: 'Воротарі' },
    { code: 'DF', name: 'Захисники' },
    { code: 'MF', name: 'Півзахисники' },
    { code: 'FW', name: 'Нападники' }
  ];

  const filteredPlayers = selectedPosition
    ? players.filter(player => player.position === selectedPosition)
    : players;

  const positionGroups = positions.map(position => ({
    position: position,
    players: players.filter(player => player.position === position.code)
  }));

  return (
    <div className="animate-fade-in">
      {/* Банер команди */}
      <section className="relative h-80 overflow-hidden">
        <img 
          src="/lovable-uploads/7ddcd836-4422-4254-8a68-5939ab823aea.png" 
          alt={teamName} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-team-primary/80 to-team-accent/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl md:text-7xl text-white font-bebas tracking-wider">
            Склад Команди
          </h1>
        </div>
      </section>
      
      <div className="page-container">
        {/* Фільтри по позиціям */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            className={`px-6 py-3 rounded-md font-bebas text-xl tracking-wide transition-all ${
              selectedPosition === null 
                ? 'bg-team-primary text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
            onClick={() => setSelectedPosition(null)}
          >
            Всі Гравці
          </button>
          
          {positions.map(pos => (
            <button
              key={pos.code}
              className={`px-6 py-3 rounded-md font-bebas text-xl tracking-wide transition-all ${
                selectedPosition === pos.code 
                  ? 'bg-team-accent text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
              onClick={() => setSelectedPosition(pos.code)}
            >
              {pos.name}
            </button>
          ))}
        </div>
        
        {selectedPosition === null ? (
          /* Показ згрупований за позиціями */
          <div className="space-y-16">
            {positionGroups.map(group => (
              <div key={group.position.code}>
                <h2 className="section-title mb-8">
                  {group.position.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.players.map(player => (
                    <PlayerCard key={player.id} player={player} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Показ відфільтрованих гравців */
          <div>
            <h2 className="section-title mb-8">
              {positions.find(p => p.code === selectedPosition)?.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlayers.map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </div>
        )}
        
        {/* Статистика команди */}
        <section className="mt-16 bg-team-light rounded-lg p-8">
          <h2 className="section-title mb-8 text-center">Статистика Команди</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="stat-card">
              <span className="text-gray-500 text-sm">Всього Гравців</span>
              <span className="text-4xl font-bebas text-team-accent">{players.length}</span>
            </div>
            <div className="stat-card">
              <span className="text-gray-500 text-sm">Всього Голів</span>
              <span className="text-4xl font-bebas text-team-accent">
                {players.reduce((total, player) => total + player.stats.goals, 0)}
              </span>
            </div>
            <div className="stat-card">
              <span className="text-gray-500 text-sm">Всього Передач</span>
              <span className="text-4xl font-bebas text-team-accent">
                {players.reduce((total, player) => total + player.stats.assists, 0)}
              </span>
            </div>
            <div className="stat-card">
              <span className="text-gray-500 text-sm">Сер. Відвідуваність</span>
              <span className="text-4xl font-bebas text-team-accent">
                {Math.round(players.reduce((total, player) => 
                  total + (player.stats.matchesPlayed / player.stats.totalMatches * 100), 0) / players.length)}%
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
