'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RoadmapFlow from '../../components/RoadmapFlow';

const RoadmapDetailsPage = () => {
  const params = useParams();
  const roadmapId = params?.id as string;

  // You can fetch roadmap details based on the ID
  const roadmapDetails = {
    title: 'Frontend Development',
    description: 'Master modern frontend development with this comprehensive roadmap',
    // Add more details as needed
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <main>
        <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-black to-dark-gray">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent 
                         bg-gradient-to-r from-primary to-secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {roadmapDetails.title}
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {roadmapDetails.description}
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-dark-gray">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {roadmapId && <RoadmapFlow roadmapId={roadmapId} />}
            </motion.div>
          </div>
        </section>

        {/* Additional sections for resources, prerequisites, etc. */}
      </main>
      <Footer />
    </div>
  );
};

export default RoadmapDetailsPage; 