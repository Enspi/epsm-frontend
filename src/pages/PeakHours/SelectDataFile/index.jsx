import { useState } from "react"

import usePage from "hooks/usePage"
import { Select, Row, Col, Button, message, Upload } from "antd"
import { UploadOutlined } from "@ant-design/icons"
import Heading from "components/Heading"

import theme from "styles/Theme"

import { CallPostPeakHours } from "api/data"

const { Option } = Select

export default function Dashboard({ setActiveComp }) {
  const [state, setState] = useState("ca")
  const [dataFile, setDataFile] = useState(null)

  const [isLoading, setLoading] = useState(false)

  const onSubmit = async () => {
    if (!dataFile) {
      message.error("Please Select Data File")
      return
    }

    setLoading(true)

    const data = new FormData()
    data.append("state", state)
    data.append("data_file", dataFile)

    const res = await CallPostPeakHours(data)

    if (res.ok === 0) {
      message.warn("Oops! Invalid Excel File")
    } else if (res.ok === 1) {
      setActiveComp({
        component: "data-table",
        props: {
          data: res.res.data,
          state: state,
        },
      })
    }

    setLoading(false)
  }

  usePage("Peak Hours")
  return (
    <div style={{ maxWidth: "1000px", width: "100%" }}>
      <Row>
        <Col style={{ display: "flex", alignItems: "center" }} span={24}>
          <Heading
            style={{ marginRight: "20px" }}
            size='22px'
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
      </Row>

      <div style={{ marginTop: "50px", maxWidth: "500px", width: "100%" }}>
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
      </div>

      <Button
        onClick={onSubmit}
        loading={isLoading}
        type='primary'
        size='large'
        style={{ marginTop: "50px", maxWidth: "250px", width: "100%" }}>
        Submit
      </Button>
    </div>
  )
}
