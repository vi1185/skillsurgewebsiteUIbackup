'use client';
import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, LogOut, Settings, BookOpen } from 'lucide-react';
import Link from 'next/link';

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession();

    if (!session?.user) return null;

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    {session.user.image ? (
                        <img 
                            src={session.user.image} 
                            alt={session.user.name || ''} 
                            className="w-full h-full rounded-full"
                        />
                    ) : (
                        <User size={20} />
                    )}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-48 bg-dark-gray rounded-xl shadow-lg py-2 border border-primary/10"
                    >
                        <div className="px-4 py-2 border-b border-primary/10">
                            <p className="text-sm font-semibold text-white">{session.user.name}</p>
                            <p className="text-xs text-gray-400">{session.user.email}</p>
                        </div>
                        
                        <div className="py-2">
                            <Link href="/dashboard" 
                                className="flex items-center px-4 py-2 text-sm text-gray-200 hover:bg-primary/10 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                <BookOpen size={16} className="mr-2" />
                                Dashboard
                            </Link>
                            <Link href="/settings" 
                                className="flex items-center px-4 py-2 text-sm text-gray-200 hover:bg-primary/10 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                <Settings size={16} className="mr-2" />
                                Settings
                            </Link>
                        </div>

                        <div className="border-t border-primary/10 pt-2">
                            <button
                                onClick={() => signOut()}
                                className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                            >
                                <LogOut size={16} className="mr-2" />
                                Sign out
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default UserMenu; 