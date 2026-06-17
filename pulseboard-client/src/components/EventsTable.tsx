import type { ProductEvent } from '../types/analytics'

type EventsTableProps = {
  events: ProductEvent[]
}

export function EventsTable({ events }: EventsTableProps) {
  return (
    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900">
      <div className="border-b border-slate-800 p-5">
        <h2 className="text-lg font-semibold">Recent Events</h2>
        <p className="mt-1 text-sm text-slate-400">Latest product events captured by the analytics API.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm" aria-describedby="events-desc">
          <caption id="events-desc" className="sr-only">List of recent product events with user and platform information</caption>
          <thead className="bg-slate-900 text-slate-400">
            <tr>
              <th className="px-5 py-3 font-medium">Event</th>
              <th className="px-5 py-3 font-medium">User</th>
              <th className="px-5 py-3 font-medium">Platform</th>
              <th className="px-5 py-3 font-medium">Created At</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800">
            {events.length === 0 ? (
              <tr>
                <td className="px-5 py-8 text-center text-slate-400" colSpan={4}>No events found for this platform.</td>
              </tr>
            ) : (
              events.map((event) => (
                <tr key={event.id} className="hover:bg-slate-800 transition-colors duration-150">
                  <td className="px-5 py-4 font-medium text-slate-200">{event.eventName}</td>
                  <td className="px-5 py-4 text-slate-400">{event.userId}</td>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">{event.platform}</span>
                  </td>
                  <td className="px-5 py-4 text-slate-400">{new Date(event.createdAt).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}
