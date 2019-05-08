import React, { Component } from 'react';
import './aboutPage.css';

import { connect } from 'react-redux';
import { changePage } from '../../actions/actions';
import { IState } from '../../reducers/initialState';
import { appPage } from '../../info/data.interfaces';

import PageHeader from '../tools/pageHeader';

export interface Props { //StateFromProps
    pageSetting: appPage,
    changePage: Function;
}

class AboutPage extends Component<Props> {
    state = {}
    render() {
        return (
            <div id="aboutPage" style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + this.props.pageSetting.backgroundPic + ')' }}>

                <PageHeader page={true} subTitle={"درباره تیم توسعه بازی"} />

                {/* <div className="header-info">
                    <div><img src={process.env.PUBLIC_URL + "/img/about/mglogo.png"} alt="Magic Light logo" /></div>
                    <h4> تیم توسعه بازی </h4>
                    <p><a href="http://magiclight.ir">سایت استدیو مجیک لایت</a></p>
                    <p> معرفی اعضای تیم مجیک لایت </p>
                    <div id="aboutPage-back-btn" onClick={event => this.props.changePage(event,"startPage") }><h1>&gt;&gt;</h1></div>
                </div> */}
                <div className="body">

                    <div className="team-card">
                        <div className="col">
                            <div id="info-cart">
                                <div className="img-div">
                                    <img src={process.env.PUBLIC_URL + "/img/about/mglogo.png"} alt="Magic Light logo" />
                                </div>
                                <div className="desc-div">
                                    <h3>استدیو مجیک لایت</h3>
                                    <a href="http://magiclight.ir">سایت استدیو مجیک لایت</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="col">
                            <div className="card">
                                <img className="card-img-top" src={process.env.PUBLIC_URL + "/img/about/amir.jpg"} alt="Amir Salar Soleymani" />
                                <div className="card-body">
                                    <h3 className="card-title"> امیر سالار سلیمانی </h3>
                                    <p className="card-text"> مدیر تیم و طراح بازی </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="col">
                            <div className="card">
                                <img className="card-img-top" src={process.env.PUBLIC_URL + "/img/about/hosein.jpg"} alt="Hosein Farahani" />
                                <div className="card-body">
                                    <h3 className="card-title"> حسین فراهانی </h3>
                                    <p className="card-text"> برنامه نویس </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="col">
                            <div className="card">
                                <img className="card-img-top" src={process.env.PUBLIC_URL + "/img/about/mohsen.jpg"} alt="Mohsen Shabanian" />
                                <div className="card-body">
                                    <h3 className="card-title"> محسن شعبانیان </h3>
                                    <p className="card-text"> برنامه نویس </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (allState: { gameState: IState }) => ({
    pageSetting: allState.gameState.pageSetting,
});

const mapDispatchToProps = ({
    changePage: changePage
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);

// export default AboutPage;