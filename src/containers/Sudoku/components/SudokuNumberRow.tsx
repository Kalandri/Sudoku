import React from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { useSelector } from "react-redux";
import styled from "styled-components";

import {
  selectInitialPuzzle,
  selectSelectedCell,
  updateProgressPuzzle,
} from "../slice";
import { isCellReserved } from "../utils";

interface Props {
  children: number;
}

const StyledSudokuNumberRow = styled.div`
  display: flex;
`;

const StyledSudokuNumberInput = styled.div`
  width: 50px;
  height: 50px;
  padding: 4px;

  @media (min-width: 768px) {
    width: 75px;
    height: 75px;
  }
`;

const StyledSudokuNumberInputValue = styled.span`
  width: 100%;
  height: 100%;
  border-radius: 250px;
  border: 1px solid #d5d5d5;
  font-weight: 700;
  font-size: 1.5em;
  text-align: center;
  float: left;
  line-height: 50px;
  color: #7c7c7c;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 2em;
    line-height: 75px;
  }

  &:hover {
    background-color: #aba072;
    border: 1px solid #aba072;
    color: white;
  }
`;

const SudokuNumberRow = () => {
  const firstRow = [1, 2, 3, 4, 5].map((i) => (
    <SudokuNumberInput key={i}>{i}</SudokuNumberInput>
  ));
  const secondRow = [6, 7, 8, 9, 0].map((i) => (
    <SudokuNumberInput key={i}>{i}</SudokuNumberInput>
  ));

  return (
    <>
      <StyledSudokuNumberRow>{firstRow}</StyledSudokuNumberRow>
      <StyledSudokuNumberRow>{secondRow}</StyledSudokuNumberRow>
    </>
  );
};

const SudokuNumberInput = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const initialPuzzle = useSelector(selectInitialPuzzle);
  const selectedCell = useSelector(selectSelectedCell);

  return (
    <StyledSudokuNumberInput
      onClick={() =>
        dispatch(
          updateProgressPuzzle({
            value: children,
            reserved: isCellReserved(selectedCell, initialPuzzle),
          })
        )
      }
    >
      <StyledSudokuNumberInputValue>
        {children !== 0 ? children : "X"}
      </StyledSudokuNumberInputValue>
    </StyledSudokuNumberInput>
  );
};

export default SudokuNumberRow;
