'use client'

import React from 'react'

interface ProgressBarProps {
  label: string
  progress: number // Value between 0 and 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, progress }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-primary">{label}</span>
        <span className="text-sm font-medium text-gray-300">{progress}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-primary h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar 