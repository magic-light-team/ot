import React, { Component } from 'react';
import './bigbutton.css';

class BigButton extends Component {
    state = {  }
    render() { 
        return ( 
            <button id={this.props.id } className={"btn start-btn " + this.props.color } data-score='{ this.preps.score }' data-level='{ this.preps.attr }'>{ this.props.text }</button>
         );
    }
}
 
export default BigButton;