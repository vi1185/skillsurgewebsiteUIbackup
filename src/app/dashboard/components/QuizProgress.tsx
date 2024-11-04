'use client';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface QuizProgressProps {
    knewAnswers: number;
    learnedNew: number;
    totalQuestions: number;
}

const QuizProgress = ({ knewAnswers, learnedNew, totalQuestions }: QuizProgressProps) => {
    const data = [
        { name: 'Knew Answers', value: knewAnswers },
        { name: 'Learned New', value: learnedNew },
    ];

    const COLORS = ['#22c55e', '#3b82f6'];

    return (
        <div className="bg-dark-gray rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Quiz Progress</h3>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center">
                    <p className="text-sm text-gray-400">Knew Answers</p>
                    <p className="text-2xl font-bold text-green-500">{knewAnswers}</p>
                </div>
                <div className="text-center">
                    <p className="text-sm text-gray-400">Learned New</p>
                    <p className="text-2xl font-bold text-blue-500">{learnedNew}</p>
                </div>
            </div>
            <div className="mt-4 text-center">
                <p className="text-sm text-gray-400">Total Questions Attempted</p>
                <p className="text-2xl font-bold text-primary">{totalQuestions}</p>
            </div>
        </div>
    );
};

export default QuizProgress; 