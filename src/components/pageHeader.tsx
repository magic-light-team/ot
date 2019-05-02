import React, { Component } from 'react';
import './pageHeader.css'

import { connect } from 'react-redux';
import { pauseGame } from '../actions/actions';
import { IState } from '../reducers/initialState';

export interface Props { //StateFromProps
    levelName:string,
    score:number,
    pauseGame: Function;
}

export interface State { // DispatchFromProps
    // changePage: () => void;
}

class PageHeader extends Component<Props> {
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


const mapStateToProps = (allState: { gameState: IState }) => ({
    levelName: allState.gameState.levelName,
    score: allState.gameState.score
});

const mapDispatchToProps = ({
    pauseGame: pauseGame
});

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);

// export default PageHeader;