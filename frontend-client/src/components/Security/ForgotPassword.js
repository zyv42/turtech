import React, {Component} from 'react';

class ForgotPassword extends Component {
    render() {
        return (
            <div>
                <h4 className="card-title mb-4 mt-1">Forgot password?</h4>
                <div th:if="${emailNotExist}"
                     className="alert alert-danger">Email doesn't exist.
                </div>
                <div th:if="${forgotPasswordEmailSent}"
                     className="alert alert-success">Email with a recovery password is sent.
                </div>
                <form th:action="@{/forgotPassword}"
                      method="post">
                    <div className="form-group">
                        <label htmlFor="recoverEmail">Your Email: </label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-envelope fa-fw" /></span>
                            </div>
                            <input required="required"
                                   type="email"
                                   className="form-control"
                                   id="recoverEmail"
                                   autoFocus="autofocus"
                                   name="email"
                                   placeholder="Your Email"/>
                        </div>
                        <small className="form-text text-muted">Submit the email
                            with which you've registered.</small>
                    </div>
                    <div className="form-group">
                        <input type="submit"
                               className="btn btn-primary btn-block"
                               value="Submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default ForgotPassword;