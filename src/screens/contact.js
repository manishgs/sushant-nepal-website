import React, { Component } from 'react';
import Page from '../components/page';

class Contact extends Component {
    render() {
        return (
            <Page title="Contact" description='__YOURINPUT__'>
                <div className="container">

                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-header fadeInDown animated">
                                <p class="line-one"></p>
                                <h2>Contact</h2>
                                <p class="line-one"></p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <div className="single-contact text-center wow fadeInDown animated" data-wow-delay="0.4s">
                                <i className="fa fa-home"></i>
                                <h2>Location</h2>
                                <p>123, New York, USA</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="single-contact text-center wow fadeInDown animated" data-wow-delay="0.6s">
                                <i className="fa fa-phone"></i>
                                <h2>Phone: </h2>
                                <p>(+1) 123 456 7890</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="single-contact text-center wow fadeInDown animated" data-wow-delay="0.8s">
                                <i className="fa fa-envelope-o"></i>
                                <h2>Email</h2>
                                <p>yourdomain@gmail.com</p>
                            </div>
                        </div>
                    </div>




                    <div className="row contact-form">
                        <div className="col-md-10 col-md-offset-1">
                            <form id="contact-form" method="post" action="contact.php" className="wow fadeInDown animated" data-wow-delay="1.2s" novalidate="true">
                                <div className="messages"></div>
                                <div className="controls">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input id="form_name" type="text" name="name" className="form-control" placeholder="Enter your full name *" required="required" data-error="Fullname is required."/>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input id="form_email" type="email" name="email" className="form-control" placeholder="Enter your email *" required="required" data-error="Valid email is required."/>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea id="form_message" name="message" className="form-control" placeholder="Your Message *" rows="4" required="required" data-error="Leave a message for me"></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-primary" value="">Send message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </Page>
        )
    }
}

export default Contact;