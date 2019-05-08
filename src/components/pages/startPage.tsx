import React, { Component } from 'react';
import './startPage.css'

import { connect } from 'react-redux';
import { IState } from '../../reducers/initialState';
import { appPage } from '../../info/data.interfaces';
import { changePage } from '../../actions/actions';
import BigButton from '../tools/bigbutton'

//import Transition from 'react-transition-group/Transition';

export interface Props { //StateFromProps
    pageSetting: appPage,
    changePage: Function;
}

export interface State { // DispatchFromProps
    // changePage: () => void;
}

class StartPage extends Component<Props, State> {
    render() {
        return (
            <div id="start-screen" style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + this.props.pageSetting.backgroundPic + ')' }}>
                <div id="inner-screen">
                    <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" />
                    {
                        this.props.pageSetting.pageButtons && this.props.pageSetting.pageButtons.map(btn =>
                            <BigButton  key={btn.id} id={btn.id} text={btn.title} arg={btn.page} clickHandle={this.props.changePage} color={btn.id} />)
                    }
                </div>
            </div>
        );
    }

}

// StartPage.propTypes = { changePage: PropTypes.func.isRequired };

const mapStateToProps = (allState: { gameState: IState }) => ({
    pageSetting: allState.gameState.pageSetting,
});

const mapDispatchToProps = ({
    changePage: changePage
});

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);

// export default StartPage;
