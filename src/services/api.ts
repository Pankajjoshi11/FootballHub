import axios from 'axios';

// This would normally point to your backend or directly to the football API with proper authentication
// For the MVP, we'll use mock data and simulated API calls

// Create an axios instance with default config
const api = axios.create({
  baseURL: 'https://api.football-data.org/v4', // Replace with your actual API base URL
  headers: {
    'Content-Type': 'application/json',
    // In a real application, you would securely manage API keys
    // 'X-Auth-Token': import.meta.env.VITE_FOOTBALL_API_KEY,
  },
});

// For MVP, we'll intercept requests and return mock data
api.interceptors.request.use(config => {
  // Add logging or any request processing here
  console.log(`Making request to ${config.url}`);
  return config;
});

api.interceptors.response.use(
  response => response,
  error => {
    // In MVP, we'll return mock data instead of failing
    console.error('API Error:', error);
    
    // For real implementation, handle errors properly
    // return Promise.reject(error);
    
    // For MVP, handle gracefully with mock data
    return Promise.resolve({ 
      data: getMockData(error.config.url),
      status: 200,
      statusText: 'OK [MOCK]',
      headers: {},
      config: error.config,
    });
  }
);

// Mock data helper - this would be replaced with real API calls in production
function getMockData(url: string | undefined) {
  // Return different mock data based on the endpoint
  if (url?.includes('/competitions')) {
    return mockCompetitions;
  } else if (url?.includes('/teams')) {
    return mockTeams;
  } else if (url?.includes('/standings')) {
    return mockStandings;
  } else if (url?.includes('/matches')) {
    return mockFixtures;
  } else if (url?.includes('/scorers')) {
    return mockScorers;
  } else if (url?.includes('/news')) {
    return mockNews;
  }
  
  return { message: 'Mock data not available for this endpoint' };
}

