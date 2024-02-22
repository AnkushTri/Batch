import React from "react";
import styled from "styled-components";


const Table = ({ data,heading }) => {

  const columns = Object.keys(data[0]);

  return (
    <Wrapper className="poppins-regular">
      <h2 className="heading">{heading}</h2>
      <Box className="table-responsive-sm">
        <StyledTable width={"100%"} className="table table-hover">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column.toUpperCase().split("_").join(" ")}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, columnIndex) => (
                  <td
                    key={columnIndex}
                    className={
                      column === "status" &&
                      row[column] === "Ready" &&
                      "pending"
                    }
                  >
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1rem;
  .heading {
    text-align: left;
    padding: 1rem 0;
  }
  @media screen and (max-width: 600px) {
   .heading{
    font-size: 1rem;

   }
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledTable = styled.table`
  width: 100%;
  margin-left: 2rem;
  border-collapse: collapse;
  @media screen and (max-width: 600px) {
    max-width: 80%;
    font-size: 10px;
  }
  .pending {
    color: red;
  }
`;
export default Table;
