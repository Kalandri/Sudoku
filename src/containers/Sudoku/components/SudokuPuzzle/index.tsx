import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import {
  selectProgressPuzzle,
  selectSolvedPuzzle,
  selectInitialPuzzle,
  selectSelectedCell,
  setProgressPuzzle,
  updateProgressPuzzle,
  setSolvedPuzzle,
  setInitialPuzzle,
  setSelectedCell,
} from "../../slice";

import SudokuGrid from "../SudokuGrid";
import SudokuButtons from "../SudokuButtons";
import generateSudoku from "../../../../utils/sudokuGenerator";
import { isCellReserved } from "../../utils";

const StyledSudokuPuzzle = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  difficulty: string;
}

const SudokuPuzzle = ({ difficulty }: Props) => {
  const initialPuzzle = useSelector(selectInitialPuzzle);
  const progressPuzzle = useSelector(selectProgressPuzzle);
  const solvedPuzzle = useSelector(selectSolvedPuzzle);
  const selectedCell = useSelector(selectSelectedCell);
  // const [initialPuzzle, setInitialPuzzle] = useState<number[][] | undefined>();
  // const [progressPuzzle, setProgressPuzzle] = useState<
  //   number[][] | undefined
  // >();
  // const [solvedPuzzle, setSolvedPuzzle] = useState<number[][] | undefined>();
  // const [selectedCell, setSelectedCell] = useState<
  //   { value: number; posX: number; posY: number } | undefined
  // >();

  useEffect(() => {
    const { unsolved, solved } = generateSudoku(difficulty);

    setInitialPuzzle(unsolved);
    setProgressPuzzle(unsolved);
    setSolvedPuzzle(solved);
  }, [difficulty]);

  

  return (
    <StyledSudokuPuzzle>
      <SudokuGrid
        {...{ progressPuzzle, selectedCell, highlightCell, isCellReserved }}
      />
      <SudokuButtons {...{ selectedCell }} />
    </StyledSudokuPuzzle>
  );
};

export default SudokuPuzzle;
