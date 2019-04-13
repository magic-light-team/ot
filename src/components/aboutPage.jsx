import React, { Component } from 'react';
import './aboutPage.css';

class AboutPage extends Component {
    state = {}
    render() {
        return (
            <div id="about-page" style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + "/img/levels/s1-1.jpg" + ')' }}>
                <div class="header-info">
                    <div><img src={process.env.PUBLIC_URL + "/img/mglogo.png"} alt="Magic Light logo" /></div>
                    <h4> تیم توسعه بازی </h4>
                    <p><a href="http://magiclight.ir">سایت استدیو مجیک لایت</a></p>
                    <p> معرفی اعضای تیم مجیک لایت </p>
                </div>
                <div className="body">

                    <div class="team-card">
                        <div class="col">
                            <div class="card">
                                <img class="card-img-top" src={process.env.PUBLIC_URL + "/img/amir.jpg"} alt="Amir Salar Soleymani" />
                                <div class="card-body">
                                    <h3 class="card-title"> امیر سالار سلیمانی </h3>
                                    <p class="card-text"> مدیر تیم و طراح بازی </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="team-card">
                        <div class="col">
                            <div class="card">
                                <img class="card-img-top" src={process.env.PUBLIC_URL + "/img/hosein.jpg"} alt="Hosein Farahani" />
                                <div class="card-body">
                                    <h3 class="card-title"> حسین فراهانی </h3>
                                    <p class="card-text"> برنامه نویس </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="team-card">
                        <div class="col">
                            <div class="card">
                                <img class="card-img-top" src={process.env.PUBLIC_URL + "/img/mohsen.jpg"} alt="Mohsen Shabanian" />
                                <div class="card-body">
                                    <h3 class="card-title"> محسن شعبانیان </h3>
                                    <p class="card-text"> برنامه نویس </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AboutPage;