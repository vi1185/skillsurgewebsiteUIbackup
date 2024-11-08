'use client'

import { useEffect } from 'react'
import axios from 'axios'

const useBadgeNotification = () => {
  useEffect(() => {
    const checkForNewBadges = async () => {
      try {
        const response = await axios.get('/api/users/me/badges/latest')
        if (response.data) {
          alert(`Congratulations! You've earned the "${response.data.name}" badge!`)
          // Alternatively, use a toast notification library for better UI
        }
      } catch (error) {
        console.error('Error checking for new badges:', error)
      }
    }

    checkForNewBadges()
  }, [])
}

export default useBadgeNotification 