import React from "react";
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
  border-radius: 100px;
  border: 1px solid black;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

const SudokuNumberInput = ({ children }: Props) => {
  const initialPuzzle = useSelector(selectInitialPuzzle);
  const selectedCell = useSelector(selectSelectedCell);

  return (
    <StyledSudokuNumberInput
      onClick={() =>
        updateProgressPuzzle({
          value: children,
          reserved: isCellReserved(selectedCell, initialPuzzle),
        })
      }
    >
      {children !== 0 ? children : "X"}
    </StyledSudokuNumberInput>
  );
};

export default SudokuNumberInput;
