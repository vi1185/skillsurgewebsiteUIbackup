'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Clock, Calendar } from 'lucide-react';

interface ProgressTrackerProps {
    stats: {
        totalPoints: number;
        currentStreak: number;
        hoursLearned: number;
        completionRate: number;
        lastActive: Date;
    };
}

const ProgressTracker = ({ stats }: ProgressTrackerProps) => {
    return (
        <div className="bg-dark-gray rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Learning Progress</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                    { icon: <Trophy />, label: 'Total Points', value: stats.totalPoints },
                    { icon: <Star />, label: 'Current Streak', value: `${stats.currentStreak} days` },
                    { icon: <Clock />, label: 'Hours Learned', value: stats.hoursLearned },
                    { icon: <Calendar />, label: 'Completion Rate', value: `${stats.completionRate}%` },
                ].map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center"
                    >
                        <div className="bg-primary/20 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center text-primary">
                            {stat.icon}
                        </div>
                        <div className="text-2xl font-bold mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-black rounded-xl p-4">
                <h3 className="text-sm font-semibold mb-4">Learning Activity</h3>
                <div className="grid grid-cols-7 gap-2">
                    {[...Array(28)].map((_, index) => {
                        const activity = Math.random() * 4; // Mock activity level
                        return (
                            <div
                                key={index}
                                className={`w-full pt-[100%] rounded-sm ${
                                    activity === 0 ? 'bg-gray-800' :
                                    activity < 2 ? 'bg-primary/30' :
                                    activity < 3 ? 'bg-primary/60' :
                                    'bg-primary'
                                }`}
                            />
                        );
                    })}
                </div>
                <div className="mt-4 text-xs text-gray-400 text-right">
                    Last active: {stats.lastActive.toLocaleDateString()}
                </div>
            </div>
        </div>
    );
};

export default ProgressTracker; 