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
        this.props.getUserOrderDetails(this.props.security.userInfo.name, userOrderId);
        this.props.getCartItemListByOrderId(this.props.security.userInfo.name, userOrderId);
    }

    render() {

        const { userOrder, cartItems } = this.props;

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
                                        {userOrder && userOrder.billingAddress && userOrder.billingAddress.billingAddressName} <br />
                                        {userOrder && userOrder.billingAddress && userOrder.billingAddress.billingAddressStreet1}
                                        {userOrder && userOrder.billingAddress && userOrder.billingAddress.billingAddressStreet2} <br />
                                        {userOrder && userOrder.billingAddress && userOrder.billingAddress.billingAddressCity} <br />
                                        {userOrder && userOrder.billingAddress && userOrder.billingAddress.billingAddressZipcode} <br />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="panel panel-default height">
                                    <div className="panel-heading">
                                        <strong>Payment Information</strong>
                                    </div>
                                    <div className="panel-body">
                                        {userOrder && userOrder.payment && userOrder.payment.holderName} <br />
                                        {userOrder && userOrder.payment && userOrder.payment.cardNumber} <br />
                                        Exp Date: {userOrder && userOrder.payment && userOrder.payment.expiryMonth} / {userOrder && userOrder.payment && userOrder.payment.expiryYear} <br />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="panel panel-default height">
                                    <div className="panel-heading">
                                        <strong>Billing Details</strong>
                                    </div>
                                    <div className="panel-body">
                                        {userOrder && userOrder.shippingAddress && userOrder.shippingAddress.shippingAddressName} <br />
                                        {userOrder && userOrder.shippingAddress && userOrder.shippingAddress.shippingAddressStreet1}
                                        {userOrder && userOrder.shippingAddress && userOrder.shippingAddress.shippingAddressStreet2} <br />
                                        {userOrder && userOrder.shippingAddress && userOrder.shippingAddress.shippingAddressCity} <br />
                                        {userOrder && userOrder.shippingAddress && userOrder.shippingAddress.shippingAddressZipcode} <br />
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
                                            ${(userOrder.orderTotal + 0).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td className="emptyrow" />
                                        <td className="emptyrow" />
                                        <td className="emptyrow text-right"><strong>Tax</strong></td>
                                        <td className="emptyrow text-right">
                                            ${(userOrder.orderTotal * 0.06).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td className="emptyrow"><i className="fa fa-barcode fa-2x" /></td>
                                        <td className="emptyrow" />
                                        <td className="emptyrow text-right"><strong>Total</strong></td>
                                        <td className="emptyrow text-right">
                                            ${(userOrder.orderTotal + userOrder.orderTotal * 0.06).toFixed(2)}</td>
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
    userOrder: state.userProfile.userOrder,
    cartItems: state.userProfile.cartItems
});

export default connect(
    mapStateToProps,
    { getCartItemListByOrderId }
)(OrderDetails);