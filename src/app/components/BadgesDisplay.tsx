'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface Badge {
  id: string
  name: string
  imageUrl: string
}

const BadgesDisplay: React.FC = () => {
  const [badges, setBadges] = useState<Badge[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const response = await axios.get('/api/users/me/badges')
        setBadges(response.data)
      } catch (error) {
        console.error('Error fetching badges:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBadges()
  }, [])

  if (loading) {
    return <p className="text-center text-gray-300">Loading your badges...</p>
  }

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Your Badges</h3>
      {badges.length === 0 ? (
        <p className="text-gray-300">You have not earned any badges yet.</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {badges.map(badge => (
            <div key={badge.id} className="flex flex-col items-center">
              <img src={badge.imageUrl} alt={badge.name} className="w-16 h-16 mb-2" />
              <span className="text-gray-300">{badge.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BadgesDisplay 