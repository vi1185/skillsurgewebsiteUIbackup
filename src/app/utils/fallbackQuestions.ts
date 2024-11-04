export const fallbackQuestions = {
    JavaScript: {
        Beginner: {
            category: 'JavaScript Basics',
            difficulty: 'Beginner',
            language: 'JavaScript',
            question: 'What is the difference between let and var in JavaScript?',
            codeSample: `var x = 1;
let y = 2;
if (true) {
    var x = 3; // affects outer x
    let y = 4; // different variable
}
console.log(x); // 3
console.log(y); // 2`,
            hints: [
                'Think about scope',
                'Consider block-level vs function-level',
                'Think about hoisting',
            ],
            answer: 'let provides block scope while var is function-scoped. var declarations are hoisted, let declarations are not.',
            explanation: 'var declarations are function-scoped and hoisted, meaning they are moved to the top of their scope. let declarations are block-scoped and not hoisted, providing better scoping rules and fewer unexpected behaviors.',
        },
        // Add more fallback questions...
    },
    // Add more languages...
}; 