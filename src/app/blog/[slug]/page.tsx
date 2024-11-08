'use client'

import React from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const blogPosts = [
  {
    title: 'Getting Started with Next.js',
    content: `# Getting Started with Next.js

Next.js is a powerful React framework that enables server-side rendering and static site generation...

## Installation

To install Next.js, run the following command:

\`\`\`bash
npx create-next-app@latest
\`\`\`

## Creating Pages

Next.js uses a file-based routing system...`,
    date: '2023-08-15',
    tags: ['Next.js', 'React', 'JavaScript'],
    slug: 'getting-started-with-nextjs',
  },
  {
    title: 'Understanding Prisma ORM',
    content: `# Understanding Prisma ORM

Prisma is a next-generation ORM that can be used to build fast and reliable database-driven applications...

## Setting Up Prisma

Install Prisma as a development dependency:

\`\`\`bash
npm install @prisma/client
npm install prisma --save-dev
\`\`\`

## Defining the Data Model

In your \`schema.prisma\` file...`,
    date: '2023-07-10',
    tags: ['Prisma', 'Database', 'TypeScript'],
    slug: 'understanding-prisma-orm',
  },
  // Add more blog posts as needed
]

const BlogPostPage = () => {
  const router = useRouter()
  const { slug } = router.query

  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="bg-black text-white min-h-screen font-sans flex items-center justify-center">
        <p>Post not found.</p>
      </div>
    )
  }

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <main>
        {/* Blog Post Section */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {post.title}
            </motion.h1>
            <motion.p
              className="text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Published on {post.date}
            </motion.p>
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/blog"
                className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold 
                         hover:bg-white hover:text-primary transition-all duration-300 
                         transform hover:scale-105">
                Back to Blog
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default BlogPostPage 