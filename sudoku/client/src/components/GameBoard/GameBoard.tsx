import { useState } from "react";
import Style from "./GameBoard.module.css";

interface Cell {
  value: number;
  isHighlighted: boolean;
  isSelected: boolean;
  isOccupied: boolean;
}
interface SudokuBoardProps {
  initialBoard: number[][];
}
const GameBoard: React.FC<SudokuBoardProps> = ({ initialBoard }) => {
  const [board, setBoard] = useState<Cell[][]>(() =>
    initialBoard.map((row) =>
      row.map((value) => ({
        value,
        isHighlighted: false,
        isSelected: false,
        isOccupied: value !== 0,
      }))
    )
  );
  const handleCellClick = (rowIndex: number, colIndex: number) => {
    const clickedRow = rowIndex;
    const clickedCol = colIndex;
    const clickedGridRow = Math.floor(rowIndex / 3);
    const clickedGridCol = Math.floor(colIndex / 3);

    const newBoard = board.map((row, rIndex) =>
      row.map((cell, cIndex) => ({
        ...cell,
        isSelected: rIndex === clickedRow && cIndex === clickedCol,
        isHighlighted:
          rIndex === clickedRow ||
          cIndex === clickedCol ||
          (Math.floor(rIndex / 3) === clickedGridRow &&
            Math.floor(cIndex / 3) === clickedGridCol),
      }))
    );

    setBoard(newBoard);
  };

  return (
    <>
      <div className={Style.container}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className={Style.sudokuRow}>
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`${Style["sudokuCell"]} ${
                  cell.isOccupied ? Style["occupied"] : Style["empty"]
                }`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                <div
                  className={`${
                    cell.isHighlighted ? Style["highlighted"] : ""
                  } ${cell.isSelected ? Style["selected"] : ""}`}
                >
                  {cell.value !== 0 ? cell.value : ""}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={Style.inputContainer}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </>
  );
};

export default GameBoard;
