import React from "react";
import _ from "lodash";

function Pagination({ currentPage, pageSize, items, onPageChange }) {
  const numberPages = Math.ceil(items / pageSize);
  if (numberPages === 1) return null;
  const pages = _.range(1, numberPages + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
