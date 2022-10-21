import React from 'react'
import GameCard from '../components/GameCard'
import '../styles/Home.css'

interface IGame {
  [key: string]: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const games: IGame = {
  252490: 'Rust',
  275850: "No Man's Sky",
  698670: 'Scorn',
  1063730: 'New World',
  1085660: 'Destiny 2',
  1091500: 'Cyberpunk 2077',
  1147560: 'Skul: The Hero Slayer',
  1182900: 'A Plague Tale: Requiem',
  1599340: 'Lost Ark'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const empty: IGame = {}

function Home (): any {
  // Check if there is games
  if (Object.keys(games).length !== 0) { // Switch between object "games" and "empty" to test
    const gameList = Object.keys(games).map((key, index) => <GameCard key={index} name={games[key]} img={key} />)
    return (
      <div className="wrapper">
        {gameList}
      </div>
    )
  } else {
    return (
      <div className="no-game">No game found</div>
    )
  }
}

export default Home
