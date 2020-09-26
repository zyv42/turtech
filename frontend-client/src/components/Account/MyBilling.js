import React, {Component} from 'react';
import { getUserPayment } from "../../actions/userProfileActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AddNewPayment from "./AddNewPayment";
import {Button} from "react-bootstrap";

class MyBilling extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.setDefaultUserPayment(this.state.userPayment.id);
    }

    componentDidMount() {
        this.props.getUserPayment();
    }

    render() {

        const { userPayments } = this.props.userPayment;

        return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Billing</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="@{/listOfCreditCards}">
                                        List of Credit Cards</Link></li>
                                <li className="breadcrumb-item">
                                    <Link to="@{/addNewCreditCard}">
                                        Add(Update) Credit Card</Link></li>
                            </ol>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <form onSubmit={this.onSubmit}>
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>Default</th>
                                            <th>Credit Card</th>
                                            <th>Operations</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {userPayments.map(userPayment => (
                                            <tr>
                                                <td>
                                                    <input type="radio"
                                                           name="defaultUserPaymentId"
                                                           value={userPayment.id}
                                                           checked={userPayment.defaultPayment} />
                                                </td>
                                                <td>
                                                    {userPayment.cardName}
                                                </td>
                                                <td>
                                                    {
                                                        // Buttons to implement "updateUserShipping" and "removeUserShipping" methods
                                                    }
                                                    <Button className="fa fa-pencil"
                                                        //onClick={}
                                                    >
                                                    </Button>&nbsp;&nbsp;
                                                    <Button className="fa fa-times"
                                                        //onClick={}
                                                    >
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
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
        );
    }
}

MyBilling.propTypes = {
    userPayment: PropTypes.object.isRequired,
    getUserPayment: PropTypes.func.isRequired,
    setDefaultUserPayment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    userPayment: state.userProfile.userPayment
});

export default connect(
    mapStateToProps,
    { getUserPayment }
)(MyBilling);