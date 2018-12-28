import React, { Component } from 'react';

import Dialog from './dialog';
import Options from './options';
import ScoreBoard from './scoreBoard';

import './gamePage.css'
import Modal from './modal';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changePage, changeStage, pauseGame } from '../actions/index';

class GamePage extends Component {
    state = {}
    render() {
        return (
            <div id="game"
                onClick={(this.props.stageType && !this.props.isPaused) ? null : () => this.props.changeStage(this.props.extDialogId)}
                style={{ backgroundImage: 'url(img/' + this.props.backgroundPic + ')' }}>
                <ScoreBoard />
                {this.props.stageType === 0 ?
                    <Dialog /> :
                    <Options stage={this.props.stage} changeStage={this.props.changeStage} />}
                {this.props.isPaused && <Modal pauseGame={this.props.pauseGame} changePage={this.props.changePage} />}
            </div>
        );
    }
}

GamePage.propTypes = {
    changePage: PropTypes.func.isRequired,
    changeStage: PropTypes.func.isRequired,
    pauseGame: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    isPaused: state.state.isPaused,
    stageType: state.state.currentStage.stageType,
    backgroundPic: state.state.backgroundPic,
    nextDialogId: state.state.currentStage.stageType === 0 && state.state.currentStage.dialogSection.nextDialogId
});

export default connect(mapStateToProps, { changePage, changeStage, pauseGame })(GamePage);

// export default GamePage;