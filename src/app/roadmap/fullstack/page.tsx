'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RoadmapFlow from '../../components/RoadmapFlow';

const FullStackRoadmap = () => {
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
                            Full Stack Development Roadmap
                        </motion.h1>
                        <motion.p
                            className="text-xl text-center text-gray-300 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Master both frontend and backend development with this comprehensive learning path
                        </motion.p>
                    </div>
                </section>

                <section className="py-12 bg-dark-gray">
                    <div className="container mx-auto px-4">
                        <RoadmapFlow roadmapId="fullstack-development" />
                    </div>
                </section>

                {/* Core Technologies Section */}
                <section className="py-20 bg-black">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Core Technologies</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Frontend Stack */}
                            <motion.div
                                className="bg-dark-gray rounded-xl p-6"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-semibold mb-6 text-primary">Frontend Stack</h3>
                                <ul className="space-y-4">
                                    {[
                                        'HTML5, CSS3, JavaScript (ES6+)',
                                        'React.js & Next.js',
                                        'State Management (Redux, Context API)',
                                        'CSS Frameworks (Tailwind CSS)',
                                        'TypeScript',
                                        'Frontend Testing (Jest, RTL)',
                                    ].map((tech, index) => (
                                        <li key={index} className="flex items-center">
                                            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Backend Stack */}
                            <motion.div
                                className="bg-dark-gray rounded-xl p-6"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-semibold mb-6 text-secondary">Backend Stack</h3>
                                <ul className="space-y-4">
                                    {[
                                        'Node.js & Express.js',
                                        'Databases (PostgreSQL, MongoDB)',
                                        'API Development (REST, GraphQL)',
                                        'Authentication & Authorization',
                                        'Server-side Testing',
                                        'Cloud Services (AWS, Vercel)',
                                    ].map((tech, index) => (
                                        <li key={index} className="flex items-center">
                                            <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Learning Path Timeline */}
                <section className="py-20 bg-dark-gray">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Learning Timeline</h2>
                        <div className="max-w-3xl mx-auto">
                            {[
                                { phase: 'Foundation (2-3 months)', focus: 'HTML, CSS, JavaScript basics, and development environment setup' },
                                { phase: 'Frontend Development (3-4 months)', focus: 'React.js, state management, and responsive design' },
                                { phase: 'Backend Development (3-4 months)', focus: 'Node.js, Express, databases, and API development' },
                                { phase: 'Advanced Concepts (2-3 months)', focus: 'Authentication, deployment, testing, and optimization' },
                                { phase: 'Specialization (2-3 months)', focus: 'Advanced frameworks, cloud services, and real-world projects' },
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
                                    <p className="text-gray-300">{phase.focus}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="py-20 bg-black">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Practice Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: 'E-commerce Platform', level: 'Advanced', duration: '4-6 weeks' },
                                { title: 'Social Media App', level: 'Intermediate', duration: '3-4 weeks' },
                                { title: 'Task Management System', level: 'Intermediate', duration: '2-3 weeks' },
                            ].map((project, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-dark-gray rounded-xl p-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <div className="flex justify-between text-sm text-gray-400 mb-4">
                                        <span>{project.level}</span>
                                        <span>{project.duration}</span>
                                    </div>
                                    <button className="w-full bg-primary text-white py-2 rounded-full 
                                                     hover:bg-white hover:text-primary transition-all duration-300">
                                        View Project
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-primary to-secondary">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-8">Ready to Become a Full Stack Developer?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Start your journey to becoming a versatile full stack developer today.
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

export default FullStackRoadmap; 