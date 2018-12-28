import React, { Component } from 'react';
import './scoreBoard.css'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pauseGame } from '../actions/index';

class ScoreBoard extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="score-board">
                <div id="menu" onClick={event => this.props.pauseGame(event,true) }>
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
}

ScoreBoard.propTypes = { pauseGame: PropTypes.func.isRequired };
const mapStateToProps = state => ({
    levelName: state.state.currentLevel.levelName,
    score: state.state.score
});

export default connect(mapStateToProps, { pauseGame })(ScoreBoard);

// export default ScoreBoard;