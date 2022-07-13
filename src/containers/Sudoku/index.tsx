import React, { useState } from "react";
import styled from "styled-components";
import SudokuPuzzle from "./components/SudokuPuzzle";

const StyledSudoku = styled.div`
  display: flex;
  justify-content: center; // centers in the flex direction and the default flex-direction is row
  align-items: center; // centers perpendicular to the flex direction
  height: 100vh; // 100% view height
  width: 100vw; // 100% view width
  position: absolute; // so it goes behind the current content
`;

const StyledDifficultySelection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Sudoku = () => {
  const [difficulty, setDifficulty] = useState<string | "undefined">();

  return (
    <StyledSudoku>
      {difficulty !== undefined ? (
        <SudokuPuzzle difficulty={difficulty} />
      ) : (
        <StyledDifficultySelection>
          <button
            value="easy"
            onClick={(e) => setDifficulty((e.target as HTMLInputElement).value)}
          >
            Easy
          </button>
          <button
            value="medium"
            onClick={(e) => setDifficulty((e.target as HTMLInputElement).value)}
          >
            Medium
          </button>
          <button
            value="hard"
            onClick={(e) => setDifficulty((e.target as HTMLInputElement).value)}
          >
            Hard
          </button>
          <button
            value="random"
            onClick={(e) => setDifficulty((e.target as HTMLInputElement).value)}
          >
            Random
          </button>
        </StyledDifficultySelection>
      )}
    </StyledSudoku>
  );
};

export default Sudoku;
