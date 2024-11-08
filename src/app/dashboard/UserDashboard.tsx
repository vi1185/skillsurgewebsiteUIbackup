'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProgressBar from '../components/ProgressBar'
import BadgesDisplay from '../components/BadgesDisplay'
import useBadgeNotification from '../hooks/useBadgeNotification'

interface Milestone {
  id: string
  title: string
  completed: boolean
}

interface Goal {
  id: string
  description: string
  target: string
}

const UserDashboard: React.FC = () => {
  useBadgeNotification()
  
  const [milestones, setMilestones] = useState<Milestone[]>([])
  const [goals, setGoals] = useState<Goal[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await axios.get('/api/progress')
        setMilestones(response.data.milestones)
        setGoals(response.data.goals)
      } catch (error) {
        console.error('Error fetching progress:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProgress()
  }, [])

  const calculateProgress = () => {
    if (milestones.length === 0) return 0
    const completed = milestones.filter(m => m.completed).length
    return Math.round((completed / milestones.length) * 100)
  }

  if (loading) {
    return <p className="text-center text-gray-300">Loading your dashboard...</p>
  }

  return (
    <div className="bg-black text-white p-8 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Progress</h2>
      
      <ProgressBar label="Overall Progress" progress={calculateProgress()} />

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recent Milestones</h3>
        <ul className="space-y-2">
          {milestones.slice(0, 5).map(milestone => (
            <li key={milestone.id} className="flex items-center">
              <span className={`w-3 h-3 rounded-full mr-2 ${milestone.completed ? 'bg-primary' : 'bg-gray-600'}`}></span>
              <span>{milestone.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Your Goals</h3>
        <ul className="space-y-2">
          {goals.map(goal => (
            <li key={goal.id} className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-secondary mr-2"></span>
              <span>{goal.description} - <strong>{goal.target}</strong></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UserDashboard 