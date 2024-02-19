import React from 'react'
import styled from 'styled-components';
const Revenue = ({heading}) => {
  return (
    <Wrapper>{heading}</Wrapper>
  )
}
const Wrapper = styled.div`
  margin:2rem;
`;

export default Revenue