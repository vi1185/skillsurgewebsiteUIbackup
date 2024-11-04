'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users, Clock, Star } from 'lucide-react';

interface RoadmapCardProps {
    title: string;
    description: string;
    category: string;
    duration: string;
    difficulty: string;
    learners: number;
    rating: number;
    slug: string;
    icon: React.ReactNode;
}

const RoadmapCard = ({
    title,
    description,
    category,
    duration,
    difficulty,
    learners,
    rating,
    slug,
    icon
}: RoadmapCardProps) => {
    return (
        <motion.div
            className="bg-dark-gray rounded-xl p-6 hover:bg-gradient-to-br 
                     hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 
                     transform hover:scale-105"
            whileHover={{ y: -5 }}
        >
            <div className="flex items-center mb-4">
                <div className="bg-primary rounded-full p-2 mr-4">
                    {icon}
                </div>
                <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm text-gray-400">{category}</p>
                </div>
            </div>

            <p className="text-gray-300 mb-4">{description}</p>

            <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {duration}
                </div>
                <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    {learners}
                </div>
                <div className="flex items-center text-sm text-gray-400">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    {rating}
                </div>
            </div>

            <div className="flex justify-between items-center">
                <span className={`text-sm px-3 py-1 rounded-full ${
                    difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                    difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                }`}>
                    {difficulty}
                </span>
                <Link 
                    href={`/roadmap/${slug}`}
                    className="flex items-center text-primary hover:text-white 
                             hover:bg-primary px-4 py-2 rounded-full transition-all duration-300"
                >
                    View Roadmap
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </div>
        </motion.div>
    );
};

export default RoadmapCard; 