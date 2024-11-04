import { NextResponse } from "next/server";
import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export async function POST(req: Request) {
    try {
        const { language, difficulty } = await req.json();

        const timestamp = Date.now();
        const prompt = `Generate a ${difficulty.toLowerCase()} level coding question about ${language} (timestamp: ${timestamp}).
Format:
CATEGORY: [specific topic]
DIFFICULTY: ${difficulty}
LANGUAGE: ${language}
QUESTION: [clear, specific question]
CODE_SAMPLE:
\`\`\`${language.toLowerCase()}
[code if needed]
\`\`\`
HINTS:
1. [conceptual hint]
2. [implementation hint]
3. [specific solution hint]
ANSWER: [concise answer]
EXPLANATION: [detailed explanation]`;

        try {
            const response = await hf.textGeneration({
                model: "meta-llama/Llama-2-70b-chat-hf",
                inputs: prompt,
                parameters: {
                    max_new_tokens: 1000,
                    temperature: 0.8,
                    top_p: 0.95,
                    top_k: 50,
                    repetition_penalty: 1.2,
                    seed: timestamp,
                    stop: ["<|endoftext|>", "\n\n\n"]
                }
            });

            if (!response.generated_text) {
                throw new Error('No response from AI model');
            }

            return NextResponse.json({
                text: response.generated_text,
                success: true,
                timestamp
            });

        } catch (apiError) {
            console.error('API Error:', apiError);
            // Return a fallback response
            return NextResponse.json({
                text: `CATEGORY: ${language} Fundamentals
DIFFICULTY: ${difficulty}
LANGUAGE: ${language}
QUESTION: Explain a fundamental concept in ${language} programming.
HINTS:
1. Think about core language features
2. Consider basic syntax and structure
3. Focus on common use cases
ANSWER: This is a fundamental concept in ${language} that involves [basic principle].
EXPLANATION: Understanding this concept is crucial because it forms the foundation of ${language} programming.`,
                success: false,
                isDefault: true,
                timestamp
            });
        }
    } catch (error) {
        console.error('Request Error:', error);
        return NextResponse.json(
            { error: 'Failed to generate question' },
            { status: 500 }
        );
    }
} 