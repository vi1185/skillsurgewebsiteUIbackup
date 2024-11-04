'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Code, Layout, Database, Server } from 'lucide-react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PracticeProblemsPage = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedDifficulty, setSelectedDifficulty] = useState('All')

    const problems = [
        {
            title: "Two Sum Problem",
            category: "Algorithms",
            difficulty: "Easy",
            icon: <Code className="w-6 h-6" />,
            completions: 1234,
            rating: 4.5,
            description: "Find two numbers in an array that add up to a target value"
        },
        {
            title: "Responsive Grid Layout",
            category: "Frontend",
            difficulty: "Medium",
            icon: <Layout className="w-6 h-6" />,
            completions: 856,
            rating: 4.8,
            description: "Create a responsive grid system using CSS Grid"
        },
        {
            title: "REST API Authentication",
            category: "Backend",
            difficulty: "Hard",
            icon: <Server className="w-6 h-6" />,
            completions: 645,
            rating: 4.7,
            description: "Implement secure authentication in a REST API"
        },
        // Add more problems...
    ]

    const difficulties = ['All', 'Easy', 'Medium', 'Hard']

    const filteredProblems = problems.filter(problem => 
        (selectedDifficulty === 'All' || problem.difficulty === selectedDifficulty) &&
        problem.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="bg-black text-white min-h-screen font-sans">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-black to-dark-gray">
                    <div className="container mx-auto px-4">
                        <div className="text-center">
                            <motion.h1 
                                className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent 
                                         bg-gradient-to-r from-primary to-secondary"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Practice Problems
                            </motion.h1>
                            <motion.p 
                                className="text-xl md:text-2xl text-gray-300 mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                Sharpen your coding skills with our curated collection of challenges
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Search and Filter Section */}
                <section className="py-12 bg-dark-gray">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search problems..."
                                        className="w-full bg-black text-white rounded-full py-2 px-4 pl-10 
                                                 focus:outline-none focus:ring-2 focus:ring-primary"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 flex justify-center md:justify-end space-x-4 overflow-x-auto">
                                {difficulties.map((difficulty) => (
                                    <button
                                        key={difficulty}
                                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                            selectedDifficulty === difficulty
                                                ? 'bg-primary text-white'
                                                : 'bg-black text-white hover:bg-primary/20'
                                        }`}
                                        onClick={() => setSelectedDifficulty(difficulty)}
                                    >
                                        {difficulty}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problems Grid */}
                <section className="py-12 bg-black">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProblems.map((problem, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-dark-gray rounded-xl p-6 hover:bg-gradient-to-br 
                                             hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 
                                             transform hover:scale-105"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="bg-primary rounded-full p-2 mr-4">
                                            {problem.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold">{problem.title}</h3>
                                    </div>
                                    <p className="text-gray-300 mb-4">{problem.description}</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className={`text-sm px-3 py-1 rounded-full ${
                                            problem.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                                            problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-red-100 text-red-700'
                                        }`}>
                                            {problem.difficulty}
                                        </span>
                                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                                            <span>⭐ {problem.rating}</span>
                                            <span>🏆 {problem.completions}</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-primary text-white py-2 rounded-full 
                                                     hover:bg-white hover:text-primary transition-all duration-300">
                                        Solve Now
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Progress Section */}
                <section className="py-20 bg-dark-gray">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text 
                                     text-transparent bg-gradient-to-r from-primary to-secondary">
                            Your Progress
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { label: 'Problems Solved', value: '0' },
                                { label: 'Success Rate', value: '0%' },
                                { label: 'Current Streak', value: '0' },
                                { label: 'Total Points', value: '0' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-black rounded-xl p-6 text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                                    <div className="text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-primary to-secondary">
                    <div className="container mx-auto px-4 text-center">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Ready to Challenge Yourself?
                        </motion.h2>
                        <motion.p
                            className="text-xl mb-8 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Start solving problems and track your progress towards mastery.
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
                                         transform hover:scale-105">
                                Start Practicing Now
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default PracticeProblemsPage 