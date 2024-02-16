import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import styled from "styled-components";
// Register linear scale type
Chart.register(...registerables);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Sales",
      data: [20, 28, 32, 17, 41, 53, 68, 65, 50, 35, 22, 18],
      backgroundColor: "green",
      borderColor: "green",
      fill: true,
    },
    {
      label: "Revenue",
      data: [55, 60, 68, 65, 55, 50, 52, 45, 10, 35, 12, 18],
      backgroundColor: "orange",
      borderColor: "orange",
      fill: true,
    },
  ],
};

const options = {
  scales: {
    y: {
      type: "linear",
      min: 0,
      max: 100,
      ticks: {
        stepSize: 10,
      },
      grid: {
        display: false, // Remove the gridlines for the y-axis
      },
    },
    x: {
      grid: {
        display: false, // Remove the gridlines for the x-axis
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    title: {
      display: true,
      text: "This Months",
    },
    filler: {
      propagate: true, // Propagate the filled area to the line
    },
  },
  elements: {
    point: {
      radius: 0, // Remove the points on the line
    },
  },
  backgroundColor: [ "green","orange"], // Set background color as orange and green
};


function MyChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Ensure the previous instance of the chart is destroyed when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.chartInstance.destroy();
      }
    };
  },[]);

  return (
    <Wrapper>
      <Line ref={chartRef} data={data} options={options} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
width: 100%;
height: 18rem;
display: flex;
/* height: 100vh !important; */
`

export default MyChart;
