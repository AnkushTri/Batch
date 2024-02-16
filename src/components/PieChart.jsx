import React from 'react';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';

const data = {
  labels: ['Successful', 'Unsuccessful', 'Cancel'],
  datasets: [
    {
      data: [70, 50, 30], // Replace with your actual data
      backgroundColor: ['#4CAF50', '#f8f009', 'red'], // Orange and green colors
      hoverBackgroundColor: ['#60CC8E', '#f0e96b', 'lightcoral'], // Lighter shades for hover effect
    },
  ],
};

const options = {
  tooltips: {
    enabled: true,
    callbacks: {
      label: (context) => {
        const label = context.label;
        const value = context.dataset.data[context.dataIndex];
        return `${label}: ${value}%`;
      },
    },
  },
};

function MyPieChart() {
  return (
    <Wrapper>
      <Pie data={data} options={options} />
    </Wrapper>
  );
}
const Wrapper=styled.div`
    width: 100% ;
    margin: 0 auto;
    height:18rem;
`
export default MyPieChart;
