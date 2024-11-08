'use client'

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectSubmissionForm from '../components/ProjectSubmissionForm'
import ProjectsList from '../components/ProjectsList'

const ProjectsPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Submit Your Project
          </h2>
          <ProjectSubmissionForm />
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Community Projects
          </h2>
          <ProjectsList />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ProjectsPage 