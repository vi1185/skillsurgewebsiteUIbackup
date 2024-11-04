'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Database, Palette, Server, Smartphone, Globe, Search, Users, Briefcase } from 'lucide-react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const RoadmapPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const roadmaps = [
    { title: 'Frontend Development', icon: <Code className="w-6 h-6" />, category: 'Web Development', popularity: 95, difficulty: 'Intermediate' },
    { title: 'Backend Development', icon: <Server className="w-6 h-6" />, category: 'Web Development', popularity: 90, difficulty: 'Advanced' },
    { title: 'Full Stack Development', icon: <Globe className="w-6 h-6" />, category: 'Web Development', popularity: 88, difficulty: 'Advanced' },
    { title: 'Mobile App Development', icon: <Smartphone className="w-6 h-6" />, category: 'Mobile', popularity: 85, difficulty: 'Intermediate' },
    { title: 'Data Science', icon: <Database className="w-6 h-6" />, category: 'Data', popularity: 92, difficulty: 'Advanced' },
    { title: 'Machine Learning', icon: <Briefcase className="w-6 h-6" />, category: 'AI', popularity: 89, difficulty: 'Expert' },
    { title: 'UI/UX Design', icon: <Palette className="w-6 h-6" />, category: 'Design', popularity: 82, difficulty: 'Intermediate' },
    { title: 'DevOps', icon: <Server className="w-6 h-6" />, category: 'Operations', popularity: 87, difficulty: 'Advanced' },
    { title: 'Cybersecurity', icon: <Users className="w-6 h-6" />, category: 'Security', popularity: 86, difficulty: 'Advanced' },
    { title: 'Cloud Computing', icon: <Globe className="w-6 h-6" />, category: 'Infrastructure', popularity: 91, difficulty: 'Intermediate' },
    { title: 'Blockchain Development', icon: <Database className="w-6 h-6" />, category: 'Emerging Tech', popularity: 80, difficulty: 'Expert' },
    { title: 'Game Development', icon: <Smartphone className="w-6 h-6" />, category: 'Gaming', popularity: 83, difficulty: 'Advanced' },
  ]

  const categories = ['All', ...new Set(roadmaps.map(roadmap => roadmap.category))]

  const filteredRoadmaps = roadmaps.filter(roadmap => 
    (selectedCategory === 'All' || roadmap.category === selectedCategory) &&
    roadmap.title.toLowerCase().includes(searchTerm.toLowerCase())
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
                className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Explore Learning Roadmaps
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Discover the perfect learning path to achieve your career goals
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
                    placeholder="Search roadmaps..."
                    className="w-full bg-black text-white rounded-full py-2 px-4 pl-10 
                             focus:outline-none focus:ring-2 focus:ring-primary"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-end space-x-4 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
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
          </div>
        </section>

        {/* Roadmaps Grid */}
        <section className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRoadmaps.map((roadmap, index) => (
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
                      {roadmap.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{roadmap.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">Category: {roadmap.category}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">Popularity: {roadmap.popularity}%</span>
                    <span className="text-sm text-gray-400">Difficulty: {roadmap.difficulty}</span>
                  </div>
                  <Link 
                    href={`/roadmap/${roadmap.title.toLowerCase().replace(/ /g, '-')}`}
                    className="w-full bg-primary text-white py-2 rounded-full 
                             hover:bg-white hover:text-primary transition-all duration-300"
                  >
                    View Roadmap
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Roadmap */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Featured Roadmap: Full Stack Development
            </h2>
            <div className="bg-black rounded-xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold">Full Stack Development</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Master both frontend and backend technologies to become a versatile full stack developer.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Key Technologies</h4>
                  <ul className="space-y-2">
                    {['HTML, CSS, JavaScript', 'React, Vue, or Angular', 'Node.js, Express', 'Databases (SQL, NoSQL)'].map((tech, index) => (
                      <li key={index} className="flex items-center">
                        <ArrowRight className="w-4 h-4 text-primary mr-2" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Career Opportunities</h4>
                  <ul className="space-y-2">
                    {['Full Stack Developer', 'Software Engineer', 'Web Application Developer', 'Technical Lead'].map((career, index) => (
                      <li key={index} className="flex items-center">
                        <ArrowRight className="w-4 h-4 text-primary mr-2" />
                        <span>{career}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className="w-full bg-primary text-white py-3 rounded-full 
                               hover:bg-white hover:text-primary transition-all duration-300 
                               text-lg font-semibold">
                Start Full Stack Development Roadmap
              </button>
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
              Ready to Start Your Learning Journey?
            </motion.h2>
            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Choose from our curated roadmaps and take the first step towards mastering new skills 
              and advancing your career.
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
                Sign Up and Start Learning
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default RoadmapPage 