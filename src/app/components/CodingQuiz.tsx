'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';

const CodingQuiz = () => {
    const {
        currentQuestion,
        loading,
        error,
        language,
        difficulty,
        setLanguage,
        setDifficulty,
        generateQuestion,
        handleKnewAnswer,
        handleLearnedNew
    } = useQuiz();

    const [revealStage, setRevealStage] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleNextQuestion = async () => {
        setShowAnswer(false);
        setRevealStage(0);
        await generateQuestion();
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6">
            <div className="bg-dark-gray rounded-xl p-8 shadow-xl">
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="flex-1 bg-black text-white rounded-lg p-3 border border-primary/20"
                    >
                        <option value="">Select Language</option>
                        {['JavaScript', 'Python', 'Java', 'C++', 'TypeScript'].map((lang: string) => (
                            <option key={lang} value={lang}>{lang}</option>
                        ))}
                    </select>

                    <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="flex-1 bg-black text-white rounded-lg p-3 border border-primary/20"
                    >
                        <option value="">Select Difficulty</option>
                        {['Easy', 'Medium', 'Hard'].map((diff: string) => (
                            <option key={diff} value={diff}>{diff}</option>
                        ))}
                    </select>

                    <button
                        onClick={generateQuestion}
                        disabled={!language || !difficulty || loading}
                        className="btn-primary px-8 py-3"
                    >
                        {loading ? 'Generating...' : 'Start Quiz'}
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    {currentQuestion && (
                        <motion.div
                            key={Date.now()}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-black rounded-xl p-6 mb-6"
                        >
                            <div className="text-primary mb-4">
                                {currentQuestion.category} · {currentQuestion.difficulty}
                            </div>
                            <div className="text-xl mb-6">{currentQuestion.question}</div>
                            
                            {currentQuestion.codeSample && (
                                <pre className="bg-dark-gray p-4 rounded-lg mb-6 overflow-x-auto">
                                    <code>{currentQuestion.codeSample}</code>
                                </pre>
                            )}

                            <div className="flex gap-4">
                                <button
                                    onClick={() => setRevealStage(prev => prev + 1)}
                                    className="w-full btn-primary"
                                    disabled={revealStage >= 3}
                                >
                                    {revealStage === 0 ? 'Show Hint' : 
                                     revealStage === 1 ? 'Show Another Hint' : 
                                     revealStage === 2 ? 'Show Answer' : 'Answer Revealed'}
                                </button>
                            </div>

                            {revealStage === 3 && (
                                <div className="flex gap-4 mt-4">
                                    <button
                                        onClick={handleKnewAnswer}
                                        className="w-full bg-green-500 text-white px-6 py-3 rounded-full 
                                                 hover:bg-white hover:text-green-500 transition-all duration-300"
                                    >
                                        I Knew This!
                                    </button>
                                    <button
                                        onClick={handleLearnedNew}
                                        className="w-full bg-blue-500 text-white px-6 py-3 rounded-full 
                                                 hover:bg-white hover:text-blue-500 transition-all duration-300"
                                    >
                                        Learned Something New!
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {currentQuestion && revealStage > 0 && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-primary/10 rounded-xl p-6"
                        >
                            {revealStage >= 1 && currentQuestion.hints[0] && (
                                <div className="mb-4">
                                    <h3 className="text-primary font-bold mb-2">Hint 1:</h3>
                                    <p className="text-gray-300">{currentQuestion.hints[0]}</p>
                                </div>
                            )}
                            
                            {revealStage >= 2 && currentQuestion.hints[1] && (
                                <div className="mb-4">
                                    <h3 className="text-primary font-bold mb-2">Hint 2:</h3>
                                    <p className="text-gray-300">{currentQuestion.hints[1]}</p>
                                </div>
                            )}

                            {revealStage >= 3 && (
                                <>
                                    <div className="mb-4">
                                        <h3 className="text-primary font-bold mb-2">Answer:</h3>
                                        <p className="text-gray-300">{currentQuestion.answer}</p>
                                    </div>
                                    {currentQuestion.explanation && (
                                        <div>
                                            <h3 className="text-primary font-bold mb-2">Explanation:</h3>
                                            <p className="text-gray-300">{currentQuestion.explanation}</p>
                                        </div>
                                    )}
                                </>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {error && (
                    <div className="text-red-500 mt-4 text-center">
                        {error}
                    </div>
                )}

                {loading && (
                    <div className="flex items-center justify-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CodingQuiz;
