import './globals.css'
import { Inter, Fredoka } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const fredoka = Fredoka({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fredoka',
})

export const metadata = {
  title: 'SkillSurge',
  description: 'Learn, Practice, and Master Web Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${fredoka.variable} min-h-screen bg-black font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
