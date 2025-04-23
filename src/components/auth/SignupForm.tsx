import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react';
import Button from '../common/Button';
import { useAuth } from '../../contexts/AuthContext';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { signup, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return false;
    }
    
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return false;
    }
    
    setPasswordError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    try {
      await signup({ name, email, password });
      navigate('/dashboard');
    } catch (error) {
      // Error is handled by the AuthContext
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="max-w-md w-full space-y-8">
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
          Create a new account
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Or{' '}
          <Link
            to="/login"
            className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400"
          >
            sign in to your existing account
          </Link>
        </p>
      </div>
      
      {error && (
        <div className="bg-error-50 text-error-800 p-3 rounded-md text-sm dark:bg-error-900/50 dark:text-error-300">
          {error}
        </div>
      )}
      
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div className="relative">
            <label htmlFor="name" className="sr-only">
              Full name
            </label>
            <User className="absolute top-3 left-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="appearance-none rounded-t-md relative block w-full pl-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <Mail className="absolute top-3 left-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none relative block w-full pl-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <Lock className="absolute top-3 left-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none relative block w-full pl-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="relative">
            <label htmlFor="confirm-password" className="sr-only">
              Confirm Password
            </label>
            <Lock className="absolute top-3 left-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none rounded-b-md relative block w-full pl-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        {passwordError && (
          <div className="text-error-600 text-sm dark:text-error-400">
            {passwordError}
          </div>
        )}

        <div className="text-sm text-gray-600 dark:text-gray-400">
          By creating an account, you agree to our{' '}
          <a href="#" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400">
            Privacy Policy
          </a>
          .
        </div>

        <div>
          <Button
            type="submit"
            className="w-full"
            size="lg"
            isLoading={isLoading}
            disabled={isLoading}
          >
            Create account
          </Button>
        </div>
      </form>
    </div>
  );
}