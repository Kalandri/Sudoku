import React from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import { useSelector } from "react-redux";
import styled from "styled-components";

import {
  selectInitialPuzzle,
  selectSelectedCell,
  setSelectedCell,
} from "../../slice";
import { isCellReserved } from "../../utils";

interface Props {
  value: number;
  posX: number;
  posY: number;
}

const StyledCell = styled.div<{ posX: number; posY: number }>`
  min-height: 60px;
  min-width: 60px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
        to bottom,
        #000 0px,
        transparent 0px,
        ${(props) =>
            props.posY === 2 || props.posY === 5
              ? "transparent calc(100% - 3px),"
              : "transparent calc(100% - 1px),"}
          ${(props) =>
            props.posY === 2 || props.posY === 5
              ? "green calc(100% - 1px)"
              : props.posY !== 8
              ? "lightgray calc(100% - 1px)"
              : "transparent 0px"}
      )
      no-repeat,
    linear-gradient(
        to right,
        #000 0px,
        transparent 0px,
        ${(props) =>
            props.posX === 2 || props.posX === 5
              ? "transparent calc(100% - 3px),"
              : "transparent calc(100% - 1px),"}
          ${(props) =>
            props.posX === 2 || props.posX === 5
              ? "green calc(100% - 1px)"
              : props.posX !== 8
              ? "lightgray calc(100% - 1px)"
              : "transparent 0px"}
      )
      no-repeat;

  background-position: center;
  background-size: calc(
        100% -
          ${(props) => (props.posY === 2 || props.posY === 5 ? "0px" : "20px")}
      )
      100%,
    100%
      calc(
        100% -
          ${(props) => (props.posX === 2 || props.posX === 5 ? "0px" : "20px")}
      );
`;

const StyledCellValue = styled.div<{
  value: number;
  posX: number;
  posY: number;
  reserved: boolean | undefined;
  selectedCell: { value: number; posX: number; posY: number };
}>`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  padding: 10px;
  cursor: default;
  font-size: 20px;
  ${(props) =>
    props.selectedCell.posX === props.posX &&
    props.selectedCell.posY === props.posY
      ? "background-color: #fc0349;"
      : props.selectedCell.value === props.value &&
        props.selectedCell.value !== 0
      ? "background-color: #fc0349;"
      : props.reserved
      ? "background-color: lightgray;"
      : "background-color: white;"}
`;

const SudokuCell = ({ value, posX, posY }: Props) => {
  const dispatch = useAppDispatch();
  const selectedCell = useSelector(selectSelectedCell);
  const initialPuzzle = useSelector(selectInitialPuzzle);
  const reserved = isCellReserved({ posX, posY }, initialPuzzle);

  return (
    <StyledCell
      {...{ posX, posY }}
      onClick={() => dispatch(setSelectedCell({ posX, posY }))}
    >
      <StyledCellValue {...{ value, posX, posY, reserved, selectedCell }}>
        {value !== 0 && value}
      </StyledCellValue>
    </StyledCell>
  );
};

export default SudokuCell;
