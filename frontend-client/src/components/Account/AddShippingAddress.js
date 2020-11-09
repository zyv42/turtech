import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addUserShippingAddress } from "../../actions/userProfileActions";

class AddShippingAddress extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: "",
            shippingName: "",
            shippingStreet1: "",
            shippingStreet2: "",
            shippingCity: "",
            shippingZipCode: "",
            shippingCountry: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newUserShipping = {
            id: this.state.id,
            shippingName: this.state.shippingName,
            shippingStreet1: this.state.shippingStreet1,
            shippingStreet2: this.state.shippingStreet2,
            shippingCity: this.state.shippingCity,
            shippingZipCode: this.state.shippingZipCode,
            shippingCountry: this.state.shippingCountry
        };

        this.props.addUserShippingAddress(this.props.security.userInfo.name, newUserShipping);
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

                    <input hidden="hidden"
                           name="id"
                           value={this.state.id}/>

                    {
                        // Shipping address
                    }
                    <hr/>
                    <div className="form-group">
                        <h4>Shipping Address</h4>
                    </div>
                    <div className="form-group">
                        <label htmlFor="shippingName">* Name</label>
                        <input type="text"
                               className="form-control"
                               id="shippingName"
                               placeholder="Receiver Name"
                               name="userShippingName"
                               required="required"
                               value={this.state.shippingName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="shippingAddress">* Street Address</label>
                        <input type="text"
                               className="form-control"
                                id="shippingAddress"
                                placeholder="Street Address 1"
                                name="userShippingStreet1"
                                required="required"
                                value={this.state.shippingStreet1}/>
                        <input type="text"
                               className="form-control mt-2"
                                placeholder="Street Address 2"
                                name="userShippingStreet2"
                                value={this.state.shippingStreet2}/>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="shippingCity">* City</label>
                                <input type="text"
                                       className="form-control"
                                       id="shippingCity"
                                       placeholder="Shipping City"
                                       name="userShippingCity"
                                       required="required"
                                       value={this.state.shippingCity}/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="shippingZipcode">* Zipcode</label>
                                <input type="text"
                                       className="form-control"
                                       id="shippingZipcode"
                                       placeholder="Shipping Zipcode"
                                       name="userShippingZipcode"
                                       required="required"
                                       value={this.state.shippingZipcode}/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">* Country</label>
                        <input
                            type="text"
                            className="form-control"
                            id="country"
                            placeholder="Country"
                            name="userShippingCountry"
                            required="required"
                            value={this.state.shippingCountry}/>
                    </div>
                    <hr/>
                    <button type="submit"
                            className="btn btn-primary btn-lg">
                        Save All
                    </button>
                </form>
            </div>
        );
    }
}

AddShippingAddress.propTypes = {
    addUserShippingAddress: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
    security: state.security,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { addUserShippingAddress }
)(AddShippingAddress);