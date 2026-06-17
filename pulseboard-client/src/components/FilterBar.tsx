import type { Dispatch, SetStateAction } from 'react'

type FilterBarProps = {
  period: number
  setPeriod: Dispatch<SetStateAction<number>>
  platform: string
  setPlatform: Dispatch<SetStateAction<string>>
}

export function FilterBar({ period, setPeriod, platform, setPlatform }: FilterBarProps) {
  return (
    <div className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div>
            <label htmlFor="period-select" className="text-sm text-slate-400">
              Period
            </label>
            <select
              id="period-select"
              value={String(period)}
              onChange={(e) => setPeriod(Number(e.target.value))}
              className="mt-1 rounded-md bg-slate-800 px-3 py-2 text-slate-200"
            >
              <option value={7}>7 days</option>
              <option value={14}>14 days</option>
              <option value={30}>30 days</option>
            </select>
          </div>

          <div>
            <label htmlFor="platform-select" className="text-sm text-slate-400">
              Platform
            </label>
            <select
              id="platform-select"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="mt-1 rounded-md bg-slate-800 px-3 py-2 text-slate-200"
            >
              <option value="All">All</option>
              <option value="Web">Web</option>
              <option value="Mobile">Mobile</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
