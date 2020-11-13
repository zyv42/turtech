import React, {Component} from 'react';
import { connect } from "react-redux";
import {Link, withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import { getUserShippingAddress, updateUserShippingAddress } from "../../actions/userProfileActions";

class UpdateShippingAddress extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: "",
            shippingAddressName: "",
            shippingAddressStreet1: "",
            shippingAddressStreet2: "",
            shippingAddressCity: "",
            shippingAddressZipcode: "",
            shippingAddressCountry: "",
            userId: "",
            defaultShippingAddress: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const userShippingAddressId = this.props.match.params.userShippingAddressId;
        this.props.getUserShippingAddress(this.props.security.userInfo.sub, userShippingAddressId);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }

        const {
            id,
            shippingAddressName,
            shippingAddressStreet1,
            shippingAddressStreet2,
            shippingAddressCity,
            shippingAddressZipcode,
            shippingAddressCountry,
            userId,
            defaultShippingAddress
        } = nextProps.userShippingAddress;

        this.setState({
            id,
            shippingAddressName,
            shippingAddressStreet1,
            shippingAddressStreet2,
            shippingAddressCity,
            shippingAddressZipcode,
            shippingAddressCountry,
            userId,
            defaultShippingAddress
        });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const updatedUserShipping = {
            id: this.state.id,
            shippingAddressName: this.state.shippingAddressName,
            shippingAddressStreet1: this.state.shippingAddressStreet1,
            shippingAddressStreet2: this.state.shippingAddressStreet2,
            shippingAddressCity: this.state.shippingAddressCity,
            shippingZipCode: this.state.shippingAddressZipcode,
            shippingCountry: this.state.shippingAddressCountry,
            userId: this.state.userId,
            defaultShippingAddress: this.state.defaultShippingAddress
        };

        this.props.updateUserShippingAddress(this.props.security.userInfo.sub, this.props.userShippingAddress.id, updatedUserShipping);
    }

    render() {

        const { errors } = this.state;

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {/* TODO to show this only after info was update. Also to implement display of errors in form

                        <div className="bg-info">
                            User info updated.
                        </div>
                        */
                    }

                    {
                        // Shipping address
                    }
                    <hr/>
                    <div className="form-group">
                        <h4>Shipping Address</h4>
                    </div>
                    <div className="form-group">
                        <label htmlFor="shippingAddressName">* Receiver's Name</label>
                        <input type="text"
                               className="form-control"
                               id="shippingAddressName"
                               name="shippingAddressName"
                               placeholder="Receiver's name"
                               required="required"
                               onChange={this.onChange}
                               value={this.state.shippingAddressName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="shippingAddressStreet">* Street Address</label>
                        <input type="text"
                               className="form-control"
                               id="shippingAddressStreet"
                               placeholder="Street Address 1"
                               name="shippingAddressStreet1"
                               required="required"
                               onChange={this.onChange}
                               value={this.state.shippingAddressStreet1}/>
                        <input type="text"
                               className="form-control mt-2"
                               placeholder="Street Address 2"
                               name="shippingAddressStreet2"
                               onChange={this.onChange}
                               value={this.state.shippingAddressStreet2}/>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="shippingAddressCity">* City</label>
                                <input type="text"
                                       className="form-control"
                                       id="shippingAddressCity"
                                       placeholder="Shipping Address City"
                                       name="shippingAddressCity"
                                       required="required"
                                       onChange={this.onChange}
                                       value={this.state.shippingAddressCity}/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="shippingAddressZipcode">* Zipcode</label>
                                <input type="text"
                                       className="form-control"
                                       id="shippingAddressZipcode"
                                       placeholder="Shipping Address Zipcode"
                                       name="shippingAddressZipcode"
                                       required="required"
                                       onChange={this.onChange}
                                       value={this.state.shippingAddressZipcode}/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="shippingAddressCountry">* Country</label>
                        <input
                            type="text"
                            className="form-control"
                            id="shippingAddressCountry"
                            placeholder="Shipping Address Country"
                            name="shippingAddressCountry"
                            required="required"
                            onChange={this.onChange}
                            value={this.state.shippingAddressCountry}/>
                    </div>
                    <hr/>
                    <Link to={"/MyAccount"}
                          className="btn btn-secondary btn-lg mr-2">
                        Go Back
                    </Link>
                    <button type="submit"
                            className="btn btn-primary btn-lg">
                        Update Shipping Address
                    </button>
                </form>
            </div>
        );
    }
}

UpdateShippingAddress.propTypes = {
    getUserShippingAddress: PropTypes.func.isRequired,
    updateUserShippingAddress: PropTypes.func.isRequired,
    userShippingAddress: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
    security: state.security,
    errors: state.errors,
    userShippingAddress: state.userProfile.userShippingAddress
});

export default connect(
    mapStateToProps,
    { getUserShippingAddress, updateUserShippingAddress }
)(withRouter(UpdateShippingAddress));