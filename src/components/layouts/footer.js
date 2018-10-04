import React from 'react';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="row">
                <div className="six columns">
                    <div className="copyright">
                        <p>© Copyright 2018, <a href="/">Sushant Nepal</a></p>
                    </div>
                </div>
                <div className="six columns">
                    <div className="social-media">
                        <ul>
                            <li><a href="/"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                            <li><a href="/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="/"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;