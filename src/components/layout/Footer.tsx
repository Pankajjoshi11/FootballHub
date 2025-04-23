import React from 'react';
import { Link } from 'react-router-dom';
import { Percent as Soccer, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <Soccer className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              <span className="font-bold text-lg text-gray-900 dark:text-white">
                FootballHub
              </span>
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Stay updated with the latest football news, stats, and fixtures from around the world.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/leagues" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Leagues
                </Link>
              </li>
              <li>
                <Link to="/teams" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Teams
                </Link>
              </li>
              <li>
                <Link to="/fixtures" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Fixtures
                </Link>
              </li>
              <li>
                <Link to="/stats" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Stats
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">Subscribe</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Get the latest football updates straight to your inbox.
            </p>
            <form className="mt-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="mt-4 flex items-center">
              <Mail className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2" />
              <a href="mailto:info@footballhub.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                info@footballhub.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} FootballHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}