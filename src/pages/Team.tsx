
import React, { useState } from 'react';
import { players } from '../data/sample-data';
import PlayerCard from '../components/PlayerCard';
import { teamName, teamImage } from '../data/sample-data';

const Team = () => {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  const positions = [
    { code: 'GK', name: 'Goalkeepers' },
    { code: 'DF', name: 'Defenders' },
    { code: 'MF', name: 'Midfielders' },
    { code: 'FW', name: 'Forwards' }
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
      {/* Team Banner */}
      <section className="relative h-80 overflow-hidden">
        <img 
          src={teamImage} 
          alt={teamName} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-team-primary/80 to-team-primary/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl md:text-7xl text-white font-bebas tracking-wider">
            Team Roster
          </h1>
        </div>
      </section>
      
      <div className="page-container">
        {/* Position filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            className={`px-6 py-3 rounded-md font-bebas text-xl tracking-wide transition-all ${
              selectedPosition === null 
                ? 'bg-team-primary text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
            onClick={() => setSelectedPosition(null)}
          >
            All Players
          </button>
          
          {positions.map(pos => (
            <button
              key={pos.code}
              className={`px-6 py-3 rounded-md font-bebas text-xl tracking-wide transition-all ${
                selectedPosition === pos.code 
                  ? 'bg-team-primary text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
              onClick={() => setSelectedPosition(pos.code)}
            >
              {pos.name}
            </button>
          ))}
        </div>
        
        {selectedPosition === null ? (
          /* Show grouped by position */
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
          /* Show filtered players */
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
        
        {/* Team Stats */}
        <section className="mt-16 bg-team-light rounded-lg p-8">
          <h2 className="section-title mb-8 text-center">Team Statistics</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="stat-card">
              <span className="text-gray-500 text-sm">Total Players</span>
              <span className="text-4xl font-bebas text-team-primary">{players.length}</span>
            </div>
            <div className="stat-card">
              <span className="text-gray-500 text-sm">Total Goals</span>
              <span className="text-4xl font-bebas text-team-primary">
                {players.reduce((total, player) => total + player.stats.goals, 0)}
              </span>
            </div>
            <div className="stat-card">
              <span className="text-gray-500 text-sm">Total Assists</span>
              <span className="text-4xl font-bebas text-team-primary">
                {players.reduce((total, player) => total + player.stats.assists, 0)}
              </span>
            </div>
            <div className="stat-card">
              <span className="text-gray-500 text-sm">Avg. Attendance</span>
              <span className="text-4xl font-bebas text-team-primary">
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
