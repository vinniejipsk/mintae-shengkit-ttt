import React from 'react';
import CellSquare from './CellSquare';
import GameMsg from './GameMsg';

function Board({ board, setBoard, turn, setTurn, winner, handleWin }) {

  const handleClick = (index) => {
    
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    checkWinner(newBoard, turn);
    setTurn(turn === 'X' ? 'O' : 'X');
  };

  const checkWinner = (newBoard, currentTurn) => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        handleWin(currentTurn);
        return;
      }
    }

    if (!newBoard.includes(null)) {
      handleWin('T'); // T for Tie
    }
  };

  return (
    <div className="board">
      {board.map((cell, index) => (
        <CellSquare
          key={index}
          value={cell}
          onClick={() => handleClick(index)}
        />
      ))}
      <GameMsg winner={winner} turn={turn} />
    </div>
  );
}

export default Board;
