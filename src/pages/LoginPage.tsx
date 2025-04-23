import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { Percent as Soccer } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Link to="/" className="flex items-center">
            <Soccer className="h-12 w-12 text-primary-600 dark:text-primary-400" />
          </Link>
        </div>
        <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Welcome back to FootballHub
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}