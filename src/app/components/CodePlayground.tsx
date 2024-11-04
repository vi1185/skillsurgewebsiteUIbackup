'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Editor from '@monaco-editor/react';

interface CodePlaygroundProps {
    defaultLanguage?: string;
    defaultCode?: string;
}

const CodePlayground = ({ 
    defaultLanguage = 'javascript', 
    defaultCode = '// Start coding here...' 
}: CodePlaygroundProps) => {
    const [language, setLanguage] = useState(defaultLanguage);
    const [code, setCode] = useState(defaultCode);
    const [output, setOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);

    const languages = [
        { id: 'javascript', name: 'JavaScript' },
        { id: 'python', name: 'Python' },
        { id: 'typescript', name: 'TypeScript' },
        { id: 'html', name: 'HTML' },
        { id: 'css', name: 'CSS' },
    ];

    const handleRun = async () => {
        setIsRunning(true);
        try {
            // Here you would integrate with a code execution service
            // For now, we'll just simulate output
            setOutput('Code execution feature coming soon!');
        } catch (error) {
            setOutput('Error executing code');
        } finally {
            setIsRunning(false);
        }
    };

    return (
        <div className="bg-dark-gray rounded-xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-black text-white rounded-lg px-4 py-2 border border-primary/20"
                >
                    {languages.map(lang => (
                        <option key={lang.id} value={lang.id}>
                            {lang.name}
                        </option>
                    ))}
                </select>

                <button
                    onClick={handleRun}
                    disabled={isRunning}
                    className="bg-primary text-white px-6 py-2 rounded-lg 
                             hover:bg-primary/90 transition-colors duration-300"
                >
                    {isRunning ? 'Running...' : 'Run Code'}
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="h-[500px] bg-black rounded-lg overflow-hidden">
                    <Editor
                        height="100%"
                        defaultLanguage={language}
                        defaultValue={code}
                        onChange={(value) => setCode(value || '')}
                        theme="vs-dark"
                        options={{
                            minimap: { enabled: false },
                            fontSize: 14,
                            lineNumbers: 'on',
                            roundedSelection: false,
                            scrollBeyondLastLine: false,
                            automaticLayout: true,
                        }}
                    />
                </div>

                <motion.div 
                    className="h-[500px] bg-black rounded-lg p-4 overflow-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <h3 className="text-primary font-semibold mb-2">Output:</h3>
                    <pre className="text-white font-mono text-sm">
                        {output || 'Run your code to see the output'}
                    </pre>
                </motion.div>
            </div>
        </div>
    );
};

export default CodePlayground; 