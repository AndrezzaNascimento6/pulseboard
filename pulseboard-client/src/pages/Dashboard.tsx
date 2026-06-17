import { useAnalytics } from '../hooks/useAnalytics'

export function Dashboard() {
  const { data, isLoading, error } = useAnalytics()

  if (isLoading) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <p className="text-slate-400">Loading dashboard...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <p className="text-red-400">{error}</p>
      </main>
    )
  }

  if (!data) {
    return null
  }

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
                {data.recentEvents.map((event) => (
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
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  )
}