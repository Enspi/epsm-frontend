import { useRef } from "react"

import { Table } from "antd"
import useGoBack from "hooks/useGoBack"
import usePage from "hooks/usePage"

import styled from "styled-components"

import { transformData, columns } from "./data"
import Graph from "./graph"
import HourlyGraph from "./HourlyGraph"
import Heading from "components/Heading"

export default function DataTable(props) {
  usePage(props.state.toUpperCase() + " - Teriffs Forecasting")
  useGoBack(() => props.setActiveComp("post-data-file"))
  
  const arrangeData = [];
  const foreCasts = props.data.DailyForecasts;
  foreCasts.forEach(function(forecast){
    var item = {};
    item.name = forecast.Date.substr(0,10);
    item.min = forecast.Temperature.Minimum.Value;
    item.max = forecast.Temperature.Maximum.Value;
    arrangeData.push(item);
  })


  const arrangeHourlyData = [];
  const hourlyData = props.hourly;

  hourlyData.forEach(function(forecast){
    var item = {};
    item.time = forecast.DateTime.substr(11,5);
    item.temp = forecast.Temperature.Value;
    arrangeHourlyData.push(item);
  })

  console.log(arrangeHourlyData)

  return (
    <>
      <Heading size='26px' style={{ marginBottom: "25px" }}>
        Daily Forecasting
      </Heading>
      <Graph data={arrangeData}/>
      <div style={{width:'100%', border:'0.5px solid #001529', marginTop:'2rem', marginBottom:'2rem'}}></div>
      <Heading size='26px' style={{ marginBottom: "25px" }}>
        Hourly Forecasting
      </Heading>
      <HourlyGraph data={arrangeHourlyData}/>
      <br /><br />
      {/* <Heading size='26px' style={{ marginBottom: "25px", marginTop: "100px" }}>
        Data Table
      </Heading>
      <TableWrapper>
        <Table
          columns={columns(format)}
          // dataSource={transformedData.current}
          pagination={{
            pageSize: 50,
            position: ["bottomCenter"],
          }}
        />
      </TableWrapper> */}
    </>
  )
}

const TableWrapper = styled.div`
  .ant-pagination.ant-table-pagination {
    margin-top: 50px;
    margin-bottom: 120px;
  }
`
