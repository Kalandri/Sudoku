import React, { useEffect, useState } from "react";
import styled from "styled-components";

import SudokuGrid from "../SudokuGrid";
import SudokuButtons from "../SudokuButtons";
import generateSudoku from "../../../../utils/sudokuGenerator";

const StyledSudokuPuzzle = styled.div`
  display: flex;
`;

interface Props {
  difficulty: string;
}

const SudokuPuzzle = ({ difficulty }: Props) => {
  const [initialPuzzle, setInitialPuzzle] = useState<number[][] | undefined>();
  const [progressPuzzle, setProgressPuzzle] = useState<
    number[][] | undefined
  >();
  const [solvedPuzzle, setSolvedPuzzle] = useState<number[][] | undefined>();
  const [selectedCell, setSelectedCell] = useState<
    { value: number; posX: number; posY: number } | undefined
  >();

  useEffect(() => {
    const { unsolved, solved } = generateSudoku(difficulty);

    setInitialPuzzle(unsolved);
    setProgressPuzzle(unsolved);
    setSolvedPuzzle(solved);
  }, [difficulty]);

  const isCellReserved = (posX: number, posY: number) => {
    if (initialPuzzle !== undefined) {
      return initialPuzzle[posX][posY] !== 0 ? true : false;
    }
  };

  // Highlights cell or cells based on 3 criteria
  // 1. Empty cell === only the cell being highlighted
  // 2. Reserved cell === every single cell with same value highlighted
  // 3. User Input cell === every single cell with same value highlighted
  const highlightCell = (value: number, posX: number, posY: number) => {
    setSelectedCell({ value, posX, posY });
  };

  const inputToCell = (newValue: number, posX: number, posY: number) => {
    setProgressPuzzle((prevPuzzle) => {
      const puzzle = prevPuzzle;
      if (puzzle !== undefined && !isCellReserved(posX, posY)) {
        puzzle[posX][posY] = newValue;
      }
      return puzzle;
    });
  };

  return (
    <StyledSudokuPuzzle>
      <SudokuGrid
        {...{ progressPuzzle, selectedCell, highlightCell, isCellReserved }}
      />
      <SudokuButtons {...{ selectedCell, inputToCell }} />
    </StyledSudokuPuzzle>
  );
};

export default SudokuPuzzle;
