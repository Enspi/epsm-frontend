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


  const exportToCSV = (dataFile) => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const ws = XLSX.utils.json_to_sheet(dataFile);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    // FileSaver.saveAs(data, 'd' + fileExtension);
    function blobToFile(theBlob, fileName){       
      return new File([theBlob], fileName, { lastModified: new Date().getTime(), type: theBlob.type })
    }
    return blobToFile(data, 'data.xlsx');
  };

  const onSubmit = async () => {
    // if (!dataFile) {
    //   message.error("Please Select Data File")
    //   return
    // }

    setLoading(true)

    const data = new FormData()
    data.append("state", state)
    data.append("format", format)
    if(state=='ca'){
      var dat = await axios.get(`https://api.eia.gov/series/?api_key=8hmyfvRy1fe5gY6cuMTMESMk0s1C4bKZ1pczxju4&series_id=EBA.CAL-ALL.D.HL`);
    }else if(state=='tx'){
      var dat = await axios.get(`https://api.eia.gov/series/?api_key=8hmyfvRy1fe5gY6cuMTMESMk0s1C4bKZ1pczxju4&series_id=EBA.TEX-ALL.D.HL`);
    }else if(state=='ny'){
      var dat = await axios.get(`https://api.eia.gov/series/?api_key=8hmyfvRy1fe5gY6cuMTMESMk0s1C4bKZ1pczxju4&series_id=EBA.NY-ALL.D.HL`);
    }else if(state=='mn'){
      var dat = await axios.get(`https://api.eia.gov/series/?api_key=8hmyfvRy1fe5gY6cuMTMESMk0s1C4bKZ1pczxju4&series_id=EBA.MIDW-ALL.D.HL`);
    }
    var resp = dat.data.series[0].data;
    var jsonResponse = [];
    if(format=='hourly'){
    resp.forEach(function(item){
      var da = {};
      var date = item[0];
      var dat3 = `${date.substr(4,2)}/${date.substr(6,2)}/${date.substr(0,4)}`;
      
      var dat4 = `${date.substr(4,2)}/${date.substr(0,4)}`;
      
        var currentDate = '03/2022';
        if(dat4 == currentDate){
          var hour = date.substr(9,2);
          da.localTime = dat3+' '+hour+':00';
          da.D = item[1];
          jsonResponse.push(da);
        }
      })
    }else{
      var days = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16', '17', '18', '19', '20', '21','22','23','24', '25', '26', '27', '28', '29', '30', '31'];
      var s = [];
      var newData = [];
      for (let i = 0; i < resp.length; i++) {
        const element = resp[i];
        if(element[0].substr(0,4)=='2022'){
          var dsa = element[0].substr(0,8);
          if(!s.includes(dsa)){
            s.push(dsa)
          }
          newData.push(element);
        }
      }
      var distinctDates = s;
      
      for (let i = 0; i < distinctDates.length; i++) {
        const date = distinctDates[i];
        var da = {};
        var total = 0;
        for (let k = 0; k < newData.length; k++) {
          const obj = newData[k];
          if(obj[0].substr(0,8)==date){
            total += obj[1];
          }          
        }
        console.log(total);
        var dateNew = `${date.substr(4,2)}/${date.substr(6,2)}/${date.substr(0,4)}`; 
        var total = total;
        da.localDate = dateNew;
        da.D = total;
        jsonResponse.push(da);

      }
    }
    var file = exportToCSV(jsonResponse);
    data.append("data_file", file)

    const res = await CallPostDataFile(data)

    if (res.ok === 0) {
      message.warn("Oops! Invalid Excel File")
    } else {
      setActiveComp({
        component: "data-table",
        props: {
          data: res.res.data,
          format: format,
          state: state,
        },
      })
    }

    setLoading(false)
  }

  usePage("Data Forecasting")
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
        <Col style={{ display: "flex", alignItems: "center" }} span={12}>
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
        </Col>
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
