export type MetricSummary = {
  activeUsers: number
  conversionRate: number
  revenue: number
  pageViews: number
}

export type ChartPoint = {
  date: string
  activeUsers: number
}

export type ProductEvent = {
  id: number
  eventName: string
  userId: string
  platform: string
  createdAt: string
}

export type DashboardResponse = {
  summary: MetricSummary
  chartData: ChartPoint[]
  recentEvents: ProductEvent[]
}