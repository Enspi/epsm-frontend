import React from 'react';
import styled from "styled-components"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Industrial', 'Commercial', 'Residential', 'Trafic'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function Donut() {
  return (
    <>
    <br />
    <GraphWrapper>
        <Doughnut data={data}/>
    </GraphWrapper>
    </>
  )
}


const GraphWrapper = styled.div`
    float:right;
    margin-top:10px;
    & > canvas{
        height:500px !important;
        width:500px !important;
    }

`