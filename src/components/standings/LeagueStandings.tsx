import React from 'react';
import { standings } from '../../data/index'; // Adjust path based on your project structure
import { Card, CardHeader, CardTitle, CardContent } from '../common/Card';

export default function LeagueStandingsTable() {
  const renderForm = (form: string = '') => {
    return (
      <div className="flex space-x-1">
        {form.split('').map((result, index) => {
          let bgColor = 'bg-gray-200 dark:bg-gray-700';
          let textColor = 'text-gray-800 dark:text-gray-200';

          if (result === 'W') {
            bgColor = 'bg-success-500';
            textColor = 'text-white';
          } else if (result === 'L') {
            bgColor = 'bg-error-500';
            textColor = 'text-white';
          } else if (result === 'D') {
            bgColor = 'bg-warning-500';
            textColor = 'text-white';
          }

          return (
            <span
              key={index}
              className={`${bgColor} ${textColor} w-5 h-5 flex items-center justify-center text-xs rounded`}
            >
              {result}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <Card>
      <CardHeader className="pb-0">
        <div className="flex items-center space-x-3">
          {standings.league.logo && (
            <img
              src={standings.league.logo}
              alt={standings.league.name}
              className="h-8 w-8 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/32?text=League';
              }}
            />
          )}
          <CardTitle>{standings.league.name} Standings</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="px-3 py-3 text-left font-medium">#</th>
                <th className="px-3 py-3 text-left font-medium">Team</th>
                <th className="px-3 py-3 text-center font-medium">MP</th>
                <th className="px-3 py-3 text-center font-medium">W</th>
                <th className="px-3 py-3 text-center font-medium">D</th>
                <th className="px-3 py-3 text-center font-medium">L</th>
                <th className="px-3 py-3 text-center font-medium">GF</th>
                <th className="px-3 py-3 text-center font-medium">GA</th>
                <th className="px-3 py-3 text-center font-medium">GD</th>
                <th className="px-3 py-3 text-center font-medium">Pts</th>
                <th className="px-3 py-3 text-center font-medium">Form</th>
              </tr>
            </thead>
            <tbody>
              {standings.standings.map((team) => (
                <tr
                  key={team.team.id}
                  className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50"
                >
                  <td className="px-3 py-2 text-center">
                    <div className="flex items-center">
                      <span
                        className={`
                        ${
                          team.rank <= 4
                            ? 'bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-300'
                            : ''
                        }
                        ${
                          team.rank >= 18
                            ? 'bg-error-100 text-error-800 dark:bg-error-900/30 dark:text-error-300'
                            : ''
                        }
                        rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium
                      `}
                      >
                        {team.rank}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex items-center space-x-2">
                      <img
                        src={team.team.logo}
                        alt={team.team.name}
                        className="h-5 w-5 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/20?text=Team';
                        }}
                      />
                      <span className="font-medium truncate max-w-[120px]">{team.team.name}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-center">{team.played}</td>
                  <td className="px-3 py-2 text-center">{team.win}</td>
                  <td className="px-3 py-2 text-center">{team.draw}</td>
                  <td className="px-3 py-2 text-center">{team.lose}</td>
                  <td className="px-3 py-2 text-center">{team.goalsFor}</td>
                  <td className="px-3 py-2 text-center">{team.goalsAgainst}</td>
                  <td className="px-3 py-2 text-center font-medium">
                    <span
                      className={`
                      ${team.goalsDiff > 0 ? 'text-success-600 dark:text-success-400' : ''}
                      ${team.goalsDiff < 0 ? 'text-error-600 dark:text-error-400' : ''}
                    `}
                    >
                      {team.goalsDiff > 0 ? '+' : ''}{team.goalsDiff}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-center font-semibold">{team.points}</td>
                  <td className="px-3 py-2">{team.form && renderForm(team.form)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}