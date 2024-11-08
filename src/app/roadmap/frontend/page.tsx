'use client';
import React from 'react';
import ReactFlow, { Background, BackgroundVariant, Controls, useNodesState, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const initialNodes = [
  // Define your frontend nodes here
  {
    id: '1',
    type: 'input',
    data: { label: 'HTML & CSS' },
    position: { x: 250, y: 5 },
  },
  // Add more nodes as needed
];

const initialEdges = [
  // Define your frontend edges here
  { id: 'e1-2', source: '1', target: '2', animated: false },
  // Add more edges as needed
];

const FrontendRoadmapPage = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <main>
        {/* Roadmap Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Frontend Development Roadmap
            </h2>
            <div className="h-96">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
                nodesDraggable={false}
                elementsSelectable={false}
                zoomOnScroll={false}
                zoomOnPinch={false}
                panOnScroll={false}
                selectionOnDrag={false}
                zoomOnDoubleClick={false}
              >
                {/* Remove Controls if not needed */}
                {/* <Controls /> */}
                {/* Customize Background */}
                <Background variant={BackgroundVariant.Dots} gap={12} size={1} color="transparent" />
              </ReactFlow>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent 
                          bg-gradient-to-r from-primary to-secondary">
              Recommended Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Add resource cards here */}
            </div>
          </div>
        </section>

        {/* Practice Projects Section */}
        <section className="py-20 bg-dark-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Practice Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Portfolio Website', level: 'Beginner', duration: '1-2 weeks' },
                { title: 'E-commerce UI', level: 'Intermediate', duration: '2-3 weeks' },
                { title: 'Social Media Dashboard', level: 'Advanced', duration: '3-4 weeks' },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 rounded-xl p-6 hover:bg-gradient-to-br hover:from-primary/20 
                           hover:to-secondary/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex justify-between text-sm text-gray-400 mb-4">
                    <span>{project.level}</span>
                    <span>{project.duration}</span>
                  </div>
                  <Link href={`/practice-projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full bg-primary text-white py-2 rounded-full text-center
                             hover:bg-white hover:text-primary transition-all duration-300">
                    View Project
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default FrontendRoadmapPage 