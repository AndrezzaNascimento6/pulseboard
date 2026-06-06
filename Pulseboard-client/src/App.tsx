function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <section className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">
        <p className="text-sm font-medium text-cyan-400">PulseBoard</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Product Analytics Dashboard
        </h1>

        <p className="mt-4 text-slate-300">
          Front-end focused full-stack dashboard built with React, TypeScript,
          Tailwind CSS and ASP.NET Core Web API.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
            React
          </span>
          <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
            TypeScript
          </span>
          <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
            Tailwind
          </span>
          <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
            .NET API
          </span>
        </div>
      </section>
    </main>
  )
}

export default App