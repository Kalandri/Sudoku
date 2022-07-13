import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectProgressPuzzle } from "../slice";

import SudokuCell from "./SudokuCell";

const StyledSudokuTable = styled.div`
  display: flex;
  flex-direction: column;
  width: min-content;

  div:first-child div {
    border-top: 2px solid white !important;
  }

  div:last-child div {
    border-bottom: 2px solid white !important;
  }

  div:nth-of-type(3n):not(:last-child) div {
    border-bottom: 2px solid #aba07a !important;
  }

  /* Add bottom border for all boxes except the last two */
  div:not(:nth-of-type(3n)):not(:last-child) div:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 65%;
    left: 15%;
    height: 1px;
    background-color: #e9e9e9;
  }
`;

const StyledSudokuTableRow = styled.div`
  display: flex;
  width: min-content;
`;

const SudokuGrid = () => {
  const progressPuzzle = useSelector(selectProgressPuzzle);

  return (
    <StyledSudokuTable>
      {progressPuzzle?.map((row, rowIndex) => (
        <StyledSudokuTableRow key={rowIndex}>
          {row.map((cell, columnIndex) => (
            <SudokuCell
              key={columnIndex}
              value={cell}
              posX={rowIndex}
              posY={columnIndex}
            />
          ))}
        </StyledSudokuTableRow>
      ))}
    </StyledSudokuTable>
  );
};

export default SudokuGrid;
