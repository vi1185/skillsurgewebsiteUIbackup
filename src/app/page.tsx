'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, Github, Linkedin, Twitter, Menu, X } from 'lucide-react'
import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    )

    const heroSection = document.querySelector('#hero-section')
    if (heroSection) observer.observe(heroSection)

    return () => {
      observer.disconnect()
    }
  }, [])

  const heroContent = [
    { title: "Empower Your Skills", subtitle: "Learn from peers, grow together" },
    { title: "Practice Makes Perfect", subtitle: "Tackle real-world challenges" },
    { title: "Chart Your Path", subtitle: "Follow curated learning roadmaps" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="hero-section" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/20 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-black to-black opacity-70" />
          </div>
          <div className="relative z-10 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {heroContent[currentSlide].title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  {heroContent[currentSlide].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link href="/signup" 
                className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold 
                         hover:bg-white hover:text-primary transition-all duration-300 
                         transform hover:scale-105">
                Join Now
              </Link>
              <Link href="/about-us"
                className="bg-transparent text-white border-2 border-white px-8 py-3 
                         rounded-full text-lg font-semibold hover:bg-white hover:text-black 
                         transition-all duration-300 transform hover:scale-105">
                Learn More
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-10 h-10 text-white opacity-50" />
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-black to-dark-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Unlock Your Potential
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: 'Community-Driven', icon: '👥', description: 'Learn and grow with a supportive peer network' },
                { title: 'Hands-On Practice', icon: '💻', description: 'Tackle real-world projects and coding challenges' },
                { title: 'Personalized Paths', icon: '🚀', description: 'Follow curated roadmaps tailored to your goals' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-gray rounded-xl p-8 text-center hover:bg-gradient-to-br 
                           hover:from-primary hover:to-secondary transition-all duration-300 
                           transform hover:scale-105 hover:rotate-1"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Experience SkillSurge
            </h2>
            <div className="bg-black rounded-2xl p-8 shadow-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h3 className="text-3xl font-bold mb-6">Interactive Coding Challenge</h3>
                  <p className="text-gray-300 mb-6">
                    Try out a sample problem and see how SkillSurge can help you learn and improve.
                  </p>
                  <pre className="bg-dark-gray p-4 rounded-lg text-sm overflow-x-auto">
                    <code className="text-primary">
                      {`function fizzBuzz(n) {
  // Your code here
}`}
                    </code>
                  </pre>
                  <button className="mt-6 bg-primary text-white px-6 py-2 rounded-full 
                                   hover:bg-white hover:text-primary transition-all duration-300 
                                   transform hover:scale-105">
                    Run Code
                  </button>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-dark-gray rounded-lg h-[300px] w-full shadow-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to Elevate Your Skills?
            </motion.h2>
            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join SkillSurge today and unlock a world of collaborative learning, 
              hands-on practice, and personalized growth.
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

export default HomePage
