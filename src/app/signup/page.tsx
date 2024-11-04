'use client';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SignupPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;

        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    firstName,
                    lastName,
                }),
            });

            if (!res.ok) {
                const error = await res.text();
                throw new Error(error);
            }

            // Sign in the user after successful registration
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                throw new Error('Failed to sign in');
            }

            router.push('/dashboard');
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignup = () => {
        signIn('google', { callbackUrl: '/dashboard' });
    };

    return (
        <div className="min-h-screen flex flex-col bg-black">
            <Header />
            <main className="flex-grow flex items-center justify-center py-16 px-4">
                <div className="w-full max-w-md">
                    <div className="card-gradient rounded-2xl p-8 shadow-xl shadow-primary/10">
                        <h1 className="text-3xl font-bold text-center mb-8 gradient-text font-fredoka">
                            Create Your Account
                        </h1>
                        
                        {error && (
                            <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-lg p-4 mb-6">
                                {error}
                            </div>
                        )}
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-light-gray mb-2 font-quicksand" htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-4 py-3 rounded-lg bg-dark-gray border border-primary/20 
                                                 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 
                                                 transition-all duration-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-light-gray mb-2 font-quicksand" htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full px-4 py-3 rounded-lg bg-dark-gray border border-primary/20 
                                                 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 
                                                 transition-all duration-300"
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-light-gray mb-2 font-quicksand" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-dark-gray border border-primary/20 
                                             text-white focus:border-primary focus:ring-2 focus:ring-primary/20 
                                             transition-all duration-300"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-light-gray mb-2 font-quicksand" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-3 rounded-lg bg-dark-gray border border-primary/20 
                                             text-white focus:border-primary focus:ring-2 focus:ring-primary/20 
                                             transition-all duration-300"
                                    placeholder="Create a strong password"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-light-gray mb-2 font-quicksand" htmlFor="confirmPassword">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className="w-full px-4 py-3 rounded-lg bg-dark-gray border border-primary/20 
                                             text-white focus:border-primary focus:ring-2 focus:ring-primary/20 
                                             transition-all duration-300"
                                    placeholder="Confirm your password"
                                    required
                                />
                            </div>
                            
                            <div className="flex items-center">
                                <input type="checkbox" id="terms" className="mr-2 accent-primary" required />
                                <label htmlFor="terms" className="text-sm text-light-gray">
                                    I agree to the{' '}
                                    <Link href="/terms" className="text-primary hover:text-primary/80 transition-colors">
                                        Terms of Service
                                    </Link>
                                    {' '}and{' '}
                                    <Link href="/privacy" className="text-primary hover:text-primary/80 transition-colors">
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>
                            
                            <button
                                type="submit"
                                className={`w-full py-3 rounded-full bg-gradient-primary text-white font-semibold
                                          transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg 
                                          hover:shadow-primary/20 ${isLoading ? 'opacity-80 cursor-wait' : ''}`}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Creating account...
                                    </span>
                                ) : 'Create Account'}
                            </button>
                        </form>
                        
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-600"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-dark-gray text-light-gray">Or continue with</span>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={handleGoogleSignup}
                                className="mt-6 w-full flex items-center justify-center gap-3 bg-white text-dark-gray 
                                         px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300"
                            >
                                <img src="/google.svg" alt="Google" className="w-5 h-5" />
                                Sign up with Google
                            </button>
                        </div>
                        
                        <div className="mt-6 text-center text-light-gray">
                            <p>Already have an account?{' '}
                                <Link href="/login" className="text-primary hover:text-primary/80 transition-colors">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SignupPage; 