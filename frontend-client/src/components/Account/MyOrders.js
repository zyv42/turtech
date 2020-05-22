import React, {Component} from 'react';

class MyOrders extends Component {
    render() {
        return (
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
                                                    th:text="${order.shippingAddress.shippingAddressStreet1}+' '+${order.shippingAddress.shippingAddressStreet2}" /><br />
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
        );
    }
}

export default MyOrders;