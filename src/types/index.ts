// User types
export interface User {
  id: string;
  name: string;
  email: string;
  favoriteTeam?: Team;
}

// Auth types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials extends LoginCredentials {
  name: string;
}

// Team types
export interface Team {
  id: number;
  name: string;
  code: string;
  logo: string;
  country: string;
  founded: number;
  venue: string;
  leagueId: number;
}

// League types
export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  season: number;
}

// Standing types
export interface TeamStanding {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  played: number;
  win: number;
  draw: number;
  lose: number;
  goalsFor: number;
  goalsAgainst: number;
  form?: string;
}

export interface LeagueStandings {
  league: League;
  standings: TeamStanding[];
}

// Player types
export interface Player {
  id: number;
  name: string;
  age: number;
  nationality: string;
  photo: string;
  team: Team;
  position: string;
}

export interface PlayerStats {
  player: Player;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  appearances: number;
  minutesPlayed: number;
}

// Fixture types
export interface Fixture {
  id: number;
  date: string;
  status: 'SCHEDULED' | 'LIVE' | 'FINISHED' | 'CANCELED' | 'POSTPONED';
  matchday: number;
  homeTeam: Team;
  awayTeam: Team;
  score?: {
    homeTeam: number;
    awayTeam: number;
  };
  venue: string;
  league: League;
}

// News types
export interface NewsArticle {
  id: number;
  title: string;
  content: string;
  source: string;
  url: string;
  image: string;
  publishedAt: string;
  team?: Team;
  player?: Player;
}