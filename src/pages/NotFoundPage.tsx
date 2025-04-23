import React from 'react';
import { Link } from 'react-router-dom';
import { Percent as Soccer, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <Soccer className="h-20 w-20 text-primary-600 dark:text-primary-400" />
        </div>
        <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Page not found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button leftIcon={<ArrowLeft className="h-4 w-4" />} size="lg">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}