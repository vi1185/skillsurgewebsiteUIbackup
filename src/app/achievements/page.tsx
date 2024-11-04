'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AchievementCard from '../components/AchievementCard';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const AchievementsPage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [achievements, setAchievements] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchAchievements = async () => {
            try {
                const response = await fetch('/api/achievements');
                const data = await response.json();
                setAchievements(data);
            } catch (error) {
                console.error('Failed to fetch achievements:', error);
            } finally {
                setLoading(false);
            }
        };

        if (session) {
            fetchAchievements();
        }
    }, [session]);

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
                {/* Hero Section */}
                <section className="py-12 bg-gradient-to-b from-black to-dark-gray">
                    <div className="container mx-auto px-4">
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold text-center mb-6 bg-clip-text 
                                     text-transparent bg-gradient-to-r from-primary to-secondary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Your Achievements
                        </motion.h1>
                        <motion.p
                            className="text-xl text-center text-gray-300 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Track your progress and unlock new milestones
                        </motion.p>
                    </div>
                </section>

                {/* Achievements Grid */}
                <section className="py-12 bg-dark-gray">
                    <div className="container mx-auto px-4">
                        {loading ? (
                            <div className="text-center">Loading achievements...</div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {achievements.map((achievement, index) => (
                                    <AchievementCard
                                        key={achievement.id}
                                        achievement={achievement}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AchievementsPage; 