import React, {Component} from 'react';
import MyProfile from "./MyProfile";
import MyOrders from "./MyOrders";
import MyBilling from "./MyBilling";
import MyShipping from "./MyShipping";

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
                        <MyProfile />

                        {
                            // Orders information
                        }
                        <MyOrders />

                        {
                            // Billing information
                        }
                        <MyBilling />

                        {
                            // Shipping information
                        }
                        <MyShipping />

                    </div>
                </div>
            </div>
        );
    }
}

export default MyAccount;