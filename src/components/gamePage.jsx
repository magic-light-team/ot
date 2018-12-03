import React, { Component } from 'react';
import Dialog from './dialog';
import Options from './options';

class GamePage extends Component {
    state = {}
    render() {
        return (
            <div id="game">
                { this.stage.stageType === 0 ? 
                    <Dialog stage={this.props.stage} changePage={this.changePage}/> : 
                    <Options stage={this.props.stage} changePage={this.changePage} /> }
            </div>
        );
    }
}

export default GamePage;