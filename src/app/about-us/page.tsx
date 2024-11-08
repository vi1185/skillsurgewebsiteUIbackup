'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, Calendar, Users, Code, BookOpen, Brain } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GridPattern from '@/components/ui/animated-grid-pattern';

const AboutUsPage = () => {
    const teamMembers = [
        { name: 'Vishal', role: 'CEO', avatar: '👨‍💼', bio: 'Visionary leader passionate about tech education' },
        { name: 'Ankit', role: 'CTO', avatar: '👨‍💻', bio: 'Tech guru with a knack for innovative solutions' },
        { name: 'Dheeraj', role: 'CMO', avatar: '👨‍💼', bio: 'Marketing wizard driving SkillSurge\'s growth' },
        { name: 'Divyansh', role: 'Head of Community', avatar: '👥', bio: 'Community builder fostering collaboration' },
    ];

    return (
        <div className="bg-black text-white min-h-screen font-sans">
            <Header />
            <main>
                {/* Hero Section with Grid Pattern */}
                <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
                    <div className="absolute inset-0">
                        <GridPattern 
                            width={32} 
                            height={32} 
                            className="absolute inset-0 h-full w-full fill-primary/20 stroke-primary/20"
                            numSquares={100}
                            maxOpacity={0.3}
                            duration={8}
                        />
                    </div>
                    <div className="relative container mx-auto px-4 z-10">
                        <motion.h1 
                            className="text-4xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent 
                                     bg-gradient-to-r from-primary to-secondary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Our Story
                        </motion.h1>
                        <motion.p 
                            className="text-xl text-center text-gray-300 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Building the future of tech education through community-driven learning and innovation.
                        </motion.p>
                    </div>
                </section>

                {/* Mission Section with Grid Pattern */}
                <section className="relative py-20 bg-dark-gray">
                    <div className="absolute inset-0 opacity-50">
                        <GridPattern 
                            width={40} 
                            height={40} 
                            className="absolute inset-0 h-full w-full fill-secondary/10 stroke-secondary/10"
                            numSquares={80}
                            maxOpacity={0.2}
                            duration={10}
                        />
                    </div>
                    <div className="relative container mx-auto px-4 z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent 
                                             bg-gradient-to-r from-primary to-secondary">
                                    Our Mission
                                </h2>
                                <p className="text-gray-300 mb-4">
                                    At SkillSurge, we're revolutionizing tech education by creating an 
                                    inclusive, interactive, and innovative learning environment.
                                </p>
                                <p className="text-gray-300">
                                    Our platform combines structured learning paths, hands-on practice, 
                                    and community support to help you master modern technologies.
                                </p>
                            </motion.div>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: <Code />, label: 'Practice-First Learning' },
                                    { icon: <Users />, label: 'Community Support' },
                                    { icon: <BookOpen />, label: 'Structured Roadmaps' },
                                    { icon: <Brain />, label: 'Interactive Learning' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-black/30 backdrop-blur-sm p-6 rounded-xl text-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="text-primary mb-3">{item.icon}</div>
                                        <div className="text-sm font-medium">{item.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section with Grid Pattern */}
                <section className="relative py-20 bg-black">
                    <div className="absolute inset-0">
                        <GridPattern 
                            width={48} 
                            height={48} 
                            className="absolute inset-0 h-full w-full fill-primary/10 stroke-primary/10"
                            numSquares={60}
                            maxOpacity={0.2}
                            duration={12}
                        />
                    </div>
                    <div className="relative container mx-auto px-4 z-10">
                        <motion.h2 
                            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent 
                                     bg-gradient-to-r from-primary to-secondary"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Meet Our Team
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-dark-gray/50 backdrop-blur-sm rounded-xl p-6 text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="text-4xl mb-4">{member.avatar}</div>
                                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                    <p className="text-primary mb-3">{member.role}</p>
                                    <p className="text-gray-300 text-sm">{member.bio}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-20 bg-gradient-to-r from-primary to-secondary">
                    <div className="container mx-auto px-4 text-center">
                        <motion.h2
                            className="text-3xl font-bold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Join Our Journey
                        </motion.h2>
                        <motion.p
                            className="text-xl mb-8 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Be part of a community that's shaping the future of tech education.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/signup"
                                className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold 
                                         hover:bg-black hover:text-white transition-all duration-300 
                                         transform hover:scale-105 inline-block"
                            >
                                Join SkillSurge
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUsPage;