'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Zap, Target, Calendar, ArrowUp, BookOpen } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

// Mock data - Replace with actual data from your backend
const mockProgress = {
  totalPoints: 1250,
  currentStreak: 7,
  longestStreak: 15,
  completedCourses: 3,
  skills: [
    { name: 'HTML/CSS', level: 4, progress: 80 },
    { name: 'JavaScript', level: 3, progress: 65 },
    { name: 'React', level: 2, progress: 45 },
    { name: 'Node.js', level: 1, progress: 25 },
  ],
  achievements: [
    { id: '1', title: 'First Step', description: 'Complete your first course', icon: '🎯', unlockedAt: new Date() },
    { id: '2', title: 'Quick Learner', description: '7-day study streak', icon: '⚡', unlockedAt: new Date() },
    { id: '3', title: 'Problem Solver', description: 'Solve 10 coding challenges', icon: '🧩', unlockedAt: new Date() },
  ],
  recentActivities: [
    { date: new Date(), action: 'Completed Module', details: 'JavaScript Basics: Variables and Functions' },
    { date: new Date(Date.now() - 86400000), action: 'Earned Achievement', details: 'Quick Learner' },
    { date: new Date(Date.now() - 172800000), action: 'Completed Project', details: 'Personal Portfolio Website' },
  ],
};

const ProgressPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    router.push('/login');
    return null;
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-24 pb-12">
        {/* Overview Section */}
        <section className="py-12 bg-gradient-to-b from-black to-dark-gray">
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent 
                       bg-gradient-to-r from-primary to-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Learning Progress
            </motion.h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Trophy />, label: 'Total Points', value: mockProgress.totalPoints },
                { icon: <Zap />, label: 'Current Streak', value: `${mockProgress.currentStreak} days` },
                { icon: <Target />, label: 'Completed Courses', value: mockProgress.completedCourses },
                { icon: <Calendar />, label: 'Longest Streak', value: `${mockProgress.longestStreak} days` },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-gray rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-primary mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Progress */}
        <section className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Skills Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockProgress.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-gray rounded-xl p-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span className="text-primary">Level {skill.level}</span>
                  </div>
                  <div className="w-full bg-black rounded-full h-2">
                    <motion.div
                      className="bg-primary rounded-full h-2"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-12 bg-dark-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockProgress.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-black rounded-xl p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{achievement.description}</p>
                  <div className="text-primary text-xs">
                    Unlocked {achievement.unlockedAt?.toLocaleDateString()}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Recent Activity</h2>
            <div className="space-y-4">
              {mockProgress.recentActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-gray rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center">
                    <div className="bg-primary/20 rounded-full p-2 mr-4">
                      <BookOpen className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{activity.action}</h3>
                      <p className="text-gray-400">{activity.details}</p>
                      <p className="text-xs text-primary mt-1">
                        {activity.date.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Suggestions Section */}
        <section className="py-12 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-6">Keep Growing!</h2>
            <p className="text-lg mb-8">
              Based on your progress, we recommend exploring these topics next:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'Advanced React Patterns',
                'Node.js Backend Development',
                'API Design Principles',
              ].map((topic, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="font-semibold mb-2">{topic}</h3>
                  <button className="bg-white text-primary px-4 py-2 rounded-full text-sm 
                                   hover:bg-black hover:text-white transition-all duration-300">
                    Start Learning
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProgressPage; 