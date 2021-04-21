import React, { useCallback } from "react";
import "./BoardList.scss";

const BoardList = ({ loading, error, result }) => {
  let res;
  if(!loading) res = JSON.parse(result); 
  if (error) return <div>에러 발생</div>;

  return (
    <div className="BoardList">
      <span className="write">
        <a>
          <i
            className="fas fa-pen fa-1x"
            onClick={() => (location.href = "board/write")}
          ></i>
        </a>
      </span>

      {loading && "로딩중"}
      {!loading && res && (
        <table className="board-list">
          <thead>
            <tr>
              <td width="10%">no.</td>
              <td width="40%">TITLE</td>
              <td width="20%">ID</td>
              <td width="20%">DATE</td>
              <td width="10%">VIEWS</td>
            </tr>
          </thead>
          <tbody>
            {res.list.map((post, key) => {
              return (
                <tr
                  key={key}
                  onClick={() => (location.href = `board/detail/${post.no}`)}
                >
                  <td width="10%">{post.no}</td>
                  <td width="40%">{post.title}</td>
                  <td width="20%">{post.id}</td>
                  <td width="20%">{post.date}</td>
                  <td width="10%">{post.views}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BoardList;
