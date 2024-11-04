'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';
import type { QuizQuestion, QuizProgress, QuizDifficulty, ProgrammingLanguage } from '@/types/quiz';

interface QuizContextType {
    currentQuestion: QuizQuestion | null;
    loading: boolean;
    error: string;
    progress: QuizProgress;
    language: ProgrammingLanguage | '';
    difficulty: QuizDifficulty | '';
    setLanguage: (lang: ProgrammingLanguage | '') => void;
    setDifficulty: (diff: QuizDifficulty | '') => void;
    generateQuestion: () => Promise<void>;
    handleKnewAnswer: () => Promise<void>;
    handleLearnedNew: () => Promise<void>;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [language, setLanguage] = useState<ProgrammingLanguage | ''>('');
    const [difficulty, setDifficulty] = useState<QuizDifficulty | ''>('');
    const [progress, setProgress] = useState<QuizProgress>({
        totalAttempted: 0,
        correctAnswers: 0,
        knewAnswers: 0,
        learnedNew: 0,
        streak: 0,
    });

    const generateQuestion = useCallback(async () => {
        if (!language || !difficulty) {
            setError('Please select both language and difficulty');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/quiz/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ language, difficulty }),
            });

            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Failed to generate question');
            }

            setCurrentQuestion(data);
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Failed to generate question');
        } finally {
            setLoading(false);
        }
    }, [language, difficulty]);

    const updateProgress = useCallback(async (knewAnswer: boolean, learnedNew: boolean) => {
        try {
            await fetch('/api/quiz-progress', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    questionId: currentQuestion?.id,
                    knewAnswer,
                    learnedNew,
                }),
            });

            setProgress(prev => ({
                ...prev,
                totalAttempted: prev.totalAttempted + 1,
                knewAnswers: prev.knewAnswers + (knewAnswer ? 1 : 0),
                learnedNew: prev.learnedNew + (learnedNew ? 1 : 0),
                streak: prev.streak + 1,
                lastAttempted: new Date(),
            }));
        } catch (error) {
            console.error('Failed to update progress:', error);
        }
    }, [currentQuestion]);

    const handleKnewAnswer = useCallback(async () => {
        await updateProgress(true, false);
        await generateQuestion();
    }, [updateProgress, generateQuestion]);

    const handleLearnedNew = useCallback(async () => {
        await updateProgress(false, true);
        await generateQuestion();
    }, [updateProgress, generateQuestion]);

    return (
        <QuizContext.Provider value={{
            currentQuestion,
            loading,
            error,
            progress,
            language,
            difficulty,
            setLanguage,
            setDifficulty,
            generateQuestion,
            handleKnewAnswer,
            handleLearnedNew,
        }}>
            {children}
        </QuizContext.Provider>
    );
};

export const useQuiz = () => {
    const context = useContext(QuizContext);
    if (context === undefined) {
        throw new Error('useQuiz must be used within a QuizProvider');
    }
    return context;
}; 