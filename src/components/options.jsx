import React, { Component } from 'react';

class Options extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="description-wrapper dialog">
                    { this.props.stage.optionSection.desc }</div>
                <div className="btn-wrapper">
                    { this.props.stage.optionSection.options.map(op => 
                        <button
                            onClick={() => this.props.changeStage(op.nextDialogId, op.score) }
                            key={op.optionId}
                            data-score={op.score}
                            className="btn red-color">{op.title}</button>) }
                </div>
            </div>
         );
    }
}
 
export default Options;