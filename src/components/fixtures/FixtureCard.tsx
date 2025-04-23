import React from 'react';
import { fixtures } from '../../data/index'; // Adjust path based on your project structure
import { Card, CardContent } from '../common/Card';
import { Calendar, MapPin } from 'lucide-react';

interface FixtureCardProps {
  fixture: typeof fixtures[number];
}

export default function FixtureCard({ fixture }: FixtureCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      date: date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
      time: date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }),
    };
  };

  const { day, date, time } = formatDate(fixture.date);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'LIVE':
        return <span className="px-2 py-0.5 text-xs font-medium bg-error-500 text-white rounded-full">LIVE</span>;
      case 'FINISHED':
        return <span className="px-2 py-0.5 text-xs font-medium bg-gray-500 text-white rounded-full">FT</span>;
      case 'SCHEDULED':
        return <span className="px-2 py-0.5 text-xs font-medium bg-primary-500 text-white rounded-full">Upcoming</span>;
      case 'POSTPONED':
        return <span className="px-2 py-0.5 text-xs font-medium bg-warning-500 text-white rounded-full">Postponed</span>;
      case 'CANCELED':
        return <span className="px-2 py-0.5 text-xs font-medium bg-error-500 text-white rounded-full">Canceled</span>;
      default:
        return null;
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{day}, {date} • {time}</span>
          </div>
          <div>{getStatusBadge(fixture.status)}</div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 flex-1">
            <div className="w-8 h-8">
              <img
                src={fixture.homeTeam.logo}
                alt={fixture.homeTeam.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/32?text=Team';
                }}
              />
            </div>
            <span className="font-medium truncate">{fixture.homeTeam.name}</span>
          </div>
          
          <div className="mx-2 flex items-center justify-center">
            <div className="px-3 py-1 text-gray-500 dark:text-gray-400 text-sm font-medium">vs</div>
          </div>
          
          <div className="flex items-center space-x-2 flex-1 justify-end">
            <span className="font-medium truncate">{fixture.awayTeam.name}</span>
            <div className="w-8 h-8">
              <img
                src={fixture.awayTeam.logo}
                alt={fixture.awayTeam.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/32?text=Team';
                }}
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{fixture.venue || 'Venue TBD'}</span>
          </div>
          <div>
            Matchday {fixture.matchday}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}