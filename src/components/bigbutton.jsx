import React, { Component } from 'react';
import './bigbutton.css';

class BigButton extends Component {
    state = {  }
    render() { 
        return ( 
            <button 
                id={this.props.id } 
                className={"btn start-btn " + this.props.color } 
                data-score={ this.props.score }
                data-level={ this.props.attr }
                onClick={() => this.props.clickHandle(this.props.newLevel)}>{ this.props.text }</button>
         );
    }
    
}
 
export default BigButton;