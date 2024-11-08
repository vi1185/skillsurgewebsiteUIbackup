'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server } from 'lucide-react';
import Link from 'next/link';

interface PracticeProblem {
    title: string;
    category: string;
    difficulty: string;
    icon: JSX.Element;
    completions: number;
    rating: number;
    description: string;
}

interface PracticeProblemCardProps {
    problem: PracticeProblem;
}

const difficultyColors: Record<string, string> = {
    Easy: 'bg-green-100 text-green-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    Hard: 'bg-red-100 text-red-700',
};

const PracticeProblemCard: React.FC<PracticeProblemCardProps> = ({ problem }) => {
    return (
        <motion.div
            className="bg-dark-gray rounded-xl p-6 hover:bg-gradient-to-br 
                     hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 
                     transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            role="article"
            aria-label={`Practice problem: ${problem.title}`}
        >
            <div className="flex items-center mb-4">
                <div className="bg-primary rounded-full p-2 mr-4">
                    {problem.icon}
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
            </div>
            <p className="text-gray-300 mb-4">{problem.description}</p>
            <div className="flex justify-between items-center mb-4">
                <span className={`text-sm px-3 py-1 rounded-full ${difficultyColors[problem.difficulty]}`}>
                    {problem.difficulty}
                </span>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>⭐ {problem.rating}</span>
                    <span>🏆 {problem.completions}</span>
                </div>
            </div>
            <Link href={`/practice-problems/${problem.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="w-full bg-primary text-white py-2 rounded-full 
                         hover:bg-white hover:text-primary transition-all duration-300"
                aria-label={`Solve problem: ${problem.title}`}
            >
                Solve Now
            </Link>
        </motion.div>
    );
}

export default PracticeProblemCard; 