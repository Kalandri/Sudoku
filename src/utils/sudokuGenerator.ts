const N: number = 9; // number of columns/rows
const SRN: number = 3; // square root of N
let K: number; // No. Of missing digits
let unsolved: number[][] = Array.from(
  {
    // generate array of length m
    length: N,
    // inside map function generate array of size n
    // and fill it with `0`
  },
  () => new Array(N).fill(0)
);
let solved: number[][];

const generateSudoku = (difficulty: string) => {
  switch (difficulty) {
    case "easy":
      K = 37;
      break;
    case "medium":
      K = 46;
      break;
    case "hard":
      K = 58;
      break;
    case "extreme":
      K = 64;
      break;
    default:
      K = 37;
      break;
  }
  fillValues();
  return { unsolved, solved };
};

const fillValues = () => {
  fillDiagonal();
  fillRemaining(0, SRN);
  solved = unsolved;
  removeKDigits();
};

const fillDiagonal = () => {
  for (let i = 0; i < N; i = i + SRN) {
    fillBox(i, i);
  }
};

const unUsedInBox = (rowStart: number, colStart: number, num: number) => {
  for (let i = 0; i < SRN; i++)
    for (let j = 0; j < SRN; j++)
      if (unsolved[rowStart + i][colStart + j] === num) return false;

  return true;
};

const fillBox = (row: number, col: number) => {
  let num;
  for (let i = 0; i < SRN; i++) {
    for (let j = 0; j < SRN; j++) {
      do {
        num = randomGenerator(N);
      } while (!unUsedInBox(row, col, num));

      unsolved[row + i][col + j] = num;
    }
  }
};

const randomGenerator = (num: number) => {
  return Math.floor(Math.random() * num + 1);
};

// Check if safe to put in cell
const checkIfSafe = (i: number, j: number, num: number) => {
  return (
    unUsedInRow(i, num) &&
    unUsedInCol(j, num) &&
    unUsedInBox(i - (i % SRN), j - (j % SRN), num)
  );
};

const unUsedInRow = (i: number, num: number) => {
  for (let j = 0; j < N; j++) if (unsolved[i][j] === num) return false;
  return true;
};

const unUsedInCol = (j: number, num: number) => {
  for (let i = 0; i < N; i++) if (unsolved[i][j] === num) return false;
  return true;
};

const fillRemaining = (i: number, j: number) => {
  //  System.out.println(i+" "+j);
  if (j >= N && i < N - 1) {
    i = i + 1;
    j = 0;
  }
  if (i >= N && j >= N) return true;

  if (i < SRN) {
    if (j < SRN) j = SRN;
  } else if (i < N - SRN) {
    if (j === Math.floor(i / SRN) * SRN) j = j + SRN;
  } else {
    if (j === N - SRN) {
      i = i + 1;
      j = 0;
      if (i >= N) return true;
    }
  }

  for (let num = 1; num <= N; num++) {
    if (checkIfSafe(i, j, num)) {
      unsolved[i][j] = num;
      if (fillRemaining(i, j + 1)) return true;

      unsolved[i][j] = 0;
    }
  }
  return false;
};

const removeKDigits = () => {
  let count = K;
  while (count !== 0) {
    let cellId: number = randomGenerator(N * N) - 1;

    // extract coordinates i  and j
    let i = Math.floor(cellId / N);
    let j = cellId % 9;
    // if (j !== 0) j = j - 1;

    if (unsolved[i][j] !== 0) {
      count--;
      unsolved[i][j] = 0;
    }
  }
};

export default generateSudoku;
