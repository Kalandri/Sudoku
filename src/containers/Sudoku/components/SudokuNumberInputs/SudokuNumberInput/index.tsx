import React from "react";
import { useAppDispatch } from "../../../../../redux/hooks";
import { useSelector } from "react-redux";
import styled from "styled-components";

import {
  selectInitialPuzzle,
  selectSelectedCell,
  updateProgressPuzzle,
} from "../../../slice";
import { isCellReserved } from "../../../utils";

interface Props {
  children: number;
}

const StyledSudokuNumberInput = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  min-width: 60px;
  margin: 5px;
`;

const StyledSudokuNumberInputValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  padding: 20px;
  border-radius: 100%;
  border: 2px solid lightgray;
  cursor: pointer;
  font-size: 30px;

  &:hover {
    background-color: lightgray;
  }
`;

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

export default SudokuNumberInput;
