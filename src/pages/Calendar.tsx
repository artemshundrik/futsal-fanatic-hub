import React, { useState } from 'react';
import { format, isSameMonth, isSameDay, parseISO, addMonths, subMonths } from 'date-fns';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { upcomingMatches, pastMatches, upcomingTraining } from '../data/sample-data';

type CalendarEvent = {
  id: number;
  type: 'match' | 'training';
  date: string;
  time: string;
  location: string;
  opponent?: string;
  isHome?: boolean;
  competition?: string;
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [filter, setFilter] = useState('all');

  const handleDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  const goToPreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handleFilterChange = (value: string) => {
    setFilter(value);
    setSelectedDate(null);
  };

  const allEvents: CalendarEvent[] = [
    ...upcomingMatches.map(match => ({
      id: match.id,
      type: 'match',
      date: match.date,
      time: match.time,
      location: match.location,
      opponent: match.opponent,
      isHome: match.isHome,
      competition: match.competition,
    })),
    ...upcomingTraining.map(training => ({
      id: training.id,
      type: 'training',
      date: training.date,
      time: training.time,
      location: training.location,
    })),
  ];

  const filteredEvents = filter === 'all'
    ? allEvents
    : allEvents.filter(event => event.type === filter);

  const daysInMonth = [];
  const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  // Populate daysInMonth array
  for (let i = 1; i <= endDate.getDate(); i++) {
    daysInMonth.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
  }

  const dayEvents = selectedDate
    ? filteredEvents.filter(event => isSameDay(parseISO(event.date), selectedDate))
    : [];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-bebas text-team-primary mb-2">Team Calendar</h1>
      <p className="text-gray-600 mb-8">View our upcoming matches and training sessions</p>
      
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Button variant="outline" size="icon" onClick={goToPreviousMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h2 className="mx-4 text-xl font-semibold">
            {format(currentDate, 'MMMM yyyy')}
          </h2>
          <Button variant="outline" size="icon" onClick={goToNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <Select value={filter} onValueChange={handleFilterChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Events</SelectItem>
            <SelectItem value="match">Matches</SelectItem>
            <SelectItem value="training">Training Sessions</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        <div className="lg:col-span-2">
          <Card>
            <div className="p-6">
              <h2 className="text-2xl font-bebas text-team-primary mb-4">
                {format(currentDate, 'MMMM yyyy')}
              </h2>
              
              <div className="grid grid-cols-7 gap-1">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName) => (
                  <div key={dayName} className="text-center text-gray-500 py-1">
                    {dayName}
                  </div>
                ))}
                
                {daysInMonth.map((day, index) => {
                  const isCurrentMonth = isSameMonth(day, currentDate);
                  const isSelected = selectedDate && isSameDay(day, selectedDate);

                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      className={`
                        h-9 w-full p-0 font-normal text-sm
                        ${!isCurrentMonth ? 'text-gray-400' : ''}
                        ${isSelected ? 'bg-team-secondary/50 text-team-primary' : ''}
                      `}
                      onClick={() => handleDateClick(day)}
                    >
                      {format(day, 'd')}
                    </Button>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>
        
        <div>
          <Card>
            <div className="p-6">
              <h2 className="text-2xl font-bebas text-team-primary mb-4">
                {selectedDate ? format(selectedDate, 'd MMMM yyyy') : 'Select a date'}
              </h2>
              
              {!dayEvents.length && (
                <p className="text-gray-500">No events scheduled for this day</p>
              )}
              
              {dayEvents.map((event) => (
                <div 
                  key={event.id} 
                  className={`p-4 rounded-md mb-3 ${
                    event.type === 'match' 
                      ? event.isHome 
                        ? 'bg-team-primary/10 border-l-4 border-team-primary' 
                        : 'bg-team-accent/10 border-l-4 border-team-accent'
                      : 'bg-team-secondary/10 border-l-4 border-team-secondary'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      event.type === 'match' 
                        ? event.isHome 
                          ? 'bg-team-primary text-white' 
                          : 'bg-team-accent text-white'
                        : 'bg-team-secondary text-white'
                    }`}>
                      {event.type === 'match' 
                        ? event.isHome ? 'Home Match' : 'Away Match' 
                        : 'Training'}
                    </span>
                    <span className="text-gray-600">{event.time}</span>
                  </div>
                  
                  <h3 className="font-semibold mb-1">
                    {event.type === 'match' 
                      ? `${event.isHome ? 'FAYNA TEAM vs ' : ''} ${event.opponent} ${!event.isHome ? ' vs FAYNA TEAM' : ''}`
                      : 'Team Training'}
                  </h3>
                  
                  <p className="text-gray-600 text-sm">
                    {event.location}
                    {event.type === 'match' && event.competition && (
                      <span className="ml-2 text-xs bg-gray-200 px-2 py-1 rounded">
                        {event.competition}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
