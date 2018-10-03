import React, { Component } from 'react';
import Page from '../components/page';

class About extends Component {
    render() {
        return (
            <Page title="About" description='__YOURINPUT__'>
             <div className="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-header fadeInDown animated">
                                <p class="line-one"></p>
                                <h2>About Me</h2>
                                <p class="line-one"></p>
                            </div>
                        </div>
                    </div>
                    <div className="row about">
                        <div className="col-md-5 col-sm-5 text-right">
                            <img src="https://via.placeholder.com/250x350"/>
                        </div>
                        <div className="col-md-7 col-sm-7">
                            <h2>Sushant Nepal</h2>
                            <h3>Full Stack Developer</h3>
                            <p>I am a WordPress &amp; Front-end Developer, working for the last five years. I have experience working with local clients along with clients from all around the world. I have vast knowledge in html, css, Javascript , JQuery, Angular (javascript framewok), wordpress theme development and so on. </p>
                            <a href="images/about/demo-cv.png" className="btn btn-primary">Download CV &nbsp; &nbsp;<i class="fa fa-download"></i></a>
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}
export default About;