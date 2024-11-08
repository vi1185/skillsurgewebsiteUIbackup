'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate, MotionValue, AnimatePresence } from 'framer-motion';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Menu, X, Home, BookOpen, Code, Users, Brain, BookMarked, BarChart } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import UserMenu from './UserMenu';

// Constants for animation
const SCALE = 2.25;
const DISTANCE = 110;
const NUDGE = 40;
const SPRING = {
    mass: 0.1,
    stiffness: 170,
    damping: 12,
};

interface NavIconProps {
    mouseLeft: MotionValue;
    href: string;
    label: string;
    icon: React.ReactNode;
}

const NavIcon = ({ mouseLeft, href, label, icon }: NavIconProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(() => {
        const bounds = ref.current
            ? { x: ref.current.offsetLeft, width: ref.current.offsetWidth }
            : { x: 0, width: 0 };

        return mouseLeft.get() - bounds.x - bounds.width / 2;
    });

    const scale = useTransform(distance, [-DISTANCE, 0, DISTANCE], [1, SCALE, 1]);
    const x = useTransform(() => {
        const d = distance.get();
        if (d === -Infinity) {
            return 0;
        } else if (d < -DISTANCE || d > DISTANCE) {
            return Math.sign(d) * -1 * NUDGE;
        } else {
            return (-d / DISTANCE) * NUDGE * scale.get();
        }
    });

    const scaleSpring = useSpring(scale, SPRING);
    const xSpring = useSpring(x, SPRING);
    const y = useMotionValue(0);

    return (
        <Tooltip.Provider delayDuration={0}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <Link href={href}>
                        <motion.div
                            ref={ref}
                            style={{ x: xSpring, scale: scaleSpring, y }}
                            onClick={() => {
                                animate(y, [0, -40, 0], {
                                    repeat: 2,
                                    ease: [
                                        [0, 0, 0.2, 1],
                                        [0.8, 0, 1, 1],
                                    ],
                                    duration: 0.7,
                                });
                            }}
                            className="w-12 h-12 rounded-xl bg-black/30 backdrop-blur-sm flex items-center justify-center 
                                     text-white hover:text-primary transition-colors duration-300 origin-bottom"
                        >
                            {icon}
                        </motion.div>
                    </Link>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        sideOffset={10}
                        className="bg-dark-gray shadow shadow-black/20 border border-primary/20 
                                 px-2 py-1.5 text-sm rounded text-white font-medium z-50"
                    >
                        {label}
                        <Tooltip.Arrow className="fill-dark-gray" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
};

const MobileNavLink = ({ href, icon, label, onClick }: { href: string; icon: React.ReactNode; label: string; onClick: () => void }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
    >
        <Link
            href={href}
            onClick={onClick}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
        >
            <div className="bg-primary/10 p-3 rounded-xl">
                {icon}
            </div>
            <span className="font-medium">{label}</span>
        </Link>
    </motion.div>
);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { data: session, status } = useSession();
    const mouseLeft = useMotionValue(-Infinity);
    const mouseRight = useMotionValue(-Infinity);

    const left = useTransform(mouseLeft, [0, 40], [0, -40]);
    const right = useTransform(mouseRight, [0, 40], [0, -40]);
    const leftSpring = useSpring(left, SPRING);
    const rightSpring = useSpring(right, SPRING);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home', icon: <Home className="w-6 h-6" /> },
        { href: '/roadmap', label: 'Roadmap', icon: <BookOpen className="w-6 h-6" /> },
        { href: '/practice-problems', label: 'Practice', icon: <Code className="w-6 h-6" /> },
        { href: '/community', label: 'Community', icon: <Users className="w-6 h-6" /> },
        { href: '/quiz', label: 'Quiz', icon: <Brain className="w-6 h-6" /> },
        { href: '/blog', label: 'Blog', icon: <BookMarked className="w-6 h-6" /> },
        { href: '/progress', label: 'Progress', icon: <BarChart className="w-6 h-6" /> },
    ];

    if (status === 'loading') {
        return <div className="animate-pulse">Loading...</div>
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                        ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" 
                        className="text-2xl font-fredoka font-bold bg-clip-text text-transparent 
                                 bg-gradient-to-r from-primary to-secondary z-50">
                        SkillSurge
                    </Link>

                    {/* Desktop Navigation - Enhanced Dock Style */}
                    <motion.div
                        className="hidden md:flex items-center gap-3 px-4 py-2 relative"
                        onMouseMove={(e) => {
                            const { left, right } = e.currentTarget.getBoundingClientRect();
                            mouseLeft.set(e.clientX - left);
                            mouseRight.set(right - e.clientX);
                        }}
                        onMouseLeave={() => {
                            mouseLeft.set(-Infinity);
                            mouseRight.set(-Infinity);
                        }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-2xl -z-10"
                            style={{ left: leftSpring, right: rightSpring }}
                        />
                        {navLinks.map((link) => (
                            <NavIcon
                                key={link.href}
                                mouseLeft={mouseLeft}
                                href={link.href}
                                label={link.label}
                                icon={link.icon}
                            />
                        ))}
                    </motion.div>

                    {/* Desktop Auth Buttons or User Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        {session ? (
                            <UserMenu />
                        ) : (
                            <>
                                <Link href="/login" 
                                    className="text-white hover:text-primary transition-colors duration-300">
                                    Login
                                </Link>
                                <Link href="/signup"
                                    className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 
                                             transition-all duration-300">
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2 hover:bg-primary/10 rounded-lg transition-colors z-50"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Enhanced Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="fixed right-0 top-0 bottom-0 w-[300px] bg-dark-gray border-l border-primary/10 
                                     md:hidden overflow-y-auto"
                        >
                            {/* Mobile Menu Header */}
                            <div className="flex items-center justify-between p-4 border-b border-primary/10">
                                <Link href="/" 
                                    className="text-xl font-fredoka font-bold bg-clip-text text-transparent 
                                             bg-gradient-to-r from-primary to-secondary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    SkillSurge
                                </Link>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                                >
                                    <X size={24} className="text-gray-400" />
                                </button>
                            </div>

                            {/* Mobile Navigation Links */}
                            <div className="p-4">
                                <nav className="space-y-2">
                                    {navLinks.map((link, index) => (
                                        <MobileNavLink
                                            key={link.href}
                                            {...link}
                                            onClick={() => setIsOpen(false)}
                                        />
                                    ))}
                                </nav>

                                {/* Mobile Auth Section */}
                                <div className="mt-6 pt-6 border-t border-primary/10">
                                    {session ? (
                                        <div className="p-4">
                                            <UserMenu />
                                        </div>
                                    ) : (
                                        <div className="space-y-3">
                                            <Link
                                                href="/login"
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center justify-center w-full p-3 rounded-xl
                                                         border border-primary/20 text-primary hover:bg-primary/5 
                                                         transition-all duration-300"
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                href="/signup"
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center justify-center w-full p-3 rounded-xl
                                                         bg-primary text-white hover:bg-primary/90 
                                                         transition-all duration-300"
                                            >
                                                Sign Up
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* Mobile Social Links */}
                                <div className="mt-6 pt-6 border-t border-primary/10">
                                    <div className="grid grid-cols-3 gap-4">
                                        {[
                                            { label: 'Twitter', icon: 'X', href: '#' },
                                            { label: 'GitHub', icon: 'GH', href: '#' },
                                            { label: 'Discord', icon: 'DC', href: '#' },
                                        ].map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.href}
                                                className="flex flex-col items-center gap-2 p-4 rounded-xl
                                                         hover:bg-white/5 transition-all duration-300"
                                            >
                                                <span className="text-xl">{social.icon}</span>
                                                <span className="text-xs text-gray-400">{social.label}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Version Info */}
                                <div className="mt-6 pt-6 border-t border-primary/10 text-center">
                                    <p className="text-xs text-gray-400">
                                        SkillSurge v1.0.0
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;