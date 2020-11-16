import React, {Component} from 'react';
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import { getUserPaymentOption, updateUserPaymentOption, getUserBillingAddress } from "../../actions/userProfileActions";

class UpdatePaymentOption extends Component {

    constructor(props) {
        super(props);

        this.state = {
            paymentOptionId: "",
            cardName: "",
            cardType: "",
            holderName: "",
            cardNumber: "",
            expiryMonth: "",
            expiryYear: "",
            cvc: "",
            userId: "",
            defaultPaymentOption: false,
            billingAddressId: "",
            billingAddressName: "",
            billingAddressStreet1: "",
            billingAddressStreet2: "",
            billingAddressCity: "",
            billingAddressZipcode: "",
            billingAddressCountry: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const paymentOptionId = this.props.location.state.params.paymentOptionId;
        const billingAddressId = this.props.location.state.params.billingAddressId;
        this.props.getUserPaymentOption(this.props.security.userInfo.sub, paymentOptionId);
        this.props.getUserBillingAddress(this.props.security.userInfo.sub, billingAddressId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userPaymentOption !== this.props.userPaymentOption ||
            prevProps.userBillingAddress !== this.props.userBillingAddress ||
            prevProps.errors !== this.props.errors) {

            this.setState({
                paymentOptionId: this.props.userPaymentOption.id,
                cardName: this.props.userPaymentOption.cardName,
                cardType: this.props.userPaymentOption.cardType,
                holderName: this.props.userPaymentOption.holderName,
                cardNumber: this.props.userPaymentOption.cardNumber,
                expiryMonth: this.props.userPaymentOption.expiryMonth,
                expiryYear: this.props.userPaymentOption.expiryYear,
                cvc: this.props.userPaymentOption.cvc,
                userId: this.props.userPaymentOption.userId,
                defaultPaymentOption: this.props.userPaymentOption.defaultPaymentOption,
                billingAddressId: this.props.userBillingAddress.id,
                billingAddressName: this.props.userBillingAddress.billingAddressName,
                billingAddressStreet1: this.props.userBillingAddress.billingAddressStreet1,
                billingAddressStreet2: this.props.userBillingAddress.billingAddressStreet2,
                billingAddressCity: this.props.userBillingAddress.billingAddressCity,
                billingAddressZipcode: this.props.userBillingAddress.billingAddressZipcode,
                billingAddressCountry: this.props.userBillingAddress.billingAddressCountry,
                errors: this.props.errors
            })
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const updatedPaymentOption = {
            id: this.state.paymentOptionId,
            cardName: this.state.cardName,
            cardType: this.state.cardType,
            holderName: this.state.holderName,
            cardNumber: this.state.cardNumber,
            expiryMonth: this.state.expiryMonth,
            expiryYear: this.state.expiryYear,
            cvc: this.state.cvc,
            userId: this.state.userId,
            defaultPaymentOption: this.state.defaultPaymentOption,
            billingAddressId: this.state.billingAddressId
        };

        const updatedBillingAddress = {
            id: this.state.billingAddressId,
            billingAddressName: this.state.billingAddressName,
            billingAddressStreet1: this.state.billingAddressStreet1,
            billingAddressStreet2: this.state.billingAddressStreet2,
            billingAddressCity: this.state.billingAddressCity,
            billingAddressZipcode: this.state.billingAddressZipcode,
            billingAddressCountry: this.state.billingAddressCountry,
        };

        this.props.updateUserPaymentOption(this.props.security.userInfo.sub, this.props.userPaymentOption.id, updatedPaymentOption, updatedBillingAddress);
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

                    <div className="form-group">
                        <h5>* Give a name for your card:</h5>
                        <input type="text"
                               className="form-control"
                               id="cardName"
                               placeholder="Card Name"
                               name="cardName"
                               required="required"
                               onChange={this.onChange}
                               value={this.state.cardName} />
                    </div>

                    {
                        // Billing address
                    }
                    <hr/>
                    <div className="form-group">
                        <h4>Billing Address</h4>
                    </div>
                    <div className="form-group">
                        <label htmlFor="billingAddressName">* Receiver's Name</label>
                        <input type="text"
                               className="form-control"
                               id="billingAddressName"
                               placeholder="Receiver's Name"
                               name="billingAddressName"
                               required="required"
                               onChange={this.onChange}
                               value={this.state.billingAddressName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="billingAddressStreet1">* Street Address</label>
                        <input type="text"
                               className="form-control"
                               id="billingAddressStreet1"
                               placeholder="Street Address 1"
                               name="billingAddressStreet1"
                               required="required"
                               onChange={this.onChange}
                               value={this.state.billingAddressStreet1} />
                        <input type="text"
                               className="form-control mt-2"
                               id="billingAddressStreet2"
                               placeholder="Street Address 2"
                               name="billingAddressStreet2"
                               onChange={this.onChange}
                               value={this.state.billingAddressStreet2}/>
                    </div>

                    <div className="row">
                        <div className="col-4">
                            <div className="form-group">
                                <label htmlFor="billingAddressCity">* City</label>
                                <input type="text"
                                       className="form-control"
                                       id="billingAddressCity"
                                       placeholder="Billing City"
                                       name="billingAddressCity"
                                       required="required"
                                       onChange={this.onChange}
                                       value={this.state.billingAddressCity} />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <label htmlFor="billingAddressZipcode">* Zipcode</label>
                                <input type="text"
                                       className="form-control"
                                       id="billingAddressZipcode"
                                       placeholder="Billing Zipcode"
                                       name="billingAddressZipcode"
                                       required="required"
                                       onChange={this.onChange}
                                       value={this.state.billingAddressZipcode} />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="billingAddressCountry">* Country</label>
                        <input type="text"
                               className="form-control"
                               id="billingAddressCountry"
                               placeholder="Country"
                               name="billingAddressCountry"
                               required="required"
                               onChange={this.onChange}
                               value={this.state.billingAddressCountry} />
                    </div>

                    {
                        // Credit card information
                    }
                    <hr/>
                    <div className="form-group">
                        <h4>Credit Card Information</h4>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="cardType">* Select Card Type:</label>
                                <select className="form-control"
                                        id="cardType"
                                        name="cardType"
                                        required="required"
                                        onChange={this.onChange}
                                        value={this.state.cardType}>
                                    <option value="visa">Visa</option>
                                    <option value="mastercard">Mastercard</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cardHolder">* Card Holder Name:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-user fa-fw"/></span>
                                    </div>
                                    <input type="text"
                                           className="form-control"
                                           id="cardHolder"
                                           required="required"
                                           placeholder="Card Holder Name"
                                           name="holderName"
                                           onChange={this.onChange}
                                           value={this.state.holderName} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cardNumber">* Card Number:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-credit-card fa-fw"/></span>
                                    </div>
                                    <input type="tel"
                                           className="form-control"
                                           id="cardNumber"
                                           required="required"
                                           placeholder="Valid Card Number"
                                           name="cardNumber"
                                           onChange={this.onChange}
                                           value={this.state.cardNumber} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-8">
                            <div className="form-group">
                                <label>
                                    <span className="hidden-xs">Expiration</span>
                                </label>
                                <div className="form-inline">
                                    <select className="form-control"
                                            name="expiryMonth"
                                            required="required"
                                            onChange={this.onChange}
                                            value={this.state.expiryMonth}
                                            style={{width: "45%"}}>
                                        <option disabled="disabled">-- Month --</option>
                                        <option value="1">Jan (01)</option>
                                        <option value="2">Feb (02)</option>
                                        <option value="3">Mar (03)</option>
                                        <option value="4">Apr (04)</option>
                                        <option value="5">May (05)</option>
                                        <option value="6">June (06)</option>
                                        <option value="7">July (07)</option>
                                        <option value="8">Aug (08)</option>
                                        <option value="9">Sep (09)</option>
                                        <option value="10">Oct (10)</option>
                                        <option value="11">Nov (11)</option>
                                        <option value="12">Dec (12)</option>
                                    </select> <span
                                    style={{width: "10%", textAlign: "center"}}> / </span>
                                    <select className="form-control"
                                            name="expiryYear"
                                            onChange={this.onChange}
                                            value={this.state.expiryYear}
                                            style={{width: "45%"}}>
                                        <option disabled="disabled">-- Year --</option>
                                        <option value="20">2020</option>
                                        <option value="21">2021</option>
                                        <option value="22">2022</option>
                                        <option value="23">2023</option>
                                        <option value="24">2024</option>
                                        <option value="25">2025</option>
                                        <option value="26">2026</option>
                                        <option value="27">2027</option>
                                        <option value="28">2028</option>
                                        <option value="29">2029</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label htmlFor="cardCVC">* CV Code</label>
                                <input id="cardCVC"
                                       type="tel"
                                       className="form-control"
                                       name="cvc"
                                       placeholder="CVC"
                                       required="required"
                                       onChange={this.onChange}
                                       value={this.state.cvc} />
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <button type="submit" className="btn btn-primary btn-lg">
                        Update Payment Option
                    </button>
                </form>
            </div>
        );
    }
}

UpdatePaymentOption.propTypes = {
    getUserPaymentOption: PropTypes.func.isRequired,
    updateUserPaymentOption: PropTypes.func.isRequired,
    getUserBillingAddress: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    userPaymentOption: PropTypes.object.isRequired,
    userBillingAddress: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security,
    errors: state.errors,
    userPaymentOption: state.userProfile.userPaymentOption,
    userBillingAddress: state.userProfile.userBillingAddress
});

export default connect(
    mapStateToProps,
    { getUserPaymentOption, updateUserPaymentOption, getUserBillingAddress }
)(withRouter(UpdatePaymentOption));