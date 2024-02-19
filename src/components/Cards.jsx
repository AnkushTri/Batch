import React, { useState } from "react";
import Card from "./Card";
import styled from "styled-components";
import MyPieChart from "./PieChart";
import MyChart from "./Chart";
const Cards = () => {
  const productes = [
    {
      id: 1,
      title: "TOTAL ORDERS",
      quantity: 19,
    },
    {
      id: 2,
      title: "DELIVERED ORDERS",
      quantity: 13,
      visitors: "27%",
    },
    {
      id: 3,
      title: "REVENUE",
      quantity: "$2000",
      visitors: "27%",
    },
    {
      id: 4,
      title: "MY EARNINGS",
      quantity: "$2000",
    },
    {
      id: 5,
      title: "TOTAL CUSTOMERS",
      quantity: 8,
    },
    {
      id: 6,
      title: "TOTAL CUPONS",
      quantity: 2,
    },
    {
      id: 7,
      title: "STORE",
      quantity: 21,
    },
    {
      id: 8,
      title: "TOTAL RUNNER",
      quantity: 6,
    },
  ];
  const [selectedproduct, setSelectedproduct] = useState(null);

  const handleClick = (id) => {
    setSelectedproduct((prevState) => (prevState === id ? null : id));
  };

  return (
    <Container className="montserrat-regular">
      <div className="sidebar">sidebar</div>
      <div className="main_sec">
        <Wrapper>
          {productes.map((elem) => {
            return (
              <Box key={elem.id} onClick={() => handleClick(elem.id)}>
                <div className="tit">
                  <div className="det">
                    <div className="title">{elem.title}</div>
                    <div className="price">{elem.quantity}</div>
                  </div>
                  <div className="icon">
                    <img src={`./assets/i${elem.id}.png`} alt="img" />
                  </div>
                </div>
              </Box>
            );
          })}
        </Wrapper>
        {selectedproduct  ? (
          <Card Id={selectedproduct} /> 
        ) : (
          <div className="chart">
            <MyChart />
            <MyPieChart />
          </div>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0;
  overflow-x: hidden;
  .sidebar {
    width: 25% !important;
  }
  .main_sec {
    width: calc(100% - 25%);
    .heading {
      text-align: left;
      width: 90%;
      margin: 0 auto;
      h2 {
        font-size: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
  .chart {
    display: flex;
    margin: 2rem 1rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 0 0 2rem;
  .tit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .dit {
      text-align: left;
    }
  }
  .title {
    width: 7rem;
    font-size: 12px;
    color: #000000;
    text-align: left;
    font-weight: 600;
  }
  .visitors {
    text-align: left;
    font-size: 0.7rem;
    color: orange;
  }
  .icon {
    /* margin-top: 1rem; */
    align-self: flex-start;
    img {
      width: 1.7rem;
    }
  }
  .price {
    text-align: left;
    font-size: 1.2rem;
    margin: 0.4rem .5rem;
    font-weight: 600;
  }
`;

const Box = styled.div`
  background-color: #fcfcfc;
  box-sizing: border-box;
  padding: 10px;
  width: 11rem;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

export default Cards;
