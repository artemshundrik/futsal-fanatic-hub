
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar as CalendarIcon, Users, Newspaper, ChevronRight } from 'lucide-react';
import UpcomingMatch from '../components/UpcomingMatch';
import PlayerCard from '../components/PlayerCard';
import NewsCard from '../components/NewsCard';
import { teamName, teamSlogan, upcomingMatches, players, newsArticles } from '../data/sample-data';

const Index = () => {
  // Фільтруємо топ-гравців на основі голів + передач
  const topPlayers = [...players]
    .sort((a, b) => (b.stats.goals + b.stats.assists) - (a.stats.goals + a.stats.assists))
    .slice(0, 3);

  const recentNews = newsArticles.slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* Секція Героя в стилі Барселони */}
      <section className="hero-section">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/7ddcd836-4422-4254-8a68-5939ab823aea.png" 
            alt={teamName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-team-primary/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white text-left md:ml-10 lg:ml-20">
          <span className="inline-block py-2 px-4 bg-team-accent text-black text-sm font-bold uppercase tracking-wider mb-6 animate-scale-in">
            Футзальна команда
          </span>
          <h1 className="text-6xl md:text-8xl font-bebas mb-4 tracking-wider">
            {teamName}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl">
            {teamSlogan}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/team" className="btn-primary">
              <Users className="mr-2" size={20} />
              Команда
            </Link>
            <Link to="/calendar" className="btn-secondary">
              <CalendarIcon className="mr-2" size={20} />
              Розклад
            </Link>
          </div>
        </div>
      </section>

      {/* Секція Наступного Матчу */}
      <section className="py-10 bg-team-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0 text-team-primary">НАСТУПНИЙ МАТЧ</h2>
            <Link to="/calendar" className="flex items-center text-team-secondary hover:text-team-primary font-medium uppercase text-sm">
              Всі матчі <ChevronRight size={16} />
            </Link>
          </div>
          {upcomingMatches.length > 0 ? (
            <UpcomingMatch match={upcomingMatches[0]} className="max-w-4xl mx-auto" />
          ) : (
            <div className="text-center text-gray-500">Немає запланованих матчів</div>
          )}
        </div>
      </section>

      {/* Секція Топ-Гравців */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0 text-team-primary">КРАЩІ ГРАВЦІ</h2>
            <Link to="/players" className="flex items-center text-team-secondary hover:text-team-primary font-medium uppercase text-sm">
              Всі Гравці <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topPlayers.map(player => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </section>

      {/* Секція Останніх Новин у стилі Барселони */}
      <section className="py-10 bg-team-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0 text-team-primary">ОСТАННІ НОВИНИ</h2>
            <Link to="/news" className="flex items-center text-team-secondary hover:text-team-primary font-medium uppercase text-sm">
              Всі Новини <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Секція Приєднуйтесь із градієнтним фоном */}
      <section className="py-16 fc-barcelona-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/c744b744-a8d1-4f9c-a717-676e35620d9e.png" 
              alt={teamName} 
              className="h-16 mb-4" 
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bebas mb-6 tracking-wider uppercase">
            Приєднуйтесь до Команди
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Ми завжди шукаємо пристрасних гравців для нашої футзальної родини. Зв'яжіться з нами сьогодні!
          </p>
          <a 
            href="mailto:info@faynateam.com" 
            className="inline-block py-4 px-8 bg-team-accent text-black font-bold uppercase rounded-none hover:bg-opacity-90 transition-all duration-300"
          >
            Зв'язатися
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
