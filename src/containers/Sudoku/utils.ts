import React from "react";

export const isCellReserved = (
  selectedCell: { posX: number; posY: number },
  initialPuzzle: number[][] | undefined
) => {
  if (initialPuzzle !== undefined) {
    return initialPuzzle[selectedCell.posX][selectedCell.posY] !== 0
      ? true
      : false;
  }
};

// export const inputToCell = (
//   selectedCell: { posX: number; posY: number },
//   newValue: number
// ) => {
//   if (selectedCell !== undefined) {
//     updateProgressPuzzle({
//       value: newValue,
//       reserved: isCellReserved(selectedCell.posX, selectedCell.posY),
//     });
//   } else {
//     //display error for no cell selected
//   }
// };
