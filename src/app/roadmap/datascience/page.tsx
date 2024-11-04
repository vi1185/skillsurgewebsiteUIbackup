'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RoadmapFlow from '../../components/RoadmapFlow';
import { Database, ChartBar, Brain, Code, Server } from 'lucide-react';

const DataScienceRoadmap = () => {
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
                            Data Science Roadmap
                        </motion.h1>
                        <motion.p
                            className="text-xl text-center text-gray-300 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Master data science and machine learning with this comprehensive learning path
                        </motion.p>
                    </div>
                </section>

                <section className="py-12 bg-dark-gray">
                    <div className="container mx-auto px-4">
                        <RoadmapFlow roadmapId="datascience" />
                    </div>
                </section>

                {/* Core Skills Section */}
                <section className="py-20 bg-black">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Core Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Programming Skills */}
                            <motion.div
                                className="bg-dark-gray rounded-xl p-6"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-semibold mb-6 text-primary">Programming & Tools</h3>
                                <ul className="space-y-4">
                                    {[
                                        'Python Programming',
                                        'Jupyter Notebooks',
                                        'SQL & Database Management',
                                        'Version Control (Git)',
                                        'Data Structures & Algorithms',
                                        'Command Line & Shell Scripting',
                                    ].map((skill, index) => (
                                        <li key={index} className="flex items-center">
                                            <Code className="w-5 h-5 text-primary mr-2" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Data Analysis Skills */}
                            <motion.div
                                className="bg-dark-gray rounded-xl p-6"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-semibold mb-6 text-secondary">Data Analysis</h3>
                                <ul className="space-y-4">
                                    {[
                                        'Statistical Analysis',
                                        'Data Visualization',
                                        'Exploratory Data Analysis',
                                        'Feature Engineering',
                                        'Data Cleaning & Preprocessing',
                                        'Hypothesis Testing',
                                    ].map((skill, index) => (
                                        <li key={index} className="flex items-center">
                                            <ChartBar className="w-5 h-5 text-secondary mr-2" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Technologies Section */}
                <section className="py-20 bg-dark-gray">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Essential Technologies</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                {
                                    title: 'Data Processing',
                                    icon: <Database className="w-8 h-8" />,
                                    tools: ['NumPy', 'Pandas', 'PySpark', 'Dask']
                                },
                                {
                                    title: 'Machine Learning',
                                    icon: <Brain className="w-8 h-8" />,
                                    tools: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost']
                                },
                                {
                                    title: 'Visualization',
                                    icon: <ChartBar className="w-8 h-8" />,
                                    tools: ['Matplotlib', 'Seaborn', 'Plotly', 'Bokeh']
                                },
                                {
                                    title: 'Big Data',
                                    icon: <Server className="w-8 h-8" />,
                                    tools: ['Hadoop', 'Apache Spark', 'Kafka', 'Airflow']
                                }
                            ].map((tech, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-black rounded-xl p-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-primary mb-4 flex justify-center">
                                        {tech.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-center">{tech.title}</h3>
                                    <ul className="space-y-2">
                                        {tech.tools.map((tool, toolIndex) => (
                                            <li key={toolIndex} className="text-gray-400 text-center">
                                                {tool}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Learning Path Timeline */}
                <section className="py-20 bg-black">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Learning Timeline</h2>
                        <div className="max-w-3xl mx-auto">
                            {[
                                { phase: 'Foundation (2-3 months)', focus: 'Python programming, statistics, and mathematics fundamentals' },
                                { phase: 'Data Analysis (3-4 months)', focus: 'Data manipulation, visualization, and exploratory analysis' },
                                { phase: 'Machine Learning (4-5 months)', focus: 'ML algorithms, model training, and evaluation' },
                                { phase: 'Deep Learning (3-4 months)', focus: 'Neural networks, computer vision, and NLP' },
                                { phase: 'Specialization (2-3 months)', focus: 'Big data, MLOps, or specific domain expertise' },
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

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-primary to-secondary">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-8">Ready to Begin Your Data Science Journey?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Start your path to becoming a data scientist and unlock the power of data.
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

export default DataScienceRoadmap; 