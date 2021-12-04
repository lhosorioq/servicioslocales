import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4e6bff;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;
  animation: square 20s linear alternate infinite;
  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ff97af;
  position: absolute;
  top: 200px;
  left: -100px;
  z-index: -1;
  animation: circle 20s linear alternate infinite;
  @keyframes circle {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;

const Rect = styled.div`
  width: 50px;
  height: 100px;
  background-color: #669966;
  opacity: 0.5;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: -1;
  animation: rect 20s linear alternate infinite;
  @keyframes rect {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;

const Trian = styled.div`
  width: 40px;
  height: 80px;
  background-color: #569980;
  opacity: 0.5;
  position: absolute;
  top: 300px;
  left: -60px;
  z-index: -15;
  animation: trian 20s linear alternate infinite;
  @keyframes trian {
    to {
      transform: translate(100vw, -60vh);
    }
  }
`;

const FormasAnimadas = () => {
  return (
    <>
      <Square />
      <Circle />
      <Rect />
      <Trian />
    </>
  );
};

export default FormasAnimadas;