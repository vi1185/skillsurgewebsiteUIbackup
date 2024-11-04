'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Book, Video, Link as LinkIcon, Star } from 'lucide-react';
import Link from 'next/link';

interface ResourceCardProps {
    title: string;
    type: 'article' | 'video' | 'tutorial';
    description: string;
    author: string;
    rating: number;
    duration: string;
    difficulty: string;
    url: string;
}

const ResourceCard = ({
    title,
    type,
    description,
    author,
    rating,
    duration,
    difficulty,
    url
}: ResourceCardProps) => {
    const getIcon = () => {
        switch (type) {
            case 'article':
                return <Book className="w-6 h-6" />;
            case 'video':
                return <Video className="w-6 h-6" />;
            case 'tutorial':
                return <LinkIcon className="w-6 h-6" />;
            default:
                return <Book className="w-6 h-6" />;
        }
    };

    return (
        <motion.div
            className="bg-dark-gray rounded-xl p-6 hover:bg-gradient-to-br 
                     hover:from-primary/20 hover:to-secondary/20 transition-all duration-300"
            whileHover={{ y: -5 }}
        >
            <div className="flex items-center mb-4">
                <div className="bg-primary rounded-full p-2 mr-4">
                    {getIcon()}
                </div>
                <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm text-gray-400 capitalize">{type}</p>
                </div>
            </div>

            <p className="text-gray-300 mb-4">{description}</p>

            <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400">By {author}</span>
                <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm text-gray-400">{rating}</span>
                </div>
            </div>

            <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400">⏱️ {duration}</span>
                <span className={`text-sm px-3 py-1 rounded-full ${
                    difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                    difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                }`}>
                    {difficulty}
                </span>
            </div>

            <Link 
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-white text-center py-2 rounded-full 
                         hover:bg-white hover:text-primary transition-all duration-300"
            >
                Start Learning
            </Link>
        </motion.div>
    );
};

export default ResourceCard; 