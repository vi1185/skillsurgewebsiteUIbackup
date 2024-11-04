'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Clock, Users, ArrowRight, Star, BookOpen } from 'lucide-react';
import Link from 'next/link';

interface RoadmapCardProps {
    id: string;
    title: string;
    description: string;
    category: string;
    difficulty: string;
    duration: string;
    enrolledUsers: number;
    rating: number;
    progress?: number;
    technologies: string[];
    prerequisites?: string[];
}

const RoadmapCard = ({
    id,
    title,
    description,
    category,
    difficulty,
    duration,
    enrolledUsers,
    rating,
    progress,
    technologies,
    prerequisites
}: RoadmapCardProps) => {
    return (
        <motion.div
            className="bg-dark-gray rounded-xl p-6 hover:bg-gradient-to-br 
                     hover:from-primary/20 hover:to-secondary/20 transition-all duration-300"
            whileHover={{ y: -5 }}
        >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{description}</p>
                </div>
                {progress !== undefined && (
                    <div className="bg-primary/20 text-primary rounded-full px-3 py-1 text-sm">
                        {progress}% Complete
                    </div>
                )}
            </div>

            <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {duration}
                </div>
                <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {enrolledUsers} enrolled
                </div>
                <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    {rating.toFixed(1)}
                </div>
            </div>

            <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span 
                            key={index}
                            className="bg-black/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {prerequisites && prerequisites.length > 0 && (
                <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">Prerequisites</h4>
                    <ul className="space-y-1">
                        {prerequisites.map((prereq, index) => (
                            <li key={index} className="text-sm text-gray-400 flex items-center">
                                <BookOpen className="w-4 h-4 mr-2 text-primary" />
                                {prereq}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="flex justify-between items-center">
                <span className={`text-sm px-3 py-1 rounded-full ${
                    difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                    difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                }`}>
                    {difficulty}
                </span>
                <Link 
                    href={`/roadmap/${id}`}
                    className="flex items-center text-primary hover:text-white 
                             hover:bg-primary px-4 py-2 rounded-full transition-all duration-300 group"
                >
                    View Roadmap
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
};

export default RoadmapCard; 