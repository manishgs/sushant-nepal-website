import React, { Component } from 'react';
import Page from '../components/page';
import Bubble from '../components/bubble';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../assets/js/animatedheadline';

const skillSet = [
    { skill: "html", percentage: 80 },
    { skill: "css", percentage: 50 },
    { skill: "scss", percentage: 80 },
    { skill: "redux", percentage: 80 },
    { skill: "scss", percentage: 60 },
    { skill: "mongobd", percentage: 60 },
    { skill: "expressjs", percentage: 70 },
    { skill: "nodejs", percentage: 40 },
    { skill: "reactjs", percentage: 90 },
    { skill: "adobe", percentage: 70 },
    { skill: "photoshop", percentage: 80 },
    { skill: "mocha", percentage: 60 },
    { skill: "chai", percentage: 80 },
    { skill: "vanillajs", percentage: 80 },
    { skill: "git", percentage: 50 },
    { skill: "ajax", percentage: 70 },
]
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { hightlight: null };
    }

    componentDidMount() {
        $('.animate-scale').animatedHeadline({
            animationType: 'clip'
        });
    }

    render() {
        const { hightlight } = this.state;
        return (
            <Page title="Home Page" description='__YOURINPUT__'>
                <div className="container">
                    <div className="row banner">
                        <div className="seven columns animate-scale no-pad">
                            <h3>Welcome to My Website</h3>
                            <h1>My name is <br />Sushant Nepal</h1>
                            <h2 className="ah-headline">
                                <span className="iam">& I am a </span>
                                <span className="ah-words-wrapper">
                                    <b className="is-visible">Web Designer</b>
                                    <b>Photographer</b>
                                    <b>Web Developer</b>
                                </span>
                            </h2>
                            <Link to="/portfolio" className="btn-primary">View Portfolio</Link>
                        </div>
                        <div className="five columns no-pad">
                            <Bubble hightlight={hightlight} data={skillSet} />
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}
export default Home;