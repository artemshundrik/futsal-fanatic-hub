
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Match } from '../data';
import { format, parseISO } from 'date-fns';

interface UpcomingMatchProps {
  match: Match;
  className?: string;
}

const UpcomingMatch: React.FC<UpcomingMatchProps> = ({ match, className = '' }) => {
  const matchDate = parseISO(match.date);
  const formattedDate = format(matchDate, 'EEEE, MMMM d, yyyy');

  return (
    <div className={`glassmorphism rounded-lg p-6 ${className}`}>
      <div className="bg-team-primary text-white text-center py-2 px-4 rounded-md inline-block mb-4">
        <span className="font-bebas tracking-wider">NEXT MATCH</span>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-6">
        <div className="flex flex-col items-center mb-4 sm:mb-0">
          <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
            <span className="text-2xl font-bold text-team-primary">DF</span>
          </div>
          <span className="font-bebas text-xl mt-1">Dynamo Futsal</span>
        </div>
        
        <div className="flex flex-col items-center text-center my-4">
          <span className="font-bebas text-5xl text-team-primary">VS</span>
          <span className="text-sm text-gray-500">{match.competition}</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
            <span className="text-2xl font-bold text-gray-800">
              {match.opponent.split(' ').map(word => word[0]).join('')}
            </span>
          </div>
          <span className="font-bebas text-xl mt-1">{match.opponent}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center justify-center sm:justify-start">
          <Calendar className="mr-2 text-team-secondary" size={20} />
          <span>{formattedDate}</span>
        </div>
        
        <div className="flex items-center justify-center">
          <Clock className="mr-2 text-team-secondary" size={20} />
          <span>{match.time}</span>
        </div>
        
        <div className="flex items-center justify-center sm:justify-end">
          <MapPin className="mr-2 text-team-secondary" size={20} />
          <span>{match.location}</span>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <button className="btn-primary">
          Add to Calendar
        </button>
      </div>
    </div>
  );
};

export default UpcomingMatch;
