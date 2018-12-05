import React, { Component } from 'react';
import './scoreBoard.css'

class ScoreBoard extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="score-board">
                <div id="menu" onClick={this.clickMenu}>
                    <img src={process.env.PUBLIC_URL + "/img/menu.png"} alt="menu icon" />
                </div>
                <div id="stage">{this.props.levelName}</div>
                <div id="score">
                    <span id="score-text">امتیاز</span>
                    <span id="score-num">{this.props.score}</span>
                </div>
            </div>
         );
    }

    clickMenu = () => {
        console.log('click menu', this);
    }
}

export default ScoreBoard;