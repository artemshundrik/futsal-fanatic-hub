
import React from 'react';
import { players } from '../data/sample-data';
import PlayerCard from '../components/PlayerCard';

const Players = () => {
  return (
    <div className="page-container pt-28 pb-16">
      <h1 className="page-title text-center mb-12">Гравці Команди</h1>
      
      <div className="bg-gray-100 rounded-lg p-6 md:p-8">
        {/* Секція Універсали */}
        <h2 className="text-3xl font-bebas text-team-primary mb-8 tracking-wider">УНІВЕРСАЛИ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {players
            .filter(player => player.position === 'UN')
            .map(player => (
              <PlayerCard key={player.id} player={player} showStats={true} />
            ))}
        </div>
        
        {/* Секція Голкіпери */}
        <h2 className="text-3xl font-bebas text-team-primary mb-8 tracking-wider">ГОЛКІПЕРИ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players
            .filter(player => player.position === 'GK')
            .map(player => (
              <PlayerCard key={player.id} player={player} showStats={true} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Players;
