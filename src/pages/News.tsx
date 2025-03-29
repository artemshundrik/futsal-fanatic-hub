
import React, { useState } from 'react';
import { newsArticles, NewsArticle } from '../data';
import NewsCard from '../components/NewsCard';
import { Search } from 'lucide-react';

type Category = 'all' | 'match-report' | 'announcement' | 'news';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All News' },
    { value: 'match-report', label: 'Match Reports' },
    { value: 'announcement', label: 'Announcements' },
    { value: 'news', label: 'Club News' },
  ];

  const filteredArticles = newsArticles.filter(article => {
    // Filter by category
    if (selectedCategory !== 'all' && article.category !== selectedCategory) {
      return false;
    }
    
    // Filter by search term
    if (
      searchTerm && 
      !article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !article.content.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    
    return true;
  });

  // Sort articles by date (newest first)
  const sortedArticles = [...filteredArticles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const getCategoryButtonClass = (category: Category) => {
    if (selectedCategory === category) {
      return 'bg-team-primary text-white';
    }
    return 'bg-gray-100 hover:bg-gray-200 text-gray-800';
  };

  return (
    <div className="page-container pt-28">
      <h1 className="page-title text-center">News & Updates</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.value}
                className={`px-4 py-2 rounded-md transition-all ${getCategoryButtonClass(category.value)}`}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Search bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search news articles..."
            className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-team-primary focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        
        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedArticles.length > 0 ? (
            sortedArticles.map(article => (
              <NewsCard key={article.id} article={article} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <h3 className="text-xl font-semibold text-gray-500 mb-2">No articles found</h3>
              <p className="text-gray-400">
                Try changing your filters or search term
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Newsletter signup */}
      <div className="bg-team-primary text-white p-8 rounded-lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bebas mb-4">Stay Updated</h2>
          <p className="mb-6">Subscribe to our newsletter for the latest news and updates</p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none"
            />
            <button className="bg-team-secondary text-white hover:bg-opacity-90 py-3 px-6 rounded-md font-medium transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
