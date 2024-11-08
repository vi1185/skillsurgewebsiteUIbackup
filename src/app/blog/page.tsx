'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BookOpen, Calendar, Tag } from 'lucide-react'

const blogPosts = [
  {
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build your first Next.js application with this comprehensive guide.',
    date: '2023-08-15',
    tags: ['Next.js', 'React', 'JavaScript'],
    slug: 'getting-started-with-nextjs',
  },
  {
    title: 'Understanding Prisma ORM',
    excerpt: 'A deep dive into Prisma ORM and how it can streamline your database management.',
    date: '2023-07-10',
    tags: ['Prisma', 'Database', 'TypeScript'],
    slug: 'understanding-prisma-orm',
  },
  // Add more blog posts as needed
]

const BlogPage = () => {
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
              aria-label="SkillSurge Blog"
            >
              SkillSurge Blog
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              aria-live="polite"
            >
              Stay updated with the latest tutorials, tips, and news from the SkillSurge community.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/signup"
                className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold 
                         hover:bg-black hover:text-white transition-all duration-300 
                         transform hover:scale-105">
                Join Now
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
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
                    <BookOpen className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex justify-center items-center mb-4">
                    <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-gray-400">{post.date}</span>
                  </div>
                  <div className="flex justify-center items-center gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-sm text-gray-400">
                        <Tag className="w-4 h-4" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`}
                    className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold 
                             hover:bg-white hover:text-primary transition-all duration-300 
                             transform hover:scale-105">
                    Read More
                  </Link>
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
              Ready to Share Your Knowledge?
            </motion.h2>
            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Become a contributor and share your insights with the SkillSurge community.
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

export default BlogPage 