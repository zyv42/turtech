import React, {Component} from 'react';

class UserReview extends Component {
    render() {
        return (
            <div>
                <div className="review"
                     th:each="userReview, iStat : ${userReviewPage.content}">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    <span th:text="${userReview.getTimestamp().toLocalDate() + ' ' + userReview.getTimestamp().toLocalTime()}" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" /> by
                    <span th:text="${userReview.getUser().getFirstName()} + ' ' + ${userReview.getUser().getLastName()}" />
                    <p className="blockquote">
                        <p className="mb-0" th:text="${userReview.getText()}" />
                    </p>
                    <hr />
                </div>
            </div>
        );
    }
}

export default UserReview;