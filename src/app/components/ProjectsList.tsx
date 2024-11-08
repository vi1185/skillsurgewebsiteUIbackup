'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Project {
  id: string
  title: string
  description: string
  repository: string
  screenshotUrl: string
  submitter: string
  feedback: Feedback[]
}

interface Feedback {
  id: string
  user: string
  comment: string
}

const ProjectsList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects')
        setProjects(response.data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return <p className="text-center text-gray-300">Loading projects...</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className="bg-black/50 rounded-xl p-6 hover:bg-gradient-to-br hover:from-primary/20 hover:to-secondary/20 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          {project.screenshotUrl && (
            <img src={project.screenshotUrl} alt={`${project.title} Screenshot`} className="w-full h-40 object-cover mb-4 rounded" />
          )}
          <Link
            href={`/projects/${project.id}`}
            className="block w-full bg-primary text-white py-2 rounded-full text-center hover:bg-white hover:text-primary transition-all duration-300"
          >
            View Project
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

export default ProjectsList 