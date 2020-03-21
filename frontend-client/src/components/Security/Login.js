import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div className="container">
                <h4 className="card-title mb-4 mt-1">Sign in</h4>
                <div className="alert alert-danger"
                     th:if="${param.error}">Invalid username and password.
                </div>
                <div className="alert alert-danger"
                     th:if="${param.logout}">You have been logged out.
                </div>
                <form action="/loginAction"
                      method="post">
                    <div className="form-group">
                        <label htmlFor="inputUsername">Your username:</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-user fa-fw" /></span>
                            </div>
                            <input name="username"
                                   id="inputUsername"
                                   className="form-control"
                                   placeholder="Username"
                                   type="text"
                                   required="required"
                                   autoFocus="autofocus" />
                        </div>
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
                                   className="form-control"
                                   placeholder="******"
                                   type="password"
                                   required="required" />
                        </div>
                    </div>
                    <div className="checkbox">
                        <label htmlFor="remember-me">
                            <input type="checkbox"
                                   name="remember-me"
                                   id="remember-me"
                                   value="true" />Remember password
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

export default Login;