import React, {Component} from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import logo_bigger from "../../assets/images/logo_bigger.png";
import {Dropdown, Button, ButtonGroup} from "react-bootstrap";
import Logout from "../Security/Logout";

class Header extends Component {

    state = {
        links: [
            {
                id: 1,
                name: "HOME",
                to: "/welcome",
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

    logout() {
        this.props.logout();
        window.location.href = "/welcome";
    }

    render() {
        const { links, activeLink } = this.state;
        const { validToken, user } = this.props.security;
        const userIsAuthenticated = (
            <Dropdown as={ButtonGroup}
                      className="ml-2">
                <Link to="/MyAccount">
                    <Button variant="primary"
                            size="sm">
                        <i className="fa fa-user-circle fa-fw" /> Welcome, {user.username}!
                    </Button>
                </Link>

                <Dropdown.Toggle split variant="primary"
                                 id="dropdown-split-basic"
                                 size="sm" />
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Link to="/myAccount"><i className="fa fa-address-card-o fa-fw"/> My Account</Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        <Link to="/logout"
                              onClick={() => this.show = true}>
                            <i className="fa fa-sign-out"/> Sign out</Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );

        const userIsNotAuthenticated = (
            <Dropdown as={ButtonGroup}
                      className="ml-2">
                <Link to="/MyAccount">
                    <Button variant="primary"
                            size="sm">
                        <i className="fa fa-user-circle fa-fw" /> Welcome, guest!
                    </Button>
                </Link>

                <Dropdown.Toggle split variant="primary"
                                 id="dropdown-split-basic"
                                 size="sm" />
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Link to="/login"><i className="fa fa-sign-in fa-fw" /> Sign in</Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        <Link to="/register"><i className="fa fa-user-plus fa-fw"/> Create new user</Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
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
                          to="/welcome"
                          onClick={() => this.changeActiveLink(1)}>
                        <img className="img-responsive"
                             src={logo_bigger}
                             height="50"
                             width="150"
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
                              to="/cart">
                            <i className="fa fa-shopping-cart fa-fw" /> Cart
                        </Link>
                        {
                            // User Account
                        }
                        {userLinks}
                    </div>
                </div>

                {
                    // Logout Modal
                }
                <Logout show={false}
                        onHide={() => this.show = false} />
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