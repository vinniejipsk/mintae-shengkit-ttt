import React from 'react'

function GameMsg({winner, turn}) {

  function renderMessage() {
    if (winner === 'T') {
          return 'TIE! Play Again!';
      } else if (winner) {
          return `${winner}, You're The Winner!`;
      } else {
          return `It's ${turn}'s Turn`;
      }
  }

  const message = renderMessage();

  return (
    <div>
        {message}
    </div>
  )
}

export default GameMsg
