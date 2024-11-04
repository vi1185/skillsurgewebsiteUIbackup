'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Code, Layout, Database, Server, Globe } from 'lucide-react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PracticeProjectsPage = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedDifficulty, setSelectedDifficulty] = useState('All')

    const projects = [
        {
            title: "E-Commerce Dashboard",
            category: "Frontend",
            difficulty: "Intermediate",
            duration: "2-3 weeks",
            icon: <Layout className="w-6 h-6" />,
            technologies: ["React", "Tailwind CSS", "Chart.js"],
            description: "Build a responsive admin dashboard with modern features"
        },
        {
            title: "Social Media API",
            category: "Backend",
            difficulty: "Advanced",
            duration: "3-4 weeks",
            icon: <Server className="w-6 h-6" />,
            technologies: ["Node.js", "Express", "MongoDB"],
            description: "Create a RESTful API with authentication and real-time features"
        },
        {
            title: "Task Management App",
            category: "Full Stack",
            difficulty: "Intermediate",
            duration: "2-3 weeks",
            icon: <Globe className="w-6 h-6" />,
            technologies: ["Next.js", "PostgreSQL", "Prisma"],
            description: "Develop a complete task management solution"
        },
        {
            title: "Real-time Chat Application",
            category: "Full Stack",
            difficulty: "Advanced",
            duration: "4 weeks",
            icon: <Database className="w-6 h-6" />,
            technologies: ["React", "Socket.io", "Express"],
            description: "Build a real-time messaging platform"
        },
        {
            title: "Portfolio Website",
            category: "Frontend",
            difficulty: "Beginner",
            duration: "1-2 weeks",
            icon: <Code className="w-6 h-6" />,
            technologies: ["React", "Three.js", "GSAP"],
            description: "Create an interactive portfolio with 3D elements"
        }
    ]

    const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced']

    const filteredProjects = projects.filter(project => 
        (selectedDifficulty === 'All' || project.difficulty === selectedDifficulty) &&
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
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
                                Practice Projects
                            </motion.h1>
                            <motion.p 
                                className="text-xl md:text-2xl text-gray-300 mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                Build real-world projects to strengthen your portfolio and gain practical experience
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
                                        placeholder="Search projects..."
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

                {/* Projects Grid */}
                <section className="py-12 bg-black">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, index) => (
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
                                            {project.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold">{project.title}</h3>
                                    </div>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} 
                                                className="bg-black/50 text-gray-300 px-3 py-1 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className={`text-sm px-3 py-1 rounded-full ${
                                            project.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                                            project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-red-100 text-red-700'
                                        }`}>
                                            {project.difficulty}
                                        </span>
                                        <span className="text-sm text-gray-400">⏱️ {project.duration}</span>
                                    </div>
                                    <button className="w-full bg-primary text-white py-2 rounded-full 
                                                     hover:bg-white hover:text-primary transition-all duration-300">
                                        Start Project
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 bg-dark-gray">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text 
                                     text-transparent bg-gradient-to-r from-primary to-secondary">
                            Why Build Projects?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: 'Practical Experience', icon: '🎯', description: 'Apply your knowledge to real-world scenarios' },
                                { title: 'Portfolio Building', icon: '💼', description: 'Create impressive projects to showcase to employers' },
                                { title: 'Skill Development', icon: '📈', description: 'Master new technologies through hands-on practice' }
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-black rounded-xl p-6 text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-4xl mb-4">{benefit.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                    <p className="text-gray-300">{benefit.description}</p>
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
                            Ready to Start Building?
                        </motion.h2>
                        <motion.p
                            className="text-xl mb-8 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Join our community and start building real-world projects that matter.
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
                                Get Started Now
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default PracticeProjectsPage 