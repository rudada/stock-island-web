import React, { useState, useCallback } from "react";
import "./Pagination.scss";

const position = [
  "pos-0",
  "pos-1",
  "pos-2",
  "pos-3",
  "pos-4",
  "pos-5",
  "pos-6",
];

const Pagination = ({ totalPage, currentPage, changePage }) => {
  const [pos, setPos] = useState(3);
  const page = parseInt(currentPage) + 1;

  /* mouse hover styling */
  const onMouseOver = useCallback((e) => {
    setPos(e.currentTarget.getAttribute("pos"));
  }, []);

  const onMouseLeave = useCallback((e) => {
    setPos(3);
  });

  const isAvailable = useCallback((num) => num > 0 && num <= totalPage);

  /* click event */
  const onChangePage = useCallback((e) => {
    console.log(e);
    changePage(e.currentTarget.getAttribute("value"));
  });

  return (
    <div className="Pagination" onMouseLeave={onMouseLeave}>
      <div className="pgn">
        <ul className="pagination-list">
          <li className="prev">
            <a
              className={isAvailable(page - 1) ? "abled" : "disabled"}
              onMouseOver={onMouseOver}
              onClick={onChangePage}
              rel="prev"
              pos={0}
              value={currentPage - 1}
            >
              <i className="fas fa-chevron-left prev-icon"></i>
              <span>Prev</span>
            </a>
          </li>

          <li className="pgn-item">
            <a
              className={isAvailable(page - 2) ? "abled" : "disabled"}
              onMouseOver={onMouseOver}
              onClick={onChangePage}
              pos={1}
              value={currentPage - 2}
            >
              {isAvailable(page - 2) ? page - 2 : ``}
            </a>
            <a
              className={isAvailable(page - 1) ? "abled" : "disabled"}
              onMouseOver={onMouseOver}
              onClick={onChangePage}
              pos={2}
              value={currentPage - 1}
            >
              {isAvailable(page - 1) ? page - 1 : ``}
            </a>
            <strong
              className="current"
              onMouseOver={onMouseOver}
              href="#"
              pos={3}
            >
              {page}
            </strong>
            <a
              className={isAvailable(page + 1) ? "abled" : "disabled"}
              onMouseOver={onMouseOver}
              onClick={onChangePage}
              pos={4}
              value={currentPage + 1}
            >
              {isAvailable(page + 1) ? page + 1 : ``}
            </a>
            <a
              className={isAvailable(page + 2) ? "abled" : "disabled"}
              onMouseOver={onMouseOver}
              onClick={onChangePage}
              pos={5}
              value={currentPage + 2}
            >
              {isAvailable(page + 2) ? page + 2 : ``}
            </a>
          </li>

          <li className="next">
            <a
              className={isAvailable(page + 1) ? "abled" : "disabled"}
              onMouseOver={onMouseOver}
              onClick={onChangePage}
              rel="next"
              pos={6}
              value={currentPage + 1}
            >
              <i className="fas fa-chevron-right next-icon"></i>
              <span>Next</span>
            </a>
          </li>
          <li className={["magic-line", position[pos]].join(" ")}></li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
