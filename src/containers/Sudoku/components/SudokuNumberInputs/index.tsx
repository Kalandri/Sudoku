import React from "react";
import styled from "styled-components";
import SudokuNumberInput from "./SudokuNumberInput";

const StyledSudokuNumberRow = styled.div`
  display: flex;
`;

const SudokuNumberInputs = () => {
  const firstRow = [1, 2, 3, 4, 5].map((i) => (
    <SudokuNumberInput>{i}</SudokuNumberInput>
  ));
  const secondRow = [6, 7, 8, 9, 0].map((i) => (
    <SudokuNumberInput>{i}</SudokuNumberInput>
  ));

  return (
    <>
      <StyledSudokuNumberRow>{firstRow}</StyledSudokuNumberRow>
      <StyledSudokuNumberRow>{secondRow}</StyledSudokuNumberRow>
    </>
  );
};

export default SudokuNumberInputs;
