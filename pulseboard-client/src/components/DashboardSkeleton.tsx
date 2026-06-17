export function DashboardSkeleton() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <section className="mx-auto max-w-7xl">
        <div className="animate-pulse">
          <div className="h-6 w-40 rounded bg-slate-800" />
          <div className="mt-3 h-10 w-72 rounded bg-slate-800" />
          <div className="mt-2 h-4 w-80 rounded bg-slate-800" />
        </div>

        <div className="mt-6 animate-pulse">
          <div className="h-14 w-full rounded bg-slate-800" />
        </div>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="h-24 rounded-2xl border border-slate-800 bg-slate-900 p-5" />
          <div className="h-24 rounded-2xl border border-slate-800 bg-slate-900 p-5" />
          <div className="h-24 rounded-2xl border border-slate-800 bg-slate-900 p-5" />
          <div className="h-24 rounded-2xl border border-slate-800 bg-slate-900 p-5" />
        </section>

        <div className="mt-6 h-72 w-full animate-pulse rounded-2xl border border-slate-800 bg-slate-900" />

        <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900">
          <div className="border-b border-slate-800 p-5">
            <div className="h-6 w-40 rounded bg-slate-800 animate-pulse" />
            <div className="mt-2 h-4 w-72 rounded bg-slate-800 animate-pulse" />
          </div>

          <div className="overflow-x-auto p-5">
            <div className="space-y-3">
              <div className="h-6 w-full rounded bg-slate-800 animate-pulse" />
              <div className="h-6 w-full rounded bg-slate-800 animate-pulse" />
              <div className="h-6 w-full rounded bg-slate-800 animate-pulse" />
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
