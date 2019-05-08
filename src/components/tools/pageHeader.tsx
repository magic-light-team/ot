import React, { Component } from 'react';
import './pageHeader.css'

import { connect } from 'react-redux';
import { changePage, pauseGame } from '../../actions/actions';
import { IState } from '../../reducers/initialState';

export interface Props { //StateFromProps
    headerTitle: string,
    score: number,
    changePage: Function;
    pauseGame: Function;

    page: boolean,
    subTitle?: string,
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

                <div id="stage">
                    <span>{this.props.headerTitle}</span>
                    {this.props.subTitle && <span>{this.props.subTitle}</span>}
                </div>
                {
                    this.props.page ?
                        <div id="backlink" onClick={event => this.props.changePage(event, "startPage")}>
                            <img src={process.env.PUBLIC_URL + "/img/backwards_arrow.png"} alt="backwards arrow icon" />
                        </div>
                        :
                        <div id="score">
                            <span id="score-text">امتیاز</span>
                            <span id="score-num">{this.props.score}</span>
                        </div>
                }
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