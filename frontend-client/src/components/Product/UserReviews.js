import React, {Component} from 'react';

class UserReviews extends Component {
    render() {
        return (
            <div>
                <div className="col-12" id="reviews">
                    <div className="card border-light mb-3">
                        <div className="card-header bg-primary text-white text-uppercase">
                            <i className="fa fa-comment" /> Reviews
                        </div>
                        <div className="card-body">
                            <div th:if="${userReviewPage.isEmpty()}"
                                 className="alert alert-info">
                                Oops, no reviews are present yet. Maybe you should leave the first one?
                            </div>
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

                        <!-- Reviews Pagination -->
                        <div className="col-12"
                             th:if="${userReviewPage != null and userReviewPage.totalPages > 1}">
                            <nav aria-label="Pagination">
                                <ul className="pagination">
                                    <li className="page-item disabled"
                                        th:class="${!userReviewPage.hasPrevious()} ? 'page-item disabled'">
                                        <a className="page-link"
                                           th:href="@{/productDetails#reviews(id=${product.id}, page=${userReviewPage.number})}">Previous</a>
                                    </li>
                                    <li className="page-item"
                                        th:each="pageNumber : ${pageNumbers}"
                                        th:class="${pageNumber==userReviewPage.number + 1} ? 'page-item active'">
                                        <a className="page-link"
                                           th:href="@{/productDetails#reviews(id=${product.id}, page=${pageNumber})}"
                                           th:inline="text">[[${pageNumber}]]
                                            <span className="sr-only"
                                                  th:if="${pageNumber == userReviewPage.number + 1}">(current)</span></a>
                                    </li>
                                    <li className="page-item"
                                        th:class="${!userReviewPage.hasNext()} ? 'page-item disabled'">
                                        <a className="page-link"
                                           th:href="@{/productDetails#reviews(id=${product.id}, page=${userReviewPage.number + 2})}">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <!-- Leave a review -->
                        <div className="card">
                            <div className="card-body">
                                {
                                    //TODO implement "leave review" action
                                }
                                <form>
                                    <div className="form-group">
                                        <label>Your Review</label>
                                        <textarea className="form-control"
                                                  id="text"
                                                  name="text"
                                                  rows="6"
                                                  required="required" />
                                    </div>
                                    <div className="mx-auto">
                                        <button type="submit"
                                                className="btn btn-primary text-right">Leave the review</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserReviews;