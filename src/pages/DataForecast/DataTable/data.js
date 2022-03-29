export const columns = format => [
  {
    title: format === "daily" ? "Days" : "Hours",
    dataIndex: "t",
    key: "t",
  },
  {
    title: "Demand",
    dataIndex: "d",
    key: "d",
    render: v => v + " MWh",
  },
  {
    title: "Demand Forecasting",
    dataIndex: "df",
    key: "df",
    render: v => v + " MWh",
  },
]

export function transformData(data, format) {
  const dateTime = JSON.parse(JSON.stringify(data.t))
  const demand = JSON.parse(JSON.stringify(data.d))
  const demandForecast = JSON.parse(JSON.stringify(data.df))

  const transformed = []

  let i = 0
  while (i < dateTime.length) {
    let t = new Date(dateTime[i])
      .toDateString()
      .replace(/^[a-zA-Z]{1,3} /, "")
      .replace(/ ([^ ]*)$/, ", $1")

    if (format === "hourly")
      t = t + " " + new Date(dateTime[i]).getHours() + ":00"

    transformed.push({
      t: t,
      d: Number(demand[i].toFixed(2)),
      df: Number(demandForecast[i].toFixed(2)),
    })
    i++
  }

  return transformed
}
