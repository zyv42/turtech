import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addUserPaymentOption } from "../../actions/userProfileActions";

class AddPaymentOption extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cardName: "",
            cardType: "",
            holderName: "",
            cardNumber: "",
            expiryMonth: "",
            expiryYear: "",
            cvc: "",
            billingAddressName: "",
            billingAddressStreet1: "",
            billingAddressStreet2: "",
            billingAddressCity: "",
            billingAddressZipCode: "",
            billingAddressCountry: ""
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
        const newPaymentOption = {
            cardName: this.state.cardName,
            cardType: this.state.cardType,
            holderName: this.state.holderName,
            cardNumber: this.state.cardNumber,
            expiryMonth: this.state.expiryMonth,
            expiryYear: this.state.expiryYear,
            cvc: this.state.cvc
        };

        const newUserBillingAddress = {
            billingAddressName: this.state.billingAddressName,
            billingAddressStreet1: this.state.billingAddressStreet1,
            billingAddressStreet2: this.state.billingAddressStreet2,
            billingAddressCity: this.state.billingAddressCity,
            billingAddressZipcode: this.state.billingAddressZipcode,
            billingAddressCountry: this.state.billingAddressCountry,
        };

        this.props.addUserPaymentOption(this.props.security.userInfo.sub, newPaymentOption, newUserBillingAddress);
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
                               id="billingAddressAddress2"
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
                                        <option value="01">Jan (01)</option>
                                        <option value="02">Feb (02)</option>
                                        <option value="03">Mar (03)</option>
                                        <option value="04">Apr (04)</option>
                                        <option value="05">May (05)</option>
                                        <option value="06">June (06)</option>
                                        <option value="07">July (07)</option>
                                        <option value="08">Aug (08)</option>
                                        <option value="09">Sep (09)</option>
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
                        Save Payment Option
                    </button>
                </form>
            </div>
        );
    }
}

AddPaymentOption.propTypes = {
    addUserPaymentOption: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { addUserPaymentOption }
)(AddPaymentOption);