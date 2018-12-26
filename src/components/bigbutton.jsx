import React, { Component } from 'react';
import './bigbutton.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changePage  } from '../actions/index';

class BigButton extends Component {
    //state = {}
    render() {
        return (
            <button 
            id={this.props.id } 
            className={"btn start-btn " + this.props.color } 
            // onClick={event => this.props.clickHandle(event, this.props.arg)}>{ this.props.text }</button>
            onClick={event => this.props.changePage(event, this.props.arg)}>{ this.props.text }</button>
        );
    }
}

BigButton.propTypes = { changePage: PropTypes.func.isRequired };
const mapStateToProps = state => ({ ...state});

export default connect(mapStateToProps,{changePage})(BigButton);


// import React from 'react';
// import './bigbutton.css';

// const BigButton = ({id,color,clickHandle,arg,text}) => {
//     return ( 
//         <button 
//             id={id } 
//             className={"btn start-btn " + color } 
//             onClick={event => clickHandle(event, arg)}>{ text }</button>
//      );
// };
 
// export default BigButton;