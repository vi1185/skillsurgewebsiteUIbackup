'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SkillsPage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [skills, setSkills] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch('/api/skills');
                const data = await response.json();
                setSkills(data);
            } catch (error) {
                console.error('Failed to fetch skills:', error);
            } finally {
                setLoading(false);
            }
        };

        if (session) {
            fetchSkills();
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
                            Your Skills
                        </motion.h1>
                        <motion.p
                            className="text-xl text-center text-gray-300 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Track your progress in different technologies
                        </motion.p>
                    </div>
                </section>

                {/* Skills Grid */}
                <section className="py-12 bg-dark-gray">
                    <div className="container mx-auto px-4">
                        {loading ? (
                            <div className="text-center">Loading skills...</div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.id}
                                        className="bg-black rounded-xl p-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-xl font-semibold">{skill.name}</h3>
                                            <span className="text-primary">Level {skill.level}</span>
                                        </div>
                                        <div className="w-full bg-dark-gray rounded-full h-2">
                                            <div
                                                className="bg-primary rounded-full h-2"
                                                style={{ width: `${skill.progress}%` }}
                                            />
                                        </div>
                                    </motion.div>
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

export default SkillsPage; 