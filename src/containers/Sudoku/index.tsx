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
  flex-direction: column;
`;

const Sudoku = () => {
  const [difficulty, setDifficulty] = useState<string | "undefined">();

  return (
    <StyledSudoku>
      {difficulty !== undefined ? (
        <SudokuPuzzle difficulty={difficulty} />
      ) : (
        <StyledDifficultySelection>
          <div className="difficulty">
            <input
              type="radio"
              value="easy"
              name="difficulty"
              onChange={(e) => setDifficulty(e.target.value)}
            />{" "}
            <label>Easy</label>
          </div>
          <div className="difficulty">
            <input
              type="radio"
              value="medium"
              name="difficulty"
              onChange={(e) => setDifficulty(e.target.value)}
            />{" "}
            <label>Medium</label>
          </div>
          <div className="difficulty">
            <input
              type="radio"
              value="hard"
              name="difficulty"
              onChange={(e) => setDifficulty(e.target.value)}
            />{" "}
            <label>Hard</label>
          </div>
          <div className="difficulty">
            <input
              type="radio"
              value="extreme"
              name="difficulty"
              onChange={(e) => setDifficulty(e.target.value)}
            />
            <label>Extreme</label>
          </div>
        </StyledDifficultySelection>
      )}
    </StyledSudoku>
  );
};

export default Sudoku;
