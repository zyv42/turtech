import React, {Component} from 'react';
import { getUserPayment } from "../../actions/userProfileActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AddNewPayment from "./AddNewPayment";

class MyBilling extends Component {

    componentDidMount() {
        this.props.getUserPayment();
    }

    render() {

        const { userPayment } = this.props.userPayment;

        return (
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
                            <hr/>
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
                                                       th:checked="${userPayment.defaultPayment}"/></td>
                                            <td th:text="${userPayment.cardName}"/>
                                            <td><a
                                                th:href="@{/updateCreditCard(id=${userPayment.id})}"><i
                                                className="fa fa-pencil"/></a>&nbsp;&nbsp;<a
                                                th:href="@{/removeCreditCard(id=${userPayment.id})}"><i
                                                className="fa fa-times"/></a></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <button className="btn btn-primary"
                                            type="submit">Save
                                    </button>
                                </form>
                            </div>

                            <AddNewPayment />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

MyBilling.propTypes = {
    userPayment: PropTypes.object.isRequired,
    getUserPayment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    userPayment: state.userPayment
});

export default connect(
    mapStateToProps,
    { getUserPayment }
)(MyBilling);