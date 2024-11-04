'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RoadmapFlow from '../../components/RoadmapFlow';

const BackendRoadmap = () => {
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
                            Backend Development Roadmap
                        </motion.h1>
                        <motion.p
                            className="text-xl text-center text-gray-300 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Master server-side development with this comprehensive learning path
                        </motion.p>
                    </div>
                </section>

                <section className="py-12 bg-dark-gray">
                    <div className="container mx-auto px-4">
                        <RoadmapFlow roadmapId="backend-development" />
                    </div>
                </section>

                {/* Core Concepts Section */}
                <section className="py-20 bg-black">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Core Backend Concepts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Server Architecture',
                                    topics: ['RESTful APIs', 'Microservices', 'Serverless', 'GraphQL']
                                },
                                {
                                    title: 'Databases',
                                    topics: ['SQL', 'NoSQL', 'ORM/ODM', 'Database Design']
                                },
                                {
                                    title: 'Security',
                                    topics: ['Authentication', 'Authorization', 'Data Protection', 'Security Best Practices']
                                }
                            ].map((concept, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-dark-gray rounded-xl p-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-xl font-semibold mb-4">{concept.title}</h3>
                                    <ul className="space-y-2">
                                        {concept.topics.map((topic, topicIndex) => (
                                            <li key={topicIndex} className="flex items-center text-gray-300">
                                                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technologies Section */}
                <section className="py-20 bg-dark-gray">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Technology Stack</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { category: 'Languages', items: ['Node.js', 'Python', 'Java', 'Go'] },
                                { category: 'Frameworks', items: ['Express', 'Django', 'Spring Boot', 'FastAPI'] },
                                { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
                                { category: 'Tools', items: ['Docker', 'Kubernetes', 'Git', 'CI/CD'] }
                            ].map((stack, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-black rounded-xl p-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-xl font-semibold mb-4 text-primary">{stack.category}</h3>
                                    <ul className="space-y-2">
                                        {stack.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="text-gray-300">{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Learning Path */}
                <section className="py-20 bg-black">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Learning Path</h2>
                        <div className="max-w-3xl mx-auto">
                            {[
                                { phase: 'Foundation', duration: '2-3 months', focus: 'Basic programming concepts, HTTP, APIs' },
                                { phase: 'Core Backend', duration: '3-4 months', focus: 'Databases, server frameworks, authentication' },
                                { phase: 'Advanced Concepts', duration: '4-5 months', focus: 'Scaling, security, microservices' },
                                { phase: 'Specialization', duration: '3-4 months', focus: 'Cloud services, DevOps, specific domains' }
                            ].map((phase, index) => (
                                <motion.div
                                    key={index}
                                    className="relative pl-8 pb-12 border-l-2 border-primary/20 last:border-0"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                                    <h3 className="text-xl font-semibold mb-2">{phase.phase}</h3>
                                    <p className="text-primary mb-2">{phase.duration}</p>
                                    <p className="text-gray-300">{phase.focus}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-primary to-secondary">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-8">Ready to Start Your Backend Journey?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Begin your path to becoming a backend developer today and build scalable, secure applications.
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

export default BackendRoadmap; 