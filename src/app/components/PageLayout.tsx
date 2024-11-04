import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
    children: React.ReactNode;
    className?: string;
}

const PageLayout = ({ children, className = '' }: PageLayoutProps) => {
    return (
        <div className={`min-h-screen flex flex-col bg-black ${className}`}>
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PageLayout; 