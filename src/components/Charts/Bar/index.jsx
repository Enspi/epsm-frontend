import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styled from "styled-components"
import { Bar } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Industrial', 'Commercial', 'Residential', 'Traffic'];
const data = {
  labels,
  datasets: [
    {
      label: 'Renewable Energy',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
    {
      label: 'Fossil Fuel',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 1)',
    },
    {
      label: 'Nuclear',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(111,205,205, 1)',
    },
    {
      label: 'Coal',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255,216,120, 1)',
    },
    {
      label: 'Natural Gas',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(194,163,255, 1)',
    },
    {
      label: 'Wind',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(16, 196, 64, 1)',
    },
    {
      label: 'Solar',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(196, 16, 127, 1)',
    },
    {
      label: 'Geo Thermal',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(14, 30, 201, 1)',
    },
  ],
};

export default function BarChart() {
  return (
      <>
      <GraphWrapper>
        <Bar options={options} data={data} />
      </GraphWrapper>
      <br />
      
      </>
  )
}


const GraphWrapper = styled.div`
    & > canvas{
        width:100%;
        height:500px !important;
    }

`