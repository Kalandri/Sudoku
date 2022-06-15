import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Board {
  board: number[][];
}

export const sudokuApi = createApi({
  reducerPath: "sudokuApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://sugoku.herokuapp.com/" }),
  endpoints: (builder) => ({
    getPuzzleByDifficulty: builder.query<Board, string>({
      query: (difficulty) => `board?difficulty=${difficulty}`,
    }),
  }),
});

export const { useGetPuzzleByDifficultyQuery } = sudokuApi;
