import React, {Component} from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Header extends Component {

    state = {
        links: [
            {
                id: 1,
                name: "HOME",
                to: "/",
                className: "nav-link"
            },
            {
                id: 2,
                name: "PRODUCTS",
                to: "/products",
                className: "nav-link"
            },
            {
                id: 3,
                name: "CONTACT",
                to: "/contact",
                className: "nav-link"
            },
            {
                id: 4,
                name: "FAQ",
                to: "/faq",
                className: "nav-link"
            },
            {
                id: 5,
                name: "ABOUT",
                to: "/about",
                className: "nav-link"
            }
        ],
        activeLink: 1
    };

    changeActiveLink = id => {
        this.setState({ activeLink: id })
    };

    onSubmit(e) {
        e.preventDefault();
        // TODO Search function
    }

    render() {
        const { links, activeLink } = this.state;
        const { validToken, user } = this.props.security;
        const userIsAuthenticated = (
            <div className="btn-group open ml-2">
                <Link className="btn btn-primary btn-sm"
                      to="/myAccount">
                    <i className="fa fa-user-circle fa-fw" /> Welcome, {user.username}!</Link>
                <Link className="btn btn-primary btn-sm dropdown-toggle"
                      data-toggle="dropdown" to="#">
                </Link>
                <ul className="dropdown-menu">
                    <li className="dropdown-item">
                        <Link to="/myAccount"><i className="fa fa-address-card-o fa-fw"/> My Account</Link>
                    </li>
                    <li className="dropdown-divider" />
                    <li className="dropdown-item">
                        <Link to="/logout"
                              data-toggle="modal"
                              data-target="#logout">
                            <i className="fa fa-sign-out"/> Sign out</Link>
                    </li>
                </ul>
            </div>
        );

        const userIsNotAuthenticated = (
            <div className="btn-group open ml-2">
                <Link className="btn btn-primary btn-sm"
                      to="/myAccount">
                    <i className="fa fa-user-circle fa-fw" /> Welcome, guest!</Link>
                <Link className="btn btn-primary btn-sm dropdown-toggle"
                      data-toggle="dropdown" to="#">
                </Link>
                <ul className="dropdown-menu">
                    <li className="dropdown-item">
                        <Link to="/login"><i className="fa fa-sign-in fa-fw" /> Sign in</Link>
                    </li>
                    <li className="dropdown-divider" />
                    <li className="dropdown-item">
                        <Link to="/register"><i className="fa fa-user-plus fa-fw"/> Create new user</Link>
                    </li>
                </ul>
            </div>
        );

        let userLinks;
        if (validToken && user) {
            userLinks = userIsAuthenticated;
        } else {
            userLinks = userIsNotAuthenticated;
        }

        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand"
                          to="/">
                        <img className="img-responsive"
                             src="/public/images/logo_bigger.png"
                             height="50" width="150"
                             alt="logo" /></Link>
                    <button className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbar"
                            aria-controls="navbar"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <i className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbar">
                        {links.map(link => {
                            return (
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link key={link.id}
                                              onClick={() => this.changeActiveLink(link.id)}
                                              className={
                                                  link.className +
                                                  (link.id === activeLink ? " active" : "")}
                                              to={link.to}>{link.name}</Link></li>
                                </ul>
                            );
                        })}

                        {
                            // Navbar Search
                        }
                        <form className="form-inline ml-2 my-2"
                              onSubmit={this.onSubmit}>
                            <div className="input-group input-group-sm">
                                <input type="text"
                                       name="keyword"
                                       className="form-control"
                                       aria-label="Search"
                                       aria-describedby="inputGroup-sizing-sm"
                                       placeholder="Search for..." />
                                <div className="input-group-append">
                                    <button type="submit"
                                            className="btn btn-secondary btn-number">
                                        <i className="fa fa-search"/>
                                    </button>
                                </div>
                            </div>
                        </form>
                        {
                            // Shopping Cart
                        }
                        <Link className="btn btn-success btn-sm ml-2"
                              to="/shoppingCart/cart">
                            <i className="fa fa-shopping-cart fa-fw" /> Cart
                        </Link>
                        {
                            // User Account
                        }
                        {userLinks}
                    </div>
                </div>
            </nav>
        );
    }
}

Header.propTypes = {
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(
    mapStateToProps
)(Header);