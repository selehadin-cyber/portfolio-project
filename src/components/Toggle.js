import React from 'react'
import styled from "styled-components";

const StyledToggle = styled.div`
    width: 50px;
    height: 20px;
    background: grey;
    border-radius: 10px;
    position: relative;
    margin-left: 5px;
`
const StyledCircle = styled.div`
    position: absolute;
    top: 1px;
    right: 1px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: white;
    left: ${(props) => props.theme.left};
`

function Toggle() {
  return (
    <StyledToggle >
        <StyledCircle/>
    </StyledToggle>
  )
}

export default Toggle