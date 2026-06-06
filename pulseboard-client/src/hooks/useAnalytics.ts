import { useEffect, useState } from 'react'
import { getDashboardData } from '../services/analyticsService'
import type { DashboardResponse } from '../types/analytics'

export function useAnalytics() {
  const [data, setData] = useState<DashboardResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadDashboardData() {
      try {
        const dashboardData = await getDashboardData()
        setData(dashboardData)
      } catch {
        setError('Could not load dashboard data.')
      } finally {
        setIsLoading(false)
      }
    }

    loadDashboardData()
  }, [])

  return {
    data,
    isLoading,
    error,
  }
}