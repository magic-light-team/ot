import React, { Component } from 'react';

import { connect } from 'react-redux';
import { changeStage } from '../actions/actions';
import { IState } from '../reducers/initialState';
import { DialogType } from '../info/data.interfaces';

export interface Props { //StateFromProps
    stageDialog:string,
    dialogType?:DialogType,
    
    changeStage: Function;
}

export interface State { // DispatchFromProps
    // changePage: () => void;
}

class Questions extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className={"description-wrapper dialog " + (this.props.dialogType || '')} style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/img/dialog/'+(this.props.dialogType || 'left')+'.png)'}}>
                    {this.props.desc}</div>
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
    options: allState.gameState.currentStage && allState.gameState.currentStage.optionSection.options,
    desc: allState.gameState.currentStage && allState.gameState.currentStage.optionSection.desc,
    dialogType: allState.gameState.currentStage && allState.gameState.currentStage.optionSection.dialogType,
});

const mapDispatchToProps = ({
    changeStage: changeStage
});

export default connect(mapStateToProps, { changeStage })(Questions);

// export default Options;
