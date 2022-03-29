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


