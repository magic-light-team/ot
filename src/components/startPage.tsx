import React, { Component } from 'react';
import './startPage.css'
import BigButton from './bigbutton';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { changePage } from '../actions/actions';
import { appPage } from '../info/interfaces';

//import Transition from 'react-transition-group/Transition';

export interface Props { //StateFromProps
    backgroundPic: string,
    pageSetting: appPage,
    changePage: Function;
}

export interface State { // DispatchFromProps
    // changePage: () => void;
}

class StartPage extends Component<Props, State> {
    render() {
        return (

            <div id="start-screen" style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + this.props.backgroundPic + ')' }}>
                <div id="inner-screen">
                    <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" />
                    {this.props.pageSetting && this.props.pageSetting.pageButtons && this.props.pageSetting.pageButtons.map(op =>
                        <BigButton key={op.id} id={op.id} text={op.title} arg={op.page} clickHandle={this.props.changePage} color={op.id} />
                        // <BigButton key={op.id} id={op.id} text={op.title} arg={op.page} color={op.id} />
                    )}
                </div>
            </div>

        );
    }

    public static propTypes = {changePage: PropTypes.func.isRequired}
}

// StartPage.propTypes = { changePage: PropTypes.func.isRequired };

const mapStateToProps = (state: any) => ({
    backgroundPic: state.state.backgroundPic,
    pageSetting: state.state.gameData.startPage,
});

const mapDispatchToProps = (dispatch: any) => ({
    // changePage: () => dispatch()
});

export default connect<any, any, void>(mapStateToProps, mapDispatchToProps)(StartPage);

// export default StartPage;
