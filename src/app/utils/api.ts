export async function fetchWithRetry(
    url: string, 
    options: RequestInit, 
    retries = 3,
    delay = 1000
): Promise<Response> {
    let lastError: Error | null = null;

    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, options);
            
            if (response.ok) return response;
            
            if (response.status === 429) {
                const retryAfter = response.headers.get('Retry-After');
                await new Promise(resolve => 
                    setTimeout(resolve, (parseInt(retryAfter || '5') * 1000))
                );
                continue;
            }
            
            throw new Error(`HTTP error! status: ${response.status}`);
        } catch (error) {
            lastError = error as Error;
            if (i === retries - 1) break;
            await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
        }
    }

    throw lastError || new Error('Max retries reached');
} 