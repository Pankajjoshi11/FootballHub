import React from 'react';
import { Link } from 'react-router-dom';
import { Percent as Soccer, Calendar, Trophy, LineChart, Users, Newspaper } from 'lucide-react';
import Button from '../components/common/Button';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Your Ultimate Football Companion
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Stay updated with live scores, team standings, and the latest football news from around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" variant="primary" className="bg-white text-blue-700 hover:bg-gray-100">
                  Get Started
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Everything You Need in One Place!!!
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              FootballHub brings you comprehensive football data and features designed for the ultimate fan experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-primary-100 dark:bg-primary-900/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Live Standings
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Stay updated with real-time league tables and track your favorite team's position throughout the season.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-primary-100 dark:bg-primary-900/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Fixture Calendar
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Never miss a match with our comprehensive fixture list. Get kick-off times and venue information at a glance.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-primary-100 dark:bg-primary-900/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Newspaper className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Latest News
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get breaking news and updates about your favorite teams, players, and competitions from trusted sources.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-primary-100 dark:bg-primary-900/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Player Statistics
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore detailed stats on top scorers, assist providers, and standout performers across major leagues.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-primary-100 dark:bg-primary-900/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Team Profiles
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access comprehensive team information including squad details, recent form, and historical performance data.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-primary-100 dark:bg-primary-900/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Soccer className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Personalized Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Customize your experience by following your favorite teams and receive tailored updates and notifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Football Experience?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of football fans who trust FootballHub for the latest updates, stats, and news.
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
              Create Your Free Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}