import React, { Component } from 'react';
import Page from '../components/page';
import photo from '../assets/images/photo.jpg';

class About extends Component {
    render() {
        return (
            <Page title="About" description='__YOURINPUT__'>
             <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-header fadeInDown animated">
                                <p className="line-one"></p>
                                <h2>About Me</h2>
                                <p className="line-one"></p>
                            </div>
                        </div>
                    </div>
                    <div className="row about">
                        <div className="col-md-5 col-sm-5 text-right">
                            <img alt="" src={photo}/>
                        </div>
                        <div className="col-md-7 col-sm-7">
                            <h2>Sushant Nepal</h2>
                            <h3>Full Stack Developer</h3>
                            <p>I am a WordPress &amp; Front-end Developer, working for the last five years. I have experience working with local clients along with clients from all around the world. I have vast knowledge in html, css, Javascript , JQuery, Angular (javascript framewok), wordpress theme development and so on. </p>
                            <a href="/" className="btn btn-primary">Download Resume &nbsp; &nbsp;<i className="fa fa-download"></i></a>
                        </div>
                    </div>
                    <div className="resume">
                        <img alt="resume" src="https://d.novoresume.com/images/doc/professional-resume-template.png"/>
                    </div>
                </div>
            </Page>
        );
    }
}
export default About;