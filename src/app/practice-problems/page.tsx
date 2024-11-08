'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Layout, Search, Server, Filter } from 'lucide-react'
import Link from 'next/link'
import Footer from '../components/Footer'
import PracticeProblemCard from './components/PracticeProblemCard'
import Header from '../components/Header'

const PracticeProblemsPage = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedDifficulty, setSelectedDifficulty] = useState('All')
    const [selectedCategory, setSelectedCategory] = useState('All')

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
        (selectedCategory === 'All' || problem.category === selectedCategory) &&
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
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Sidebar */}
                            <aside className="w-full lg:w-1/4 bg-black/80 p-6 rounded-xl">
                                {/* Search Bar */}
                                <div className="mb-6">
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
                                
                                {/* Difficulty Filters */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-4">Difficulty</h3>
                                    <div className="flex flex-col space-y-2">
                                        {difficulties.map((difficulty) => (
                                            <button
                                                key={difficulty}
                                                className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
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
                                
                                {/* Category Filters */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-4">Category</h3>
                                    <div className="flex flex-col space-y-2">
                                        {['All', 'Algorithms', 'Frontend', 'Backend'].map((category) => (
                                            <button
                                                key={category}
                                                className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                                    selectedCategory === category
                                                        ? 'bg-primary text-white'
                                                        : 'bg-black text-white hover:bg-primary/20'
                                                }`}
                                                onClick={() => setSelectedCategory(category)}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </aside>

                            {/* Main Content */}
                            <section className="w-full lg:w-3/4">
                                {filteredProblems.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {filteredProblems.map((problem, index) => (
                                            <PracticeProblemCard key={index} problem={problem} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center text-gray-300">
                                        No problems match your search criteria.
                                    </div>
                                )}
                            </section>
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