import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export interface SudokuState {
  progressPuzzle: number[][] | undefined;
  solvedPuzzle: number[][] | undefined;
  initialPuzzle: number[][] | undefined;
  selectedCell: { value: number; posX: number; posY: number };
}

const initialState: SudokuState = {
  progressPuzzle: undefined,
  solvedPuzzle: undefined,
  initialPuzzle: undefined,
  selectedCell: { value: 0, posX: 0, posY: 0 },
};

export const sudokuSlice = createSlice({
  name: "sudoku",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setProgressPuzzle: (state, action: PayloadAction<number[][]>) => {
      state.progressPuzzle = action.payload;
    },
    updateProgressPuzzle: (
      state,
      action: PayloadAction<{ value: number; reserved: boolean | undefined }>
    ) => {
      if (state.progressPuzzle && !action.payload.reserved) {
        state.progressPuzzle[state.selectedCell.posX][state.selectedCell.posY] =
          action.payload.value;
      }
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
  setSolvedPuzzle,
  setInitialPuzzle,
  setSelectedCell,
} = sudokuSlice.actions;

export const selectProgressPuzzle = (state: RootState) =>
  state.sudoku.progressPuzzle;
export const selectSolvedPuzzle = (state: RootState) =>
  state.sudoku.solvedPuzzle;
export const selectInitialPuzzle = (state: RootState) =>
  state.sudoku.initialPuzzle;
export const selectSelectedCell = (state: RootState) =>
  state.sudoku.selectedCell;

export default sudokuSlice.reducer;
