import React from 'react'

function PlayAgainButton() {

    function resetGame() {
        // reset all state variables to intital values
        
    }

  return (
    <div>
      <button 
        className='playAgainBtn'
        onClick={resetGame}
      >PLAY AGAIN
      </button>
    </div>
  )
}

export default PlayAgainButton
