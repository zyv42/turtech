import React, {Component} from 'react';
import { connect } from "react-redux";

class OrderDetails extends Component {

    render() {

        const userOrder = this.props;

        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="text-center">
                            <h4>
                                Order Details for Purchase #{userOrder.id}
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
                                        {userOrder.billingAddress.billingAddressName} <br />
                                        {userOrder.billingAddress.billingAddressStreet1}
                                        {userOrder.billingAddress.billingAddressStreet2} <br />
                                        {userOrder.billingAddress.billingAddressCity} <br />
                                        {userOrder.billingAddress.billingAddressZipcode} <br />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="panel panel-default height">
                                    <div className="panel-heading">
                                        <strong>Payment Information</strong>
                                    </div>
                                    <div className="panel-body">
                                        {userOrder.payment.holderName} <br />
                                        {userOrder.payment.cardNumber} <br />
                                        Exp Date: {userOrder.payment.expiryMonth} / {userOrder.payment.expiryYear} <br />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="panel panel-default height">
                                    <div className="panel-heading">
                                        <strong>Billing Details</strong>
                                    </div>
                                    <div className="panel-body">
                                        {userOrder.shippingAddress.shippingAddressName} <br />
                                        {userOrder.shippingAddress.shippingAddressStreet1}
                                        {userOrder.shippingAddress.shippingAddressStreet2} <br />
                                        {userOrder.shippingAddress.shippingAddressCity} <br />
                                        {userOrder.shippingAddress.shippingAddressZipcode} <br />
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
        );
    }
}

export default OrderDetails;