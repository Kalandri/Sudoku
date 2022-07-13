import React from "react";
import { useAppDispatch } from "../../../redux/hooks";
import styled from "styled-components";
import { ArrowClockwise, ArrowArcLeft } from "phosphor-react";

import {
  selectProgressPuzzleHistory,
  restartProgressPuzzle,
  undoProgressPuzzle,
} from "../slice";
import { useSelector } from "react-redux";

const StyledSudokuTools = styled.div`
  display: flex;
  margin-top: 40px;
`;

const StyledSudokuToolsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  border-radius: 20px;
  background-color: white;
  border: 2px solid white;
  color: #7c7c7c;
  cursor: pointer;

  &:hover {
    background-color: #aba072;
    border: 2px solid #aba072;
    color: white;
  }
`;

const SudokuTools = () => {
  const dispatch = useAppDispatch();
  const progressPuzzleHistory = useSelector(selectProgressPuzzleHistory);

  return (
    <StyledSudokuTools>
      <StyledSudokuToolsButton
        onClick={() => dispatch(restartProgressPuzzle())}
        disabled={false}
      >
        <ArrowClockwise size={32} />
      </StyledSudokuToolsButton>
      <StyledSudokuToolsButton
        onClick={() => dispatch(undoProgressPuzzle())}
        disabled={progressPuzzleHistory.length === 0}
      >
        <ArrowArcLeft size={32} />
      </StyledSudokuToolsButton>
    </StyledSudokuTools>
  );
};

export default SudokuTools;
