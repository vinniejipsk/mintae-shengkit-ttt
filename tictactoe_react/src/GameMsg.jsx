import React from 'react';

function GameMsg({ winner, turn }) {

  const renderMessage = () => {

    if (winner === 'T') {
      return 'Tie game!';
    } else if (winner) {
      return `Player ${winner} wins!`;
    } else {
      return `Player ${turn}'s turn`;
    }
  };

  return <div className="game-msg">{renderMessage()}</div>;
}

export default GameMsg;
