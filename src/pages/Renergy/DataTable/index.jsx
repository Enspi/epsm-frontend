import useGoBack from "hooks/useGoBack"
import usePage from "hooks/usePage"

import Graph from "./graph"
import Heading from "components/Heading"

const namesMapping = {
  col: "Coal Energy",
  ng: "Natural Gases Energy",
  nuc: "Nuclear Energy",
  oil: "Petroleum Energy",
  wat: "Hydro Energy",
  sun: "Solar Energy",
  wnd: "Wind Energy",
  oth: "Other Resources",
}

export default function DataTable({ data, state, format, setActiveComp }) {
  usePage(state.toUpperCase() + " - Renewable Energy")
  useGoBack(() => setActiveComp("select-data"))

  return (
    <div style={{ paddingBottom: "100px" }}>
      {Object.entries(data).map(([source, sourceData], index) => {
        return (
          <>
            <Heading
              size='26px'
              style={{
                marginBottom: "25px",
                marginTop: index === 0 ? "20px" : "100px",
              }}>
              {namesMapping[source]}
            </Heading>
            <Graph
              data={sourceData}
              dataKey={"NG:" + source.toUpperCase()}
              timeKey={format === "hourly" ? "time" : "date"}
            />
          </>
        )
      })}
    </div>
  )
}
