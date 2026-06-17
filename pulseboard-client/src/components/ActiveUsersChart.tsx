import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import type { ChartPoint } from '../types/analytics'

type ActiveUsersChartProps = {
  data: ChartPoint[]
}

export function ActiveUsersChart({ data }: ActiveUsersChartProps) {
  const formattedData = data.map((item) => ({
    ...item,
    formattedDate: new Date(`${item.date}T00:00:00`).toLocaleDateString(
      'en-US',
      {
        month: 'short',
        day: 'numeric',
      },
    ),
  }))

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div>
        <h2 className="text-lg font-semibold">Active Users</h2>

        <p className="mt-1 text-sm text-slate-400">
          Daily active users during the selected period.
        </p>
      </div>

      <div className="mt-6 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={formattedData}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#1e293b"
            />

            <XAxis
              dataKey="formattedDate"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: '#94a3b8',
                fontSize: 12,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: '#94a3b8',
                fontSize: 12,
              }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: '#0f172a',
                border: '1px solid #1e293b',
                borderRadius: '12px',
              }}
              labelStyle={{
                color: '#e2e8f0',
              }}
              itemStyle={{
                color: '#67e8f9',
              }}
            />

            <Line
              type="monotone"
              dataKey="activeUsers"
              name="Active users"
              stroke="#22d3ee"
              strokeWidth={3}
              dot={{
                fill: '#22d3ee',
                r: 4,
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
