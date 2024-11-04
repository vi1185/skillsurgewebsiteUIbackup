'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CodePlayground from '../components/CodePlayground';

const PlaygroundPage = () => {
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
                            Code Playground
                        </motion.h1>
                        <motion.p
                            className="text-xl text-center text-gray-300 mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Write, run, and experiment with code in real-time
                        </motion.p>

                        <CodePlayground />
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-dark-gray">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Playground Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Multiple Languages',
                                    description: 'Support for JavaScript, Python, TypeScript, and more'
                                },
                                {
                                    title: 'Real-time Execution',
                                    description: 'Run your code and see results instantly'
                                },
                                {
                                    title: 'Code Sharing',
                                    description: 'Share your code snippets with others'
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

export default PlaygroundPage; 