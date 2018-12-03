import React, { Component } from 'react';
import './startPage.css'
import BigButton from './bigbutton';

class StartPage extends Component {
    state = {}
    render() {
        return (
            <div id="start-screen">
                <div id="inner-screen">
                    <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" />
                    <BigButton id="start-new-btn" text="شروع" newLevel="chapter-page" clickHandle={this.props.changePage} color="start-new-btn" score="" attr="" />
                    <BigButton id="credits-btn" text="منابع" newLevel="source-page" clickHandle={this.props.changePage} color="credits-btn" score="" attr="" />
                    <BigButton id="about-btn" text="درباره" newLevel="about-page" clickHandle={this.props.changePage} color="about-btn" score="" attr="" />
                </div>
            </div>
        );
    }
}

export default StartPage;