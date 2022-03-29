import { useState } from "react"

import usePage from "hooks/usePage"
import { Select, Row, Col, Upload, Button, message } from "antd"

import { CallPostDataFile } from "api/data"

import Heading from "components/Heading"

import theme from "styles/Theme"

import { UploadOutlined } from "@ant-design/icons"
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

import axios from "axios"

const { Option } = Select

export default function Dashboard({ setActiveComp }) {
  const [dataFile, setDataFile] = useState(null)
  const [state, setState] = useState("ca")
  const [format, setFormat] = useState("daily")
  
  const [isLoading, setLoading] = useState(false)
  
  
  
  const onSubmit = async () => {
    
    if(state=='ca'){
      var daily = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/2167931?apikey=W23ehxlLw56AEQIelQiAdGc1PVxIsKjA`);
      var hourly = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/2167931?apikey=W23ehxlLw56AEQIelQiAdGc1PVxIsKjA`);
    }else if(state=='tx'){
      var daily = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/335734?apikey=W23ehxlLw56AEQIelQiAdGc1PVxIsKjA`);
      var hourly = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/335734?apikey=W23ehxlLw56AEQIelQiAdGc1PVxIsKjA`);
    }else if(state=='ny'){
      var daily = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/349727?apikey=W23ehxlLw56AEQIelQiAdGc1PVxIsKjA`);
      var hourly = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/349727?apikey=W23ehxlLw56AEQIelQiAdGc1PVxIsKjA`);
    }else if(state=='mn'){
      var daily = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/2247825?apikey=W23ehxlLw56AEQIelQiAdGc1PVxIsKjA`);
      var hourly = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/2247825?apikey=W23ehxlLw56AEQIelQiAdGc1PVxIsKjA`);
    }
    if(daily.data){
      setActiveComp({
        component: "data-table",
        props: {
          data: daily.data,
          hourly:hourly.data,
          state: state,
          setActiveComp:setActiveComp
        },
      })
    }
  }

  usePage("Weather Forecasting")
  return (
    <div style={{ maxWidth: "1000px", width: "100%" }}>
      <Row>
        <Col style={{ display: "flex", alignItems: "center" }} span={12}>
          <Heading
            style={{ marginRight: "20px" }}
            size='20px'
            weight={theme.font.weight.semiBold}>
            Select State:
          </Heading>
          <Select defaultValue={state} size='large' onChange={v => setState(v)}>
            <Option value='ca'>California</Option>
            <Option value='tx'>Texas</Option>
            <Option value='ny'>New York</Option>
            <Option value='mn'>Minnesota</Option>
          </Select>
        </Col>
        {/* <Col style={{ display: "flex", alignItems: "center" }} span={12}>
          <Heading
            style={{ marginRight: "20px" }}
            size='20px'
            weight={theme.font.weight.semiBold}>
            Select Format:
          </Heading>
          <Select
            defaultValue={format}
            size='large'
            onChange={v => setFormat(v)}>
            <Option value='daily'>Daily</Option>
            <Option value='hourly'>Hourly</Option>
          </Select>
        </Col> */}
      </Row>

      
      {/* <div style={{ marginTop: "50px", maxWidth: "500px", width: "100%" }}>
        <Heading
          style={{ marginRight: "20px", display: "inline" }}
          size='20px'
          weight={theme.font.weight.semiBold}>
          Select Data File:
        </Heading>
        <Upload
          size='large'
          onRemove={() => setDataFile(null)}
          beforeUpload={f => {
            setDataFile(f)
            return false
          }}>
          {!dataFile && (
            <Button
              size='large'
              style={{ display: "inline" }}
              multiple={false}
              icon={<UploadOutlined />}>
              Upload File
            </Button>
          )}
        </Upload>
      </div> */}

      <Button
        onClick={onSubmit}
        loading={isLoading}
        type='primary'
        size='large'
        style={{ marginTop: "50px", maxWidth: "200px", width: "100%" }}>
        Submit
      </Button>
    </div>
  )
}
