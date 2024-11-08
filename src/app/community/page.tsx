'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MessageSquare, Calendar, Users, Code, Layout, Database, Server } from 'lucide-react'
import NumberTicker from '@/components/ui/number-ticker'

const CommunityPage = () => {
  const communityStats = [
    { label: 'Active Members', value: 50000, icon: <Users className="w-6 h-6" /> },
    { label: 'Daily Discussions', value: 1000, icon: <MessageSquare className="w-6 h-6" /> },
    { label: 'Monthly Events', value: 500, icon: <Calendar className="w-6 h-6" /> },
    { label: 'Expert Mentors', value: 100, icon: <Code className="w-6 h-6" /> },
  ];

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
                aria-label="Join the SkillSurge Community"
              >
                Join the SkillSurge Community
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                aria-live="polite"
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
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
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
                { name: 'Emily Chen', role: 'Full Stack Developer', avatar: '/avatars/emily.jpg' },
                { name: 'David Kim', role: 'Machine Learning Engineer', avatar: '/avatars/david.jpg' },
                { name: 'Sarah Johnson', role: 'UX Designer', avatar: '/avatars/sarah.jpg' },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-gray rounded-xl p-6 text-center hover:bg-gradient-to-br 
                           hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 
                           transform hover:scale-105"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    <img src={member.avatar} alt={`${member.name} Avatar`} className="w-24 h-24 rounded-full mx-auto object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-300 mb-4">{member.role}</p>
                  <button className="bg-primary text-white px-4 py-2 rounded-full 
                                     hover:bg-white hover:text-primary transition-all duration-300 
                                     transform hover:scale-105">
                    View Profile
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Stats Section with Number Ticker */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text 
                                 text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Growing Community
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {communityStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-gray rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    <NumberTicker
                      value={stat.value}
                      direction="up"
                      delay={index * 0.2}
                      className="text-3xl font-bold text-primary"
                    />
                    {stat.value > 1000 ? '+' : ''}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                  <motion.div
                    className="w-full h-1 bg-primary/20 mt-4 rounded-full overflow-hidden"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-full bg-primary w-full origin-left" />
                  </motion.div>
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