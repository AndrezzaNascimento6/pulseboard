import { useState } from 'react'
import { useAnalytics } from '../hooks/useAnalytics'
import { ActiveUsersChart } from '../components/ActiveUsersChart'
import { FilterBar } from '../components/FilterBar'
import { DashboardSkeleton } from '../components/DashboardSkeleton'

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
              <button
                onClick={() => refetch()}
                className="rounded-md bg-red-600 px-4 py-2 text-white"
              >
                Try again
              </button>
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
  const filteredEvents =
    platform === 'All' ? data.recentEvents : data.recentEvents.filter((e) => e.platform === platform)

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <section className="mx-auto max-w-7xl">
        <div>
          <p className="text-sm font-medium text-cyan-400">PulseBoard</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Product Analytics Dashboard
          </h1>
          <p className="mt-2 text-slate-400">
            Real-time overview of product metrics, user behavior and recent events.
          </p>
        </div>

        <FilterBar period={period} setPeriod={setPeriod} platform={platform} setPlatform={setPlatform} />

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Active Users</p>
            <strong className="mt-2 block text-2xl">
              {data.summary.activeUsers.toLocaleString()}
            </strong>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Conversion Rate</p>
            <strong className="mt-2 block text-2xl">
              {data.summary.conversionRate}%
            </strong>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Revenue</p>
            <strong className="mt-2 block text-2xl">
              ${data.summary.revenue.toLocaleString()}
            </strong>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Page Views</p>
            <strong className="mt-2 block text-2xl">
              {data.summary.pageViews.toLocaleString()}
            </strong>
          </div>
        </section>

        <section className="mt-8">
          {chartData.length === 0 ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">
              No chart data available
            </div>
          ) : (
            <ActiveUsersChart data={chartData} />
          )}
        </section>

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900">
          <div className="border-b border-slate-800 p-5">
            <h2 className="text-lg font-semibold">Recent Events</h2>
            <p className="mt-1 text-sm text-slate-400">
              Latest product events captured by the analytics API.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-slate-400">
                <tr>
                  <th className="px-5 py-3 font-medium">Event</th>
                  <th className="px-5 py-3 font-medium">User</th>
                  <th className="px-5 py-3 font-medium">Platform</th>
                  <th className="px-5 py-3 font-medium">Created At</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800">
                {filteredEvents.length === 0 ? (
                  <tr>
                    <td className="px-5 py-8 text-center text-slate-400" colSpan={4}>
                      No events found for this platform.
                    </td>
                  </tr>
                ) : (
                  filteredEvents.map((event) => (
                    <tr key={event.id}>
                      <td className="px-5 py-4 font-medium text-slate-200">
                        {event.eventName}
                      </td>
                      <td className="px-5 py-4 text-slate-400">
                        {event.userId}
                      </td>
                      <td className="px-5 py-4">
                        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                          {event.platform}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-400">
                        {new Date(event.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  )
}