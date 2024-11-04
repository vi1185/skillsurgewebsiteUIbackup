import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    animate?: boolean;
}

const Section = ({ children, className = '', id, animate = true }: SectionProps) => {
    const content = (
        <section id={id} className={`section-padding ${className}`}>
            <div className="container">
                {children}
            </div>
        </section>
    );

    if (!animate) return content;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            {content}
        </motion.div>
    );
};

export default Section; 