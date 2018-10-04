import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router'
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
        this.unlisten = null;
    }

    componentDidMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            this.setState({ show: false });
        });
    }

    componentWillUnmount() {
        if (this.unlisten) {
            this.unlisten();
        }
    }

    toggle = () => {
        this.setState({ show: !this.state.show });
    }

    render() {
        let iconClassName = this.state.show ? 'fa fa-times' : 'fa fa-bars';
        let navClassName = this.state.show ? 'navbar active' : 'navbar';
        return (
            <div>
                <a className="toggleNav" onClick={this.toggle}><i className={iconClassName} aria-hidden="true"></i></a>

                <div className={navClassName}>
                    <ul>
                        <li><NavLink exact={true} activeClassName="active" to="/">Home</NavLink></li>
                        <li><NavLink exact={true} activeClassName="active" to="/about">About</NavLink></li>
                        <li><NavLink exact={true} activeClassName="active" to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink exact={true} activeClassName="active" to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(Nav);
