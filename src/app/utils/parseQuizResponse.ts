interface ParsedQuiz {
  category: string;
  difficulty: string;
  language: string;
  question: string;
  codeSample?: string;
  hints: string[];
  answer: string;
  explanation: string;
}

export const parseQuizResponse = (text: string): ParsedQuiz | null => {
  try {
    // Initialize default values
    const result: ParsedQuiz = {
      category: 'General',
      difficulty: 'Beginner',
      language: 'JavaScript',
      question: '',
      hints: [],
      answer: '',
      explanation: '',
    };

    // Split text into sections
    const sections = text.split('\n').map(line => line.trim()).filter(line => line);

    let currentSection: keyof ParsedQuiz | null = null;
    let codeBlock = '';
    let isInCodeBlock = false;

    for (const line of sections) {
      // Handle code blocks
      if (line.startsWith('```')) {
        if (isInCodeBlock) {
          result.codeSample = codeBlock.trim();
          codeBlock = '';
        }
        isInCodeBlock = !isInCodeBlock;
        continue;
      }

      if (isInCodeBlock) {
        codeBlock += line + '\n';
        continue;
      }

      // Parse sections
      if (line.toLowerCase().startsWith('category:')) {
        result.category = line.substring(9).trim();
      } else if (line.toLowerCase().startsWith('difficulty:')) {
        result.difficulty = line.substring(11).trim();
      } else if (line.toLowerCase().startsWith('language:')) {
        result.language = line.substring(9).trim();
      } else if (line.toLowerCase().startsWith('question:')) {
        currentSection = 'question';
        result.question = line.substring(9).trim();
      } else if (line.toLowerCase().startsWith('hints:')) {
        currentSection = null;
      } else if (line.match(/^\d+\./)) {
        result.hints.push(line.replace(/^\d+\./, '').trim());
      } else if (line.toLowerCase().startsWith('answer:')) {
        currentSection = 'answer';
        result.answer = line.substring(7).trim();
      } else if (line.toLowerCase().startsWith('explanation:')) {
        currentSection = 'explanation';
        result.explanation = line.substring(12).trim();
      } else if (currentSection) {
        result[currentSection] += ' ' + line;
      }
    }

    // Validate required fields
    if (!result.question || !result.answer) {
      console.warn('Missing required fields in quiz response');
      return null;
    }

    // Ensure at least one hint
    if (result.hints.length === 0) {
      result.hints = [result.answer.split('.')[0] + '...'];
    }

    return result;
  } catch (error) {
    console.error('Failed to parse quiz response:', error);
    return null;
  }
}; 