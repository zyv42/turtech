import React, {Component} from 'react';
import { Pagination } from "react-bootstrap";

class Pagination extends Component {
    render() {
        return (
            <div className="col-12"
                 th:if="${productPage != null and productPage.totalPages > 1}">
                <nav aria-label="Pagination">
                    <ul className="pagination">
                        <li className="page-item disabled"
                            th:class="${!productPage.hasPrevious()} ? 'page-item disabled'">
                            <a className="page-link"
                               th:href="@{/products(page=${productPage.number})}">Previous</a>
                        </li>
                        <li className="page-item" th:each="pageNumber : ${pageNumbers}"
                            th:class="${pageNumber==productPage.number + 1} ? 'page-item active'">
                            <a className="page-link" th:href="@{/products(page=${pageNumber})}"
                               th:inline="text">[[${pageNumber}]]
                                <span className="sr-only"
                                      th:if="${pageNumber == productPage.number + 1}">(current)</span></a>
                        </li>
                        <li className="page-item"
                            th:class="${!productPage.hasNext()} ? 'page-item disabled'">
                            <a className="page-link"
                               th:href="@{/products(page=${productPage.number + 2})}">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Pagination;