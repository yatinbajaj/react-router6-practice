import React, { useState } from "react";
import styled from "styled-components";

const CounterContainer = styled.div`
  background-color: #f4f7f8;
  width: 92%;
  border: none;
  border-radius: 5px;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin: 2rem auto;
  padding: 2rem 1rem;
`;

const CounterValue = styled.div`
font-weight:bold;
font-size:2rem;
margin: 1rem auto;
`
const CounterActions = styled.div`
display:flex;
`
const CounterButton = styled.button`
  cursor: pointer;
  background-color: #bf1e2d;
  color: white;
  margin-top: 1rem 2rem;
  margin-right: 1rem;
  padding: 0.8rem 2.6rem;
  border: none;
  border-radius: 5px;
`;

function Counter() {
    const [isIncreasedValue, setIsIncreasedValue] = useState(0);
    const increaseBy1 = () => {
        setIsIncreasedValue((prevValue) => prevValue + 1);
    };
    const increaseBy5 = () => {
        setIsIncreasedValue((prevValue) => prevValue + 5);
    };
    const resetValue = () => {
        setIsIncreasedValue(0);
    };
    return (
        <CounterContainer>
            <CounterValue>{isIncreasedValue}</CounterValue>
            <CounterActions>
                <CounterButton type="button" onClick={increaseBy1}>Increase By 1</CounterButton>
                <CounterButton type="button" onClick={increaseBy5}>Increase By 5</CounterButton>
                <CounterButton type="button" onClick={resetValue}>Reset Value</CounterButton>
            </CounterActions>

        </CounterContainer>
    );
}

export default Counter;
