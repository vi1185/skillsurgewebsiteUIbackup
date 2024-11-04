'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { BookOpen, Code, Layout, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DashboardPage = () => {
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
        <div className="bg-black text-white min-h-screen font-sans">
            <Header />
            <main className="pt-24">
                {/* Welcome Section */}
                <section className="py-12 bg-gradient-to-b from-black to-dark-gray">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl font-bold mb-4">
                                Welcome back, <span className="text-primary">{session.user.name}</span>
                            </h1>
                            <p className="text-gray-300">Continue your learning journey</p>
                        </motion.div>
                    </div>
                </section>

                {/* Progress Overview */}
                <section className="py-12 bg-dark-gray">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-8">Your Progress</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { title: 'Completed Courses', value: '0', icon: <BookOpen /> },
                                { title: 'Practice Problems', value: '0', icon: <Code /> },
                                { title: 'Projects Done', value: '0', icon: <Layout /> },
                                { title: 'Achievements', value: '0', icon: <Award /> },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-black rounded-xl p-6"
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="p-3 bg-primary/20 rounded-lg text-primary mr-4">
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold">{stat.title}</h3>
                                            <p className="text-3xl font-bold text-primary">{stat.value}</p>
                                        </div>
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
                        <div className="bg-dark-gray rounded-xl p-6">
                            <p className="text-gray-400 text-center py-8">No recent activity</p>
                        </div>
                    </div>
                </section>

                {/* Recommended Next Steps */}
                <section className="py-12 bg-dark-gray">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-8">Recommended Next Steps</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: 'Complete Your Profile', description: 'Add more details to your profile to personalize your experience' },
                                { title: 'Start a Learning Path', description: 'Choose a roadmap that matches your goals' },
                                { title: 'Join the Community', description: 'Connect with other learners and share your journey' },
                            ].map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-black rounded-xl p-6"
                                >
                                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                    <p className="text-gray-400 mb-4">{step.description}</p>
                                    <button className="text-primary hover:text-white hover:bg-primary px-4 py-2 rounded-full border border-primary transition-all duration-300">
                                        Get Started
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

export default DashboardPage; 