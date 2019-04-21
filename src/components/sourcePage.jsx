import React, { Component } from 'react';
import './sourcePage.css'

class SourcePage extends Component {
    state = {}
    render() {
        return (
            <div id="source-page" style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + "/img/levels/s1-1.jpg" + ')' }}>
                <div class="header-info">
                    <h4> منابع </h4>
                    <p> لیست منابع مورد استفاده در طراحی این بازی </p>
                    <div id="source-page-back-btn"><h1>&gt;&gt;</h1><div></div></div>
                </div>
            </div>
        );
    }
}

export default SourcePage;