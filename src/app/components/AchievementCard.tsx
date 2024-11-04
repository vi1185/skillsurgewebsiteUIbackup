'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Calendar } from 'lucide-react';

interface AchievementCardProps {
    achievement: {
        title: string;
        description: string;
        icon: string;
        rarity: 'common' | 'rare' | 'epic' | 'legendary';
        unlockedAt?: Date;
        progress?: {
            current: number;
            total: number;
        };
    };
}

const AchievementCard = ({ achievement }: AchievementCardProps) => {
    const rarityColors = {
        common: 'bg-gray-500',
        rare: 'bg-blue-500',
        epic: 'bg-purple-500',
        legendary: 'bg-yellow-500'
    };

    const isUnlocked = achievement.unlockedAt !== undefined;

    return (
        <motion.div
            className={`bg-dark-gray rounded-xl p-6 ${
                isUnlocked ? 'hover:bg-gradient-to-br hover:from-primary/20 hover:to-secondary/20' : 'opacity-50'
            } transition-all duration-300`}
            whileHover={isUnlocked ? { y: -5 } : undefined}
        >
            <div className="flex items-center mb-4">
                <div className={`text-4xl mr-4 ${isUnlocked ? '' : 'grayscale'}`}>
                    {achievement.icon}
                </div>
                <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                        {achievement.title}
                        <span className={`text-xs px-2 py-1 rounded-full text-white ${rarityColors[achievement.rarity]}`}>
                            {achievement.rarity}
                        </span>
                    </h3>
                    <p className="text-sm text-gray-400">{achievement.description}</p>
                </div>
            </div>

            {achievement.progress && !isUnlocked && (
                <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Progress</span>
                        <span>{achievement.progress.current} / {achievement.progress.total}</span>
                    </div>
                    <div className="w-full bg-black rounded-full h-2">
                        <div 
                            className="bg-primary rounded-full h-2"
                            style={{ 
                                width: `${(achievement.progress.current / achievement.progress.total) * 100}%` 
                            }}
                        />
                    </div>
                </div>
            )}

            {isUnlocked && (
                <div className="flex items-center text-sm text-primary">
                    <Calendar className="w-4 h-4 mr-2" />
                    Unlocked on {achievement.unlockedAt?.toLocaleDateString()}
                </div>
            )}
        </motion.div>
    );
};

export default AchievementCard; 