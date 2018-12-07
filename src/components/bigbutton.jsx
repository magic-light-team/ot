import React from 'react';
import './bigbutton.css';

const BigButton = ({id,color,clickHandle,arg,text}) => {
    return ( 
        <button 
            id={id } 
            className={"btn start-btn " + color } 
            onClick={event => clickHandle(event, arg)}>{ text }</button>
     );
};
 
export default BigButton;