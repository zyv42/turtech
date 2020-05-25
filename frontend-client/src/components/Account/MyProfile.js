import React, {Component} from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import  classnames from "classnames";

class MyProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: "",
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            newPassword: "",
            errors: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
        const {
            id,
            username,
            firstName,
            lastName,
            email,
            phone,
            newPassword
        } = nextProps.userProfile;

        this.setState({
            id,
            username,
            firstName,
            lastName,
            email,
            phone,
            newPassword
        });
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getUserProfile(id, this.props.history);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const updatedUserProfile = {
            id: this.state.id,
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            newPassword: this.state.newPassword
        };

        this.props.updateUserProfile(updatedUserProfile, this.props.history);
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Your Profile</h4>
                            <div className="alert alert-danger"
                                 th:if="${incorrectPassword}">
                                <strong>Incorrect Password!</strong> Please enter the correct
                                password for the current user.
                            </div>
                            <div className="alert alert-success" th:if="${updateSuccess}">
                                <strong>Update Success!</strong>
                            </div>
                            <div className="alert alert-info" th:if="${updateUserInfo}">User
                                info updated.
                            </div>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <form th:action="@{/updateUserInfo}"
                                  th:object="${user}"
                                  method="post">
                                <input type="hidden"
                                       th:field="*{id}"
                                       th:value="${user.id}"/>

                                {
                                    // Username
                                }
                                <div className="form-group row">
                                    <label htmlFor="username"
                                           className="col-4 col-form-label">Username:</label>
                                    <p th:if="${usernameExists}"
                                       className="text-danger">Username already exists. Choose a different one.</p>
                                    <p th:if="${#fields.hasErrors('username')}"
                                       className="text-danger"
                                       th:errors="*{username}"/>
                                    <div className="col-8">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
												<span className="input-group-text">
													<i className="fa fa-user fa-fw"/></span>
                                            </div>
                                            <input id="username"
                                                   th:field="*{username}"
                                                   className="form-control here"
                                                   required="required"
                                                   type="text"
                                                   th:value="${user.username}"
                                                   th:classappend="${#fields.hasErrors('username')} ? 'is-invalid'"/>
                                        </div>
                                    </div>
                                </div>

                                {
                                    // First name
                                }
                                <div className="form-group row">
                                    <label htmlFor="firstName"
                                           className="col-4 col-form-label">First
                                        Name:</label>
                                    <p th:if="${#fields.hasErrors('firstName')}"
                                       className="text-danger"
                                       th:errors="*{firstName}"/>
                                    <div className="col-8">
                                        <input id="firstName"
                                               th:field="*{firstName}"
                                               className="form-control here"
                                               type="text"
                                               th:value="${user.firstName}"
                                               th:classappend="${#fields.hasErrors('firstName')} ? 'is-invalid'"/>
                                    </div>
                                </div>

                                {
                                    // Last name
                                }
                                <div className="form-group row">
                                    <label htmlFor="lastName"
                                           className="col-4 col-form-label">Last
                                        Name:</label>
                                    <p th:if="${#fields.hasErrors('lastName')}"
                                       className="text-danger"
                                       th:errors="*{lastName}"/>
                                    <div className="col-8">
                                        <input id="lastName"
                                               th:field="*{lastName}"
                                               className="form-control here"
                                               type="text"
                                               th:value="${user.lastName}"
                                               th:classappend="${#fields.hasErrors('lastName')} ? 'is-invalid'"/>
                                    </div>
                                </div>

                                {
                                    // Email
                                }
                                <div className="form-group row">
                                    <label htmlFor="email"
                                           className="col-4 col-form-label">Email
                                        address:</label>
                                    <p className="text-danger"
                                       th:if="${emailExists}">Email already exists. Choose a different one.</p>
                                    <p th:if="${#fields.hasErrors('email')}"
                                       className="text-danger"
                                       th:errors="*{email}"/>
                                    <div className="col-8">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
												<span className="input-group-text"><i
                                                    className="fa fa-envelope fa-fw"/></span>
                                            </div>
                                            <input id="email"
                                                   th:field="*{email}"
                                                   className="form-control here"
                                                   required="required"
                                                   type="email"
                                                   th:value="${user.email}"
                                                   th:classappend="${#fields.hasErrors('email')} ? 'is-invalid'"/>
                                        </div>
                                        <small className="form-text text-muted">A valid email address. All
                                            emails from the system will be sent to this address. The
                                            email address is not made public and will only be used if
                                            you wish to receive a new password or wish to receive
                                            certain notifications.</small>
                                    </div>
                                </div>

                                {
                                    // Phone
                                }
                                <div className="form-group row">
                                    <label htmlFor="phone"
                                           className="col-4 col-form-label">Phone
                                        number:</label>
                                    <div className="col-8">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
												<span className="input-group-text"><i
                                                    className="fa fa-phone fa-fw"/></span>
                                            </div>
                                            <input id="phone"
                                                   th:field="*{phone}"
                                                   className="form-control here"
                                                   type="tel"
                                                   pattern="\\+380|0)[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                                                   th:value="${user.phone}"/>
                                        </div>
                                        <small className="form-text text-muted">Pattern:
                                            (+380|0)XX-XXX-XX-XX</small>
                                    </div>
                                </div>

                                {
                                    // New password
                                }
                                <div id="checkPasswordEdit"
                                     style="display: none;"
                                     className="alert alert-danger">Passwords do not match!
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="newPasswordEdit"
                                           className="col-4 col-form-label">New
                                        Password:</label>
                                    <p className="text-danger"
                                       th:if="${incorrectPattern}">Password should start with a letter, followed by
                                        letters or numbers, 8 through 32 characters long.</p>
                                    <p className="text-danger"
                                       th:if="${samePassword}">In order to update the password, you should provide a
                                        different one, not the same one.</p>
                                    <div className="col-8">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
												<span className="input-group-text"><i
                                                    className="fa fa-lock fa-fw"/></span>
                                            </div>
                                            <input id="newPasswordEdit"
                                                   name="newPassword"
                                                   placeholder="New Password"
                                                   className="form-control here"
                                                   type="password"
                                                   th:classappend="${incorrectPattern} or ${samePassword} ? 'is-invalid'"/>
                                        </div>
                                    </div>
                                </div>

                                {
                                    // Password confirmation
                                }
                                <div className="form-group row">
                                    <label htmlFor="confirmPasswordEdit"
                                           className="col-4 col-form-label">Confirm
                                        New Password:</label>
                                    <div className="col-8">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
												<span className="input-group-text"><i
                                                    className="fa fa-lock fa-fw"/></span>
                                            </div>
                                            <input id="confirmPasswordEdit"
                                                   placeholder="Confirm New Password"
                                                   className="form-control"
                                                   type="password"/>
                                        </div>
                                    </div>
                                </div>

                                {
                                    // Current password to authorize
                                }
                                <div className="form-group row">
                                    <label htmlFor="currentPassword"
                                           className="col-4 col-form-label">Current
                                        Password:</label>
                                    <p className="text-danger"
                                       th:if="${incorrectPassword}">In order to update the password,
                                        you should provide a different one, not the same one.</p>
                                    <div className="col-8">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
												<span className="input-group-text"><i
                                                    className="fa fa-unlock-alt fa-fw"/></span>
                                            </div>
                                            <input id="currentPassword"
                                                   th:field="*{password}"
                                                   placeholder="Current Password"
                                                   className="form-control"
                                                   type="password"
                                                   th:classappend="${incorrectPassword} ? 'is-invalid'"/>
                                        </div>
                                        <small className="form-text text-muted">Enter your current password to
                                            change password for the account.</small>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="offset-4 col-8">
                                        <button name="submit"
                                                type="submit"
                                                className="btn btn-primary">
                                            Update My Profile
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

MyProfile.propTypes = {
    getUserProfile: PropTypes.func.isRequired,
    updateUserProfile: propTypes.func.isRequired,
    userProfile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    userProfile: state.userProfile,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { getUserProfile, updateUserProfile}
)(MyProfile);