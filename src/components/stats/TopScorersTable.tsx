import React from 'react';
import { playerStats } from '../../data/index'; // Adjust path based on your project structure
import { Card, CardHeader, CardTitle, CardContent } from '../common/Card';

interface TopScorersTableProps {
  limit?: number;
}

export default function TopScorersTable({ limit = 10 }: TopScorersTableProps) {
  // Sort players by goals in descending order and apply limit
  const scorers = [...playerStats]
    .sort((a, b) => b.goals - a.goals)
    .slice(0, limit);

  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle>Top Scorers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="px-3 py-3 text-left font-medium">#</th>
                <th className="px-3 py-3 text-left font-medium">Player</th>
                <th className="px-3 py-3 text-left font-medium">Team</th>
                <th className="px-3 py-3 text-center font-medium">Goals</th>
                <th className="px-3 py-3 text-center font-medium">Assists</th>
                <th className="px-3 py-3 text-center font-medium">Apps</th>
              </tr>
            </thead>
            <tbody>
              {scorers.map((scorer, index) => (
                <tr
                  key={scorer.player.id}
                  className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50"
                >
                  <td className="px-3 py-2">{index + 1}</td>
                  <td className="px-3 py-2">
                    <div className="flex items-center space-x-2">
                      <div className="font-medium">{scorer.player.name}</div>
                    </div>
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex items-center space-x-2">
                      <img
                        src={scorer.player.team.logo}
                        alt={scorer.player.team.name}
                        className="h-5 w-5 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/20?text=Team';
                        }}
                      />
                      <span>{scorer.player.team.name}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-center font-semibold">{scorer.goals}</td>
                  <td className="px-3 py-2 text-center">{scorer.assists}</td>
                  <td className="px-3 py-2 text-center">{scorer.appearances}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}