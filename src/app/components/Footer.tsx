import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-primary/20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <Link href="/" 
                            className="text-2xl font-fredoka font-bold bg-clip-text text-transparent 
                                     bg-gradient-to-r from-primary to-secondary">
                            SkillSurge
                        </Link>
                    </div>
                    <nav className="mb-8 md:mb-0">
                        <ul className="flex flex-wrap justify-center gap-6">
                            <li>
                                <Link href="/roadmap" 
                                    className="text-light-gray hover:text-primary transition-colors duration-300">
                                    Roadmap
                                </Link>
                            </li>
                            <li>
                                <Link href="/community" 
                                    className="text-light-gray hover:text-primary transition-colors duration-300">
                                    Community
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us" 
                                    className="text-light-gray hover:text-primary transition-colors duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/practice-problems" 
                                    className="text-light-gray hover:text-primary transition-colors duration-300">
                                    Practice Problems
                                </Link>
                            </li>
                            <li>
                                <Link href="/practice-projects" 
                                    className="text-light-gray hover:text-primary transition-colors duration-300">
                                    Practice Projects
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex space-x-4">
                        <a href="#" 
                            className="text-light-gray hover:text-primary transition-colors duration-300 
                                     transform hover:scale-110">
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a href="#" 
                            className="text-light-gray hover:text-primary transition-colors duration-300 
                                     transform hover:scale-110">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="#" 
                            className="text-light-gray hover:text-primary transition-colors duration-300 
                                     transform hover:scale-110">
                            <Github className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-primary/10 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} SkillSurge. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 