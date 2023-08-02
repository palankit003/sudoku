import { useEffect, useState } from "react";
import Style from "./GameBoard.module.css";
import Clock from "../Clock/Clock";

import { useTheme } from "../../utils/ThemeContext";
interface Cell {
  value: number;
  isHighlighted: boolean;
  isSelected: boolean;
  isOccupied: boolean;
}
interface GameBoardProps {
  initialBoard: number[][];
}
interface selectedData {
  rowIndex: number;
  colIndex: number;
  value: number;
}
const GameBoard: React.FC<GameBoardProps> = ({ initialBoard }) => {
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
  const [history, setHistory] = useState<Cell[][][]>([board]);
  const [gameStarted, setGameStarted] = useState(false);
  const [timer, setTimer] = useState<number>(0);
  const [timerInterval, setTimerInterval] = useState<number | null>(null);
  const [currentCell, setCurrentCell] = useState<selectedData | null>(null);
  const theme = useTheme().theme;
  const handleCellClick = (
    rowIndex: number,
    colIndex: number,
    cellValue: number
  ) => {
    if (cellValue !== 0) return;
    setCurrentCell({ rowIndex, colIndex, value: cellValue });
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

  const gameInput = (num: number) => {
    const newBoard = board.map((row) =>
      row.map((cell) =>
        cell.isSelected ? { ...cell, value: num, isOccupied: true } : cell
      )
    );

    setBoard(newBoard);
    console.log(newBoard);
    setHistory((prev) => [...prev, newBoard]);
    console.log(history, history[history.length - 1], "history check");
    isInputValid(
      history[history.length - 1].map((row) => row.map((value) => value.value)),
      // @ts-ignore
      currentCell?.rowIndex,
      currentCell?.colIndex,
      num
    );
    setGameStarted(true);
  };

  const handleUndo = () => {
    console.log(history, "clicked");
    if (history.length > 1) {
      // Retrieve the previous state of the grid from the history array
      const previousGrid = history[history.length - 2];
      setBoard(previousGrid);
      // Remove the last element from the history array
      setHistory((prevHistory) => prevHistory.slice(0, prevHistory.length - 1));
    }
  };

  useEffect(() => {
    if (gameStarted) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);

      setTimerInterval(interval);

      return () => {
        clearInterval(interval);
      };
    }
  }, [gameStarted]);

  const resetGame = () => {
    const resetboard = () =>
      initialBoard.map((row) =>
        row.map((value) => ({
          value,
          isHighlighted: false,
          isSelected: false,
          isOccupied: value !== 0,
        }))
      );
    setBoard(resetboard);
    setHistory([resetboard()]);
    setGameStarted(false);
    setTimer(0);
    // Clear the interval to stop the timer when the game is reset.
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
  };

  function isInRow(grid: number[][], row: number, value: number): boolean {
    console.log(grid[row], "rowcheck");
    return grid[row].includes(value);
  }
  function isInColumn(
    grid: number[][],
    column: number,
    value: number
  ): boolean {
    const row = grid.map((row) => row[column]);
    console.log(
      grid.some((row) => row[column]),
      grid,
      column,
      row,
      "colCheck"
    );
    return grid.some((row) => row[column] === value);
  }
  function isInGrid(
    grid: number[][],
    row: number,
    column: number,
    value: number
  ): boolean {
    //mistake in row and columns
    const newGrid: number[] = [];
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(column / 3) * 3;
    for (let i = startRow; i <= startRow + 2; i++) {
      for (let j = startCol; j <= startCol + 2; j++) {
        if (grid[j][i] === value) {
          return true;
        }
      }
    }
    console.log(newGrid, column, row, grid, "gridCheck");
    return false;
  }
  function isInputValid(
    grid: number[][],
    row: number,
    column: number,
    value: number
  ): boolean {
    console.log(grid, "inputValidCheck");
    return (
      !isInRow(grid, row, value) &&
      !isInColumn(grid, column, value) &&
      !isInGrid(grid, row, column, value)
    );
  }

  return (
    <>
      <div className={Style.wrapper} data-theme={theme}>
        <div className={Style.subDetailBoardContainer}>
          <div className={Style.levelClockContainer}>
            <div>Diffculty: Hard</div>
            <Clock time={timer} />
          </div>
          <div className={Style.container}>
            <div className={Style.hLine1}></div>
            <div className={Style.hLine2}></div>
            <div className={Style.hLine3}></div>
            <div className={Style.hLine4}></div>
            <div className={Style.vLine1}></div>
            <div className={Style.vLine2}></div>
            <div className={Style.vLine3}></div>
            <div className={Style.vLine4}></div>
            {board.map((row, rowindex) => {
              return (
                <div key={rowindex}>
                  {row.map((cell, colindex) => (
                    <div
                      key={colindex}
                      className={`${Style.sudokuCell} 
              ${cell.isOccupied ? Style.occupied : Style.empty}
              `}
                      onClick={() =>
                        handleCellClick(rowindex, colindex, cell.value)
                      }
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
              );
            })}
          </div>
        </div>
        <div className={Style.controller}>
          <div className={Style.controllerBtn} onClick={() => gameInput(1)}>
            1
          </div>
          <div className={Style.controllerBtn} onClick={() => gameInput(2)}>
            2
          </div>
          <div className={Style.controllerBtn} onClick={() => gameInput(3)}>
            3
          </div>
          <div className={Style.controllerBtn} onClick={() => gameInput(4)}>
            4
          </div>
          <div className={Style.controllerBtn} onClick={() => gameInput(5)}>
            5
          </div>
          <div className={Style.controllerBtn} onClick={() => gameInput(6)}>
            6
          </div>
          <div className={Style.controllerBtn} onClick={() => gameInput(7)}>
            7
          </div>
          <div className={Style.controllerBtn} onClick={() => gameInput(8)}>
            8
          </div>
          <div className={Style.controllerBtn} onClick={() => gameInput(9)}>
            9
          </div>
        </div>
      </div>
      <div className={Style.btnContainer}>
        <button onClick={() => handleUndo()}>Undo</button>
        <button onClick={() => resetGame()}>Reset Game</button>
      </div>
    </>
  );
};

export default GameBoard;
