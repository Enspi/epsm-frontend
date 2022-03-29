import { useRef } from "react"

import { Table } from "antd"
import useGoBack from "hooks/useGoBack"
import usePage from "hooks/usePage"

import styled from "styled-components"

import { transformData, columns } from "./data"
import Graph from "./graph"
import Heading from "components/Heading"

export default function DataTable({ data, state, format, setActiveComp }) {
  usePage(state.toUpperCase() + " - " +format.toUpperCase() + " FORECASTING")
  useGoBack(() => setActiveComp("post-data-file"))

  const transformedData = useRef(transformData(data, format))

  return (
    <>
      <Heading size='26px' style={{ marginBottom: "25px" }}>
        Demand
      </Heading>
      <Graph data={transformedData.current} value='d' />

      <Heading size='26px' style={{ marginBottom: "25px", marginTop: "100px" }}>
        Demand Forecasting
      </Heading>
      <Graph data={transformedData.current} value='df' />

      <Heading size='26px' style={{ marginBottom: "25px", marginTop: "100px" }}>
        Data Table
      </Heading>
      <TableWrapper>
        <Table
          columns={columns(format)}
          dataSource={transformedData.current}
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
