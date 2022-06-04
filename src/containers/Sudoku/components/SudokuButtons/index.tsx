import React from "react";
import styled from "styled-components";
import SudokuNumberRow from "../SudokuNumberRow";
import SudokuTools from "../SudokuTools";

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
      <SudokuNumberRow />
      <SudokuTools />
    </StyledSudokuButtons>
  );
};

export default SudokuButtons;
