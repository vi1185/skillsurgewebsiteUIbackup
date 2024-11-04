# Code Quiz Platform

An interactive coding quiz platform built with Next.js that helps developers test and improve their programming skills through hands-on challenges and quizzes.

## Features

- 🎯 Interactive coding quizzes with real-time feedback
- 💻 Live code playground for practicing solutions
- 🏆 Achievement system to track progress
- 📊 Personal dashboard with performance metrics
- 🔄 Dynamically generated quiz questions
- ⚡ Real-time code execution and validation

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Code Editor**: Monaco Editor
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **Code Execution**: Judge0 API

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Git

### Dependencies

```json
{
  "dependencies": {
    "@monaco-editor/react": "^4.6.0",
    "@radix-ui/react-alert-dialog": "^1.0.0",
    "@radix-ui/react-progress": "^1.0.0",
    "@radix-ui/react-slot": "^1.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "autoprefixer": "^10.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "lucide-react": "^0.294.0",
    "next": "14.0.0",
    "postcss": "^8.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "tailwind-merge": "^2.0.0",
    "tailwindcss": "^3.0.0",
    "tailwindcss-animate": "^1.0.0",
    "typescript": "^5.0.0",
    "zustand": "^4.4.0"
  },
  "devDependencies": {
    "eslint": "^8.0.0",
    "eslint-config-next": "14.0.0",
    "prettier": "^3.0.0"
  }
}
```

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file with the following variables:
```bash
JUDGE0_API_KEY=your_judge0_api_key
JUDGE0_API_URL=https://judge0-ce.p.rapidapi.com
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── quiz/
│   │       └── generate/    # Quiz generation API
│   ├── components/
│   │   ├── CodePlayground.tsx   # Code editor component
│   │   ├── CodingQuiz.tsx      # Main quiz component
│   │   ├── Quiz.tsx            # Quiz wrapper
│   │   ├── AchievementCard.tsx # Achievement display
│   │   └── quiz/
│   │       └── QuizQuestion.tsx # Question component
│   └── quiz/
│       └── page.tsx            # Quiz page
```

## Environment Variables

Required environment variables in `.env.local`:

```env
JUDGE0_API_KEY=           # Your Judge0 API key for code execution
JUDGE0_API_URL=           # Judge0 API endpoint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License

## Acknowledgments

- [Monaco Editor](https://microsoft.github.io/monaco-editor/) for the code editor
- [Judge0](https://judge0.com/) for code execution
- [shadcn/ui](https://ui.shadcn.com/) for UI components
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Deployment on Vercel

### Prerequisites for Deployment

1. Create a [Vercel account](https://vercel.com/signup) if you don't have one
2. Install the Vercel CLI:
```bash
npm install -g vercel
```

### Deployment Steps

1. Login to Vercel CLI:
```bash
vercel login
```

2. Configure your environment variables in Vercel:
   - Go to your Vercel dashboard
   - Select your project
   - Go to "Settings" → "Environment Variables"
   - Add the following variables:
     ```
     JUDGE0_API_KEY=your_judge0_api_key
     JUDGE0_API_URL=https://judge0-ce.p.rapidapi.com
     ```

3. Deploy using one of these methods:

   **Option 1: Deploy from the command line**
   ```bash
   vercel
   ```

   **Option 2: Deploy using Vercel Dashboard**
   - Push your code to GitHub
   - Import your repository in Vercel Dashboard
   - Click "Deploy"

4. Your project will be automatically built and deployed
   - Vercel will provide you with a production URL
   - Each push to the main branch will trigger automatic deployments

### Additional Deployment Configuration

Create a `vercel.json` file in your project root:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "env": {
    "JUDGE0_API_URL": "@judge0_api_url",
    "JUDGE0_API_KEY": "@judge0_api_key"
  }
}
```

### Post-Deployment Steps

1. Verify your deployment:
   - Check the deployment logs in Vercel dashboard
   - Test the application functionality
   - Verify environment variables are working

2. Set up a custom domain (optional):
   - Go to your project settings in Vercel
   - Navigate to "Domains"
   - Add your custom domain
   - Follow the DNS configuration instructions

3. Enable automatic deployments:
   - Connect your GitHub repository
   - Configure branch deployments
   - Set up preview deployments for pull requests

### Troubleshooting Deployment

Common issues and solutions:

1. Build failures:
   - Check build logs in Vercel dashboard
   - Verify all dependencies are properly listed in package.json
   - Ensure environment variables are correctly set

2. Runtime errors:
   - Check browser console for errors
   - Verify API endpoints are working
   - Check environment variables are properly accessed

3. Performance issues:
   - Enable Vercel Analytics
   - Monitor Edge Network caching
   - Check API response times

### Troubleshooting Build Issues

If you encounter EPERM (permission) errors during build:

1. Clear build cache and dependencies:
```bash
# Delete build cache and dependencies
rd /s /q .next
rd /s /q node_modules
del package-lock.json

# Reinstall dependencies
npm install

# Try building again
npm run build
```

2. If using Windows, run PowerShell as administrator:
```powershell
# Check for file locks
handle.exe .next

# Reset file permissions
icacls ".next" /reset /T
icacls "node_modules" /reset /T
```

3. Verify antivirus isn't blocking:
   - Temporarily disable real-time scanning
   - Add project directory to exclusions
   - Re-enable real-time scanning

4. Alternative build command:
```bash
# Use cross-env for consistent environment variables
npm install --save-dev cross-env
```

Update your package.json build script:
```json
{
  "scripts": {
    "build": "cross-env NODE_ENV=production next build"
  }
}
```