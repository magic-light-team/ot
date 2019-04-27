import React, { Component } from 'react';
import './sourcePage.css'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changePage } from '../actions/index';

class SourcePage extends Component {
    state = {}
    render() {
        return (
            <div id="sourcePage" style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + "/img/levels/s1-1.jpg" + ')' }}>
                <div className="header-info">
                    <h4> منابع </h4>
                    <p> لیست منابع مورد استفاده در طراحی این بازی </p>
                    <div id="sourcePage-back-btn" onClick={event => this.props.changePage(event, "startPage")}><h1>&gt;&gt;</h1></div>
                </div>
                <div className="body">

                    <div className="team-card">
                        <div className="card">
                            <div className="card-header">
                                ویدئو ها
                            </div>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <a href="https://www.youtube.com/watch?v=QHC0FzywHGY&t=176s">
                                        <img src={ process.env.PUBLIC_URL +  "/img/source/youtube_favicon_96.png" } alt="youtube logo" srcSet=""/>
                                        <h4>What it's like to have a Brother with Autism.</h4>
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="https://www.youtube.com/watch?v=EryEs1gIu4s&t=3s">
                                        <img src={ process.env.PUBLIC_URL +  "/img/source/youtube_favicon_96.png" } alt="youtube logo" srcSet=""/>
                                        <h4>Happy Flappy Brothers (A Brother with Autism)</h4>
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="https://www.youtube.com/watch?v=uumo7MULJLs">
                                        <img src={ process.env.PUBLIC_URL +  "/img/source/youtube_favicon_96.png" } alt="youtube logo" srcSet=""/>
                                        <h4>The Vlog You've Been Waiting For | Brothering Autism Vlogmas 19</h4>
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="https://www.youtube.com/watch?v=wKlMcLTqRLs">
                                        <img src={ process.env.PUBLIC_URL +  "/img/source/youtube_favicon_96.png" } alt="youtube logo" srcSet=""/>
                                        <h4>Autism — what we know (and what we don't know yet) | Wendy Chung</h4>
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="https://www.youtube.com/watch?v=JxpEQY-yiOk&t=2s">
                                        <img src={ process.env.PUBLIC_URL +  "/img/source/youtube_favicon_96.png" } alt="youtube logo" srcSet=""/>
                                        <h4>What is High Functioning Autism?</h4>
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="https://www.youtube.com/watch?v=-olAoobip5A">
                                        <img src={ process.env.PUBLIC_URL +  "/img/source/youtube_favicon_96.png" } alt="youtube logo" srcSet=""/>
                                        <h4>The Signs of Autism</h4>
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="https://www.youtube.com/watch?v=0REuzDICR34">
                                        <img src={ process.env.PUBLIC_URL +  "/img/source/youtube_favicon_96.png" } alt="youtube logo" srcSet=""/>
                                        <h4>Autism Information - What is Autism?</h4>
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="https://www.youtube.com/watch?v=sbNGy2NtsOA">
                                        <img src={ process.env.PUBLIC_URL +  "/img/source/youtube_favicon_96.png" } alt="youtube logo" srcSet=""/>
                                        <h4>"Inside Autism" Educational Dramatic Film</h4>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="card">
                            <div className="card-header">
                                موزیک ها
                            </div>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <a href="https://www.bensound.com">
                                        <img className="mt-5" src={ process.env.PUBLIC_URL +  "/img/source/Bensound_logo.png" } alt="Bensound logo" srcSet=""/>
                                        <h4>Bensound</h4>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

SourcePage.propTypes = { changePage: PropTypes.func.isRequired };
const mapStateToProps = state => ({ pageSetting: state.state.gameData.startPage });
export default connect(mapStateToProps, { changePage })(SourcePage);

// export default SourcePage;