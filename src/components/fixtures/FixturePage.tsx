import React from 'react';
import { fixtures } from '../../data/index'; // Adjust path based on your project structure
import FixtureCard from './FixtureCard';

export default function FixturesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Premier League Fixtures</h1>
      <div className="grid gap-4">
        {fixtures.map((fixture) => (
          <FixtureCard key={fixture.id} fixture={fixture} />
        ))}
      </div>
    </div>
  );
}