import React, { Component } from 'react';

import { connect } from 'react-redux';
import { IState } from '../reducers/initialState';
import { changeStage } from '../actions/actions';
import { option, DialogType } from '../info/data.interfaces';

//import Transition from 'react-transition-group/Transition';

export interface Props { //StateFromProps
    dialog:string,
    dialogType?:DialogType,
    options:option[],
    changeStage: Function,
}

export interface State { // DispatchFromProps
    // changePage: () => void;
}

class Question extends Component<Props, State> {
    render() {
        return (
            <div>
                <div className={"description-wrapper dialog " + (this.props.dialogType || '')} style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/img/dialog/'+(this.props.dialogType || 'left')+'.png)'}}>
                    {this.props.dialog}</div>
                <div className="btn-wrapper">
                    {this.props.options.map(op =>
                        <button
                            onClick={() => this.props.changeStage(op.nextDialogId, op.score,(op.backgroundPic||'') )}
                            key={op.optionId}
                            data-score={op.score}
                            //data-backgroundPic={(op.backgroundPic || '')}
                            className="btn red-color">{op.title}</button>)}
                </div>
            </div>
        );
    }

}

const mapStateToProps = (allState: { gameState: IState }) => ({
    dialog: (allState.gameState.currentStage && allState.gameState.currentStage.dialog) || '',
    dialogType: (allState.gameState.currentStage && allState.gameState.currentStage.dialogType) || undefined,
    options: (allState.gameState.currentStage && allState.gameState.currentStage.optionsSection) || [],
});

const mapDispatchToProps = ({
    changeStage: changeStage
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);

// export default StartPage;
