import React, {Component} from 'react';

class MyAccount extends Component {
    render() {
        return (
            <div className="container mt-3 mb-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="list-group ">
                            <a href="#"
                               className="list-group-item list-group-item-action"
                               data-toggle="tab" data-target="#profile"
                               th:classappend="${classActiveProfile}? 'in active'">Profile</a>
                            <a href="#"
                               className="list-group-item list-group-item-action"
                            data-toggle="tab" data-target="#orders"
                            th:classappend="${classActiveOrders}? 'active'">Orders</a>
                            <a href="#"
                               className="list-group-item list-group-item-action"
                            data-toggle="tab" data-target="#billing"
                            th:classappend="${classActiveBilling}? 'active'">Billing</a>
                            <a href="#"
                               className="list-group-item list-group-item-action"
                            data-toggle="tab" data-target="#shipping"
                            th:classappend="${classActiveShipping}? 'active'">Shipping</a>
                        </div>
                    </div>

                    {
                    // User profile information
                    }
                    <div className="tab-content col-md-9">
                        <div role="tabpanel"
                             className="tab-pane fade"
                             id="profile"
                             th:classappend="${classActiveProfile}? 'show active'">
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
                                                info updated.</div>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <form th:action="@{/updateUserInfo}"
                                                  th:object="${user}"
                                                  method="post">
                                                <input type="hidden"
                                                       th:field="*{id}"
                                                       th:value="${user.id}" />

                                                {
                                                    // Username
                                                }
                                                <div className="form-group row">
                                                    <label for="username"
                                                           className="col-4 col-form-label">Username:</label>
                                                    <p th:if="${usernameExists}"
                                                       className="text-danger">Username already exists. Choose a different one.</p>
                                                    <p th:if="${#fields.hasErrors('username')}"
                                                       className="text-danger"
                                                       th:errors="*{username}" />
                                                    <div className="col-8">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
												<span className="input-group-text">
													<i className="fa fa-user fa-fw" /></span>
                                                            </div>
                                                            <input id="username"
                                                                   th:field="*{username}"
                                                                   className="form-control here"
                                                                   required="required"
                                                                   type="text"
                                                                   th:value="${user.username}"
                                                                   th:classappend="${#fields.hasErrors('username')} ? 'is-invalid'" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {
                                                    // First name
                                                }
                                                <div className="form-group row">
                                                    <label for="firstName"
                                                           className="col-4 col-form-label">First
                                                        Name:</label>
                                                    <p th:if="${#fields.hasErrors('firstName')}"
                                                       class="text-danger"
                                                       th:errors="*{firstName}" />
                                                    <div className="col-8">
                                                        <input id="firstName"
                                                               th:field="*{firstName}"
                                                               className="form-control here"
                                                               type="text"
                                                               th:value="${user.firstName}"
                                                               th:classappend="${#fields.hasErrors('firstName')} ? 'is-invalid'" />
                                                    </div>
                                                </div>

                                                {
                                                    // Last name
                                                }
                                                <div className="form-group row">
                                                    <label for="lastName"
                                                           className="col-4 col-form-label">Last
                                                        Name:</label>
                                                    <p th:if="${#fields.hasErrors('lastName')}"
                                                       className="text-danger"
                                                       th:errors="*{lastName}" />
                                                    <div className="col-8">
                                                        <input id="lastName"
                                                               th:field="*{lastName}"
                                                               className="form-control here"
                                                               type="text"
                                                               th:value="${user.lastName}"
                                                               th:classappend="${#fields.hasErrors('lastName')} ? 'is-invalid'" />
                                                    </div>
                                                </div>

                                                {
                                                    // Email
                                                }
                                                <div className="form-group row">
                                                    <label for="email"
                                                           className="col-4 col-form-label">Email
                                                        address:</label>
                                                    <p className="text-danger"
                                                       th:if="${emailExists}">Email already exists. Choose a different one.</p>
                                                    <p th:if="${#fields.hasErrors('email')}"
                                                       class="text-danger"
                                                       th:errors="*{email}" />
                                                    <div className="col-8">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
												<span className="input-group-text"><i
                                                    class="fa fa-envelope fa-fw" /></span>
                                                            </div>
                                                            <input id="email"
                                                                   th:field="*{email}"
                                                                   className="form-control here"
                                                                   required="required"
                                                                   type="email"
                                                                   th:value="${user.email}"
                                                                   th:classappend="${#fields.hasErrors('email')} ? 'is-invalid'" />
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
                                                    <label for="phone"
                                                           className="col-4 col-form-label">Phone
                                                        number:</label>
                                                    <div className="col-8">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
												<span className="input-group-text"><i
                                                    class="fa fa-phone fa-fw" /></span>
                                                            </div>
                                                            <input id="phone"
                                                                   th:field="*{phone}"
                                                                   className="form-control here"
                                                                   type="tel"
                                                                   pattern="\\+380|0)[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                                                                   th:value="${user.phone}" />
                                                        </div>
                                                        <small className="form-text text-muted">Pattern: (+380|0)XX-XXX-XX-XX</small>
                                                    </div>
                                                </div>

                                                {
                                                    // New password
                                                }
                                                <div id="checkPasswordEdit"
                                                     style="display: none;"
                                                     className="alert alert-danger">Passwords do not match!</div>
                                                <div className="form-group row">
                                                    <label for="newPasswordEdit"
                                                           className="col-4 col-form-label">New
                                                        Password:</label>
                                                    <p className="text-danger"
                                                       th:if="${incorrectPattern}">Password should start with a letter, followed by letters or numbers, 8 through 32 characters long.</p>
                                                    <p className="text-danger"
                                                       th:if="${samePassword}">In order to update the password, you should provide a different one, not the same one.</p>
                                                    <div className="col-8">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
												<span className="input-group-text"><i
                                                    className="fa fa-lock fa-fw" /></span>
                                                            </div>
                                                            <input id="newPasswordEdit"
                                                                   name="newPassword"
                                                                   placeholder="New Password"
                                                                   className="form-control here"
                                                                   type="password"
                                                                   th:classappend="${incorrectPattern} or ${samePassword} ? 'is-invalid'" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {
                                                    // Password confirmation
                                                }
                                                <div class="form-group row">
                                                    <label for="confirmPasswordEdit"
                                                           className="col-4 col-form-label">Confirm
                                                        New Password:</label>
                                                    <div className="col-8">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
												<span className="input-group-text"><i
                                                    className="fa fa-lock fa-fw" /></span>
                                                            </div>
                                                            <input id="confirmPasswordEdit"
                                                                   placeholder="Confirm New Password"
                                                                   className="form-control"
                                                                   type="password" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {
                                                    // Current password to authorize
                                                }
                                                <div className="form-group row">
                                                    <label for="currentPassword"
                                                           className="col-4 col-form-label">Current
                                                        Password:</label>
                                                    <p className="text-danger"
                                                       th:if="${incorrectPassword}">In order to update the password,
                                                        you should provide a different one, not the same one.</p>
                                                    <div className="col-8">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
												<span className="input-group-text"><i
                                                    className="fa fa-unlock-alt fa-fw" /></span>
                                                            </div>
                                                            <input id="currentPassword"
                                                                   th:field="*{password}"
                                                                   placeholder="Current Password"
                                                                   className="form-control"
                                                                   type="password"
                                                                   th:classappend="${incorrectPassword} ? 'is-invalid'" />
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
                                                            Update My Profile</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            // Orders information
                        }
                        <div role="tabpanel"
                             className="tab-pane fade"
                             id="orders"
                             th:classappend="${classActiveOrders}? 'show active'">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>Orders</h4>
                                            <div className="alert alert-info"
                                                 th:if="${orderList == null or orderList.isEmpty()}">No
                                                orders yet :(</div>
                                            <hr />
                                        </div>
                                    </div>
                                    <table className="table table-sm table-inverse">
                                        <thead>
                                        <tr>
                                            <th>Order Date</th>
                                            <th>Order Number</th>
                                            <th>Total</th>
                                            <th>Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr th:each="order : ${orderList}">
                                            <td><a th:href="@{/orderDetail(id=${order.id})}"><span
                                                th:text="${order.orderDate.toLocalDate()}" /></a></td>
                                            <td data-th-text="${order.id}" />
                                            <td data-th-text="${order.orderTotal}" />
                                            <td data-th-text="${order.orderStatus}" />
                                        </tr>
                                        </tbody>
                                    </table>

                                    <div th:if="${displayOrderDetail}">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="text-center">
                                                    <h4>
                                                        Order Details for Purchase #<span th:text="${order.id}" />
                                                    </h4>
                                                </div>
                                                <hr />

                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="panel panel-default height">
                                                            <div className="panel-heading">
                                                                <strong>Billing Details</strong>
                                                            </div>
                                                            <div className="panel-body">
                                                                <span th:text="${order.billingAddress.billingAddressName}" /><br />
                                                                <span
                                                                    th:text="${order.billingAddress.billingAddressStreet1}+' '+${order.billingAddress.billingAddressStreet2}" /><br />
                                                                <span th:text="${order.billingAddress.billingAddressCity}" /><br />
                                                                <span
                                                                    th:text="${order.billingAddress.billingAddressZipcode}" /><br />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="panel panel-default height">
                                                            <div className="panel-heading">
                                                                <strong>Payment Information</strong>
                                                            </div>
                                                            <div className="panel-body">
														<span th:text="${order.payment.holderName}">Card
															Name</span><br /> <span th:text="${order.payment.cardNumber}">Card
															Number</span><br /> <span>Exp Date:</span><span
                                                                th:text="${order.payment.expiryMonth}" />/<span
                                                                th:text="${order.payment.expiryYear}" /><br />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="panel panel-default height">
                                                            <div className="panel-heading">
                                                                <strong>Billing Details</strong>
                                                            </div>
                                                            <div className="panel-body">
														<span
                                                            th:text="${order.shippingAddress.shippingAddressName}" /><br />
                                                                <span
                                                                    th:text="${order.shippingAddress.shippingAddressStreet1}+' '+${order.shippingAddress.shippingAddressStreet2}"></span><br />
                                                                <span
                                                                    th:text="${order.shippingAddress.shippingAddressCity}" /><br />
                                                                <span
                                                                    th:text="${order.shippingAddress.shippingAddressZipcode}" /><br />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="panel-heading">
                                                    <h5 className="text-center">
                                                        <strong>Order Summary</strong>
                                                    </h5>
                                                </div>
                                                <div className="panel-body">
                                                    <div className="table-responsive">
                                                        <table className="table table-condensed">
                                                            <thead>
                                                            <tr>
                                                                <td><strong>Item Name</strong></td>
                                                                <td className="text-center"><strong>Item Price</strong></td>
                                                                <td className="text-center"><strong>Item Quantity</strong></td>
                                                                <td className="text-center"><strong>Total</strong></td>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr th:each="cartItem : ${cartItemList}">
                                                                <td data-th-text="${cartItem.product.name}" />
                                                                <td className="text-center"
                                                                    data-th-text="${cartItem.product.ourPrice}" />
                                                                <td className="text-center" data-th-text="${cartItem.qty}" />
                                                                <td className="text-center"
                                                                    data-th-text="${cartItem.subtotal}" />
                                                            </tr>
                                                            <tr>
                                                                <td className="highrow" />
                                                                <td className="highrow" />
                                                                <td className="highrow text-right"><strong>Subtotal</strong></td>
                                                                <td className="highrow text-right"
                                                                    data-th-text="${order.orderTotal}" />
                                                            </tr>
                                                            <tr>
                                                                <td className="emptyrow" />
                                                                <td className="emptyrow" />
                                                                <td className="emptyrow text-right"><strong>Tax</strong></td>
                                                                <td className="emptyrow text-right"
                                                                    data-th-text="${#numbers.formatDecimal(order.orderTotal*0.06,0,2)}" />
                                                            </tr>
                                                            <tr>
                                                                <td className="emptyrow"><i className="fa fa-barcode fa-2x" /></td>
                                                                <td className="emptyrow" />
                                                                <td className="emptyrow text-right"><strong>Total</strong></td>
                                                                <td
                                                                    th:with="total=${order.orderTotal+order.orderTotal*0.06}"
                                                                    data-th-text="${#numbers.formatDecimal(total, 0, 2)}"
                                                                    className="emptyrow text-right" />
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Billing information -->
                        {
                            // Billing information
                        }
                        <div role="tabpanel"
                             className="tab-pane fade"
                             id="billing"
                             th:classappend="${classActiveBilling}? 'show active'">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>Billing</h4>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a
                                                    th:href="@{/listOfCreditCards}"
                                                    th:style="${listOfCreditCards}? 'color:grey'">List of
                                                    Credit Cards</a></li>
                                                <li className="breadcrumb-item"><a
                                                    th:href="@{/addNewCreditCard}"
                                                    th:style="${addNewCreditCard}? 'color:grey'">Add(Update)
                                                    Credit Card</a></li>
                                            </ol>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div th:if="${listOfCreditCards}">
                                                <form th:action="@{/setDefaultPayment}" method="post">
                                                    <table className="table">
                                                        <thead>
                                                        <tr>
                                                            <th>Default</th>
                                                            <th>Credit Card</th>
                                                            <th>Operations</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr th:each="userPayment : ${userPaymentList}">
                                                            <td><input type="radio"
                                                                       th:field="*{defaultUserPaymentId}"
                                                                       th:value="${userPayment.id}"
                                                                       th:checked="${userPayment.defaultPayment}" /></td>
                                                            <td th:text="${userPayment.cardName}" />
                                                            <td><a
                                                                th:href="@{/updateCreditCard(id=${userPayment.id})}"><i
                                                                className="fa fa-pencil" /></a>&nbsp;&nbsp;<a
                                                                th:href="@{/removeCreditCard(id=${userPayment.id})}"><i
                                                                className="fa fa-times" /></a></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <button className="btn btn-primary"
                                                            type="submit">Save</button>
                                                </form>
                                            </div>

                                            <div th:if="${addNewCreditCard}">
                                                <form th:action="@{addNewCreditCard}"
                                                      method="post">
                                                    <div className="bg-info" th:if="${updateUserPaymentInfo}">User
                                                        info updated.</div>

                                                    <input hidden="hidden"
                                                           name="id"
                                                           th:value="${userPayment.id}" />

                                                    <div className="form-group">
                                                        <h5>* Give a name for your card:</h5>
                                                        <input type="text"
                                                               className="form-control"
                                                               id="cardName"
                                                               placeholder="Card Name"
                                                               th:name="cardName"
                                                               required="required"
                                                               th:value="${userPayment.cardName}" />
                                                    </div>

                                                    {
                                                        // Billing address
                                                    }
                                                    <hr />
                                                    <div className="form-group">
                                                        <h4>Billing Address</h4>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="billingName">* Name</label>
                                                        <input type="text"
                                                               className="form-control"
                                                               id="billingName"
                                                               placeholder="Receiver Name"
                                                               th:name="userBillingName"
                                                               required="required"
                                                               th:value="${userBilling.userBillingName}" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="billingAddress1">* Street Address</label>
                                                        <input type="text"
                                                               className="form-control"
                                                               id="billingAddress1"
                                                               placeholder="Street Address 1"
                                                               th:name="userBillingStreet1"
                                                               required="required"
                                                               th:value="${userBilling.userBillingStreet1}" />
                                                        <input type="text"
                                                               className="form-control mt-2"
                                                               id="billingAddress2"
                                                               placeholder="Street Address 2"
                                                               th:name="userBillingStreet2"
                                                               th:value="${userBilling.userBillingStreet2}" />
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-4">
                                                            <div className="form-group">
                                                                <label for="billingCity">* City</label> <input type="text"
                                                                                                               className="form-control"
                                                                                                               id="billingCity"
                                                                                                               placeholder="Billing city"
                                                                                                               th:name="userBillingCity"
                                                                                                               required="required"
                                                                                                               th:value="${userBilling.userBillingCity}" />
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="form-group">
                                                                <label for="billingZipcode">* Zipcode</label>
                                                                <input type="text"
                                                                       className="form-control"
                                                                       id="billingZipcode"
                                                                placeholder="Billing Zipcode"
                                                                th:name="userBillingZipcode"
                                                                       required="required"
                                                                th:value="${userBilling.userBillingZipcode}" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label for="country">* Country</label> <input
                                                        type="text" className="form-control" id="country"
                                                        placeholder="Country" th:name="userBillingCountry"
                                                        required="required"
                                                        th:value="${userBilling.userBillingCountry}" />
                                                    </div>

                                                    {
                                                        // Credit card information
                                                    }
                                                    <hr />
                                                    <div className="form-group">
                                                        <h4>Credit Card Information</h4>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <label for="cardType">* Select Card Type:</label> <select
                                                                className="form-control" id="cardType" th:name="type"
                                                                th:value="${userPayment.type}">
                                                                <option value="visa">Visa</option>
                                                                <option value="mastercard">Mastercard</option>
                                                            </select>
                                                            </div>
                                                            <div className="form-group">
                                                                <label for="cardHolder">* Card Holder Name:</label>
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
																<span className="input-group-text"><i
                                                                    className="fa fa-user fa-fw" /></span>
                                                                    </div>
                                                                    <input type="text" className="form-control" id="cardHolder"
                                                                           required="required" placeHolder="Card Holder Name"
                                                                           th:name="holderName"
                                                                           th:value="${userPayment.holderName}" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label for="cardNumber">* Card Number:</label>
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
																<span className="input-group-text"><i
                                                                    className="fa fa-credit-card fa-fw" /></span>
                                                                    </div>
                                                                    <input type="tel" className="form-control" id="cardNumber"
                                                                           required="required" placeHolder="Valid Card Number"
                                                                           th:name="cardNumber"
                                                                           th:value="${userPayment.cardNumber}" />
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
                                                                    </select> <span style="width: 10%; text-align: center"> / </span>
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
                                                                <label for="cardCVC">* CV Code</label> <input id="cardCVC"
                                                                                                              type="tel" className="form-control" name="cvc"
                                                                                                              placeholder="CVC" th:name="cvc"
                                                                                                              required="required"
                                                                                                              th:value="${userPayment.cvc}" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <button type="submit" className="btn btn-primary btn-lg">Save
                                                        All</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            // Shipping information
                        }
                        <div role="tabpanel" className="tab-pane fade" id="shipping"
                             th:classappend="${classActiveShipping}? 'show active'">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>Shipping</h4>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item active"><a
                                                    th:href="@{/listOfShippingAddresses}"
                                                    th:style="${listOfShippingAddresses}? 'color:grey'">List
                                                    of Shipping Addresses</a></li>
                                                <li className="breadcrumb-item active"><a
                                                    th:href="@{/addNewShippingAddress}"
                                                    th:style="${addNewShippingAddress}? 'color:grey'">Add(Update)
                                                    Shipping Address</a></li>
                                            </ol>
                                            <hr />
                                        </div>
                                    </div>
                                    <div th:if="${listOfShippingAddresses}">
                                        <form th:action="@{/setDefaultShippingAddress}" method="post">
                                            <table className="table">
                                                <thead>
                                                <tr>
                                                    <th>Default</th>
                                                    <th>Shipping Address</th>
                                                    <th>Operations</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr th:each="userShipping : ${userShippingList}">
                                                    <td><input type="radio" name="defaultShippingAddressId"
                                                               th:value="${userShipping.id}"
                                                               th:checked="${userShipping.userShippingDefault}" /><span>default</span></td>
                                                    <td
                                                        th:text="${userShipping.userShippingStreet1}+', '+
														${userShipping.userShippingCity}" />
                                                    <td><a
                                                        th:href="@{/updateUserShipping(id=${userShipping.id})}"><i
                                                        className="fa fa-pencil" /></a>&nbsp;&nbsp;<a
                                                        th:href="@{/removeUserShipping(id=${userShipping.id})}"><i
                                                        className="fa fa-times" /></a></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <button className="btn btn-primary" type="submit">Save</button>
                                        </form>
                                    </div>

                                    <div th:if="${addNewShippingAddress}">
                                        <form th:action="@{/addNewShippingAddress}" method="post">
                                            <div className="bg-info"
                                                 th:if="${updateUserShippingInfo}">
                                                User info updated.</div>

                                            <input hidden="hidden" name="id" th:value="${userShipping.id}" />

                                            {
                                                // Shipping address
                                            }
                                            <hr />
                                            <div className="form-group">
                                                <h4>Shipping Address</h4>
                                            </div>
                                            <div className="form-group">
                                                <label for="shippingName">* Name</label> <input type="text"
                                                                                                className="form-control" id="shippingName"
                                                                                                placeholder="Receiver Name" th:name="userShippingName"
                                                                                                required="required"
                                                                                                th:value="${userShipping.userShippingName}" />
                                            </div>
                                            <div className="form-group">
                                                <label for="shippingAddress">* Street Address</label> <input
                                                type="text" className="form-control" id="shippingAddress"
                                                placeholder="Street Address 1" th:name="userShippingStreet1"
                                                required="required"
                                                th:value="${userShipping.userShippingStreet1}" /> <input
                                                type="text" className="form-control mt-2"
                                                placeholder="Street Address 2" th:name="userShppingStreet2"
                                                th:value="${userShipping.userShippingStreet2}" />
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label for="shippingCity">* City</label> <input type="text"
                                                                                                        className="form-control" id="shippingCity"
                                                                                                        placeholder="Shipping City" th:name="userShippingCity"
                                                                                                        required="required"
                                                                                                        th:value="${userShipping.userShippingCity}" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label for="shippingZipcode">* Zipcode</label> <input
                                                        type="text" className="form-control" id="shippingZipcode"
                                                        placeholder="Shipping Zipcode"
                                                        th:name="userShippingZipcode" required="required"
                                                        th:value="${userShipping.userShippingZipcode}" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label for="country">* Country</label> <input
                                                type="text" className="form-control" id="country"
                                                placeholder="Country" th:name="userShippingCountry"
                                                required="required"
                                                th:value="${userShipping.userShippingCountry}" />
                                            </div>

                                            <hr />
                                            <button type="submit" className="btn btn-primary btn-lg">Save
                                                All</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyAccount;