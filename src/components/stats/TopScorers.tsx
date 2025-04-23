import React from 'react';
import TopScorersTable from './TopScorersTable';

export default function StatsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Premier League Stats</h1>
      <TopScorersTable limit={10} />
    </div>
  );
}