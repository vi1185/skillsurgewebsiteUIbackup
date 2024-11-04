'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RoadmapFlow from '../../components/RoadmapFlow';

const FrontendRoadmap = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <Header />
            <main className="pt-24 pb-12">
                <section className="py-12 bg-gradient-to-b from-black to-dark-gray">
                    <div className="container mx-auto px-4">
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold text-center mb-6 bg-clip-text 
                                     text-transparent bg-gradient-to-r from-primary to-secondary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Frontend Development Roadmap
                        </motion.h1>
                        <motion.p
                            className="text-xl text-center text-gray-300 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Master modern frontend development with this comprehensive learning path
                        </motion.p>
                    </div>
                </section>

                <section className="py-12 bg-dark-gray">
                    <div className="container mx-auto px-4">
                        <RoadmapFlow roadmapId="frontend-development" />
                    </div>
                </section>

                {/* Resources Section */}
                <section className="py-20 bg-black">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Essential Resources</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Documentation',
                                    description: 'Official documentation and guides for frontend technologies',
                                    links: ['MDN Web Docs', 'React Documentation', 'TypeScript Handbook']
                                },
                                {
                                    title: 'Practice Projects',
                                    description: 'Real-world projects to build your portfolio',
                                    links: ['Portfolio Website', 'E-commerce Dashboard', 'Social Media App']
                                },
                                {
                                    title: 'Community Support',
                                    description: 'Connect with other frontend developers',
                                    links: ['Discord Channel', 'Study Groups', 'Code Reviews']
                                }
                            ].map((resource, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-dark-gray rounded-xl p-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-xl font-semibold mb-4">{resource.title}</h3>
                                    <p className="text-gray-400 mb-4">{resource.description}</p>
                                    <ul className="space-y-2">
                                        {resource.links.map((link, linkIndex) => (
                                            <li key={linkIndex} className="text-primary hover:text-white cursor-pointer">
                                                {link}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Learning Path Progress */}
                <section className="py-20 bg-dark-gray">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Your Progress</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { label: 'Completed Modules', value: '0/16' },
                                { label: 'Current Level', value: 'Beginner' },
                                { label: 'Hours Spent', value: '0' },
                                { label: 'Projects Done', value: '0' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-black rounded-xl p-6 text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                                    <div className="text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Next Steps */}
                <section className="py-20 bg-gradient-to-r from-primary to-secondary">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-8">Ready to Start Your Journey?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Begin your frontend development journey today and build amazing web experiences.
                        </p>
                        <button className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold 
                                         hover:bg-black hover:text-white transition-all duration-300">
                            Start Learning
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default FrontendRoadmap; 