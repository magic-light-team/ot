import React, { Component } from 'react';
import './gamePage.css'

import Dialog from './dialog';
import Querstion from './question';
import Sorting from './sorting';
import PageHeader from '../tools/pageHeader';
import Modal from '../tools/modal';

import { connect } from 'react-redux';
import { changePage, changeStage, pauseGame } from '../../actions/actions';
import { IState } from '../../reducers/initialState';
import { StageType, DialogType, option } from '../../info/data.interfaces';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

export interface Props { //StateFromProps
    // stageId: number,

    stageType?: StageType,
    nextDialogId?: number,
    isPaused: boolean,
    backgroundPic: string,

    dialog: string,
    dialogType?: DialogType,
    options: option[],

    changePage: Function,
    changeStage: Function,
    pauseGame: Function
}

export interface State { // DispatchFromProps
    // changePage: () => void;
}

class GamePage extends Component<Props> {

    renderStage = (stage?: StageType) => {
        switch (stage) {
            case StageType.Dialog:
                return <Dialog dialog={this.props.dialog} dialogType={this.props.dialogType} />;
            case StageType.Question:
                return <Querstion dialog={this.props.dialog} dialogType={this.props.dialogType} options={this.props.options} changeStage={this.props.changeStage} />;
            case StageType.Sorting:
                return <Sorting />;
            default:
                return <div></div>
        }
    }

    render() {
        return (
            <div id="game"
                onClick={(this.props.stageType === StageType.Question || this.props.isPaused) ? undefined : event => this.props.changeStage(event, this.props.nextDialogId)}
                style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + this.props.backgroundPic + ')' }}>
                <PageHeader page={false} />
                {this.renderStage(this.props.stageType)}
                {this.props.isPaused && <Modal pauseGame={this.props.pauseGame} changePage={this.props.changePage} />}
            </div>
        );
    }
}

const mapStateToProps = (allState: { gameState: IState }) => ({
    // stageId: allState.gameState.currentStage ? allState.gameState.currentStage.stageId : 0,
    isPaused: allState.gameState.isPaused,
    stageType: allState.gameState && allState.gameState.currentStage && allState.gameState.currentStage.stageType,
    backgroundPic: allState.gameState && allState.gameState.backgroundPic,
    nextDialogId: (allState.gameState && allState.gameState.currentStage && allState.gameState.currentStage.nextDialogId) || undefined,
    dialog: (allState.gameState.currentStage && allState.gameState.currentStage.dialog) || '',
    dialogType: allState.gameState.currentStage && allState.gameState.currentStage.dialogType,
    options: (allState.gameState.currentStage && allState.gameState.currentStage.optionsSection) || [],
});

const mapDispatchToProps = ({
    changePage: changePage,
    changeStage: changeStage,
    pauseGame: pauseGame
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);

// export default GamePage;
