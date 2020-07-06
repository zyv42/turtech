import React, {Component} from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import  classnames from "classnames";
import {getUserProfile, updateUserProfile} from "../../actions/userProfileActions";

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
            errors: "",
            infoUpdated: false
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
        this.setState({infoUpdated: false})
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

        this.props.updateUserProfile(updatedUserProfile);
    }

    render() {
        const { errors } = this.state;
        const { infoUpdated } = this.state.infoUpdated;

        let infoUpdatedDisplay;

        const infoUpdatedAlgorithm = infoUpdated => {
            if (infoUpdated) {
                return (
                    <div className="alert alert-info">User info updated.</div>
                )
            }
        };

        infoUpdatedDisplay = infoUpdatedAlgorithm(infoUpdated);

        return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Your Profile</h4>
                            {errors.incorrectPassword && (
                                <div className="alert alert-danger"><strong>Incorrect Password!</strong>
                                    Please enter a correct password for the current user.</div>
                            )}
                            { infoUpdatedDisplay }
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={this.onSubmit}>
                                <input type="hidden"
                                       name="id"
                                       value={this.state.id} />

                                {
                                    // Username
                                }
                                <div className="form-group row">
                                    <label htmlFor="username"
                                           className="col-4 col-form-label">Username:</label>
                                    {errors.usernameExists && (
                                        <p className="text-danger">Username already exists. Choose a different one</p>
                                    )}
                                    {errors.username && (
                                        <p className="text-danger">{errors.username}</p>
                                    )}
                                    <div className="col-8">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
												<span className="input-group-text">
													<i className="fa fa-user fa-fw"/></span>
                                            </div>
                                            <input id="username"
                                                   name="username"
                                                   required="required"
                                                   type="text"
                                                   value={this.state.username}
                                                   onChange={this.onChange}
                                                   className={classnames("form-control form-control-lg", {
                                                       "is-invalid": errors.username
                                                   })} />
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
                                    {errors.firstName && (
                                        <p className="text-danger">{errors.firstName}</p>
                                    )}
                                    <div className="col-8">
                                        <input id="firstName"
                                               name="firstName"
                                               type="text"
                                               value={this.state.firstName}
                                               onChange={this.onChange}
                                               className={classnames("form-control form-control-lg", {
                                                   "is-invalid": errors.firstName
                                               })} />
                                    </div>
                                </div>

                                {
                                    // Last name
                                }
                                <div className="form-group row">
                                    <label htmlFor="lastName"
                                           className="col-4 col-form-label">Last
                                        Name:</label>
                                    {errors.lastName && (
                                        <p className="text-danger">{errors.lastName}</p>
                                    )}
                                    <div className="col-8">
                                        <input id="lastName"
                                               name="lastName"
                                               type="text"
                                               value={this.state.lastName}
                                               onChange={this.onChange}
                                               className={classnames("form-control form-control-lg", {
                                                   "is-invalid": errors.lastName
                                               })} />
                                    </div>
                                </div>

                                {
                                    // Email
                                }
                                <div className="form-group row">
                                    <label htmlFor="email"
                                           className="col-4 col-form-label">Email
                                        address:</label>
                                    {errors.emailExists && (
                                        <p className="text-danger">Email already exists. Choose a different one.</p>
                                    )}
                                    {errors.email && (
                                        <p className="text-danger">{errors.email}</p>
                                    )}
                                    <div className="col-8">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
												<span className="input-group-text"><i
                                                    className="fa fa-envelope fa-fw"/></span>
                                            </div>
                                            <input id="email"
                                                   name="email"
                                                   required="required"
                                                   type="email"
                                                   value={this.state.email}
                                                   onChange={this.onChange}
                                                   className={classnames("form-control form-control-lg", {
                                                       "is-invalid": errors.email
                                                   })} />
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
                                                   name="phone"
                                                   className="form-control here"
                                                   type="tel"
                                                   pattern="\\+380|0)[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                                                   value={this.state.phone} />
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
                                    {errors.incorrectPasswordPattern && (
                                        <p className="text-danger">Password should start with a letter, followed by
                                            letters or numbers, 8 through 32 characters long.</p>
                                    )}
                                    {errors.samePassword && (
                                        <p className="text-danger">In order to update the password, you should provide
                                            a different one, not the same one.</p>
                                    )}
                                    <div className="col-8">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
												<span className="input-group-text"><i
                                                    className="fa fa-lock fa-fw"/></span>
                                            </div>
                                            <input id="newPasswordEdit"
                                                   name="newPassword"
                                                   placeholder="New Password"
                                                   type="password"
                                                   onChange={this.onChange}
                                                   className={classnames("form-control form-control-lg", {
                                                       "is-invalid": errors.incorrectPattern || errors.samePassword
                                                   })} />
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
                                    {errors.incorrectPassword && (
                                        <p className="text-danger">Incorrect password.</p>
                                    )}
                                    <div className="col-8">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
												<span className="input-group-text"><i
                                                    className="fa fa-unlock-alt fa-fw"/></span>
                                            </div>
                                            <input id="currentPassword"
                                                   name="password"
                                                   placeholder="Current Password"
                                                   type="password"
                                                   className={classnames("form-control form-control-lg", {
                                                       "is-invalid": errors.incorrectPassword
                                                   })} />
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
    updateUserProfile: PropTypes.func.isRequired,
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