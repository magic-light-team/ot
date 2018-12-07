import React, { Component } from 'react';

import Dialog from './dialog';
import Options from './options';
import ScoreBoard from './scoreBoard';

import './gamePage.css'
import Modal from './modal';

class GamePage extends Component {
    state = {}
    render() {
        return (
            <div id="game"
                onClick={ (this.props.stage.stageType && !this.props.isPaused) ? null : () => this.props.changeStage(this.props.stage.dialogSection.nextDialogId)}
                style={{ backgroundImage: 'url(/img/' + this.props.backgroundPic + ')' }}>
                <ScoreBoard levelName={this.props.level.levelName} score={this.props.score} pauseGame={this.props.pauseGame} />
                {this.props.stage.stageType === 0 ?
                    <Dialog stage={this.props.stage} /> :
                    <Options stage={this.props.stage} changeStage={this.props.changeStage} />}
                {this.props.isPaused && <Modal pauseGame={this.props.pauseGame} changePage={this.props.changePage} /> }
            </div>
        );
    }
}

export default GamePage;