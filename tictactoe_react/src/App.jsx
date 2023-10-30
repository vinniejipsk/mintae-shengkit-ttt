import { useState } from 'react'
import './App.css'
import Board from './Board'
import GameOverMsg from './GameOverMsg';
import PlayAgainButton from './PlayAgainButton';

function App() {
  const [gameOver, setGameOver] = useState(false);

  return (
    <>
      <div>
        <Board />
        {/* {gameOver ? <GameOverMsg /> : null}
        {gameOver ? <PlayAgainButton /> : null} */}
        <GameOverMsg />
        <PlayAgainButton />
      </div>
    </>
  )
}

export default App
