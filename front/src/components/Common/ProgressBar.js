import React from 'react';
import styled from 'styled-components';
const ProgressBar = ({ percent }) => {
  const colorOptions = ['#ff8787', '#ffd43b', '#51cf66'];
  function getColor() {
    if (percent <= 33) {
      return colorOptions[0];
    } else if (33 < percent && percent <= 66) {
      return colorOptions[1];
    } else {
      return colorOptions[2];
    }
  }
  return (
    <SProgressBar percent={percent} color={getColor()}>
      <div className="todo-today-progress-wrapper">
        <div className="todo-today-progress-inner"></div>
      </div>
    </SProgressBar>
  );
};
const SProgressBar = styled.div`
  .todo-today-progress-wrapper {
    background-color: rgb(192, 192, 192);
    width: 100%;
    border-radius: 15px;
    .todo-today-progress-inner {
      transition: all 1.5s;
      background-color: ${(props) => props.color};
      color: white;
      padding: 1%;
      text-align: right;
      font-size: 20px;
      border-radius: 15px;
      width: ${(props) => props.percent}%;
    }
  }
`;
export default ProgressBar;
