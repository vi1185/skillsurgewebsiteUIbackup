export interface QuizQuestion {
    id: string;
    category: string;
    difficulty: string;
    language: string;
    question: string;
    codeSample?: string;
    hints: string[];
    answer: string;
    explanation: string;
}

export interface QuizResponse {
    text: string;
    success: boolean;
    isDefault?: boolean;
    timestamp?: number;
}

export interface QuizProgress {
    totalAttempted: number;
    correctAnswers: number;
    knewAnswers: number;
    learnedNew: number;
    streak: number;
    lastAttempted?: Date;
}

export type QuizDifficulty = 'Easy' | 'Medium' | 'Hard';
export type ProgrammingLanguage = 'JavaScript' | 'Python' | 'Java' | 'TypeScript' | 'C++'; 