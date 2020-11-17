import React, {Component} from "react";
import { connect } from "react-redux";
import { getUserOrders } from "../../actions/userProfileActions";
import PropTypes from "prop-types";
import OrderDetails from "./OrderDetails";
import {Link, Route, Switch} from "react-router-dom";
import SecuredRoute from "../../securityUtils/SecuredRoute";

class MyOrders extends Component {

    componentDidMount() {
        this.props.getUserOrders(this.props.security.userInfo.sub);
    }

    renderUserOrders = () => {
        const {userOrders} = this.props;

        if (userOrders && userOrders.length === 0) {
            return (
                <div className="alert alert-info">No orders yet.</div>
            );
        } else {
            return (
                <div>
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
                        {userOrders.map(userOrder => (
                            <tr>
                                <td><Link to={`/user-cabinet/orders/${userOrder.id}`}>
                                    {new Date(userOrder.orderDate).toLocaleDateString()}</Link></td>
                                <td>{userOrder.id}</td>
                                <td>{userOrder.orderTotal}</td>
                                <td>{userOrder.orderStatus}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Orders</h4>
                            <hr />
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/user-cabinet/orders"
                               component={this.renderUserOrders} />
                        <Route exact path="/user-cabinet/orders/:userOrderId"
                               component={OrderDetails} />
                    </Switch>
                </div>
            </div>
        );
    }
}

MyOrders.propTypes = {
    userOrders: PropTypes.object.isRequired,
    getUserOrders: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    security: state.security,
    userOrders: state.userProfile.userOrders
});

export default connect(
    mapStateToProps,
    { getUserOrders }
)(MyOrders);