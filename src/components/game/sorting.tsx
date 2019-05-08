import React, { Component } from 'react';
import './sorting.css'

import { connect } from 'react-redux';
import { IState } from '../../reducers/initialState';

export interface Props { //StateFromProps
    // stageDialog:string,
    // dialogType?:DialogType,
}

export interface State { // DispatchFromProps
    // changePage: () => void;
}

class Sorting extends Component<Props, State> {
    state = {}
    render() {
        return (
            <div>
                
            </div>
        );
    }

}

const mapStateToProps = (allState: { gameState: IState }) => ({
    // stageDialog: (allState.gameState.currentStage &&  allState.gameState.currentStage.dialog) || '',
    // dialogType: allState.gameState.currentStage && allState.gameState.currentStage.dialogType
});

export default connect(mapStateToProps)(Sorting);

// export default Dialog;