import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Board {
  board: number[][];
}

interface SolvedBoard {
  difficulty: string;
  solution: number[][];
  status: string;
}

export const sudokuApi = createApi({
  reducerPath: "sudokuApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://sugoku.herokuapp.com/" }),
  endpoints: (builder) => ({
    getPuzzleByDifficulty: builder.query<Board, string>({
      query: (difficulty) => `board?difficulty=${difficulty}`,
    }),
    getPuzzleSolvedStatus: builder.query<SolvedBoard, Board>({
      query: (body) => ({
        url: `solve`,
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `board=%5B${encodeBoard(body)}%5D`,
      }),
    }),
  }),
});

const encodeBoard = ({ board }: Board) =>
  board.reduce(
    (result, row, i) =>
      result +
      `%5B${encodeURIComponent(row.toString())}%5D${
        i === board.length - 1 ? "" : "%2C"
      }`,
    ""
  );

export const { useGetPuzzleByDifficultyQuery, useGetPuzzleSolvedStatusQuery } =
  sudokuApi;
