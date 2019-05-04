import React, { Component } from 'react';
import './pageHeader.css'

import { connect } from 'react-redux';
import { changePage, pauseGame } from '../actions/actions';
import { IState } from '../reducers/initialState';

export interface Props { //StateFromProps
    headerTitle: string,
    score: number,
    changePage: Function;
    pauseGame: Function;
    page: boolean,
}

export interface State { // DispatchFromProps
    // changePage: () => void;
}

class PageHeader extends Component<Props> {
    render() {
        return (
            <div id="score-board">
                {
                    this.props.page ?
                        <div id="menu"></div> :
                        <div id="menu" onClick={event => this.props.pauseGame(event, true)}>
                            <img src={process.env.PUBLIC_URL + "/img/menu.png"} alt="menu icon" />
                        </div>
                }

                <div id="stage">{this.props.headerTitle}</div>
                <div id="score">
                {
                    this.props.page ?
                    <a href="#" onClick={event => this.props.changePage(event, "startPage")}>
                        &gt;&gt;</a> 
                :
                    <span>
                        <span id="score-text">امتیاز</span>
                        <span id="score-num">{this.props.score}</span>
                    </span> 
                }
                </div>
            </div>
        );
    }
}


const mapStateToProps = (allState: { gameState: IState }) => ({
    headerTitle: allState.gameState.headerTitle,
    score: allState.gameState.score
});

const mapDispatchToProps = ({
    changePage: changePage,
    pauseGame: pauseGame,
});

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);

// export default PageHeader;