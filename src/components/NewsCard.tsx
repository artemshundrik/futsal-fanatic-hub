
import React from 'react';
import { NewsArticle } from '../data';
import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  article: NewsArticle;
  className?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, className = '' }) => {
  const publishDate = parseISO(article.date);
  const formattedDate = format(publishDate, 'MMMM d, yyyy');

  const getCategoryBadgeColor = (category: string) => {
    switch(category) {
      case 'match-report': return 'bg-team-primary';
      case 'announcement': return 'bg-team-secondary';
      case 'news': return 'bg-team-accent';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryName = (category: string) => {
    switch(category) {
      case 'match-report': return 'Match Report';
      case 'announcement': return 'Announcement';
      case 'news': return 'News';
      default: return category;
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden card-hover ${className}`}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-semibold text-white px-3 py-1 rounded-full inline-block ${getCategoryBadgeColor(article.category)}`}>
            {getCategoryName(article.category)}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
          <span>{article.author}</span>
          <span>{formattedDate}</span>
        </div>
        
        <h3 className="font-bebas text-2xl text-team-primary mb-2">{article.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
        
        <Link to={`/news/${article.id}`} className="btn-outline text-sm py-2 px-4">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
