'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Mail, Users, Lightbulb, Award, Globe } from 'lucide-react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AboutUsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const teamMembers = [
    { name: 'Vishal', role: 'CEO', avatar: '👨‍💼', bio: 'Visionary leader passionate about tech education' },
    { name: 'Ankit', role: 'CTO', avatar: '👨‍💻', bio: 'Tech guru with a knack for innovative solutions' },
    { name: 'Dheeraj', role: 'CMO', avatar: '👨‍💼', bio: 'Marketing wizard driving SkillSurge\'s growth' },
    { name: 'Divyansh', role: 'Head of Community', avatar: '👥', bio: 'Community builder fostering collaboration' },
  ]

  const testimonials = [
    { name: 'Sarah L.', role: 'Frontend Developer', quote: 'SkillSurge transformed my learning journey and helped me land my dream job!' },
    { name: 'Michael R.', role: 'Full Stack Engineer', quote: 'The community support and practical projects at SkillSurge are unmatched.' },
    { name: 'Emily T.', role: 'UX Designer', quote: 'SkillSurge\'s roadmaps guided me through my career transition into tech.' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerChildrenVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-black to-dark-gray">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-fredoka"
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
              >
                Empowering Your Journey in Tech
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8 font-quicksand"
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                SkillSurge is more than a platform. It's a community where learners grow together 
                and achieve excellence in web development.
              </motion.p>
              <motion.div
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <Link href="#our-story" 
                  className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold 
                           hover:bg-white hover:text-primary transition-all duration-300 
                           transform hover:scale-105">
                  Learn More About Us
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent 
                       bg-gradient-to-r from-primary to-secondary font-fredoka"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Our Values
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerChildrenVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { title: 'Collaboration', icon: <Users className="w-12 h-12" />, description: 'We thrive when we work and learn together.' },
                { title: 'Innovation', icon: <Lightbulb className="w-12 h-12" />, description: 'We constantly innovate to make learning more engaging.' },
                { title: 'Excellence', icon: <Award className="w-12 h-12" />, description: 'We aim to provide top-notch resources and support.' },
                { title: 'Inclusivity', icon: <Globe className="w-12 h-12" />, description: 'We welcome learners from all backgrounds and skill levels.' },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-gray rounded-xl p-6 text-center hover:bg-gradient-to-br 
                           hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 
                           transform hover:scale-105"
                  variants={fadeInUpVariants}
                >
                  <div className="mb-4 flex justify-center text-primary">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="our-story" className="py-20 bg-dark-gray">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent 
                       bg-gradient-to-r from-primary to-secondary font-fredoka"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Our Story
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-300 mb-6">
                  SkillSurge was born from the frustration of fragmented and overwhelming learning resources. 
                  Our founders, passionate about web development and education, decided to create a 
                  comprehensive, engaging, and supportive platform.
                </p>
                <p className="text-lg text-gray-300">
                  What started as a small project has grown into a vibrant community of thousands of 
                  learners worldwide. From expertly curated roadmaps to real-world projects, our journey 
                  is about helping you succeed in the tech industry.
                </p>
              </motion.div>
              <div className="relative">
                <motion.div 
                  className="absolute w-full h-1 bg-primary top-1/2 transform -translate-y-1/2"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                ></motion.div>
                {[
                  { year: 'Year 1', text: 'SkillSurge launched with our first roadmap: Front-End Development.' },
                  { year: 'Year 2', text: 'Introduced community features and practice projects.' },
                  { year: 'Year 3', text: 'Reached 10,000 learners and expanded into Back-End Development.' },
                ].map((milestone, index) => (
                  <motion.div 
                    key={index} 
                    className="relative mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute w-4 h-4 bg-primary rounded-full left-0 top-1/2 transform -translate-y-1/2"></div>
                    <div className="pl-8">
                      <h3 className="text-xl font-semibold mb-2">{milestone.year}</h3>
                      <p className="text-gray-300">{milestone.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent 
                       bg-gradient-to-r from-primary to-secondary font-fredoka"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Meet Our Team
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerChildrenVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-gray rounded-xl p-6 text-center hover:bg-gradient-to-br 
                           hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 
                           transform hover:scale-105"
                  variants={fadeInUpVariants}
                >
                  <div className="text-5xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-gray-300 mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-white font-fredoka"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              What Our Community Says
            </motion.h2>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto"
                >
                  <p className="text-gray-800 mb-4 text-lg italic">"{testimonials[currentTestimonial].quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full mr-4 flex items-center justify-center">
                      👤
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-sm text-gray-600">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent 
                       bg-gradient-to-r from-primary to-secondary font-fredoka"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Ready to Join Our Community?
            </motion.h2>
            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto text-gray-300"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Be a part of a growing network of developers who are transforming the future of tech.
            </motion.p>
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/signup"
                className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold 
                         hover:bg-white hover:text-primary transition-all duration-300 
                         transform hover:scale-105">
                Join Now
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutUsPage 