'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Database, Server } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Marquee from '@/components/ui/marquee';
import OrbitingCircles from '@/components/ui/orbiting-circles';
import { Code, BookOpen, Brain, Users, Laptop, Target, Star } from 'lucide-react';
import WordRotate from '@/components/ui/word-rotate';
import { VelocityScroll } from '@/components/ui/scroll-based-velocity';

const features = [
    {
        icon: <CheckCircle className="w-8 h-8 text-primary" />,
        title: 'Comprehensive Roadmaps',
        description: 'Step-by-step guides to master frontend and backend development.',
    },
    {
        icon: <Star className="w-8 h-8 text-primary" />,
        title: 'Interactive Quizzes',
        description: 'Test your knowledge with dynamically generated coding problems.',
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-primary" />,
        title: 'Community Support',
        description: 'Engage with fellow learners and experienced mentors.',
    },
    {
        icon: <Star className="w-8 h-8 text-primary" />,
        title: 'Progress Tracking',
        description: 'Monitor your learning journey with detailed analytics.',
    },
];

const testimonials = [
    {
        name: 'Sarah L.',
        role: 'Frontend Developer',
        quote: 'SkillSurge transformed my learning journey and helped me land my dream job!',
        rating: 5,
    },
    {
        name: 'Michael R.',
        role: 'Full Stack Engineer',
        quote: 'The community support and practical projects at SkillSurge are unmatched.',
        rating: 4.8,
    },
    {
        name: 'Emily T.',
        role: 'UX Designer',
        quote: 'SkillSurge\'s roadmaps guided me through my career transition into tech.',
        rating: 4.9,
    },
];

