import React from 'react'

interface CardData {
  name: string
  img: string
  key: number
}

function GameCard (props: CardData): JSX.Element {
  return (
    <a className='card' style={{ order: props.key }}>
      <img src={`https://cdn.akamai.steamstatic.com/steam/apps/${props.img}/hero_capsule.jpg`} alt="" width="200px"/>
      <p>{props.name}</p>
    </a>
  )
}

export default GameCard
