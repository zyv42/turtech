import React, {Component, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import logo_bigger from "../../assets/images/logo_bigger.png";
import {Dropdown, Button, ButtonGroup, Modal} from "react-bootstrap";
import {getProducts} from "../../actions/productActions";
import {withRouter} from "react-router-dom";
import {logout} from "../../actions/securityActions";
import Logout from "../Security/Logout";

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchQuery: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const searchQuery = this.state.searchQuery;
        this.props.getProducts(null, searchQuery, 1, 10);
        this.props.history.push({
            pathname: "/products",
            state: {searchQuery: searchQuery}
        });
    }

    render() {
        const { validToken, userInfo } = this.props.security;

        const userIsAuthenticated = (
            <Dropdown as={ButtonGroup}
                      className="ml-2">
                <Link to="/user-cabinet">
                    <Button variant="primary"
                            size="sm">
                        <i className="fa fa-user-circle fa-fw" /> Welcome, {userInfo && userInfo.preferred_username}!
                    </Button>
                </Link>

                <Dropdown.Toggle split variant="primary"
                                 id="dropdown-split-basic"
                                 size="sm" />
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Link to="/user-cabinet"><i className="fa fa-address-card-o fa-fw"/> My Account</Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Logout onConfirm={logout()}/>
                </Dropdown.Menu>
            </Dropdown>
        );

        const userIsNotAuthenticated = (
            <Dropdown as={ButtonGroup}
                      className="ml-2">
                <Link to="/user-cabinet">
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
        if (validToken && userInfo) {
            userLinks = userIsAuthenticated;
        } else {
            userLinks = userIsNotAuthenticated;
        }

        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand"
                          to="/welcome">
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
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    to="/welcome"
                                    className="nav-link">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/products"
                                    className="nav-link">PRODUCTS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/contact"
                                    className="nav-link">CONTACT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/faq"
                                    className="nav-link">FAQ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/about"
                                    className="nav-link">ABOUT</NavLink>
                            </li>
                        </ul>

                        {
                            // Navbar Search
                        }
                        <form className="form-inline ml-2 my-2"
                              onSubmit={this.onSubmit}>
                            <div className="input-group input-group-sm">
                                <input type="text"
                                       name="searchQuery"
                                       className="form-control"
                                       aria-label="Search"
                                       aria-describedby="inputGroup-sizing-sm"
                                       placeholder="Search for..."
                                       value={this.state.searchQuery}
                                       onChange={this.onChange} />
                                <div className="input-group-append">
                                    <button type="submit"
                                           className="btn btn-secondary btn-number">
                                        <i className="fa fa-search fa-fw"/>
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
            </nav>
        );
    }
}

Header.propTypes = {
    security: PropTypes.object.isRequired,
    getProducts: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(
    mapStateToProps,
    { getProducts, logout }
)(withRouter(Header));