'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ThumbsUp, Eye } from 'lucide-react';
import Link from 'next/link';

interface DiscussionCardProps {
    title: string;
    author: {
        name: string;
        avatar: string;
    };
    category: string;
    tags: string[];
    likes: number;
    replies: number;
    views: number;
    lastActivity: string;
    slug: string;
}

const DiscussionCard = ({
    title,
    author,
    category,
    tags,
    likes,
    replies,
    views,
    lastActivity,
    slug
}: DiscussionCardProps) => {
    return (
        <motion.div
            className="bg-dark-gray rounded-xl p-6 hover:bg-gradient-to-br 
                     hover:from-primary/20 hover:to-secondary/20 transition-all duration-300"
            whileHover={{ y: -5 }}
        >
            <div className="flex items-center mb-4">
                <img 
                    src={author.avatar} 
                    alt={author.name}
                    className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm text-gray-400">
                        Posted by {author.name} · {lastActivity}
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                    {category}
                </span>
                {tags.map((tag, index) => (
                    <span 
                        key={index}
                        className="bg-black/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                    <div className="flex items-center text-gray-400">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        <span className="text-sm">{likes}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        <span className="text-sm">{replies}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                        <Eye className="w-4 h-4 mr-1" />
                        <span className="text-sm">{views}</span>
                    </div>
                </div>

                <Link 
                    href={`/community/discussion/${slug}`}
                    className="text-primary hover:text-white hover:bg-primary px-4 py-2 
                             rounded-full transition-all duration-300"
                >
                    Join Discussion
                </Link>
            </div>
        </motion.div>
    );
};

export default DiscussionCard; 