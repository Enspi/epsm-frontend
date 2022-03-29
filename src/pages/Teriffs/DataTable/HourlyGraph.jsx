import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function HourlyGraph (props){
    return (
      <ResponsiveContainer width="100%" height={550}>
        <LineChart
          width={500}
          height={300}
          data={props.data}
          
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temp" stroke="#1890ff" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
}
