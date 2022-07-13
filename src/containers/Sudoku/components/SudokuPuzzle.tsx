import React, { useEffect } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import styled from "styled-components";
import { Spinner } from "phosphor-react";

import { setProgressPuzzle, setInitialPuzzle } from "../slice";
import { useGetPuzzleByDifficultyQuery } from "../api";

import SudokuGrid from "./SudokuGrid";
import SudokuButtons from "./SudokuButtons";

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
  const { data, error, isLoading } = useGetPuzzleByDifficultyQuery(difficulty);

  useEffect(() => {
    if (data) {
      dispatch(setInitialPuzzle(data.board));
      dispatch(setProgressPuzzle(data.board));
    }
  }, [data, dispatch]);

  return (
    <StyledSudokuPuzzle>
      {isLoading ? <Spinner size={44} /> : <SudokuGrid />}
      <SudokuButtons />
    </StyledSudokuPuzzle>
  );
};

export default SudokuPuzzle;
