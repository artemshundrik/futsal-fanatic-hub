
import React from 'react';
import { players } from '../data';
import PlayerCard from '../components/PlayerCard';

const Players = () => {
  return (
    <div className="bg-black min-h-screen pt-28 pb-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-white text-center text-5xl md:text-6xl font-bebas mb-16 tracking-wider">Гравці Команди</h1>
        
        {/* Голкіпери section - now displayed first */}
        <div className="mb-20">
          <h2 className="text-team-accent text-3xl md:text-4xl font-bebas mb-10 tracking-wider">ГОЛКІПЕРИ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
            {players
              .filter(player => player.position === 'GK')
              .map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
          </div>
        </div>
        
        {/* Універсали section - now displayed second */}
        <div>
          <h2 className="text-team-accent text-3xl md:text-4xl font-bebas mb-10 tracking-wider">УНІВЕРСАЛИ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
            {players
              .filter(player => player.position === 'UN')
              .map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
