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

const Pagination = ({ totalPage, currentPage }) => {
  const [pos, setPos] = useState(3);

  const onMouseOver = useCallback((e) => {
    setPos(e.currentTarget.getAttribute("value"));
  }, []);

  const onMouseLeave = useCallback((e) => {
    setPos(3);
  });

  return (
    <div className="Pagination" onMouseLeave={onMouseLeave}>
      <div className="pgn">
        <ul className="pagination-list">
          <li className="prev">
            <a onMouseOver={onMouseOver} href="#" rel="prev" value={0}>
              <i className="fas fa-chevron-left prev-icon"></i>
              <span>Prev</span>
            </a>
          </li>

          <li className="pgn-item">
            <a onMouseOver={onMouseOver} href="#" value={1}>
              3
            </a>
            <a onMouseOver={onMouseOver} href="#" value={2}>
              4
            </a>
            <strong
              className="current"
              onMouseOver={onMouseOver}
              href="#"
              value={3}
            >
              5
            </strong>
            <a onMouseOver={onMouseOver} href="#" value={4}>
              6
            </a>
            <a onMouseOver={onMouseOver} href="#" value={5}>
              7
            </a>
          </li>

          <li className="next">
            <a onMouseOver={onMouseOver} href="#" rel="next" value={6}>
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
