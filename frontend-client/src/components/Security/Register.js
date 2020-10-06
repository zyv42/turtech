import React, {Component} from "react";
import { createNewUser } from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import {withRouter} from "react-router-dom";

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/products");
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            //lower four are temporary values just for debugging purposes
            email: "email@gmail.com",
            firstName: "firstName",
            lastName: "lastName",
            phone: 123456789
        };

        this.props.createNewUser(newUser, this.props.history);
        this.props.history.push("/login");
    }

    onChange(e) {
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="container-fluid">
                <h4 className="card-title mb-4 mt-4">Register</h4>
                {/*
                    <div className="alert alert-info"
                         th:if="${emailSent}">
                        An email has been sent to the email address you just registered.
                        Please validate your email address and update your password
                        information.
                    </div>*/
                }
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">* Username:</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user fa-fw" /></span>
                            </div>
                            <input name="username"
                                   value={this.state.username}
                                   onChange={this.onChange}
                                   id="username"
                                   className={classnames("form-control", {
                                       "is-invalid": errors.username
                                   })}
                                   placeholder="Username"
                                   type="text"
                                   required="required"
                                   autoFocus="autofocus" />
                        </div>
                        {errors.username && (
                            <div className="invalid-feedback">errors.username</div>
                        )}
                    </div>
                    {/*
                    <div className="form-group">
                        <label htmlFor="email">* Email address:</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-envelope fa-fw" /></span>
                            </div>
                            <input value={this.state.email}
                                   onChange={this.onChange}
                                   id="email"
                                   className={classnames("form-control", {
                                       "is-invalid": errors.email
                                   })}
                                   placeholder="Email"
                                   type="email"
                                   required="required" />
                        </div>
                        {errors.email && (
                            <div className="invalid-feedback">errors.username</div>
                        )}
                        <small className="form-text text-muted">We'll never share
                            your email with anyone else. At least for free.</small>
                    </div>*/
                    }
                    <div className="form-group">
                        <label htmlFor="passwordReg">* Password:</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock fa-fw" /></span>
                            </div>
                            <input name="password"
                                   value={this.state.password}
                                   onChange={this.onChange}
                                   id="passwordReg"
                                   className={classnames("form-control", {
                                       "is-invalid": errors.password
                                   })}
                                   placeholder="******"
                                   type="password"
                                   required="required" />
                        </div>
                        {errors.password && (
                            <div className="invalid-feedback">errors.password</div>
                        )}
                        <small className="text-muted">Password of the user.
                            It should start with a letter followed by alphanumeric or alphabet
                            characters</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPasswordReg">* Confirm password:</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock fa-fw" /></span>
                            </div>
                            <input id="confirmPassword"
                                   name="confirmPassword"
                                   value={this.state.confirmPassword}
                                   onChange={this.onChange}
                                   className={classnames("form-control", {
                                       "is-invalid": errors.confirmPassword
                                   })}
                                   placeholder="******"
                                   type="password"
                                   required="required" />
                        </div>
                        {errors.confirmPassword && (
                            <div className="invalid-feedback">errors.confirmPassword</div>
                        )}
                    </div>
                    {/*
                    <div className="form-row">
                        <div className="col form-group">
                            <label htmlFor="firstName">First name:</label>
                            <p th:if="${#fields.hasErrors('firstName')}"
                               className="text-danger"
                               th:errors="*{firstName}"></p>
                            <input id="firstName"
                                   th:field="*{firstName}"
                                   placeholder="First name"
                                   type="text"
                                   className="form-control"
                                   th:classappend="${#fields.hasErrors('firstName')} ? 'is-invalid'" />
                        </div>
                        <div className="col form-group">
                            <label htmlFor="lastName">Last name:</label>
                            <p th:if="${#fields.hasErrors('lastName')}"
                               className="text-danger"
                               th:errors="*{lastName}"></p>
                            <input id="lastName"
                                   th:field="*{lastName}"
                                   placeholder="Last name"
                                   type="text"
                                   className="form-control"
                                   th:classappend="${#fields.hasErrors('lastName')} ? 'is-invalid'" />
                        </div>
                    </div>
                    }
                    {/*
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-phone fa-fw"/></span>
                                </div>
                                <input value={this.state.phone}
                                       id="phone"
                                       className="form-control"
                                       placeholder="+XX(XXX)XXX-XXXX"
                                       type="tel"
                                       pattern="/^+\d{1,2}(\d{3})\d{3}-\d{4}$/"/>
                            </div>
                            <small className="form-text text-muted">Pattern: +XX(XXX)XXX-XXXX</small>
                        </div>*/
                    }
                    <div className="form-group">
                        <input type="submit"
                               className="btn btn-primary btn-block"
                               name="login-submit"
                               id="register-submit"
                               value="Create new account"/>
                    </div>
                    <small className="text-muted">By clicking the 'Create new account' button,
                        you confirm that you accept our Terms of use and Privacy Policy.
                    </small>
                </form>
            </div>
        );
    }
}

Register.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors,
    security: state.security
});

export default connect(
    mapStateToProps,
    { createNewUser }
)(withRouter(Register));