import React, { Component } from 'react';
import './startPage.css'

class StartPage extends Component {
    state = {}
    render() {
        return (
            <div id="start-screen">
                <div id="inner-screen">
                    <img src="%PUBLIC_URL%/img/logo.png" alt="logo" />
                    <button className="start-btn btn start-new-btn" id="start-new-btn">شروع</button>
                    <button className="start-btn btn credits-btn" id="credits-btn">منابع</button>
                    <button className="start-btn btn about-btn" id="about-btn">درباره</button>
                </div>
            </div>
        );
    }
}

export default StartPage;