import React, {Component} from 'react';

class AddNewShippingAddress extends Component {
    render() {
        return (
            <div th:if="${addNewShippingAddress}">
                <form th:action="@{/addNewShippingAddress}" method="post">
                    <div className="bg-info"
                         th:if="${updateUserShippingInfo}">
                        User info updated.
                    </div>

                    <input hidden="hidden" name="id" th:value="${userShipping.id}"/>

                    {
                        // Shipping address
                    }
                    <hr/>
                    <div className="form-group">
                        <h4>Shipping Address</h4>
                    </div>
                    <div className="form-group">
                        <label htmlFor="shippingName">* Name</label> <input type="text"
                                                                            className="form-control"
                                                                            id="shippingName"
                                                                            placeholder="Receiver Name"
                                                                            th:name="userShippingName"
                                                                            required="required"
                                                                            th:value="${userShipping.userShippingName}"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="shippingAddress">* Street Address</label> <input
                        type="text" className="form-control" id="shippingAddress"
                        placeholder="Street Address 1" th:name="userShippingStreet1"
                        required="required"
                        th:value="${userShipping.userShippingStreet1}"/> <input
                        type="text" className="form-control mt-2"
                        placeholder="Street Address 2" th:name="userShppingStreet2"
                        th:value="${userShipping.userShippingStreet2}"/>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="shippingCity">* City</label> <input type="text"
                                                                                    className="form-control"
                                                                                    id="shippingCity"
                                                                                    placeholder="Shipping City"
                                                                                    th:name="userShippingCity"
                                                                                    required="required"
                                                                                    th:value="${userShipping.userShippingCity}"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="shippingZipcode">* Zipcode</label> <input
                                type="text" className="form-control" id="shippingZipcode"
                                placeholder="Shipping Zipcode"
                                th:name="userShippingZipcode" required="required"
                                th:value="${userShipping.userShippingZipcode}"/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">* Country</label> <input
                        type="text" className="form-control" id="country"
                        placeholder="Country" th:name="userShippingCountry"
                        required="required"
                        th:value="${userShipping.userShippingCountry}"/>
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

export default AddNewShippingAddress;