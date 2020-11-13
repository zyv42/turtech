import React, {Component} from 'react';
import { connect } from "react-redux";
import { getUserOrderDetails, getCartItemListByOrderId } from "../../actions/userProfileActions";
import PropTypes from "prop-types";

class OrderDetails extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { userOrderId } = this.props.match.params;
        this.props.getUserOrderDetails(this.props.security.userInfo.sub, userOrderId);
        this.props.getCartItemListByOrderId(this.props.security.userInfo.sub, userOrderId);
    }

    render() {

        const { userOrder, paymentOption, billingAddress, shippingAddress, cartItems } = this.props;

        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="text-center">
                            <h4>
                                Order Details for Purchase #{userOrder && userOrder.id}
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
                                        {billingAddress && billingAddress.billingAddressName} <br />
                                        {billingAddress && billingAddress.billingAddressStreet1}
                                        {billingAddress && billingAddress.billingAddressStreet2} <br />
                                        {billingAddress && billingAddress.billingAddressCity} <br />
                                        {billingAddress && billingAddress.billingAddressZipcode} <br />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="panel panel-default height">
                                    <div className="panel-heading">
                                        <strong>Payment Information</strong>
                                    </div>
                                    <div className="panel-body">
                                        {paymentOption && paymentOption.holderName} <br />
                                        {paymentOption && paymentOption.cardNumber} <br />
                                        Exp Date: {paymentOption && paymentOption.expiryMonth} / {paymentOption && paymentOption.expiryYear} <br />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="panel panel-default height">
                                    <div className="panel-heading">
                                        <strong>Shipping Details</strong>
                                    </div>
                                    <div className="panel-body">
                                        {shippingAddress && shippingAddress.shippingAddressName} <br />
                                        {shippingAddress && shippingAddress.shippingAddressStreet1}
                                        {shippingAddress && shippingAddress.shippingAddressStreet2} <br />
                                        {shippingAddress && shippingAddress.shippingAddressCity} <br />
                                        {shippingAddress && shippingAddress.shippingAddressZipcode} <br />
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
                                    {cartItems.map(cartItem => (
                                        <tr>
                                            <td>{cartItem.product.name}</td>
                                            <td className="text-center">{cartItem.product.ourPrice}</td>
                                            <td className="text-center">{cartItem.qty}</td>
                                            <td className="text-center">{cartItem.subtotal}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td className="highrow" />
                                        <td className="highrow" />
                                        <td className="highrow text-right"><strong>Subtotal</strong></td>
                                        <td className="highrow text-right">
                                            ${(0 && userOrder.orderTotal).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td className="emptyrow" />
                                        <td className="emptyrow" />
                                        <td className="emptyrow text-right"><strong>Tax</strong></td>
                                        <td className="emptyrow text-right">
                                            ${(0 && userOrder.orderTotal * 0.06).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td className="emptyrow"><i className="fa fa-barcode fa-2x" /></td>
                                        <td className="emptyrow" />
                                        <td className="emptyrow text-right"><strong>Total</strong></td>
                                        <td className="emptyrow text-right">
                                            ${(0 && userOrder.orderTotal + userOrder.orderTotal * 0.06).toFixed(2)}</td>
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

OrderDetails.propTypes = {
    cartItems: PropTypes.object.isRequired,
    getCartItemListByOrderId: PropTypes.func.isRequired,
    getUserOrderDetails: PropTypes.func.isRequired,
    userOrder: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security,
    userOrder: state.userProfile.userOrderDetails.order,
    paymentOption: state.userProfile.userOrderDetails.paymentOption,
    billingAddress: state.userProfile.userOrderDetails.billingAddress,
    shippingAddress: state.userProfile.userOrderDetails.shippingAddress,
    cartItems: state.userProfile.cartItems
});

export default connect(
    mapStateToProps,
    { getUserOrderDetails, getCartItemListByOrderId }
)(OrderDetails);