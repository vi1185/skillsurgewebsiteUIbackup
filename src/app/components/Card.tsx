import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    animate?: boolean;
    delay?: number;
}

const Card = ({ children, className = '', hover = true, animate = true, delay = 0 }: CardProps) => {
    const cardContent = (
        <div className={`card ${hover ? 'card-hover' : ''} ${className}`}>
            {children}
        </div>
    );

    if (!animate) return cardContent;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
        >
            {cardContent}
        </motion.div>
    );
};

export default Card; 