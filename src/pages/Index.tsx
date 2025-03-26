
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar as CalendarIcon, Users, Newspaper } from 'lucide-react';
import UpcomingMatch from '../components/UpcomingMatch';
import PlayerCard from '../components/PlayerCard';
import NewsCard from '../components/NewsCard';
import { teamName, teamSlogan, teamImage, upcomingMatches, players, newsArticles } from '../data/sample-data';

const Index = () => {
  // Filter top players based on goals + assists
  const topPlayers = [...players]
    .sort((a, b) => (b.stats.goals + b.stats.assists) - (a.stats.goals + a.stats.assists))
    .slice(0, 3);

  const recentNews = newsArticles.slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 z-0">
          <img 
            src={teamImage} 
            alt={teamName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-team-primary/80 to-team-primary/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <span className="inline-block py-2 px-4 bg-team-secondary text-white rounded-md text-sm font-medium uppercase tracking-wider mb-6 animate-scale-in">
            Welcome to our official website
          </span>
          <h1 className="text-6xl md:text-8xl font-bebas mb-4 tracking-wider">
            {teamName}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
            {teamSlogan}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/team" className="btn-primary">
              <Users className="mr-2" size={20} />
              Meet The Team
            </Link>
            <Link to="/calendar" className="btn-secondary">
              <CalendarIcon className="mr-2" size={20} />
              View Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Next Match Section */}
      <section className="py-16 bg-team-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-10">Next Match</h2>
          {upcomingMatches.length > 0 ? (
            <UpcomingMatch match={upcomingMatches[0]} className="max-w-4xl mx-auto" />
          ) : (
            <div className="text-center text-gray-500">No upcoming matches scheduled</div>
          )}
        </div>
      </section>

      {/* Top Players Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="section-title mb-0">Top Players</h2>
            <Link to="/players" className="btn-outline text-sm">
              View All Players
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topPlayers.map(player => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-team-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="section-title mb-0">Latest News</h2>
            <Link to="/news" className="btn-outline text-sm">
              View All News
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-team-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bebas mb-6 tracking-wider">
            Join Our Team
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            We're always looking for passionate players to join our futsal family. Get in touch with us today!
          </p>
          <a 
            href="mailto:info@dynamofutsal.com" 
            className="inline-block py-4 px-8 bg-white text-team-primary font-medium rounded-md hover:bg-opacity-90 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
