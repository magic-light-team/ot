import React, { Component } from 'react';
import './dialog.css'

import { connect } from 'react-redux';
import { IState } from '../../reducers/initialState';
import { DialogType } from '../../info/data.interfaces';

export interface Props { //StateFromProps
    stageDialog:string,
    dialogType?:DialogType,
}

export interface State { // DispatchFromProps
    // changePage: () => void;
}

class Dialog extends Component<Props, State> {
    state = {}
    render() {
        return (
            <div>
                <div className={"dialog-box dialog "+ (this.props.dialogType || '') } style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/img/dialog/'+(this.props.dialogType || 'left')+'.png)'}}>
                    {this.props.stageDialog}</div>
            </div>
        );
    }

}

const mapStateToProps = (allState: { gameState: IState }) => ({
    stageDialog: (allState.gameState.currentStage &&  allState.gameState.currentStage.dialog) || '',
    dialogType: allState.gameState.currentStage && allState.gameState.currentStage.dialogType
});

export default connect(mapStateToProps)(Dialog);

// export default Dialog;