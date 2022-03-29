import { useRef } from "react"

import { Table } from "antd"
import useGoBack from "hooks/useGoBack"
import usePage from "hooks/usePage"

import styled from "styled-components"

import { transformData, columns } from "./data"
import Graph from "./graph"
import Heading from "components/Heading"

export default function DataTable({ data, state, setActiveComp }) {
  usePage(state.toUpperCase() + " - Peak Hours")
  useGoBack(() => setActiveComp("select-data-file"))

  const transformedData = useRef(transformData(data))

  return (
    <>
      <Heading size='26px' style={{ marginBottom: "25px" }}>
        Higher Peaks
      </Heading>
      <Graph
        data={transformedData.current}
        peakKey='isHigherPeak'
        dataKey='df'
      />

      <Heading size='26px' style={{ marginBottom: "25px", marginTop: "100px" }}>
        Lower Peaks
      </Heading>
      <Graph
        data={transformedData.current}
        peakKey='isLowerPeak'
        dataKey='df'
      />

      <Heading size='26px' style={{ marginBottom: "25px", marginTop: "100px" }}>
        Peaks Hours Table
      </Heading>
      <TableWrapper>
        <Table
          columns={columns}
          dataSource={transformedData.current.filter(
            v => v.isLowerPeak || v.isHigherPeak
          )}
          pagination={{
            pageSize: 50,
            position: ["bottomCenter"],
          }}
        />
      </TableWrapper>
    </>
  )
}

const TableWrapper = styled.div`
  .ant-pagination.ant-table-pagination {
    margin-top: 50px;
    margin-bottom: 120px;
  }
`
