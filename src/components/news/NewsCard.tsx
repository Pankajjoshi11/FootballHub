import React from 'react';
import { NewsArticle } from '../../types';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../common/Card';
import { Calendar, ExternalLink } from 'lucide-react';

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-200">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg';
          }}
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {article.content}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center">
          <Calendar className="h-3 w-3 mr-1" />
          <span>{formatDate(article.publishedAt)}</span>
        </div>
        <div className="flex items-center">
          <span className="mr-1">Source: {article.source}</span>
          {article.url && (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}