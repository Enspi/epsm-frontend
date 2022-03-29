import { useState } from "react"

import usePage from "hooks/usePage"
import { Select, Row, Col, Button } from "antd"

import Heading from "components/Heading"

import theme from "styles/Theme"

const { Option } = Select

export default function Dashboard({ setActiveComp }) {
  const [state, setState] = useState("ca")
  const [format, setFormat] = useState("daily")

  const [isLoading, setLoading] = useState(false)

  const onSubmit = () => {
    setActiveComp({
      component: "data-table",
      props: {
        format: format,
        state: state,
      },
    })
  }

  usePage("Renewable Energy")
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
        {/* <Col style={{ display: "flex", alignItems: "center" }} span={12}>
          <Heading
            style={{ marginRight: "20px" }}
            size='22px'
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
      <Button
        onClick={onSubmit}
        loading={isLoading}
        type='primary'
        size='large'
        style={{ marginTop: "50px", maxWidth: "250px", width: "100%" }}>
        See Data
      </Button>
    </div>
  )
}
