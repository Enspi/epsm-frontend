export const columns = [
  {
    title: "Time",
    dataIndex: "t",
    key: "t",
  },
  {
    title: "Higher Peaks",
    dataIndex: "df",
    key: "df",
    render: (v, obj) => {
      if (obj.isHigherPeak) return v + " MWh"
      return ""
    },
  },
  {
    title: "Lower Peaks",
    dataIndex: "df",
    key: "df",
    render: (v, obj) => {
      if (obj.isLowerPeak) return v + " MWh"
      return ""
    },
  },
]

export function transformData(data) {
  const dateTime = JSON.parse(JSON.stringify(data.t))
  const demandForecasting = JSON.parse(JSON.stringify(data.df))
  const higherPeaks = JSON.parse(JSON.stringify(data.hp))
  const lowerPeaks = JSON.parse(JSON.stringify(data.lp))

  const transformed = []

  let i = 0
  while (i < dateTime.length) {
    let t =
      new Date(dateTime[i])
        .toDateString()
        .replace(/^[a-zA-Z]{1,3} /, "")
        .replace(/ ([^ ]*)$/, ", $1") +
      " " +
      new Date(dateTime[i]).getHours() +
      ":00"

    transformed.push({
      t: t,
      df: Number(demandForecasting[i].toFixed(2)),
      isHigherPeak: higherPeaks.includes(i) ? true : false,
      isLowerPeak: lowerPeaks.includes(i) ? true : false,
    })
    i++
  }

  return transformed
}
