export const generateHints = (answer: string): string[] => {
  const hints: string[] = [];
  
  // First hint: Give a conceptual hint
  const concepts = answer.match(/\b(using|with|through|by|involves|requires)\b.*?[.!?]/g);
  hints.push(concepts ? concepts[0].trim() : answer.split('.')[0] + '...');

  // Second hint: Show partial implementation or key points
  const implementation = answer.match(/\b(implement|create|use|write|apply)\b.*?[.!?]/g);
  hints.push(implementation ? implementation[0].trim() : answer.split('.').slice(0, 2).join('.') + '...');

  // Third hint: Show almost complete answer
  hints.push(answer.split('.').slice(0, -1).join('.') + '...');

  return hints;
};

export const formatAnswer = (answer: string): string => {
  // Format code blocks if present
  const formattedAnswer = answer.replace(
    /```(\w+)?\n([\s\S]*?)\n```/g,
    '<pre><code class="language-$1">$2</code></pre>'
  );

  // Format inline code
  return formattedAnswer
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');
}; 