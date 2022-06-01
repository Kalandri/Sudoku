import React, { useEffect } from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import styled from "styled-components";

import {
  setProgressPuzzle,
  setSolvedPuzzle,
  setInitialPuzzle,
} from "../../slice";

import SudokuGrid from "../SudokuGrid";
import SudokuButtons from "../SudokuButtons";
import generateSudoku from "../../../../utils/sudokuGenerator";

const StyledSudokuPuzzle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface Props {
  difficulty: string;
}

const SudokuPuzzle = ({ difficulty }: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { unsolved, solved } = generateSudoku(difficulty);

    dispatch(setInitialPuzzle(unsolved));
    dispatch(setProgressPuzzle(unsolved));
    dispatch(setSolvedPuzzle(solved));
  }, [difficulty, dispatch]);

  return (
    <StyledSudokuPuzzle>
      <SudokuGrid />
      <SudokuButtons />
    </StyledSudokuPuzzle>
  );
};

export default SudokuPuzzle;
