'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CodingQuiz from '../components/CodingQuiz';

const QuizPage = () => {
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
                            Test Your Coding Knowledge
                        </motion.h1>
                        <motion.p 
                            className="text-xl text-center text-gray-300 mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Challenge yourself with AI-generated coding questions
                        </motion.p>

                        {/* Quiz Instructions */}
                        <motion.div
                            className="max-w-2xl mx-auto mb-12 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-dark-gray rounded-xl p-6">
                                    <div className="text-2xl mb-2">1</div>
                                    <h3 className="text-lg font-semibold mb-2">Choose Topic</h3>
                                    <p className="text-gray-400">Select your programming language and difficulty level</p>
                                </div>
                                <div className="bg-dark-gray rounded-xl p-6">
                                    <div className="text-2xl mb-2">2</div>
                                    <h3 className="text-lg font-semibold mb-2">Get Questions</h3>
                                    <p className="text-gray-400">Receive AI-generated questions tailored to your selection</p>
                                </div>
                                <div className="bg-dark-gray rounded-xl p-6">
                                    <div className="text-2xl mb-2">3</div>
                                    <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
                                    <p className="text-gray-400">Monitor your learning journey and improvement</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quiz Component */}
                        <CodingQuiz />
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-dark-gray">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Quiz Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'AI-Generated Questions',
                                    description: 'Get unique questions every time, tailored to your level'
                                },
                                {
                                    title: 'Progressive Hints',
                                    description: 'Receive gradual hints to guide your learning process'
                                },
                                {
                                    title: 'Detailed Explanations',
                                    description: 'Learn from comprehensive explanations and examples'
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-black rounded-xl p-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
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

export default QuizPage; 