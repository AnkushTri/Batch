import React from 'react'
import styled from 'styled-components';
const CustomerTable = ({customers}) => {
  return (
    <Wrapper className="poppins-regular">
      <h2 className="heading">Recenet Orders</h2>
      <Box>
        <StyledTable width={"100%"} className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ENROLLEMENT TIME</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">NUMBER</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((currUser) => (
              <tr key={currUser.id}>
                <td data-label="Order id">{currUser.enrollMentTime}</td>
                <td data-label="order time">{currUser.name}</td>
                <td data-label="store">{currUser.email}</td>
                <td data-label="order amount">{currUser.number}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 1rem;
  .heading {
    text-align: left;
    padding: 1rem 0;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledTable = styled.table`
  width: 90%;
  /* text-align: left; */
  border-collapse: collapse;
  @media screen and (max-width: 600px) {
    max-width: 80%;
    font-size: 10px;
  }
  .pending {
    color: red;
  }
  .success {
    color: green;
  }
  th {
    /* background-color: black;
    color:white; */
  }
`;
export default CustomerTable