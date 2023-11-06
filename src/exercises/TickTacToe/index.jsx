import React, { useState } from "react";
import Section from "../../components/Section";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import "./index.css";
import {
  deriveActivePlayer,
  deriveGameBoard,
  deriveGameWinner,
} from "./helpers/gameHelper";

const players = [
  {
    name: "Player 1",
    symbol: "X",
  },
  {
    name: "Player 2",
    symbol: "O",
  },
];

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const TickTacToe = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const [playerNames, setPlayerNames] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(initialGameBoard, gameTurns);
  const winner = deriveGameWinner(gameBoard, playerNames);
  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  const handleRematch = () => {
    setGameTurns([]);
  };

  const handlePlayerName = (symbol, playerName) => {
    setPlayerNames((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: playerName,
      };
    });
  };

  return (
    <>
      <main>
        <Section />
        <div id="game-container">
          <ol id="players" className="highlight-player">
            {players.map((player) => {
              return (
                <Player
                  key={player.name}
                  name={player.name}
                  symbol={player.symbol}
                  isActive={activePlayer === player.symbol}
                  onChangeName={handlePlayerName}
                />
              );
            })}
          </ol>
          {(winner || hasDraw) && (
            <GameOver winner={winner} onRestart={handleRematch} />
          )}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
};

export default TickTacToe;
