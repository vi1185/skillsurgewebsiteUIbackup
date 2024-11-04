export const generateQuizPrompt = (language: string, difficulty: string) => {
  return `Generate a ${difficulty} level coding question about ${language}.
Please format your response exactly as follows:

CATEGORY: [specific programming concept]
DIFFICULTY: ${difficulty}
LANGUAGE: ${language}
QUESTION: [clear, specific question]
CODE_SAMPLE:
\`\`\`${language.toLowerCase()}
[code if needed]
\`\`\`
HINTS:
1. [first hint]
2. [second hint]
3. [third hint]
ANSWER: [concise answer]
EXPLANATION: [detailed explanation]

Make sure the question:
1. Is specific to ${language}
2. Has clear right/wrong answers
3. Tests understanding, not just syntax
4. Includes practical examples where appropriate`;
}; 