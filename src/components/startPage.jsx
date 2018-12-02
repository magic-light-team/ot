import React, { Component } from 'react';
import './startPage.css'
import BigButton from './bigbutton';

class StartPage extends Component {
    state = {}
    render() {
        return (
            <div id="start-screen">
                <div id="inner-screen">
                    <img src={ process.env.PUBLIC_URL + "/img/logo.png" } alt="logo" />
                    <BigButton id="start-new-btn" text="شروع" color="start-new-btn" score="" attr="232" />
                    <BigButton id="credits-btn" text="منابع" color="credits-btn" score="" attr="232" />
                    <BigButton id="about-btn" text="درباره" color="about-btn" score="" attr="232" />
                </div>
            </div>
        );
    }
}

export default StartPage;