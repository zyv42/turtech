import React, {Component} from 'react';

class Register extends Component {
    render() {
        return (
            <div className="container">
                <h4 className="card-title mb-4 mt-1">Sign up</h4>
                <div className="alert alert-info"
                     th:if="${emailSent}">
                    An email has been sent to the email address you just registered.
                    Please validate your email address and update your password
                    information.
                </div>
                <form th:action="@{/newUserAction}"
                      th:object="${user}"
                      method="post">
                    <div className="form-group">
                        <label htmlFor="registerUsername">* Username:</label>
                        <p className="text-danger"
                           th:if="${usernameExists}">Username
                            already exists. Choose a different one.</p>
                        <p th:if="${#fields.hasErrors('username')}"
                           className="text-danger"
                           th:errors="*{username}"></p>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user fa-fw" /></span>
                            </div>
                            <input th:field="*{username}"
                                   id="registerUsername"
                                   className="form-control"
                                   placeholder="Username"
                                   type="text"
                                   required="required"
                                   autoFocus="autofocus"
                                   th:classappend="${#fields.hasErrors('username')} ? 'is-invalid'" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">* Email address:</label>
                        <p className="text-danger"
                           th:if="${emailExists}">Email already exists. Choose a different one.</p>
                        <p th:if="${#fields.hasErrors('email')}"
                           className="text-danger"
                           th:errors="*{email}"></p>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="fa fa-envelope fa-fw"></i></span>
                            </div>
                            <input th:field="*{email}"
                                   id="email"
                                   className="form-control"
                                   placeholder="Email"
                                   type="email"
                                   required="required"
                                   th:classappend="${#fields.hasErrors('email')} ? 'is-invalid'" />
                        </div>
                        <small className="form-text text-muted">We'll never share
                            your email with anyone else. At least for free.</small>
                    </div>
                    <div className="form-group">
                        <div id="checkPasswordReg"
                             style="display: none;"
                             className="alert alert-danger">Passwords do not match!
                        </div>
                        <label htmlFor="passwordReg">* Password:</label>
                        <p className="text-danger"
                           th:if="${emptyPassword}">Password cannot be left empty or consisting of
                            whitespaces.</p>
                        <p className="text-danger"
                           th:if="${incorrectPassword}">Password should start with a letter, followed by
                            letters or numbers, 8 through 32 characters long.</p>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-lock fa-fw"></i></span>
                            </div>
                            <input name="password"
                                   id="passwordReg"
                                   className="form-control"
                                   placeholder="******"
                                   type="password"
                                   required="required"
                                   th:classappend="${incorrectPassword} or ${emptyPassword} ? 'is-invalid'" />
                        </div>
                        <small className="text-muted">Password of the user.
                            It should start with a letter followed by alphanumeric or alphabet
                            characters</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPasswordReg">* Confirm password:</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-lock fa-fw" /></span>
                            </div>
                            <input id="confirmPasswordReg"
                                   className="form-control"
                                   placeholder="******"
                                   type="password"
                                   required="required" />
                        </div>
                    </div>
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
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-phone fa-fw"></i></span>
                            </div>
                            <input th:field="*{phone}"
                                   id="phone"
                                   className="form-control"
                                   placeholder="+XX(XXX)XXX-XXXX"
                                   type="tel"
                                   pattern="/^+\d{1,2}(\d{3})\d{3}-\d{4}$/" />
                        </div>
                        <small className="form-text text-muted">Pattern: +XX(XXX)XXX-XXXX</small>
                    </div>
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

export default Register;