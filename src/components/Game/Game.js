import React from 'react'
import style from './Game.module.css'
import Score from '../Score'
import ColorCode from '../ColorCode'

const Game = () => {
  return (
    <div className={style.wrapper}>
      <Score />
      <div className={style.centered}>
        <ColorCode />
      </div>
    </div>
  )
}

export default Game