import React, { Component } from 'react';
import Page from '../components/page';
import Title from '../components//layouts/title';
import project1 from '../assets/images/project01.jpg';
import project2 from '../assets/images/project02.jpg';
import project3 from '../assets/images/project03.jpg';
import project4 from '../assets/images/project04.jpg';
import project5 from '../assets/images/project05.jpg';
import project6 from '../assets/images/project06.jpg';

class Project extends Component {
    render() {
        return (
            <Page title="Project" description='__YOURINPUT__'>
                <div className="container">
                    <Title>Portfolio</Title>
                    <div className="portfolio-items">
                        <div className="row">
                            <div className="six columns pad">
                                <a href="#test-popup" data-effect="mfp-zoom-out">
                                    <div className="hovereffect">
                                        <img src={project1} alt="" className="img-responsive" />
                                        <div className="overlay">
                                            <h2>Project One</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores, velit. Accusantium mollitia obcaecati quos.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="six columns pad">
                                <a href="#test-popup-2" data-effect="mfp-zoom-out">
                                    <div className="hovereffect">
                                        <img src={project2} alt="" className="img-responsive" />
                                        <div className="overlay">
                                            <h2>Project Two</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores, velit. Accusantium mollitia obcaecati quos.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="six columns pad">
                                <a href="#test-popup-3" data-effect="mfp-zoom-out">
                                    <div className="hovereffect">
                                        <img src={project3} alt="" className="img-responsive" />
                                        <div className="overlay">
                                            <h2>Project Three</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores, velit. Accusantium mollitia obcaecati quos.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="six columns pad">
                                <a href="#test-popup-4" data-effect="mfp-zoom-out">
                                    <div className="hovereffect">

                                        <img src={project4} alt="" className="img-responsive" />
                                        <div className="overlay">
                                            <h2>Project Four</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores, velit. Accusantium mollitia obcaecati quos.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="six columns pad">
                                <a href="#test-popup-5" data-effect="mfp-zoom-out">
                                    <div className="hovereffect">
                                        <img src={project5} alt="" className="img-responsive" />
                                        <div className="overlay">
                                            <h2>Project Five</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores, velit. Accusantium mollitia obcaecati quos.</p>
                                        </div>

                                    </div>
                                </a>
                            </div>
                            <div className="six columns pad">
                                <a href="#test-popup-6" data-effect="mfp-zoom-out">
                                    <div className="hovereffect">
                                        <img src={project6} alt="" className="img-responsive" />
                                        <div className="overlay">
                                            <h2>Project Six</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores, velit. Accusantium mollitia obcaecati quos.</p>
                                        </div>

                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}
export default Project;