import type { ReactNode } from 'react'

type MetricCardProps = {
  title: string
  value: ReactNode
}

export function MetricCard({ title, value }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-transform duration-150 ease-in-out hover:-translate-y-0.5">
      <p className="text-sm text-slate-400">{title}</p>
      <strong className="mt-2 block text-2xl text-slate-200">{value}</strong>
    </div>
  )
}
