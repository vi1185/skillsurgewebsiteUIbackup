'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface LearningPathCardProps {
    path: {
        id: string;
        title: string;
        description: string;
        duration: string;
        enrolledUsers: number;
        progress?: number;
        modules: {
            title: string;
            completed?: boolean;
        }[];
        skills: string[];
    };
}

const LearningPathCard = ({ path }: LearningPathCardProps) => {
    return (
        <motion.div
            className="bg-dark-gray rounded-xl p-6 hover:bg-gradient-to-br 
                     hover:from-primary/20 hover:to-secondary/20 transition-all duration-300"
            whileHover={{ y: -5 }}
        >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{path.description}</p>
                </div>
                {path.progress !== undefined && (
                    <div className="bg-primary/20 text-primary rounded-full px-3 py-1 text-sm">
                        {path.progress}% Complete
                    </div>
                )}
            </div>

            <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {path.duration}
                </div>
                <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {path.enrolledUsers} enrolled
                </div>
            </div>

            {path.modules.length > 0 && (
                <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">Modules</h4>
                    <div className="space-y-2">
                        {path.modules.slice(0, 3).map((module, index) => (
                            <div 
                                key={index}
                                className="flex items-center text-sm"
                            >
                                <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center
                                    ${module.completed ? 'bg-primary' : 'bg-gray-700'}`}
                                >
                                    {module.completed && (
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                                <span className={module.completed ? 'text-gray-300' : 'text-gray-500'}>
                                    {module.title}
                                </span>
                            </div>
                        ))}
                        {path.modules.length > 3 && (
                            <div className="text-sm text-gray-500">
                                +{path.modules.length - 3} more modules
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2">Skills you'll gain</h4>
                <div className="flex flex-wrap gap-2">
                    {path.skills.map((skill, index) => (
                        <span 
                            key={index}
                            className="bg-black/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <Link 
                href={`/learning-path/${path.id}`}
                className="flex items-center justify-center w-full bg-primary text-white py-2 rounded-full 
                         hover:bg-white hover:text-primary transition-all duration-300 group"
            >
                {path.progress !== undefined ? 'Continue Learning' : 'Start Learning'}
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
    );
};

export default LearningPathCard; 