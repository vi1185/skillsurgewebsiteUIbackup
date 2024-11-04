'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, BookOpen, Code } from 'lucide-react';
import Link from 'next/link';

interface UserProfileCardProps {
    user: {
        name: string;
        avatar: string;
        role: string;
        level: number;
        experience: number;
        skills: string[];
        achievements: number;
        completedCourses: number;
        solvedProblems: number;
    };
}

const UserProfileCard = ({ user }: UserProfileCardProps) => {
    return (
        <motion.div
            className="bg-dark-gray rounded-xl p-6 hover:bg-gradient-to-br 
                     hover:from-primary/20 hover:to-secondary/20 transition-all duration-300"
            whileHover={{ y: -5 }}
        >
            <div className="flex items-center mb-6">
                <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-16 h-16 rounded-full mr-4 border-2 border-primary"
                />
                <div>
                    <h3 className="text-xl font-semibold">{user.name}</h3>
                    <p className="text-gray-400">{user.role}</p>
                </div>
            </div>

            <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Level {user.level}</span>
                    <span className="text-sm text-primary">{user.experience} XP</span>
                </div>
                <div className="w-full bg-black rounded-full h-2">
                    <div 
                        className="bg-primary rounded-full h-2"
                        style={{ width: `${(user.experience % 1000) / 10}%` }}
                    />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                    <Trophy className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-lg font-semibold">{user.achievements}</div>
                    <div className="text-xs text-gray-400">Achievements</div>
                </div>
                <div className="text-center">
                    <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-lg font-semibold">{user.completedCourses}</div>
                    <div className="text-xs text-gray-400">Courses</div>
                </div>
                <div className="text-center">
                    <Code className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-lg font-semibold">{user.solvedProblems}</div>
                    <div className="text-xs text-gray-400">Problems</div>
                </div>
            </div>

            <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill, index) => (
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
                href={`/profile/${user.name.toLowerCase().replace(' ', '-')}`}
                className="block w-full bg-primary text-white text-center py-2 rounded-full 
                         hover:bg-white hover:text-primary transition-all duration-300"
            >
                View Profile
            </Link>
        </motion.div>
    );
};

export default UserProfileCard; 