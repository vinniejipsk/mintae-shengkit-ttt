import React from 'react'
import { useState } from 'react'

function ScoreBoard() {
    const [winCount1, setWincount1] = useState(1);
    const [winCount2, setWincount2] = useState(2);
  return (
    <div className='scoreBoard'>
        <div>Player 1 : Player 2</div>
        <div>{winCount1} : {winCount2}</div>
    </div>
  )
}

export default ScoreBoard
