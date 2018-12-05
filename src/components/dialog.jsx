import React, { Component } from 'react';
import './dialog.css'

class Dialog extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="dialog-box dialog">
                    {this.props.stage.dialogSection.dialog}</div>
            </div>
         );
    }
}
 
export default Dialog;