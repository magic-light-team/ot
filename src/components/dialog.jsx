import React, { Component } from 'react';
import './dialog.css'

import { connect } from 'react-redux';

class Dialog extends Component {
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

const mapStateToProps = state => ({
    stageDialog: state.state.currentStage.dialogSection.dialog,
    dialogType: state.state.currentStage.dialogSection.dialogType
});

export default connect(mapStateToProps)(Dialog);

// export default Dialog;