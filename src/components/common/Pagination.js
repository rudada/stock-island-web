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
  const cpage = parseInt(currentPage);
  const page = cpage + 1;

  /* mouse hover styling */
  const onMouseOver = useCallback((e) => {
    setPos(e.currentTarget.getAttribute("pos"));
  }, []);
  const onMouseLeave = useCallback((e) => {
    setPos(3);
  }, []);

  const isAvailable = useCallback((num) => num >= 0 && num < totalPage, []);

  /* page change event */
  const onChangePage = useCallback((e) => {
    changePage(e.currentTarget.getAttribute("value"));
  }, []);

  const PgnItem = ({ pos, value, children }) => {
    return (
      <a
        className={isAvailable(value) ? "abled" : "disabled"}
        onMouseOver={onMouseOver}
        onClick={onChangePage}
        pos={pos}
        value={value}
      >
        {children}
      </a>
    );
  };

  return (
    <div className="Pagination" onMouseLeave={onMouseLeave}>
      <div className="pgn">
        <ul className="pagination-list">
          <li className="prev">
            <PgnItem pos={0} value={cpage - 1}>
              <i className="fas fa-chevron-left prev-icon"></i>
              <span>Prev</span>
            </PgnItem>
          </li>

          <li className="pgn-item">
            <PgnItem pos={1} value={cpage - 2}>
              <span className="page-num">{page - 2}</span>
            </PgnItem>
            <PgnItem pos={2} value={cpage - 1}>
              <span className="page-num">{page - 1}</span>
            </PgnItem>

            <strong
              className="current"
              onMouseOver={onMouseOver}
              href="#"
              pos={3}
            >
              {page}
            </strong>

            <PgnItem pos={4} value={cpage + 1}>
              <span className="page-num">{page + 1}</span>
            </PgnItem>

            <PgnItem pos={5} value={cpage + 2}>
              <span className="page-num">{page + 2}</span>
            </PgnItem>
          </li>

          <li className="next">
            <PgnItem pos={6} value={cpage + 1}>
              <i className="fas fa-chevron-right next-icon"></i>
              <span>Next</span>
            </PgnItem>
          </li>

          <li className={["magic-line", position[pos]].join(" ")}></li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
