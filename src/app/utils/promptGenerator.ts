const topics = {
  JavaScript: [
    'Closures and Scope',
    'Promises and Async/Await',
    'ES6+ Features',
    'DOM Manipulation',
    'Event Handling',
    'Array Methods',
    'Object-Oriented Programming',
    'Functional Programming',
    'Error Handling',
    'Memory Management',
  ],
  Python: [
    'List Comprehension',
    'Decorators',
    'Generators',
    'Context Managers',
    'Object-Oriented Features',
    'Data Structures',
    'File Handling',
    'Exception Handling',
    'Modules and Packages',
    'Multithreading',
  ],
  // Add more languages...
};

const conceptTypes = [
  'implementation',
  'comparison',
  'debugging',
  'optimization',
  'best practices',
  'common pitfalls',
  'design patterns',
  'performance',
];

export const generateRandomPrompt = (language: string, difficulty: string) => {
  const randomTopic = topics[language as keyof typeof topics]?.[
    Math.floor(Math.random() * topics[language as keyof typeof topics]?.length)
  ] || 'general concepts';
  
  const randomConcept = conceptTypes[Math.floor(Math.random() * conceptTypes.length)];
  const randomSeed = Math.floor(Math.random() * 1000000);

  return {
    prompt: `Generate a ${difficulty.toLowerCase()} level coding question about ${language}, focusing on ${randomTopic} and ${randomConcept}.
Please format your response exactly as follows:

CATEGORY: ${randomTopic}
DIFFICULTY: ${difficulty}
LANGUAGE: ${language}
QUESTION: Create a specific question about ${randomConcept} in the context of ${randomTopic}
CODE_SAMPLE:
\`\`\`${language.toLowerCase()}
[relevant code example if needed]
\`\`\`
HINTS:
1. [conceptual hint]
2. [implementation hint]
3. [specific solution hint]
ANSWER: [comprehensive answer]
EXPLANATION: [detailed explanation with best practices]

Make sure the question:
1. Is specific to ${language} and ${randomTopic}
2. Focuses on ${randomConcept}
3. Has practical applications
4. Includes code examples where appropriate
5. Tests understanding, not just syntax`,
    seed: randomSeed,
  };
}; 