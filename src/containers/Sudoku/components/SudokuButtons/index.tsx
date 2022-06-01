import React from "react";
import styled from "styled-components";
import SudokuNumberInputs from "../SudokuNumberInputs";

const StyledSudokuButtons = styled.div``;

const SudokuButtons = () => {
  return (
    <StyledSudokuButtons>
      <SudokuNumberInputs />
    </StyledSudokuButtons>
  );
};

export default SudokuButtons;
