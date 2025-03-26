
import React, { useState } from 'react';
import { Calendar as CalendarIcon, MapPin, Trophy } from 'lucide-react';
import { format, parseISO, isSameDay } from 'date-fns';
import { 
  upcomingMatches, 
  pastMatches, 
  upcomingTraining, 
  Match, 
  TrainingSession 
} from '../data/sample-data';

type EventType = 'match' | 'training';

interface CalendarEvent {
  id: number;
  type: EventType;
  title: string;
  date: string;
  time: string;
  location: string;
  details?: string;
  isMatch?: boolean;
  isHome?: boolean;
  result?: {
    teamScore: number;
    opponentScore: number;
  };
  completed?: boolean;
}

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [view, setView] = useState<'list' | 'calendar'>('list');
  const [filter, setFilter] = useState<'all' | 'matches' | 'training'>('all');

  // Convert matches and training sessions to a unified format
  const formatMatches = (matches: Match[]): CalendarEvent[] => {
    return matches.map(match => ({
      id: match.id,
      type: 'match',
      title: `${match.isHome ? 'Dynamo Futsal vs ' + match.opponent : match.opponent + ' vs Dynamo Futsal'}`,
      date: match.date,
      time: match.time,
      location: match.location,
      details: match.competition,
      isMatch: true,
      isHome: match.isHome,
      result: match.result,
      completed: match.completed,
    }));
  };

  const formatTraining = (trainingSessions: TrainingSession[]): CalendarEvent[] => {
    return trainingSessions.map(session => ({
      id: session.id,
      type: 'training',
      title: 'Team Training',
      date: session.date,
      time: session.time,
      location: session.location,
      details: session.focus,
      isMatch: false,
    }));
  };

  // Combine all events
  const allEvents: CalendarEvent[] = [
    ...formatMatches(upcomingMatches),
    ...formatMatches(pastMatches),
    ...formatTraining(upcomingTraining),
  ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Filter events based on the selected filter
  const filteredEvents = allEvents.filter(event => {
    if (filter === 'all') return true;
    if (filter === 'matches' && event.type === 'match') return true;
    if (filter === 'training' && event.type === 'training') return true;
    return false;
  });

  // Filter events based on selected date
  const selectedDateEvents = selectedDate
    ? filteredEvents.filter(event => 
        isSameDay(parseISO(event.date), selectedDate)
      )
    : filteredEvents;

  // Group events by date for list view
  const groupEventsByDate = (events: CalendarEvent[]) => {
    const grouped: { [key: string]: CalendarEvent[] } = {};
    
    events.forEach(event => {
      const dateKey = event.date;
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(event);
    });
    
    // Sort dates
    return Object.keys(grouped)
      .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
      .map(date => ({ 
        date,
        events: grouped[date].sort((a, b) => 
          a.time.localeCompare(b.time)
        )
      }));
  };

  const groupedEvents = groupEventsByDate(selectedDateEvents);

  const EventCard = ({ event }: { event: CalendarEvent }) => {
    const eventDate = parseISO(event.date);
    
    return (
      <div 
        className={`
          p-4 rounded-lg shadow-sm mb-4 transition-all duration-300 
          ${event.type === 'match' 
            ? 'border-l-4 border-team-primary bg-white hover:shadow-md' 
            : 'border-l-4 border-team-secondary bg-white hover:shadow-md'
          }
        `}
      >
        <div className="flex items-start">
          <div className="bg-team-light rounded-lg p-2 mr-4 flex flex-col items-center justify-center">
            <span className="text-xs text-gray-500">{format(eventDate, 'MMM')}</span>
            <span className="text-xl font-bold text-team-primary">{format(eventDate, 'dd')}</span>
          </div>
          
          <div className="flex-grow">
            <h3 className="font-bebas text-xl text-team-primary mb-1">{event.title}</h3>
            
            <div className="flex flex-wrap text-sm text-gray-600 mb-2">
              <div className="flex items-center mr-4 mb-1">
                <Calendar className="w-4 h-4 mr-1 text-team-secondary" />
                <span>{format(eventDate, 'EEEE, MMMM d, yyyy')}</span>
              </div>
              
              <div className="flex items-center mr-4 mb-1">
                <CalendarIcon className="w-4 h-4 mr-1 text-team-secondary" />
                <span>{event.time}</span>
              </div>
              
              <div className="flex items-center mb-1">
                <MapPin className="w-4 h-4 mr-1 text-team-secondary" />
                <span>{event.location}</span>
              </div>
            </div>
            
            {event.details && (
              <div className="flex items-center text-sm mb-2">
                <Trophy className="w-4 h-4 mr-1 text-team-secondary" />
                <span>{event.details}</span>
              </div>
            )}
            
            {event.type === 'match' && event.completed && event.result && (
              <div className="mt-2 bg-team-light p-2 rounded-md inline-block">
                <span className="font-semibold">
                  Result: {event.isHome 
                    ? `Dynamo Futsal ${event.result.teamScore} - ${event.result.opponentScore} ${event.title.split(' vs ')[1]}`
                    : `${event.title.split(' vs ')[0]} ${event.result.opponentScore} - ${event.result.teamScore} Dynamo Futsal`
                  }
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="page-container pt-28">
      <h1 className="page-title text-center">
        Matches & Training Calendar
      </h1>
      
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex space-x-2 mb-4 sm:mb-0">
          <button 
            className={`px-4 py-2 rounded-md transition-all ${filter === 'all' ? 'bg-team-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            onClick={() => setFilter('all')}
          >
            All Events
          </button>
          <button 
            className={`px-4 py-2 rounded-md transition-all ${filter === 'matches' ? 'bg-team-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            onClick={() => setFilter('matches')}
          >
            Matches
          </button>
          <button 
            className={`px-4 py-2 rounded-md transition-all ${filter === 'training' ? 'bg-team-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            onClick={() => setFilter('training')}
          >
            Training
          </button>
        </div>
        
        <div className="flex space-x-2">
          <button 
            className={`px-4 py-2 rounded-md transition-all ${view === 'list' ? 'bg-team-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            onClick={() => setView('list')}
          >
            List View
          </button>
          <button 
            className={`px-4 py-2 rounded-md transition-all ${view === 'calendar' ? 'bg-team-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            onClick={() => setView('calendar')}
          >
            Calendar View
          </button>
        </div>
      </div>
      
      {view === 'list' ? (
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          {groupedEvents.length > 0 ? (
            groupedEvents.map(group => (
              <div key={group.date} className="mb-6">
                <h3 className="font-bebas text-2xl text-team-primary mb-4">
                  {format(parseISO(group.date), 'EEEE, MMMM d, yyyy')}
                </h3>
                
                {group.events.map(event => (
                  <EventCard key={`${event.type}-${event.id}`} event={event} />
                ))}
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <CalendarIcon className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-500 mb-2">No events found</h3>
              <p className="text-gray-400">
                Try changing your filters or select another date
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <p className="text-center text-gray-500 py-6">
            Calendar view coming soon...
          </p>
        </div>
      )}
      
      <div className="bg-team-primary text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bebas mb-4">Need the full schedule?</h2>
        <p className="mb-6">Download our full season calendar to your device</p>
        <button className="bg-white text-team-primary hover:bg-opacity-90 py-3 px-6 rounded-md font-medium transition-all duration-300">
          Download Calendar (iCal)
        </button>
      </div>
    </div>
  );
};

export default Calendar;
