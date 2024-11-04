'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import UserMenu from './UserMenu';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { data: session } = useSession();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/roadmap', label: 'Roadmap' },
        { href: '/quiz', label: 'Quiz' },
        { href: '/practice-problems', label: 'Practice Problems' },
        { href: '/practice-projects', label: 'Practice Projects' },
        { href: '/community', label: 'Community' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                        ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" 
                        className="text-2xl font-fredoka font-bold bg-clip-text text-transparent 
                                 bg-gradient-to-r from-primary to-secondary">
                        SkillSurge
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link key={link.href} 
                                href={link.href}
                                className="text-white hover:text-primary transition-colors duration-300">
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Auth Buttons or User Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        {session ? (
                            <UserMenu />
                        ) : (
                            <>
                                <Link href="/login" 
                                    className="text-white hover:text-primary transition-colors duration-300">
                                    Login
                                </Link>
                                <Link href="/signup"
                                    className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 
                                             transition-all duration-300">
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2 hover:bg-primary/10 rounded-lg transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-md border-t border-primary/10"
                    >
                        <div className="container mx-auto px-4 py-4">
                            <nav className="flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <Link key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-white hover:text-primary transition-colors duration-300 py-2">
                                        {link.label}
                                    </Link>
                                ))}
                                {!session && (
                                    <>
                                        <Link href="/login"
                                            onClick={() => setIsOpen(false)}
                                            className="text-white hover:text-primary transition-colors duration-300 py-2">
                                            Login
                                        </Link>
                                        <Link href="/signup"
                                            onClick={() => setIsOpen(false)}
                                            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 
                                                     transition-all duration-300 text-center">
                                            Sign Up
                                        </Link>
                                    </>
                                )}
                                {session && (
                                    <div className="py-2">
                                        <UserMenu />
                                    </div>
                                )}
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header; 