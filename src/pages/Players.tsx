
import React from 'react';
import { players } from '../data/sample-data';
import PlayerCard from '../components/PlayerCard';

const Players = () => {
  return (
    <div className="page-container pt-28 pb-16 bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <h1 className="page-title text-center mb-12 text-white">Гравці Команди</h1>
      
      <div className="container mx-auto px-4">
        {/* Секція Універсали */}
        <div className="mb-16">
          <h2 className="text-3xl font-bebas text-team-accent mb-8 tracking-wider border-l-4 border-team-accent pl-4">УНІВЕРСАЛИ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {players
              .filter(player => player.position === 'UN')
              .map(player => (
                <PlayerCard key={player.id} player={player} showStats={true} />
              ))}
          </div>
        </div>
        
        {/* Секція Голкіпери */}
        <div>
          <h2 className="text-3xl font-bebas text-team-accent mb-8 tracking-wider border-l-4 border-team-accent pl-4">ГОЛКІПЕРИ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {players
              .filter(player => player.position === 'GK')
              .map(player => (
                <PlayerCard key={player.id} player={player} showStats={true} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
