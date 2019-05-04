import React, { Component } from 'react';
import './pageHeader.css'

import { connect } from 'react-redux';
import { changePage } from '../actions/actions';
import { IState } from '../reducers/initialState';

export interface Props { //StateFromProps
    headerTitle:string,
    score:number,
    changePage: Function;
}

export interface State { // DispatchFromProps
    // changePage: () => void;
}

class PageHeader extends Component<Props> {
    render() { 
        return ( 
            <div id="score-board">
                <div id="menu">
                </div>
                <div id="stage">{this.props.headerTitle}</div>
                <div id="score">
                <a href="#" onClick={event => this.props.changePage(event,"startPage") }>
                    &gt;&gt;                
                </a>
                </div>
            </div>
         );
    }
}


const mapStateToProps = (allState: { gameState: IState }) => ({
    headerTitle: allState.gameState.headerTitle,
    score: allState.gameState.score
});

const mapDispatchToProps = ({
    changePage: changePage
});

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);

// export default PageHeader;