import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Team } from '../../types';
import { getTeams } from '../../services/football';
import Button from '../common/Button';

interface TeamSelectorProps {
  onTeamSelect: (team: Team) => void;
  selectedTeam?: Team;
}

export default function TeamSelector({ onTeamSelect, selectedTeam }: TeamSelectorProps) {
  const [teams, setTeams] = useState<Team[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        // For MVP, we're hardcoding Premier League (ID: 2021)
        const teamsData = await getTeams(2021);
        setTeams(teamsData);
      } catch (error) {
        console.error('Error fetching teams:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchTeams();
  }, []);
  
  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="w-full">
      <div className="relative mb-4">
        <Search className="absolute top-3 left-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        <input
          type="text"
          placeholder="Search for your favorite team..."
          className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {filteredTeams.map(team => (
            <div
              key={team.id}
              className={`relative flex flex-col items-center p-4 rounded-lg border transition-all duration-200 cursor-pointer hover:shadow-md ${
                selectedTeam?.id === team.id
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 shadow-md'
                  : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700'
              }`}
              onClick={() => onTeamSelect(team)}
            >
              <div className="w-16 h-16 mb-2 flex items-center justify-center">
                <img
                  src={team.logo}
                  alt={`${team.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/64?text=Team';
                  }}
                />
              </div>
              <h3 className="text-sm font-medium text-center text-gray-900 dark:text-white line-clamp-2">
                {team.name}
              </h3>
              {selectedTeam?.id === team.id && (
                <div className="absolute top-2 right-2 w-4 h-4 bg-primary-500 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      )}
      
      {selectedTeam && (
        <div className="mt-6 flex justify-center">
          <Button
            onClick={() => onTeamSelect(selectedTeam)}
            size="lg"
          >
            Continue with {selectedTeam.name}
          </Button>
        </div>
      )}
    </div>
  );
}