// Mock data objects - these would be replaced with real API data
const mockCompetitions = {
  count: 3,
  competitions: [
    { id: 2021, name: 'Premier League', country: 'England', code: 'PL', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png' },
    { id: 2014, name: 'La Liga', country: 'Spain', code: 'PD', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/LaLiga.svg/1200px-LaLiga.svg.png' },
    { id: 2002, name: 'Bundesliga', country: 'Germany', code: 'BL1', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png' },
  ]
};

const mockTeams = {
  count: 6,
  teams: [
    { id: 57, name: 'Arsenal FC', shortName: 'Arsenal', tla: 'ARS', crest: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg', country: 'England', founded: 1886, venue: 'Emirates Stadium' },
    { id: 65, name: 'Manchester City FC', shortName: 'Man City', tla: 'MCI', crest: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg', country: 'England', founded: 1880, venue: 'Etihad Stadium' },
    { id: 61, name: 'Chelsea FC', shortName: 'Chelsea', tla: 'CHE', crest: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg', country: 'England', founded: 1905, venue: 'Stamford Bridge' },
    { id: 64, name: 'Liverpool FC', shortName: 'Liverpool', tla: 'LIV', crest: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg', country: 'England', founded: 1892, venue: 'Anfield' },
    { id: 66, name: 'Manchester United FC', shortName: 'Man United', tla: 'MUN', crest: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg', country: 'England', founded: 1878, venue: 'Old Trafford' },
    { id: 73, name: 'Tottenham Hotspur FC', shortName: 'Tottenham', tla: 'TOT', crest: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg', country: 'England', founded: 1882, venue: 'Tottenham Hotspur Stadium' },
  ]
};

// More mock data objects to be implemented

const mockStandings = {
  competition: { id: 2021, name: 'Premier League', code: 'PL', type: 'LEAGUE' },
  season: { id: 1490, startDate: '2023-08-11', endDate: '2024-05-19', currentMatchday: 29 },
  standings: [
    {
      table: [
        { position: 1, team: { id: 65, name: 'Manchester City FC', crest: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg' }, playedGames: 28, won: 19, draw: 7, lost: 2, points: 64, goalsFor: 63, goalsAgainst: 28, goalDifference: 35, form: 'WWWWD' },
        { position: 2, team: { id: 64, name: 'Liverpool FC', crest: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg' }, playedGames: 28, won: 19, draw: 7, lost: 2, points: 64, goalsFor: 65, goalsAgainst: 26, goalDifference: 39, form: 'WDWLW' },
        { position: 3, team: { id: 57, name: 'Arsenal FC', crest: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg' }, playedGames: 28, won: 19, draw: 4, lost: 5, points: 61, goalsFor: 70, goalsAgainst: 26, goalDifference: 44, form: 'WWWWW' },
        { position: 4, team: { id: 73, name: 'Tottenham Hotspur FC', crest: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg' }, playedGames: 28, won: 15, draw: 5, lost: 8, points: 50, goalsFor: 55, goalsAgainst: 42, goalDifference: 13, form: 'LWLWW' },
        { position: 5, team: { id: 58, name: 'Aston Villa FC', crest: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Aston_Villa_FC_crest_%282016%29.svg' }, playedGames: 28, won: 15, draw: 4, lost: 9, points: 49, goalsFor: 55, goalsAgainst: 45, goalDifference: 10, form: 'LDWLW' },
        { position: 6, team: { id: 66, name: 'Manchester United FC', crest: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg' }, playedGames: 28, won: 14, draw: 2, lost: 12, points: 44, goalsFor: 39, goalsAgainst: 41, goalDifference: -2, form: 'WWLWD' },
      ]
    }
  ]
};

const mockFixtures = {
  count: 10,
  matches: [
    { id: 1, utcDate: '2025-03-20T15:00:00Z', status: 'SCHEDULED', matchday: 30, homeTeam: { id: 57, name: 'Arsenal FC', crest: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg' }, awayTeam: { id: 64, name: 'Liverpool FC', crest: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg' }, score: { fullTime: { home: null, away: null } } },
    { id: 2, utcDate: '2025-03-20T17:30:00Z', status: 'SCHEDULED', matchday: 30, homeTeam: { id: 65, name: 'Manchester City FC', crest: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg' }, awayTeam: { id: 66, name: 'Manchester United FC', crest: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg' }, score: { fullTime: { home: null, away: null } } },
    { id: 3, utcDate: '2025-03-21T15:00:00Z', status: 'SCHEDULED', matchday: 30, homeTeam: { id: 61, name: 'Chelsea FC', crest: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg' }, awayTeam: { id: 73, name: 'Tottenham Hotspur FC', crest: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg' }, score: { fullTime: { home: null, away: null } } },
  ]
};

const mockScorers = {
  count: 10,
  scorers: [
    { player: { id: 3754, name: 'Erling Haaland', dateOfBirth: '2000-07-21', nationality: 'Norway', position: 'Offence', shirtNumber: 9 }, team: { id: 65, name: 'Manchester City FC', crest: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg' }, playedMatches: 23, goals: 18, assists: 5, penalties: 5 },
    { player: { id: 8197, name: 'Cole Palmer', dateOfBirth: '2002-05-06', nationality: 'England', position: 'Midfield', shirtNumber: 20 }, team: { id: 61, name: 'Chelsea FC', crest: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg' }, playedMatches: 27, goals: 16, assists: 9, penalties: 4 },
    { player: { id: 8653, name: 'Alexander Isak', dateOfBirth: '1999-09-21', nationality: 'Sweden', position: 'Offence', shirtNumber: 14 }, team: { id: 67, name: 'Newcastle United FC', crest: 'https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg' }, playedMatches: 22, goals: 16, assists: 1, penalties: 1 },
  ]
};

const mockNews = {
  count: 5,
  articles: [
    { id: 1, title: 'Premier League Title Race Heats Up', content: 'As the Premier League season approaches its climax, three teams remain in contention for the title...', source: 'Sports News', publishedAt: '2025-03-15T12:30:00Z', image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg' },
    { id: 2, title: 'Champions League Draw Announced', content: 'The quarterfinal draw for the Champions League has been announced, with several Premier League clubs in the mix...', source: 'Football Today', publishedAt: '2025-03-14T10:15:00Z', image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg' },
    { id: 3, title: 'Injury Update: Key Players Set to Return', content: 'Several key players are set to return from injury as the season enters its crucial final phase...', source: 'Sports Central', publishedAt: '2025-03-13T14:45:00Z', image: 'https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg' },
  ]
};

export default api;