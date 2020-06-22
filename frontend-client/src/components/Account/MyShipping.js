import React, {Component} from 'react';
import { getUserShippingAddresses, addUserShippingAddress, updateUserShippingAddress, removeUserShippingAddress, setDefaultUserShippingAddress} from "../../actions/userProfileActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class MyShipping extends Component {

    componentDidMount() {
        // TODO Consider removing parameter of userId from the method on frontend side and move it to backend only
        this.props.getUserShippingAddresses();
    }

    render() {

        const { userShippingAddresses } = this.props.userShipping;

        return (
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
                            <hr/>
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
                                               th:checked="${userShipping.userShippingDefault}"/><span>default</span>
                                    </td>
                                    <td
                                        th:text="${userShipping.userShippingStreet1}+', '+
														${userShipping.userShippingCity}"/>
                                    <td><a
                                        th:href="@{/updateUserShipping(id=${userShipping.id})}"><i
                                        className="fa fa-pencil"/></a>&nbsp;&nbsp;<a
                                        th:href="@{/removeUserShipping(id=${userShipping.id})}"><i
                                        className="fa fa-times"/></a></td>
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
                </div>
            </div>
        );
    }
}

MyShipping.propTypes = {
    userShipping: PropTypes.object.isRequired,
    getUserShippingAddresses: PropTypes.func.isRequired,
    addUserShippingAddress: PropTypes.func.isRequired,
    updateUserShippingAddress: PropTypes.func.isRequired,
    removeUserShippingAddress: PropTypes.func.isRequired,
    setDefaultUserShippingAddress: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    userShipping: state.userShipping
});

export default connect(
    mapStateToProps,
    { getUserShippingAddresses }
)(MyShipping);