
import React from 'react';
import { players } from '../data/players-data';
import PlayerCard from '../components/PlayerCard';

const Team = () => {
  return (
    <div className="bg-black min-h-screen pt-28 pb-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-white text-center text-5xl md:text-6xl font-bebas mb-16 tracking-wider">Наша Команда</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {players.map(player => (
            <PlayerCard
              key={player.id}
              player={player}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
