import React, { Component } from 'react';
import './gamePage.css'

import Dialog from './dialog';
import Querstion from './question';
import PageHeader from './pageHeader';
import Modal from './modal';

import { connect } from 'react-redux';
import { changePage, changeStage, pauseGame } from '../actions/actions';
import { IState } from '../reducers/initialState';
import { StageType } from '../info/data.interfaces';

export interface Props { //StateFromProps
    stageType?:StageType,
    nextDialogId?:number,
    isPaused:boolean,
    backgroundPic:string,
    changePage: Function,
    changeStage: Function,
    pauseGame: Function
}

export interface State { // DispatchFromProps
    // changePage: () => void;
}

class GamePage extends Component<Props> {
    state = {}
    render() {
        return (
            <div id="game"
                onClick={(this.props.stageType===StageType.Question || this.props.isPaused) ? undefined : event => this.props.changeStage(event,this.props.nextDialogId)}
                style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + this.props.backgroundPic + ')' }}>
                <PageHeader page={false} />
                
                {this.props.stageType === 0 ?
                    <Dialog /> :
                    <Querstion />}
                {this.props.isPaused && <Modal pauseGame={this.props.pauseGame} changePage={this.props.changePage} />}
            </div>
        );
    }
}


const mapStateToProps = (allState: { gameState: IState }) => ({
    isPaused: allState.gameState.isPaused,
    stageType: allState.gameState && allState.gameState.currentStage && allState.gameState.currentStage.stageType,
    backgroundPic: allState.gameState && allState.gameState.backgroundPic,
    nextDialogId: (allState.gameState && allState.gameState.currentStage && allState.gameState.currentStage.stageType === 0 && allState.gameState.currentStage.nextDialogId) || undefined
});

const mapDispatchToProps = ({
    changePage: changePage,
    changeStage: changeStage,
    pauseGame: pauseGame
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);

// export default GamePage;
