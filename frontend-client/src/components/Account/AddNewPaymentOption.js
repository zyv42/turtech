import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addUserPaymentOption } from "../../actions/userProfileActions";

class AddNewPaymentOption extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: "",
            cardName: "",
            billingName: "",
            billingStreet1: "",
            billingStreet2: "",
            billingCity: "",
            billingZipCode: "",
            billingCountry: "",
            cardType: "",
            holderName: "",
            cardNumber: "",
            expiryMonth: "",
            expiryYear: "",
            cvc: ""
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
        const newUserShippingAddress = {
            id: this.state.id,
            cardName: this.state.cardName,
            billingName: this.state.billingName,
            billingStreet1: this.state.billingStreet1,
            billingStreet2: this.state.billingStreet2,
            billingCity: this.state.billingCity,
            billingZipCode: this.state.billingZipCode,
            billingCountry: this.state.billingCountry,
            cardType: this.state.cardType,
            holderName: this.state.holderName,
            cardNumber: this.state.cardNumber,
            expiryMonth: this.state.expiryMonth,
            expiryYear: this.state.expiryYear,
            cvc: this.state.cvc
        };

        this.props.updateUserShippingAddress(this.props.security.userInfo.name, newUserShippingAddress);
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
                           value={this.state.id} />

                    <div className="form-group">
                        <h5>* Give a name for your card:</h5>
                        <input type="text"
                               className="form-control"
                               id="cardName"
                               placeholder="Card Name"
                               name="cardName"
                               required="required"
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
                        <label htmlFor="billingName">* Name</label>
                        <input type="text"
                               className="form-control"
                               id="billingName"
                               placeholder="Receiver Name"
                               name="billingName"
                               required="required"
                               value={this.state.billingName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="billingAddress1">* Street Address</label>
                        <input type="text"
                               className="form-control"
                               id="billingAddress1"
                               placeholder="Street Address 1"
                               name="billingStreet1"
                               required="required"
                               value={this.state.billingStreet1} />
                        <input type="text"
                               className="form-control mt-2"
                               id="billingAddress2"
                               placeholder="Street Address 2"
                               name="billingStreet2"
                               value={this.state.billingStreet2}/>
                    </div>

                    <div className="row">
                        <div className="col-4">
                            <div className="form-group">
                                <label htmlFor="billingCity">* City</label>
                                <input type="text"
                                       className="form-control"
                                       id="billingCity"
                                       placeholder="Billing city"
                                       name="billingCity"
                                       required="required"
                                       value={this.state.billingCity} />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <label htmlFor="billingZipcode">* Zipcode</label>
                                <input type="text"
                                       className="form-control"
                                       id="billingZipcode"
                                       placeholder="Billing Zipcode"
                                       name="billingZipcode"
                                       required="required"
                                       value={this.state.billingZipcode} />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">* Country</label>
                        <input type="text"
                               className="form-control"
                               id="country"
                               placeholder="Country"
                               name="billingCountry"
                               required="required"
                               value={this.state.billingCountry} />
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
                                        value={this.state.cardType}>
                                <option value="visa">Visa</option>
                                <option value="mastercard">Mastercard</option>
                            </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cardHolder">* Card Holder Name:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
																<span className="input-group-text"><i
                                                                    className="fa fa-user fa-fw"/></span>
                                    </div>
                                    <input type="text"
                                           className="form-control"
                                           id="cardHolder"
                                           required="required"
                                           placeholder="Card Holder Name"
                                           name="holderName"
                                           value={this.state.holderName} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cardNumber">* Card Number:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
																<span className="input-group-text"><i
                                                                    className="fa fa-credit-card fa-fw"/></span>
                                    </div>
                                    <input type="tel"
                                           className="form-control"
                                           id="cardNumber"
                                           required="required"
                                           placeholder="Valid Card Number"
                                           name="cardNumber"
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
                                            value={this.state.expiryYear}
                                            style={{width: "45%"}}>
                                        <option disabled="disabled">-- Year --</option>
                                        <option value="19">2019</option>
                                        <option value="20">2020</option>
                                        <option value="21">2021</option>
                                        <option value="22">2022</option>
                                        <option value="23">2023</option>
                                        <option value="23">2024</option>
                                        <option value="23">2025</option>
                                        <option value="23">2026</option>
                                        <option value="23">2027</option>
                                        <option value="23">2028</option>
                                        <option value="23">2029</option>
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
                                       value={this.state.cvc} />
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <button type="submit" className="btn btn-primary btn-lg">
                        Save All
                    </button>
                </form>
            </div>
        );
    }
}

AddNewPaymentOption.propTypes = {
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
)(AddNewPaymentOption);