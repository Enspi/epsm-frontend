import { useState } from "react"
import DataTable from "./DataTable"

import PostDataFile from "./PostDataFile"

export default function Weather() {
  const [activeComp, setActiveComp] = useState("post-data-file")

  const match = activeComp.component || activeComp

  console.log(match)

  switch (match) {
    case "post-data-file":
      return <PostDataFile setActiveComp={setActiveComp} />

    case "data-table":
      return (
        <DataTable
          data={activeComp.props.data}
          state={activeComp.props.state}
          hourly={activeComp.props.hourly}
          setActiveComp={setActiveComp}
        />
      )

    default:
      return <h1>Not Found!</h1>
  }
}
