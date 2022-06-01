import React from "react";
import styled from "styled-components";
import SudokuNumberInputs from "../SudokuNumberInputs";

const StyledSudokuButtons = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SudokuButtons = () => {
  return (
    <StyledSudokuButtons>
      <SudokuNumberInputs />
    </StyledSudokuButtons>
  );
};

export default SudokuButtons;
