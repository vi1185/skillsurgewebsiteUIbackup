'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

interface PracticeProject {
  title: string
  level: string
  duration: string
  description: string
  technologies: string[]
  slug: string
}

const PracticeProjectCard: React.FC<{ project: PracticeProject }> = ({ project }) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center flex flex-col justify-between hover:bg-gradient-to-br hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 transform hover:scale-105"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div>
        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex justify-center items-center gap-4 mb-4">
          <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
            {project.level}
          </span>
          <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium">
            {project.duration}
          </span>
        </div>
        <div className="flex justify-center items-center gap-2 flex-wrap mb-4">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="text-gray-400 text-xs">
              #{tech}
            </span>
          ))}
        </div>
      </div>
      <Link
        href={`/practice-projects/${project.slug}`}
        className="mt-auto bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
        aria-label={`View details for ${project.title}`}
      >
        <CheckCircle className="w-5 h-5 mr-2" />
        View Project
      </Link>
    </motion.div>
  )
}

export default PracticeProjectCard 