import GameBoard from "../../components/GameBoard/GameBoard";

const Game = () => {
  const numArry = [
    [1, 0, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 0, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 0, 3, 4, 5, 0, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 0, 4, 5, 6, 7, 0, 9],
  ];
  return (
    <>
      <GameBoard initialBoard={numArry} />
    </>
  );
};

export default Game;
