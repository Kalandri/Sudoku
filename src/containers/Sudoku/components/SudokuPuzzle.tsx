import React, { useEffect } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import styled from "styled-components";

import { setProgressPuzzle, setInitialPuzzle, setSolvedPuzzle } from "../slice";
import {
  useGetPuzzleByDifficultyQuery,
  useGetPuzzleSolvedStatusQuery,
} from "../api";

import SudokuGrid from "./SudokuGrid";
import SudokuButtons from "./SudokuButtons";
import { StyledSpinner } from "../../../components/Spinner";

const StyledSudokuPuzzle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface Props {
  difficulty: string;
}

const SudokuPuzzle = ({ difficulty }: Props) => {
  const dispatch = useAppDispatch();
  const progressPuzzle = useGetPuzzleByDifficultyQuery(difficulty);
  const solvedPuzzle = useGetPuzzleSolvedStatusQuery(
    progressPuzzle.data ?? skipToken
  );

  useEffect(() => {
    if (progressPuzzle.data && solvedPuzzle.data) {
      dispatch(setInitialPuzzle(progressPuzzle.data.board));
      dispatch(setProgressPuzzle(progressPuzzle.data.board));
      dispatch(setSolvedPuzzle(solvedPuzzle.data.solution));
    }
  }, [progressPuzzle.data, solvedPuzzle.data, dispatch]);

  return (
    <StyledSudokuPuzzle>
      {progressPuzzle.isLoading ? <StyledSpinner size={44} /> : <SudokuGrid />}
      <SudokuButtons />
    </StyledSudokuPuzzle>
  );
};

export default SudokuPuzzle;
