import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sudokuReducer from "../containers/Sudoku/slice";
import { sudokuApi } from "../containers/Sudoku/api";

export const store = configureStore({
  reducer: {
    sudoku: sudokuReducer,
    [sudokuApi.reducerPath]: sudokuApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sudokuApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
