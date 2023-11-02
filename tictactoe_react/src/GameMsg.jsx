import React from 'react'

function GameMsg({winner}) {

  function renderMessage() {
    if (winner === 'T') {
          message.innerHTML = 'TIE! Play Again!';
      } else if (winner) {
          message.innerHTML = `${[winner]}, You're The Winner!`;
      } else {
          message.innerHTML = `It's ${[turn]}'s Turn`;
      }
  }

  return (
    <div>
        {renderMessage}
    </div>
  )
}

export default GameMsg
