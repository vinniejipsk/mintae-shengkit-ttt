import React from 'react';

function PlayAgainButton({ setBoard, setTurn, setWinner, setScore, setGameOver }) {

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn('X');
        setWinner(null);
        setGameOver(false);
    }

  return (
    <button className="playAgainBtn" onClick={resetGame}>
      Play Again
    </button>
  );
}

export default PlayAgainButton;

