import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const CustomizedDot = ({ cx, cy, stroke, payload, value, peakKey }) => {
  if (payload[peakKey])
    return (
      <svg x={cx - 4} y={cy - 4} width={8} height={8} fill='white'>
        <g transform='translate(4 4)'>
          <circle r='4' fill='#de5426' />
          <circle r='2' fill='#de5426' />
        </g>
      </svg>
    )

  return null
}

export default function Graph({ data, dataKey, peakKey }) {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='t' />
        <YAxis />
        <Tooltip />
        <Line
          type='monotone'
          dataKey={dataKey}
          stroke='#1890ff'
          dot={<CustomizedDot peakKey={peakKey} />}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
