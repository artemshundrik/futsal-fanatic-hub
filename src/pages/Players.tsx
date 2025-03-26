
import React, { useState } from 'react';
import { players, Player } from '../data/sample-data';
import PlayerCard from '../components/PlayerCard';
import { Search } from 'lucide-react';

type Position = 'All' | 'GK' | 'DF' | 'MF' | 'FW';
type SortOption = 'name' | 'goals' | 'assists' | 'attendance';

const Players = () => {
  const [selectedPosition, setSelectedPosition] = useState<Position>('All');
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [searchTerm, setSearchTerm] = useState('');

  const positionFilters: Position[] = ['All', 'GK', 'DF', 'MF', 'FW'];

  const filteredPlayers = players.filter(player => {
    // Filter by position
    if (selectedPosition !== 'All' && player.position !== selectedPosition) {
      return false;
    }
    
    // Filter by search term
    if (searchTerm && !player.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const sortedPlayers = [...filteredPlayers].sort((a, b) => {
    switch(sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'goals':
        return b.stats.goals - a.stats.goals;
      case 'assists':
        return b.stats.assists - a.stats.assists;
      case 'attendance':
        const aAttendance = a.stats.matchesPlayed / a.stats.totalMatches;
        const bAttendance = b.stats.matchesPlayed / b.stats.totalMatches;
        return bAttendance - aAttendance;
      default:
        return 0;
    }
  });

  const getPositionColor = (pos: Position) => {
    if (selectedPosition === pos) {
      return 'bg-team-primary text-white';
    }
    return 'bg-gray-100 hover:bg-gray-200 text-gray-800';
  };

  const getSortButtonClass = (option: SortOption) => {
    if (sortBy === option) {
      return 'bg-team-secondary text-white';
    }
    return 'bg-gray-100 hover:bg-gray-200 text-gray-800';
  };

  return (
    <div className="page-container pt-28">
      <h1 className="page-title text-center">Player Statistics</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
          {/* Position filters */}
          <div className="flex flex-wrap gap-2">
            {positionFilters.map(position => (
              <button
                key={position}
                className={`px-4 py-2 rounded-md transition-all ${getPositionColor(position)}`}
                onClick={() => setSelectedPosition(position)}
              >
                {position === 'All' ? 'All Positions' : position}
              </button>
            ))}
          </div>
          
          {/* Sort options */}
          <div className="flex flex-wrap gap-2">
            <span className="text-gray-500 self-center mr-2">Sort by:</span>
            <button
              className={`px-4 py-2 rounded-md transition-all ${getSortButtonClass('name')}`}
              onClick={() => setSortBy('name')}
            >
              Name
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all ${getSortButtonClass('goals')}`}
              onClick={() => setSortBy('goals')}
            >
              Goals
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all ${getSortButtonClass('assists')}`}
              onClick={() => setSortBy('assists')}
            >
              Assists
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all ${getSortButtonClass('attendance')}`}
              onClick={() => setSortBy('attendance')}
            >
              Attendance
            </button>
          </div>
        </div>
        
        {/* Search bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search players..."
            className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-team-primary focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        
        {/* Players grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPlayers.length > 0 ? (
            sortedPlayers.map(player => (
              <PlayerCard key={player.id} player={player} showStats={true} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <h3 className="text-xl font-semibold text-gray-500 mb-2">No players found</h3>
              <p className="text-gray-400">
                Try changing your filters or search term
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Players;
