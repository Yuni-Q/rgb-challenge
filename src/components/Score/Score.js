import React, { Component } from 'react';
import style from './Score.module.css';

class Score extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
    }
  }
  render() {
    const { score } = this.state
    return (
      <p className={style.wrapper}>
        Score : {score}
      </p>
    )
  }
}

export default Score