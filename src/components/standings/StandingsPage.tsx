import React from 'react';
import LeagueStandingsTable from './LeagueStandings';

export default function StandingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Premier League Standings</h1>
      <LeagueStandingsTable />
    </div>
  );
}