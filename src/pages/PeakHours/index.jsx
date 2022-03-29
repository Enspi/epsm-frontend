import { useState } from "react"
import DataTable from "./DataTable"

import SelectDataFile from "./SelectDataFile"

export default function Spikes() {
  const [activeComp, setActiveComp] = useState("select-data-file")

  const match = activeComp.component || activeComp

  switch (match) {
    case "select-data-file":
      return <SelectDataFile setActiveComp={setActiveComp} />

    case "data-table":
      return (
        <DataTable
          data={activeComp.props.data}
          state={activeComp.props.state}
          format='hourly'
          setActiveComp={setActiveComp}
        />
      )

    default:
      return <h1>Not Found!</h1>
  }
}
