import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addUserShippingAddress } from "../../actions/userProfileActions";

class AddShippingAddress extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shippingAddressName: "",
            shippingAddressStreet1: "",
            shippingAddressStreet2: "",
            shippingAddressCity: "",
            shippingAddressZipcode: "",
            shippingAddressCountry: ""
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
            shippingAddressName: this.state.shippingAddressName,
            shippingAddressStreet1: this.state.shippingAddressStreet1,
            shippingAddressStreet2: this.state.shippingAddressStreet2,
            shippingAddressCity: this.state.shippingAddressCity,
            shippingAddressZipcode: this.state.shippingAddressZipcode,
            shippingAddressCountry: this.state.shippingAddressCountry
        };

        this.props.addUserShippingAddress(this.props.security.userInfo.sub, newUserShipping);
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
                        <label htmlFor="shippingAddressName">* Name</label>
                        <input type="text"
                               className="form-control"
                               id="shippingAddressName"
                               placeholder="Receiver Name"
                               name="shippingAddressName"
                               required="required"
                               onChange={this.onChange}
                               value={this.state.shippingName} />
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
                                value={this.state.shippingStreet1}/>
                        <input type="text"
                               className="form-control mt-2"
                                placeholder="Street Address 2"
                                name="shippingAddressStreet2"
                               onChange={this.onChange}
                                value={this.state.shippingStreet2}/>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="shippingAddressCity">* City</label>
                                <input type="text"
                                       className="form-control"
                                       id="shippingAddressCity"
                                       placeholder="Shipping City"
                                       name="shippingAddressCity"
                                       required="required"
                                       onChange={this.onChange}
                                       value={this.state.shippingCity}/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="shippingAddressZipcode">* Zipcode</label>
                                <input type="text"
                                       className="form-control"
                                       id="shippingAddressZipcode"
                                       placeholder="Shipping Zipcode"
                                       name="shippingAddressZipcode"
                                       required="required"
                                       onChange={this.onChange}
                                       value={this.state.shippingZipcode}/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="shippingAddressCountry">* Country</label>
                        <input
                            type="text"
                            className="form-control"
                            id="shippingAddressCountry"
                            placeholder="Country"
                            name="shippingAddressCountry"
                            required="required"
                            onChange={this.onChange}
                            value={this.state.shippingCountry}/>
                    </div>
                    <hr/>
                    <button type="submit"
                            className="btn btn-primary btn-lg">
                        Save Shipping Address
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