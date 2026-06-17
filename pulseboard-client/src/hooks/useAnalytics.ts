import { useCallback, useEffect, useState } from 'react'
import { getDashboardData } from '../services/analyticsService'
import type { DashboardResponse } from '../types/analytics'

export function useAnalytics() {
  const [data, setData] = useState<DashboardResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const dashboardData = await getDashboardData()
      setData(dashboardData)
    } catch {
      setError('Could not load dashboard data.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const refetch = useCallback(() => {
    load()
  }, [load])

  return {
    data,
    isLoading,
    error,
    refetch,
  }
}