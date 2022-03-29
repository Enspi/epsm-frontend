import usePage from "hooks/usePage"
import PiChart from "components/Charts/PiChart"
import RadChart from "components/Charts/RadChart"
import TableOne from "components/Tables/TableOne"
import Donut from "components/Charts/DonutChart"
import BarChart from "components/Charts/Bar"
import styled from 'styled-components'
import { StackedBarChart } from "components/Charts/StackedBarChart"
import DashboardCardWidget from "components/Card/Widget/DashboardWidgets"
import { Row, Col } from 'antd';
import { Card, Avatar } from 'antd';
const { Meta } = Card;
export default function Dashboard() {
	usePage("Dashboard")
	return (
		<>
			<DashboardCardWidget />
			<br /><br />
			
			<h2>Production & Consumption</h2>
			
			<br />
			<div>
				<Row gutter={12} >
					<Col md={8}>
						<Card>
							<h3>Average Energy Consumption By Sector</h3>
							<Donut />
						</Card>
					</Col>
					<Col md={16}>
						<Card>
							<h3>Production Quantity</h3>
							<BarChart />
						</Card>
					</Col>
				</Row>
			</div>
			
			<WidgetWrapper>
				<Row gutter={12} style={{ height: '500px !important' }}>
					<Col md={24}>
						<Card>
							<h3>Dashboard {'>'} SEDS Production</h3>
							<TableOne />
						</Card>
					</Col>
					{/* <Col md={24}>
						<StackedBarChart />
					</Col> */}
				</Row>
			</WidgetWrapper>
			<h2>Cost & Consumption</h2>
			<WidgetWrapper>
				<Card>
					<h3>Production Cost</h3>
					<Row gutter={12} style={{ height: '500px !important' }}>
						<Col md={16}>
							<PiChart />
						</Col>
						<Col md={8}>
							<Card>
								<h3>
									Energy Consumption By Appliances
								</h3>
								<RadChart />
							</Card>
						</Col>
					</Row>
				</Card>
			</WidgetWrapper>
			
			<br /><br /><br />
		</>
	)
}
const WidgetWrapper = styled.div`
	margin-top:30px;
	& > .ant-row{
		height:500px !important;
	}
`