import { useState } from "react"
import DataTable from "./DataTable"

import CaDaily from "./data/caDaily"
import MnDaily from "./data/mnDaily"
import TxDaily from "./data/txDaily"
import NyDaily from "./data/nyDaily"

// import CaHourly from "./data/caHourly"
// import MnHourly from "./data/mnHourly"
// import TxHourly from "./data/txHourly"
// import NyHourly from "./data/nyHourly"

import SelectData from "./SelectData"

export default function Renergy() {
  const [activeComp, setActiveComp] = useState("select-data")

  const match = activeComp.component || activeComp

  const getData = (state, format) => {
    // if (format === "hourly") {
    //   switch (state) {
    //     case "ca":
    //       return CaHourly
    //     case "mn":
    //       return MnHourly
    //     case "tx":
    //       return TxHourly
    //     case "ny":
    //       return NyHourly
    //     default:
    //       return CaHourly
    //   }
    // }
    // if (format === "daily") {
    switch (state) {
      case "ca":
        return CaDaily
      case "mn":
        return MnDaily
      case "tx":
        return TxDaily
      case "ny":
        return NyDaily
      default:
        return CaDaily
      // }
    }
  }

  switch (match) {
    case "select-data":
      return <SelectData setActiveComp={setActiveComp} />

    case "data-table":
      return (
        <DataTable
          data={JSON.parse(
            getData(activeComp.props.state, activeComp.props.format)
          )}
          state={activeComp.props.state}
          format={activeComp.props.format}
          setActiveComp={setActiveComp}
        />
      )

    default:
      return <h1>Not Found!</h1>
  }
}
