import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export default function Graph({ data, dataKey, timeKey }) {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey={timeKey} />
        <YAxis />
        <Tooltip />
        <Line type='monotone' dataKey={dataKey} stroke='#1890ff' dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}
