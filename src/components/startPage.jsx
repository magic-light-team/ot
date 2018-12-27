import React, { Component } from 'react';
import './startPage.css'
import BigButton from './bigbutton';
import { connect } from 'react-redux';

class StartPage extends Component {
    state = {}
    render() {
        return (
            <div id="start-screen" style={{ backgroundImage: 'url(/img/' + this.props.pageSetting.backgroundPic + ')' }}>
                <div id="inner-screen">
                    <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" />
                    {this.props.pageSetting.options.map(op =>
                        // <BigButton key={op.id} id={op.id} text={op.title} arg={op.page} clickHandle={this.props.changePage} color={op.id} />
                        <BigButton key={op.id} id={op.id} text={op.title} arg={op.page} color={op.id} />
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ pageSetting :state.state.gameData.startPage });
export default connect(mapStateToProps)(StartPage);

// export default StartPage;