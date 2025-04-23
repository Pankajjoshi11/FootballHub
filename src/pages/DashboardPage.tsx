import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { fixtures, news } from '../data/index'; // Adjust path (use static data instead of API)
import TeamSelector from '../components/dashboard/TeamSelector';
import LeagueStandingsTable from '../components/standings/LeagueStandings';
import TopScorersTable from '../components/stats/TopScorersTable';
import FixtureCard from '../components/fixtures/FixtureCard';
import NewsCard from '../components/news/NewsCard';

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading, updateFavoriteTeam } = useAuth();
  const [selectedTeam, setSelectedTeam] = useState<typeof fixtures[number]['homeTeam'] | null>(null);
  const [teamSelected, setTeamSelected] = useState(false);
  const [upcomingMatches, setUpcomingMatches] = useState<typeof fixtures>([]);
  const [newsArticles, setNewsArticles] = useState<typeof news>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if not authenticated and not loading
    if (!isAuthenticated && !isLoading) {
      navigate('/login');
    }

    // Set favorite team from user profile
    if (user?.favoriteTeam) {
      setSelectedTeam(user.favoriteTeam);
      setTeamSelected(true);
      fetchTeamData(user.favoriteTeam.id);
    }
  }, [isAuthenticated, isLoading, user, navigate]);

  const handleTeamSelect = (team: typeof fixtures[number]['homeTeam']) => {
    setSelectedTeam(team);
    setTeamSelected(true);
    updateFavoriteTeam(team); // Update in AuthContext
    fetchTeamData(team.id);
  };

  const fetchTeamData = async (teamId: number) => {
    setIsLoadingData(true);
    try {
      // Use static fixtures data instead of getTeamMatches
      const teamMatches = fixtures
        .filter((match) => match.homeTeam.id === teamId || match.awayTeam.id === teamId)
        .slice(0, 5);
      setUpcomingMatches(teamMatches);

      // Use static news data instead of getFootballNews
      const teamNews = news
        .filter((article) => article.team?.id === teamId)
        .slice(0, 6);
      setNewsArticles(teamNews);
    } catch (error) {
      console.error('Error fetching team data:', error);
    } finally {
      setIsLoadingData(false);
    }
  };

  if (!teamSelected) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Select Your Favorite Team
            </h2>
            <TeamSelector onTeamSelect={handleTeamSelect} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {selectedTeam && (
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <img
              src={selectedTeam.logo}
              alt={selectedTeam.name}
              className="w-16 h-16 mr-4 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/64?text=Team';
              }}
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {selectedTeam.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {selectedTeam.country} • Founded: {selectedTeam.founded}
              </p>
            </div>
          </div>
        </div>
      )}

      {isLoadingData ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Upcoming Matches
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {upcomingMatches.length === 0 ? (
                  <p className="text-gray-600 dark:text-gray-400">No upcoming matches found.</p>
                ) : (
                  upcomingMatches.map((match) => (
                    <FixtureCard key={match.id} fixture={match} />
                  ))
                )}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Latest News
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {newsArticles.length === 0 ? (
                  <p className="text-gray-600 dark:text-gray-400">No news articles found.</p>
                ) : (
                  newsArticles.map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <LeagueStandingsTable />
            <TopScorersTable limit={5} />
          </div>
        </div>
      )}
    </div>
  );
}