import React from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { useSelector } from "react-redux";
import styled from "styled-components";

import {
  selectInitialPuzzle,
  selectSelectedCell,
  setSelectedCell,
} from "../slice";
import { isCellReserved } from "../utils";

interface Props {
  value: number;
  posX: number;
  posY: number;
}

const StyledCell = styled.div<{ posX: number; posY: number }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 4px;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }

  &:nth-of-type(3n):not(:last-child) {
    border-right: 2px solid #aba07a !important;
  }

  &:first-child:last-child {
    border-left: 2px solid white;
  }

  /* Add right border for all odd indexed boxes (1,3,5...) */
  &:not(:nth-of-type(3n)):not(:last-child):before {
    content: "";
    position: absolute;
    right: 0;
    height: 65%;
    top: 15%;
    width: 1px;
    background-color: #e9e9e9;
  }
`;

const StyledCellValue = styled.span<{
  value: number;
  posX: number;
  posY: number;
  reserved: boolean | undefined;
  selectedCell: { value: number; posX: number; posY: number };
  currentCellIsSelectedCell: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 250px;
  font-size: 1.2em;
  font-weight: 500;

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;

  @media (min-width: 768px) {
    font-size: 2em;
  }

  ${(props) =>
    props.currentCellIsSelectedCell && !props.reserved
      ? "background-color: #ABA072; color: white;"
      : props.selectedCell.value === props.value &&
        props.selectedCell.value !== 0
      ? "background-color: #BEB8A8; color: #7C7C7C;"
      : props.reserved
      ? "background-color: #E7E7E7; color: #A2A2A2;"
      : "background-color: white; color: #7A7A7A;"}
`;

const SudokuCell = ({ value, posX, posY }: Props) => {
  const dispatch = useAppDispatch();
  const selectedCell = useSelector(selectSelectedCell);
  const initialPuzzle = useSelector(selectInitialPuzzle);
  const reserved = isCellReserved({ posX, posY }, initialPuzzle);
  const currentCellIsSelectedCell =
    selectedCell.posX === posX && selectedCell.posY === posY;

  return (
    <StyledCell
      {...{ posX, posY }}
      onClick={() => dispatch(setSelectedCell({ posX, posY }))}
    >
      <StyledCellValue
        {...{
          value,
          posX,
          posY,
          reserved,
          selectedCell,
          currentCellIsSelectedCell,
        }}
      >
        {value !== 0 && value}
      </StyledCellValue>
    </StyledCell>
  );
};

export default SudokuCell;
