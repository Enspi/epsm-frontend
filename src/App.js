import { Route, Redirect } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import Theme from "styles/Theme"

import Page404 from "pages/404"
import Global from "styles/Global"

import CustomSwitch from "components/CustomSwitch"

import Layout from "components/Layout"

import Auth from "pages/Auth"
import DataForecast from "pages/DataForecast"
import "antd/dist/antd.css"
import Renergy from "pages/Renergy"
import Spikes from 'pages/Spikes'
import PeakHours from "pages/PeakHours"
import Cost from "pages/Cost"
import Weather from "pages/Weather"
import Dashboard from "pages/Dashboard"
import Teriffs from "pages/Teriffs"
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Global />
      <CustomSwitch>
        <Route exact path='/' render={() => <Redirect to='/data-forecast' />} />
        <Route path={["/data-forecast", "/cost", "/renewable-energy", "/peak-hours", "/spikes", "/weather", "/dashboard", "/teriffs"]}>
          <Layout>
            <CustomSwitch>
              <Route exact path='/data-forecast'>
                <DataForecast />
              </Route>
              <Route exact path='/renewable-energy'>
                <Renergy />
              </Route>
              <Route exact path='/peak-hours'>
                <PeakHours />
              </Route>
              <Route exact path='/spikes'>
                <Spikes />
              </Route>
              <Route exact path='/cost'>
                <Cost />
              </Route>
              <Route exact path='/weather'>
                <Weather />
              </Route>
              <Route exact path='/dashboard'>
                <Dashboard />
              </Route>
              <Route exact path='/teriffs'>
                <Teriffs />
              </Route>
            </CustomSwitch>
          </Layout>
        </Route>
        <Route path={`/auth`} component={Auth} />
        <Route path={`/not-found`} component={Page404} />
      </CustomSwitch>
    </ThemeProvider>
  )
}

export default App
