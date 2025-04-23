import { 
  teams,
  standings,
  fixtures,
  playerStats,
  news,
} from '../data';

import type { 
  LeagueStandings, 
  Team, 
  Fixture, 
  PlayerStats, 
  NewsArticle 
} from '../types';

// League services
export const getLeagues = async () => {
  return [standings.league];
};

export const getLeagueStandings = async (leagueId: number): Promise<LeagueStandings> => {
  return standings;
};

// Team services
export const getTeams = async (leagueId: number): Promise<Team[]> => {
  return teams;
};

export const getTeamById = async (teamId: number): Promise<Team> => {
  const team = teams.find(t => t.id === teamId);
  if (!team) throw new Error('Team not found');
  return team;
};

export const getTeamMatches = async (teamId: number): Promise<Fixture[]> => {
  return fixtures.filter(f => 
    f.homeTeam.id === teamId || f.awayTeam.id === teamId
  );
};

// Player services
export const getTopScorers = async (leagueId: number): Promise<PlayerStats[]> => {
  return playerStats.sort((a, b) => b.goals - a.goals);
};

// Fixture services
export const getFixtures = async (leagueId: number): Promise<Fixture[]> => {
  return fixtures;
};

// News services
export const getFootballNews = async (): Promise<NewsArticle[]> => {
  return news;
};