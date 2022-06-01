import React from "react";
import styled from "styled-components";
import SudokuNumberInput from "./SudokuNumberInput";

const StyledSudokuNumberInputs = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 100%;
`;

const SudokuNumberInputs = () => {
  const NumberInputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((i) => (
    <SudokuNumberInput>{i}</SudokuNumberInput>
  ));

  return <StyledSudokuNumberInputs>{NumberInputs}</StyledSudokuNumberInputs>;
};

export default SudokuNumberInputs;
