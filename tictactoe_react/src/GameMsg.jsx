import React from 'react'

function GameMsg({ winner, turn }) {

  function renderMessage() {
    if (winner === 'T') {
      return 'TIE! Play Again!';
    } else if (winner) {
      return `${winner}, You're The Winner!`;
    } else {
      return `It's ${turn}'s Turn`;
    }
  }

  return (
    <div>
        {renderMessage()}
    </div>
  )
}

export default GameMsg
