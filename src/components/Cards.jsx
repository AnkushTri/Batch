import React, { useState } from "react";
import Card from "./Card";
import styled from "styled-components";
import MyPieChart from "./PieChart";
import MyChart from "./Chart";
const Cards = () => {

  const productes = [
    {
      id: 1,
      title: "Total Sales",
      price: "$2000",
      visitors: "27%",
    },
    {
      id: 2,
      title: "Visitors",
      price: "$2000",
      visitors: "27%",
    },
    {
      id: 3,
      title: "New Orders",
      price: "$2000",
      visitors: "27%",
    },
    {
      id: 4,
      title: "Customers",
      price: "$2000",
      visitors: "27%",
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
        <div className="heading gorditas-regular">
          <h2>Hello Seller</h2>
          <h6>Today is Monday 23rd January 2024</h6>
        </div>
        <Wrapper>
          {productes.map((elem) => {
            return (
              <Box key={elem.id} onClick={() => handleClick(elem.id)}>
                <div className="tit">
                  <div className="det">
                    <div className="title">{elem.title}</div>
                    <div className="price">{elem.price}</div>
                    <div className="visitors">{elem.visitors} last Week</div>
                  </div>
                  <div className="icon">
                    <img src={`./assets/i${elem.id}.png`} alt="img" />
                  </div>
                </div>
              </Box>
            );
          })}
        </Wrapper>
        {selectedproduct ?<Card productId={selectedproduct} />:
        <div className="chart">
<MyChart/>
<MyPieChart/>
        </div>
        }
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
 margin-top:-2rem;
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
  .chart{
    display: flex;
    margin: 1rem 0;
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
    font-size: 1.2rem;
    color: grey;
    text-align: left;
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
    margin: .4rem 0;
    color: green;
  }
`;

const Box = styled.div`
  background-color: #f0f0f0;
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