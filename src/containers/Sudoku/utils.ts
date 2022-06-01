export const isCellReserved = (
  cell: { posX: number; posY: number },
  initialPuzzle: number[][] | undefined
) => {
  if (initialPuzzle !== undefined) {
    return initialPuzzle[cell.posX][cell.posY] !== 0 ? true : false;
  }
};
