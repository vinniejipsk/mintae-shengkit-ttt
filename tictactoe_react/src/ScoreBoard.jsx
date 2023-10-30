import React from 'react'
import { useState } from 'react'

function ScoreBoard() {
    const [winCount1, setWincount1] = useState(1);
    const [winCount2, setWincount2] = useState(2);
  return (
    <div className='scoreBoard'>
        `Player 1 : Player 2
        ${winCount1} : ${winCount2}`
    </div>
  )
}

export default ScoreBoard
