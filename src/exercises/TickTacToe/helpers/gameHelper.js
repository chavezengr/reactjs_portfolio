import { WINNING_COMBINATIONS } from "../constants/winning-combinations";

export const deriveActivePlayer = (prevTurns) => {
  let currentPlayer = "X";

  if (prevTurns.length > 0 && prevTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
};

export const deriveGameBoard = (initialGameBoard, gameTurns) => {
  let gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
};

export const deriveGameWinner = (gameBoard, playerNames) => {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSymbol &&
      secondSymbol === firstSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = playerNames[firstSymbol];
    }
  }

  return winner;
};
