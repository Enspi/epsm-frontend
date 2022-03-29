// import React, { PureComponent } from 'react';
// import {
//   ComposedChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   Scatter,
//   ResponsiveContainer,
// } from 'recharts';

// const data = [
//   { index: 10000, red: 1643, blue: 790 },
//   { index: 1666, red: 182, blue: 42 },
//   { index: 625, red: 56, blue: 11 },
//   { index: 300, redLine: 0 },
//   { index: 10000, redLine: 1522 },
//   { index: 600, blueLine: 0 },
//   { index: 10000, blueLine: 678 },
// ];

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/composed-chart-with-best-fit-q7r21';

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <ComposedChart
//           width={500}
//           height={400}
//           data={data}
//           margin={{
//             top: 20,
//             right: 80,
//             bottom: 20,
//             left: 20,
//           }}
//         >
//           <CartesianGrid stroke="#f5f5f5" />
//           <Tooltip />
//           <Legend />
//           {/* Time */}
//           <XAxis dataKey="index" type="number" label={{ value: 'Index', position: 'insideBottomRight', offset: 0 }} />
//           <YAxis unit="ms" type="number" label={{ value: '', angle: -90, position: 'insideLeft' }} />
//           <Scatter name="red" dataKey="red" fill="red" />
//           <Scatter name="blue" dataKey="blue" fill="blue" />
//           <Line dataKey="blueLine" stroke="blue" dot={false} activeDot={false} legendType="none" />
//           <Line dataKey="redLine" stroke="red" dot={false} activeDot={false} legendType="none" />
//         </ComposedChart>
//       </ResponsiveContainer>
//     );
//   }
// }

import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    thermal: 4000,
    coal: 2400,
    wind: 2400,
  },
  {
    name: 'February',
    thermal: 3000,
    coal: 1398,
    wind: 2210,
  },
  {
    name: 'March',
    thermal: 2000,
    coal: 9800,
    wind: 2290,
  },
  {
    name: 'April',
    thermal: 2780,
    coal: 3908,
    wind: 2000,
  },
  {
    name: 'May',
    thermal: 1890,
    coal: 4800,
    wind: 2181,
  },
  {
    name: 'June',
    thermal: 2390,
    coal: 3800,
    wind: 2500,
  },
  {
    name: 'July',
    thermal: 3490,
    coal: 4300,
    wind: 2100,
  },
  {
    name: 'August',
    thermal: 4490,
    coal: 5300,
    wind: 3100,
  },
  {
    name: 'September',
    thermal: 4290,
    coal: 5100,
    wind: 2900,
  },
  {
    name: 'October',
    thermal: 5290,
    coal: 6100,
    wind: 3900,
  },
  {
    name: 'November',
    thermal: 2290,
    coal: 4100,
    wind: 3900,
  },
  {
    name: 'December',
    thermal: 3000,
    coal: 4000,
    wind: 5000,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="thermal" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="coal" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="wind" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

