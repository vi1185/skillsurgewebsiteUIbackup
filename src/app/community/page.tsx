'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Calendar, Users } from 'lucide-react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CommunityPage = () => {
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
                Join the SkillSurge Community
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Connect, learn, and grow with like-minded developers
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
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Community Features Section */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Community Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Discussion Forums', icon: <MessageSquare className="w-12 h-12 text-primary" />, description: 'Engage in meaningful discussions with peers and experts' },
                { title: 'Live Events', icon: <Calendar className="w-12 h-12 text-primary" />, description: 'Attend workshops, webinars, and coding challenges' },
                { title: 'Mentorship Program', icon: <Users className="w-12 h-12 text-primary" />, description: 'Connect with experienced mentors in your field' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-black rounded-xl p-6 text-center hover:bg-gradient-to-br 
                           hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 
                           transform hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Members Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Featured Community Members
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Emily Chen', role: 'Full Stack Developer', avatar: '👩‍💻' },
                { name: 'David Kim', role: 'Machine Learning Engineer', avatar: '👨‍💻' },
                { name: 'Sarah Johnson', role: 'UX Designer', avatar: '👩‍🎨' },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-gray rounded-xl p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-300 mb-4">{member.role}</p>
                  <button className="bg-primary text-white px-4 py-2 rounded-full 
                                   hover:bg-white hover:text-primary transition-all duration-300">
                    View Profile
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Upcoming Community Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Web Development Workshop', date: 'June 15, 2024', time: '2:00 PM - 4:00 PM EST' },
                { title: 'Machine Learning Hackathon', date: 'July 1-3, 2024', time: 'All Day' },
                { title: 'Design Systems Webinar', date: 'July 20, 2024', time: '1:00 PM - 2:30 PM EST' },
                { title: 'Code Review Best Practices', date: 'August 5, 2024', time: '11:00 AM - 12:00 PM EST' },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  className="bg-black rounded-xl p-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-300 mb-1">{event.date}</p>
                  <p className="text-gray-400 mb-4">{event.time}</p>
                  <button className="bg-transparent text-primary border border-primary px-4 py-2 
                                   rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Stats Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Growing Community
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { stat: '50,000+', label: 'Active Members' },
                { stat: '1,000+', label: 'Daily Discussions' },
                { stat: '500+', label: 'Monthly Events' },
                { stat: '100+', label: 'Expert Mentors' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{item.stat}</h3>
                  <p className="text-gray-300">{item.label}</p>
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
              Ready to Join Our Community?
            </motion.h2>
            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Connect with fellow developers, share your knowledge, and accelerate your growth with SkillSurge.
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
                Join the Community
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default CommunityPage 