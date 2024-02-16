import React, { useState } from "react";
import Card from "./Card";
import styled from "styled-components";
import { MdBorderColor } from "react-icons/md";

const Cards = () => {

  const Batches = [
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
  const [selectedBatch, setSelectedBatch] = useState(null);

  const handleClick = (id) => {
    setSelectedBatch((prevState) => (prevState === id ? null : id));
  };

  return (
    <Container className="montserrat-regular">
      <div className="sidebar">anku</div>
      <Wrapper>
        {Batches.map((elem) => {
          return (
            <Box key={elem.id} onClick={() => handleClick(elem.id)}>
              <div className="tit">
                <div className="det">
                  <div className="title">{elem.title}</div>
                  <div className="price">{elem.price}</div>
                  <div className="visitors">{elem.visitors} last Week</div>
                </div>
                <div className="icon">
                  <MdBorderColor />
                </div>
              </div>
            </Box>
          );
        })}
        {/* <div className="graph">
          <div className="chart">
            <Chart/>
          </div>
          <div className="pie">
            <MyPieChart/>
          </div>
        </div> */}
        {selectedBatch && <Card batchId={selectedBatch} />}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: -3rem;
  padding: 0;
  .sidebar {
    width: 25%;
    height: 100vh;
    background-color: black;
  }
`;

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  margin: 2rem 3rem;
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
    color: blue;
    text-align: left;
  }
  .visitors {
    text-align: left;
    font-size: 0.7rem;
    color: orange;
  }
  .icon {
    margin-top: 1rem;
    align-self: flex-start;
  }
  .price {
    text-align: left;
    font-size: 1rem;
  }
`;

const Box = styled.div`
  background-color: #f0f0f0;
  box-sizing: border-box;
  padding: 10px;
  width: 22%;
  height: 7rem;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }
`;


export default Cards;