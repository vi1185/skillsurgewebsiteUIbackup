'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function AuthError() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full p-8 bg-dark-gray rounded-xl">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Authentication Error</h1>
        <p className="text-gray-300 mb-6">{error || 'Something went wrong during authentication.'}</p>
        <Link 
          href="/login"
          className="block w-full text-center bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90"
        >
          Back to Login
        </Link>
      </div>
    </div>
  )
} 