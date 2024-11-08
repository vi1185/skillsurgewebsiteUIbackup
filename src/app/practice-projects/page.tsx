'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PracticeProjectCard from '../components/PracticeProjectCard'
import ProjectSubmissionForm from '../components/ProjectSubmissionForm'
import ProjectsList from '../components/ProjectsList'


const practiceProjects = [
  {
    title: 'E-commerce Platform',
    level: 'Advanced',
    duration: '4-6 weeks',
    description: 'Build a full-fledged e-commerce platform with features like cart, payment integration, and product management.',
    technologies: ['React', 'Next.js', 'Stripe', 'Tailwind CSS'],
    slug: 'e-commerce-platform',
  },
  {
    title: 'Social Media App',
    level: 'Intermediate',
    duration: '3-4 weeks',
    description: 'Create a social media application where users can post, comment, like, and follow others.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    slug: 'social-media-app',
  },
  {
    title: 'Task Management System',
    level: 'Intermediate',
    duration: '2-3 weeks',
    description: 'Develop a task management system to organize and track tasks efficiently.',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    slug: 'task-management-system',
  },
  // Add more projects as needed
]

const PracticeProjectsPage = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-black to-dark-gray">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              aria-label="Practice Projects"
            >
              Practice Projects
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              aria-live="polite"
            >
              Dive into real-world projects that help you build and showcase your skills.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/signup"
                className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold 
                         hover:bg-white hover:text-primary transition-all duration-300 
                         transform hover:scale-105">
                Get Started Now
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Practice Projects Section */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceProjects.map((project, index) => (
                <PracticeProjectCard key={index} project={project} />
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