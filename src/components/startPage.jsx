import React, { Component } from 'react';
import './startPage.css'
import BigButton from './bigbutton';

class StartPage extends Component {
    state = {}
    render() {
        return (
            <div id="start-screen" style={{ backgroundImage: 'url(/img/' + this.props.startPageSetting.backgroundPic + ')' }}>
                <div id="inner-screen">
                    <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" />
                    {this.props.startPageSetting.options.map(op =>
                        <BigButton key={op.id} id={op.id} text={op.title} newPage={op.page} clickHandle={this.props.changePage} color={op.id} />
                    )}
                </div>
            </div>
        );
    }
}

export default StartPage;