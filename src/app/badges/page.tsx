'use client'

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BadgesDisplay from '../components/BadgesDisplay'

const BadgesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Your Achievements
          </h2>
          <BadgesDisplay />
        </section>

        {/* Optionally, display all available badges */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Available Badges
          </h2>
          {/* Future implementation: List of all badges with criteria */}
          <p className="text-gray-300 text-center">Coming soon!</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default BadgesPage 