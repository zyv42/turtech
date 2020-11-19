import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { login } from "../../actions/securityActions";
import {withRouter} from "react-router-dom";

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.security.validToken) {
            //this.props.history.push("/user-cabinet");
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.security !== this.props.security ||
            prevProps.errors !== this.props.errors) {
            this.setState({
                errors: this.props.errors
            })
        }

        if (this.props.security.validToken) {
            this.props.history.push("/user-cabinet");
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const LoginRequest = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.login(LoginRequest);
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="container-fluid">
                <h4 className="card-title mb-4 mt-4">Sign in</h4>
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputUsername">Your username:</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-user fa-fw" /></span>
                            </div>
                            <input name="username"
                                   id="inputUsername"
                                   className={classnames("form-control", {
                                       "is-invalid": errors.username
                                   })}
                                   placeholder="Username"
                                   type="text"
                                   required="required"
                                   value={this.state.username}
                                   onChange={this.onChange}
                                   autoFocus />
                        </div>
                        {errors.username && (
                            <div className="invalid-feedback">{errors.username}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Your password:</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock fa-fw" /></span>
                            </div>
                            <input name="password"
                                   id="inputPassword"
                                   className={classnames("form-control", {
                                       "is-invalid": errors.password
                                   })}
                                   placeholder="******"
                                   type="password"
                                   value={this.state.password}
                                   onChange={this.onChange}
                                   required="required" />
                        </div>
                        {errors.password && (
                            <div className="invalid-feedback">{errors.password}</div>
                        )}
                    </div>
                    <div className="checkbox">
                        <label htmlFor="remember-me">
                            <input type="checkbox"
                                   name="remember-me"
                                   id="remember-me"
                                   value="true" /> Remember password
                        </label>
                    </div>
                    <div className="form-group">
                        <input type="submit"
                               className="btn btn-primary btn-block"
                               name="login-submit"
                               id="login-submit"
                               value="Sign in" />
                    </div>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    {login}
)(withRouter(Login));