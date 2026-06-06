import type { DashboardResponse } from '../types/analytics'

const API_URL = 'http://localhost:5145/api/Analytics/dashboard'

export async function getDashboardData(): Promise<DashboardResponse> {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Failed to fetch dashboard data')
  }

  return response.json()
}