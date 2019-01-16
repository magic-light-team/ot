import React, { Component } from 'react';
import './startPage.css'
import BigButton from './bigbutton';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changePage } from '../actions/index';

//import Transition from 'react-transition-group/Transition';

class StartPage extends Component {
    state = {}
    render() {
        return (
            
                <div id="start-screen" style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + this.props.pageSetting.backgroundPic + ')' }}>
                    <div id="inner-screen">
                        <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" />
                        {this.props.pageSetting.options.map(op =>
                            <BigButton key={op.id} id={op.id} text={op.title} arg={op.page} clickHandle={this.props.changePage} color={op.id} />
                            // <BigButton key={op.id} id={op.id} text={op.title} arg={op.page} color={op.id} />
                        )}
                    </div>
                </div>
            
        );
    }
}

StartPage.propTypes = { changePage: PropTypes.func.isRequired };
const mapStateToProps = state => ({ pageSetting: state.state.gameData.startPage });
export default connect(mapStateToProps, { changePage })(StartPage);

// export default StartPage;
