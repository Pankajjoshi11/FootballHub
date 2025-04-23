import React from 'react';
import { news } from '../../data/index'; // Adjust path based on your project structure
import NewsCard from './NewsCard';

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Premier League News</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}