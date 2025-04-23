import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { teams } from '../../data/index'; // Adjust path
import TeamSelector from '../../components/dashboard/TeamSelector'; // Adjust path
import Button from '../common/Button';

export default function ProfilePage() {
  const { user, isAuthenticated, isLoading, updateFavoriteTeam } = useAuth();
  const [selectedTeam, setSelectedTeam] = useState<typeof teams[number] | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if not authenticated and not loading
    if (!isAuthenticated && !isLoading) {
      navigate('/login');
    }

    // Set favorite team from user profile
    if (user?.favoriteTeam) {
      setSelectedTeam(user.favoriteTeam);
    }
  }, [isAuthenticated, isLoading, user, navigate]);

  const handleTeamSelect = (team: typeof teams[number]) => {
    setSelectedTeam(team);
  };

  const handleSave = () => {
    if (selectedTeam) {
      setIsSaving(true);
      updateFavoriteTeam(selectedTeam); // Update in AuthContext
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Redirect will handle this
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Profile</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">User Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  value={user?.name || ''}
                  disabled
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 text-gray-500 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  value={user?.email || ''}
                  disabled
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 text-gray-500 cursor-not-allowed"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Favorite Team</h2>
            {selectedTeam ? (
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={selectedTeam.logo}
                  alt={selectedTeam.name}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/48?text=Team';
                  }}
                />
                <div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">{selectedTeam.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{selectedTeam.country}</p>
                </div>
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-400 mb-4">No favorite team selected.</p>
            )}
            <TeamSelector onTeamSelect={handleTeamSelect} />
            <Button
              onClick={handleSave}
              className="mt-4"
              isLoading={isSaving}
              disabled={isSaving || !selectedTeam}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}