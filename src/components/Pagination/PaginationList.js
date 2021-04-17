import React from "react";
import { Link } from "react-router-dom";

const paginationList = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= props.total; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        {pageNumbers.map((num) => (
          <li className="page-item" key={num}>
            <Link
              className="page-link"
              to="#"
              onClick={() => props.clicked(num)}
            >
              {num}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default paginationList;
