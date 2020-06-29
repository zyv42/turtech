import React, {Component} from 'react';

class AddNewPayment extends Component {
    render() {
        return (
            <div th:if="${addNewCreditCard}">
                <form th:action="@{addNewCreditCard}"
                      method="post">
                    <div className="bg-info" th:if="${updateUserPaymentInfo}">User
                        info updated.
                    </div>

                    <input hidden="hidden"
                           name="id"
                           th:value="${userPayment.id}"/>

                    <div className="form-group">
                        <h5>* Give a name for your card:</h5>
                        <input type="text"
                               className="form-control"
                               id="cardName"
                               placeholder="Card Name"
                               th:name="cardName"
                               required="required"
                               th:value="${userPayment.cardName}"/>
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
                               th:name="userBillingName"
                               required="required"
                               th:value="${userBilling.userBillingName}"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="billingAddress1">* Street Address</label>
                        <input type="text"
                               className="form-control"
                               id="billingAddress1"
                               placeholder="Street Address 1"
                               th:name="userBillingStreet1"
                               required="required"
                               th:value="${userBilling.userBillingStreet1}"/>
                        <input type="text"
                               className="form-control mt-2"
                               id="billingAddress2"
                               placeholder="Street Address 2"
                               th:name="userBillingStreet2"
                               th:value="${userBilling.userBillingStreet2}"/>
                    </div>

                    <div className="row">
                        <div className="col-4">
                            <div className="form-group">
                                <label htmlFor="billingCity">* City</label> <input type="text"
                                                                                   className="form-control"
                                                                                   id="billingCity"
                                                                                   placeholder="Billing city"
                                                                                   th:name="userBillingCity"
                                                                                   required="required"
                                                                                   th:value="${userBilling.userBillingCity}"/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <label htmlFor="billingZipcode">* Zipcode</label>
                                <input type="text"
                                       className="form-control"
                                       id="billingZipcode"
                                       placeholder="Billing Zipcode"
                                       th:name="userBillingZipcode"
                                       required="required"
                                       th:value="${userBilling.userBillingZipcode}"/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">* Country</label> <input
                        type="text" className="form-control" id="country"
                        placeholder="Country" th:name="userBillingCountry"
                        required="required"
                        th:value="${userBilling.userBillingCountry}"/>
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
                                <label htmlFor="cardType">* Select Card Type:</label> <select
                                className="form-control" id="cardType" th:name="type"
                                th:value="${userPayment.type}">
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
                                    <input type="text" className="form-control" id="cardHolder"
                                           required="required" placeholder="Card Holder Name"
                                           th:name="holderName"
                                           th:value="${userPayment.holderName}"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cardNumber">* Card Number:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
																<span className="input-group-text"><i
                                                                    className="fa fa-credit-card fa-fw"/></span>
                                    </div>
                                    <input type="tel" className="form-control" id="cardNumber"
                                           required="required" placeholder="Valid Card Number"
                                           th:name="cardNumber"
                                           th:value="${userPayment.cardNumber}"/>
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
                                            th:value="${userPayment.expiryMonth}"
                                            style="width: 45%">
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
                                    style="width: 10%; text-align: center"> / </span>
                                    <select className="form-control" name="expiryYear"
                                            th:value="${userPayment.expiryYear}" style="width: 45%">
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
                                <label htmlFor="cardCVC">* CV Code</label> <input id="cardCVC"
                                                                                  type="tel"
                                                                                  className="form-control"
                                                                                  name="cvc"
                                                                                  placeholder="CVC"
                                                                                  th:name="cvc"
                                                                                  required="required"
                                                                                  th:value="${userPayment.cvc}"/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <button type="submit" className="btn btn-primary btn-lg">Save
                        All
                    </button>
                </form>
            </div>
        );
    }
}

export default AddNewPayment;