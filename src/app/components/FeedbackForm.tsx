'use client'

import React, { useState } from 'react'
import axios from 'axios'

interface FeedbackFormProps {
  projectId: string
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ projectId }) => {
  const [comment, setComment] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.post(`/api/projects/${projectId}/feedback`, { comment })
      setMessage('Feedback submitted successfully!')
      setComment('')
    } catch (error) {
      setMessage('Failed to submit feedback.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      {message && <p className="text-center text-green-500">{message}</p>}
      <div>
        <label className="block text-sm font-medium text-gray-300">Your Feedback</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className="w-full mt-1 p-2 bg-gray-800 rounded"
          placeholder="Enter your feedback here"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-secondary text-white py-2 rounded-full hover:bg-white hover:text-secondary transition-all duration-300"
      >
        Submit Feedback
      </button>
    </form>
  )
}

export default FeedbackForm 