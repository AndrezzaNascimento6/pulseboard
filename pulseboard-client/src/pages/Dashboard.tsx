import { useState } from 'react'
import { useAnalytics } from '../hooks/useAnalytics'
import { ActiveUsersChart } from '../components/ActiveUsersChart'
import { FilterBar } from '../components/FilterBar'
import { DashboardSkeleton } from '../components/DashboardSkeleton'
import { DashboardHeader } from '../components/DashboardHeader'
import { MetricCard } from '../components/MetricCard'
import { EventsTable } from '../components/EventsTable'

export function Dashboard() {
  const { data, isLoading, error, refetch } = useAnalytics()
  const [period, setPeriod] = useState<number>(7)
  const [platform, setPlatform] = useState<string>('All')

  if (isLoading) {
    return <DashboardSkeleton />
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-950 text-white p-8">
        <section className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-red-700 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold text-red-400">Error loading dashboard</h2>
            <p className="mt-2 text-slate-400">{error}</p>
            <div className="mt-4">
              <button onClick={() => refetch()} className="rounded-md bg-red-600 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500">Try again</button>
            </div>
          </div>
        </section>
      </main>
    )
  }

  if (!data) {
    return null
  }

  const chartData = data.chartData.slice(-period)
  const filteredEvents = platform === 'All' ? data.recentEvents : data.recentEvents.filter((e) => e.platform === platform)

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 sm:p-8">
      <section className="mx-auto max-w-7xl">
        <DashboardHeader />

        <div className="mt-6">
          <FilterBar period={period} setPeriod={setPeriod} platform={platform} setPlatform={setPlatform} />
        </div>

        <section className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard title="Active Users" value={data.summary.activeUsers.toLocaleString()} />
          <MetricCard title="Conversion Rate" value={`${data.summary.conversionRate}%`} />
          <MetricCard title="Revenue" value={`$${data.summary.revenue.toLocaleString()}`} />
          <MetricCard title="Page Views" value={data.summary.pageViews.toLocaleString()} />
        </section>

        <section className="mt-8">
          {chartData.length === 0 ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">No chart data available</div>
          ) : (
            <ActiveUsersChart data={chartData} />
          )}
        </section>

        <EventsTable events={filteredEvents} />
      </section>
    </main>
  )
}