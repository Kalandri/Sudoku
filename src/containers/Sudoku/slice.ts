import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export interface SudokuState {
  progressPuzzle: number[][] | undefined;
  progressPuzzleHistory: Array<number[][]>;
  solvedPuzzle: number[][] | undefined;
  initialPuzzle: number[][] | undefined;
  selectedCell: { value: number; posX: number; posY: number };
}

const initialState: SudokuState = {
  progressPuzzle: undefined,
  progressPuzzleHistory: [],
  solvedPuzzle: undefined,
  initialPuzzle: undefined,
  selectedCell: { value: 0, posX: 0, posY: 0 },
};

export const sudokuSlice = createSlice({
  name: "sudoku",
  initialState,
  reducers: {
    setProgressPuzzle: (state, action: PayloadAction<number[][]>) => {
      state.progressPuzzle = action.payload;
    },
    updateProgressPuzzle: (
      state,
      action: PayloadAction<{ value: number; reserved: boolean | undefined }>
    ) => {
      if (state.progressPuzzle && !action.payload.reserved) {
        if (state.progressPuzzleHistory.length === 0) {
          state.progressPuzzleHistory.push(state.progressPuzzle);
        }

        state.progressPuzzle[state.selectedCell.posX][state.selectedCell.posY] =
          action.payload.value;
        state.selectedCell = {
          ...state.selectedCell,
          value: action.payload.value,
        };

        if (state.progressPuzzleHistory.length >= 20) {
          state.progressPuzzleHistory.shift();
        }

        state.progressPuzzleHistory.push(state.progressPuzzle);
      }
    },
    undoProgressPuzzle: (state) => {
      state.progressPuzzle = state.progressPuzzleHistory.pop();
    },
    restartProgressPuzzle: (state) => {
      state.progressPuzzle = state.initialPuzzle;
      state.progressPuzzleHistory = [];
    },
    setSolvedPuzzle: (state, action: PayloadAction<number[][]>) => {
      state.solvedPuzzle = action.payload;
    },
    setInitialPuzzle: (state, action: PayloadAction<number[][]>) => {
      state.initialPuzzle = action.payload;
    },
    setSelectedCell: (
      state,
      action: PayloadAction<{ posX: number; posY: number }>
    ) => {
      if (state.progressPuzzle) {
        state.selectedCell = {
          value: state.progressPuzzle[action.payload.posX][action.payload.posY],
          ...action.payload,
        };
      }
    },
  },
});

export const {
  setProgressPuzzle,
  updateProgressPuzzle,
  undoProgressPuzzle,
  restartProgressPuzzle,
  setSolvedPuzzle,
  setInitialPuzzle,
  setSelectedCell,
} = sudokuSlice.actions;

export const selectProgressPuzzle = (state: RootState) =>
  state.sudoku.progressPuzzle;
export const selectProgressPuzzleHistory = (state: RootState) =>
  state.sudoku.progressPuzzleHistory;
export const selectSolvedPuzzle = (state: RootState) =>
  state.sudoku.solvedPuzzle;
export const selectInitialPuzzle = (state: RootState) =>
  state.sudoku.initialPuzzle;
export const selectSelectedCell = (state: RootState) =>
  state.sudoku.selectedCell;

export default sudokuSlice.reducer;
