'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';

interface Module {
    id: string;
    title: string;
    completed: boolean;
    subModules?: Module[];
}

interface RoadmapProgressProps {
    modules: Module[];
    currentModuleId?: string;
}

const RoadmapProgress = ({ modules, currentModuleId }: RoadmapProgressProps) => {
    return (
        <div className="bg-dark-gray rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6">Your Progress</h3>
            <div className="space-y-4">
                {modules.map((module, index) => (
                    <motion.div
                        key={module.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className={`flex items-center ${
                            currentModuleId === module.id ? 'text-primary' : 
                            module.completed ? 'text-green-500' : 'text-gray-400'
                        }`}>
                            {module.completed ? (
                                <CheckCircle className="w-5 h-5 mr-3" />
                            ) : (
                                <Circle className="w-5 h-5 mr-3" />
                            )}
                            <span className="flex-grow">{module.title}</span>
                            {currentModuleId === module.id && (
                                <ArrowRight className="w-5 h-5 text-primary animate-pulse" />
                            )}
                        </div>

                        {module.subModules && (
                            <div className="ml-8 mt-2 space-y-2">
                                {module.subModules.map((subModule, subIndex) => (
                                    <motion.div
                                        key={subModule.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: (index * 0.1) + (subIndex * 0.05) }}
                                        className={`flex items-center ${
                                            currentModuleId === subModule.id ? 'text-primary' :
                                            subModule.completed ? 'text-green-500' : 'text-gray-400'
                                        }`}
                                    >
                                        {subModule.completed ? (
                                            <CheckCircle className="w-4 h-4 mr-2" />
                                        ) : (
                                            <Circle className="w-4 h-4 mr-2" />
                                        )}
                                        <span className="text-sm">{subModule.title}</span>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default RoadmapProgress; 