import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import {
    BarChartOutlined,
    RiseOutlined,
    SlidersOutlined,
    ThunderboltOutlined,
    DollarOutlined,
    ArrowLeftOutlined,
    UserOutlined,
    LogoutOutlined,
    AntCloudOutlined,
    DashboardOutlined,
    BankOutlined
  } from "@ant-design/icons"
  
const { Meta } = Card;

export default function DashboardCardWidget() {
    return (
        <>
            <Row gutter={12}>
                <Col xs={24} sm={12} md={8}>
                    <Card>
                        <Meta
                            avatar={<ThunderboltOutlined style={{transform:'scale(2.5) translateY(45%)', color: "#FF6384"}}/>}
                            title="1,1306.3 KWH"
                            description="Energy Consumption"
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Card>
                        <Meta
                            avatar={<DollarOutlined style={{transform:'scale(2.5) translateY(45%)', color:"#4BC0C0"}}/>}
                            title="$28,752"
                            description="Production Cost"
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Card>
                        <Meta
                            avatar={<AntCloudOutlined style={{transform:'scale(2.5) translateY(45%)', color:'#C2A3FF'}}/>}
                            title="32&deg; C"
                            description="Lahore, Pakistan"
                        />
                    </Card>
                </Col>
                {/* <Col xs={24} sm={12} md={8}>
                    <Card>
                        <Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Col> */}
            </Row>
        </>
    )
}