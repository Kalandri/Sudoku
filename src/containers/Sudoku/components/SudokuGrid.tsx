import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectProgressPuzzle } from "../slice";

import SudokuCell from "./SudokuCell";

const StyledSudokuTable = styled.table`
  border: none;
  border-collapse: collapse;
  padding: 0;
  margin: 0;

  tr:first-child td {
    border-top: 2px solid white !important;
  }

  tr:last-child td {
    border-bottom: 2px solid white !important;
  }

  tr:nth-of-type(3n):not(:last-child) td {
    border-bottom: 2px solid green !important;
  }

  /* Add bottom border for all boxes except the last two */
  tr:not(:nth-of-type(3n)):not(:last-child) td:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 65%;
    left: 15%;
    height: 1px;
    background-color: #ccc;
  }
`;

const SudokuGrid = () => {
  const progressPuzzle = useSelector(selectProgressPuzzle);

  return (
    <StyledSudokuTable>
      {progressPuzzle?.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, columnIndex) => (
            <SudokuCell
              key={columnIndex}
              value={cell}
              posX={rowIndex}
              posY={columnIndex}
            />
          ))}
        </tr>
      ))}
    </StyledSudokuTable>
  );
};

export default SudokuGrid;