const HomePage = () => {
    const rotatingWords = [
        "Frontend Development",
        "Backend Engineering",
        "Full Stack Development",
        "Cloud Computing",
        "DevOps",
    ];

    const rotatingDescriptions = [
        "Master modern web technologies",
        "Build scalable applications",
        "Create innovative solutions",
        "Transform your career",
        "Join our community",
    ];

    return (
        <div className="bg-black text-white min-h-screen font-sans">
            <Header />
            <main>
                {/* Hero Section with Simplified Orbiting Icons */}
                <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                    {/* Background Blur Effects */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <div className="relative w-[1200px] h-[1200px]">
                            <div className="absolute inset-0 blur-[120px] bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 rounded-full animate-spin-slow" />
                            <div className="absolute inset-0 blur-[100px] bg-gradient-to-b from-primary/10 via-transparent to-secondary/10 rounded-full" />
                        </div>
                    </div>

                    {/* Orbiting Icons */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative size-[600px]">
                            {/* Outer orbit */}
                            <OrbitingCircles radius={250} duration={30} delay={0}>
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className="bg-black/30 backdrop-blur-sm p-4 rounded-xl"
                                >
                                    <Code className="size-8 text-primary" />
                                </motion.div>
                            </OrbitingCircles>
                            
                            {/* Middle orbit */}
                            <OrbitingCircles radius={180} duration={20} delay={0} reverse>
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className="bg-black/30 backdrop-blur-sm p-4 rounded-xl"
                                >
                                    <BookOpen className="size-8 text-secondary" />
                                </motion.div>
                            </OrbitingCircles>
                            
                            {/* Inner orbit */}
                            <OrbitingCircles radius={120} duration={15} delay={0}>
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className="bg-black/30 backdrop-blur-sm p-4 rounded-xl"
                                >
                                    <Brain className="size-8 text-primary/80" />
                                </motion.div>
                            </OrbitingCircles>
                            
                            {/* Additional orbiting icons */}
                            <OrbitingCircles radius={300} duration={35} delay={0} reverse>
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className="bg-black/30 backdrop-blur-sm p-4 rounded-xl"
                                >
                                    <Users className="size-8 text-secondary/80" />
                                </motion.div>
                            </OrbitingCircles>
                        </div>
                    </div>

                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/60" />

                    {/* Hero Content */}
                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                        <motion.div
                            className="mb-4"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent 
                                       bg-gradient-to-r from-primary to-secondary">
                                Master
                                <WordRotate
                                    words={rotatingWords}
                                    className="ml-4 text-5xl md:text-7xl font-bold bg-clip-text text-transparent 
                                             bg-gradient-to-r from-primary to-secondary"
                                    duration={3000}
                                    framerProps={{
                                        initial: { opacity: 0, y: 20 },
                                        animate: { opacity: 1, y: 0 },
                                        exit: { opacity: 0, y: -20 },
                                        transition: { duration: 0.5 }
                                    }}
                                />
                            </h1>
                        </motion.div>
                        
                        <motion.div
                            className="mb-8"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <WordRotate
                                words={rotatingDescriptions}
                                className="text-xl md:text-2xl text-gray-300"
                                duration={3000}
                                framerProps={{
                                    initial: { opacity: 0, scale: 0.9 },
                                    animate: { opacity: 1, scale: 1 },
                                    exit: { opacity: 0, scale: 1.1 },
                                    transition: { duration: 0.5 }
                                }}
                            />
                        </motion.div>

                        <motion.div
                            className="flex justify-center space-x-4"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <Link href="/signup" 
                                className="bg-primary text-black px-6 py-3 rounded-full font-semibold 
                                         hover:bg-white transition-colors duration-300 group relative overflow-hidden">
                                <span className="relative z-10">Get Started</span>
                                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 
                                              transition-transform duration-300 origin-left" />
                            </Link>
                            <Link href="/learn-more" 
                                className="bg-transparent border border-primary text-primary px-6 py-3 
                                         rounded-full font-semibold hover:bg-primary hover:text-black 
                                         transition-colors duration-300 group relative overflow-hidden">
                                <span className="relative z-10">Learn More</span>
                                <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 
                                              transition-transform duration-300 origin-left" />
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-dark-gray">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Our Features
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-black/50 rounded-xl p-6 text-center hover:bg-gradient-to-br 
                                         hover:from-primary/30 hover:to-secondary/30 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-center justify-center mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-300">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Marquee Section */}
                <section className="py-12 bg-dark-gray">
                    <div className="container mx-auto px-4">
                        <Marquee className="text-primary text-lg" reverse={false} pauseOnHover={true} repeat={3}>
                            <span>JavaScript</span>
                            <span>Python</span>
                            <span>TypeScript</span>
                            <span>Java</span>
                            <span>C++</span>
                            <span>Ruby</span>
                            <span>Go</span>
                        </Marquee>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-20 bg-black">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            What Our Community Says
                        </h2>
                        <div className="flex overflow-x-auto space-x-8">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-dark-gray rounded-xl p-6 min-w-[300px] flex-shrink-0"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                                    <div className="flex items-center">
                                        <img src={`/avatars/${testimonial.name.toLowerCase().split(' ')[0]}.jpg`} alt={`${testimonial.name} Avatar`} className="w-10 h-10 rounded-full mr-4" />
                                        <div>
                                            <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-400">{testimonial.role}</p>
                                            <div className="flex items-center mt-1">
                                                {Array.from({ length: 5 }, (_, i) => (
                                                    <Star key={i} className={`w-4 h-4 ${i < Math.round(testimonial.rating) ? 'text-yellow-500' : 'text-gray-400'}`} />
                                                ))}
                                                <span className="ml-2 text-sm text-gray-400">{testimonial.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Scrolling Technologies Section */}
                <section className="py-20 bg-black relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
                    <div className="relative z-0">
                        <VelocityScroll 
                            text="HTML • CSS • JavaScript • React • Next.js • TypeScript • Node.js • Express • MongoDB • PostgreSQL • " 
                            default_velocity={3}
                            className="text-4xl md:text-6xl font-bold opacity-20 text-primary"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-20 -mt-32">
                        <div className="bg-dark-gray/80 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-primary/10">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                Master Modern Technologies
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="bg-primary/10 rounded-full p-6 mb-4 inline-block">
                                        <Code className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                                    <p className="text-gray-400">Master modern web technologies and frameworks</p>
                                </motion.div>
                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="bg-secondary/10 rounded-full p-6 mb-4 inline-block">
                                        <Server className="w-8 h-8 text-secondary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Backend</h3>
                                    <p className="text-gray-400">Build robust and scalable server applications</p>
                                </motion.div>
                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="bg-primary/10 rounded-full p-6 mb-4 inline-block">
                                        <Database className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Database</h3>
                                    <p className="text-gray-400">Learn both SQL and NoSQL database systems</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-0 mt-12">
                        <VelocityScroll 
                            text="Python • Java • C++ • Ruby • Go • Rust • Swift • Kotlin • Docker • AWS • " 
                            default_velocity={-3}
                            className="text-4xl md:text-6xl font-bold opacity-20 text-secondary"
                        />
                    </div>
                </section>

                {/* Call-to-Action Section */}
                <section className="py-20 bg-gradient-to-r from-primary to-secondary">
                    <div className="container mx-auto px-4 text-center">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-6"
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
                            Join SkillSurge today and unlock a world of collaborative learning, hands-on practice, and personalized growth.
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
                                         transform hover:scale-105 inline-block"
                            >
                                Get Started Now
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
