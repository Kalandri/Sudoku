import React, { useEffect, useState } from "react";
import styled from "styled-components";

import SudokuCell from "../SudokuCell";

interface Props {
  progressPuzzle: number[][] | undefined;
  selectedCell: { value: number; posX: number; posY: number } | undefined;
  highlightCell: (value: number, posX: number, posY: number) => void;
  isCellReserved: (posX: number, posY: number) => boolean | undefined;
}

const StyledSudokuGrid = styled.div`
  display: flex;
`;

const SudokuGrid = ({
  progressPuzzle,
  selectedCell,
  highlightCell,
  isCellReserved,
}: Props) => {
  return (
    <StyledSudokuGrid>
      {progressPuzzle?.map((row, rowIndex) => (
        <div>
          {row.map((cell, columnIndex) => (
            <SudokuCell
              value={cell}
              posX={rowIndex}
              posY={columnIndex}
              reserved={isCellReserved(rowIndex, columnIndex)}
              selectedCell={selectedCell}
              highlightCell={highlightCell}
            />
          ))}
        </div>
      ))}
    </StyledSudokuGrid>
  );
};

export default SudokuGrid;
