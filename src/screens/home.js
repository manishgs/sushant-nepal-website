import React, { Component } from 'react';
import Page from '../components/page';
import Bubble from '../components/bubble';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <Page title="Home Page" description='__YOURINPUT__'>
                <div className="container banner">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Welcome to My Website</h3>
                            <h2>My name is Royden</h2>
                            <h3 className="last">& I am a</h3>
                            <Link to="/project" className="btn btn-primary">View Projects</Link>
                        </div>
                        <div className="col-md-6">
                            <Bubble data={[
                                {
                                    skill: 'PHP',
                                    percentage: 60
                                },
                                {
                                    skill: 'Nodejs',
                                    percentage: 50
                                },
                                {
                                    skill: 'Laravel',
                                    percentage: 70
                                },
                                {
                                    skill: 'Mysql',
                                    percentage: 30
                                }, {
                                    skill: 'Mongodb',
                                    percentage: 30
                                }

                            ]} />
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}
export default Home;