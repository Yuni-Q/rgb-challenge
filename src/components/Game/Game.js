import React from 'react';
import style from './Game.module.css';
import Score from '../Score'

const Game = () => {
  return (
    <div className={style.wrapper}>
      <Score />
    </div>
  )
}

export default Game