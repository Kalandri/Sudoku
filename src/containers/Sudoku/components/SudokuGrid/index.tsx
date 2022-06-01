import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectProgressPuzzle } from "../../slice";

import SudokuCell from "../SudokuCell";

const StyledSudokuGrid = styled.div`
  display: flex;
`;

const SudokuGrid = () => {
  const progressPuzzle = useSelector(selectProgressPuzzle);

  return (
    <StyledSudokuGrid>
      {progressPuzzle?.map((row, rowIndex) => (
        <div>
          {row.map((cell, columnIndex) => (
            <SudokuCell value={cell} posX={rowIndex} posY={columnIndex} />
          ))}
        </div>
      ))}
    </StyledSudokuGrid>
  );
};

export default SudokuGrid;
