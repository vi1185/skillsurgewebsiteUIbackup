'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Users, Code } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    difficulty: string;
    duration: string;
    collaborators: number;
    category: string;
    slug: string;
}

const ProjectCard = ({
    title,
    description,
    technologies,
    difficulty,
    duration,
    collaborators,
    category,
    slug
}: ProjectCardProps) => {
    return (
        <motion.div
            className="bg-dark-gray rounded-xl p-6 hover:bg-gradient-to-br 
                     hover:from-primary/20 hover:to-secondary/20 transition-all duration-300"
            whileHover={{ y: -5 }}
        >
            <div className="flex items-center mb-4">
                <div className="bg-primary rounded-full p-2 mr-4">
                    <Code className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm text-gray-400">{category}</p>
                </div>
            </div>

            <p className="text-gray-300 mb-4">{description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                    <span 
                        key={index}
                        className="bg-black/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {duration}
                </div>
                <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    {collaborators}
                </div>
                <span className={`text-sm px-3 py-1 rounded-full text-center ${
                    difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                    difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                }`}>
                    {difficulty}
                </span>
            </div>

            <Link 
                href={`/projects/${slug}`}
                className="block w-full bg-primary text-white text-center py-2 rounded-full 
                         hover:bg-white hover:text-primary transition-all duration-300"
            >
                Start Project
            </Link>
        </motion.div>
    );
};

export default ProjectCard; 