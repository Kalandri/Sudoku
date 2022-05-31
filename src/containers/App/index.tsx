import React from "react";
import styled from "styled-components";
import SudokuPuzzle from "../Sudoku";

const StyledApp = styled.div``;

const App = () => {
  return (
    <StyledApp>
      <SudokuPuzzle />
    </StyledApp>
  );
};

export default App;
