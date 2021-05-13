import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import "./BoardList.scss";

const BoardList = ({ list }) => {
  
  const dateToStr = useCallback((d) => {
    const date = new Date(d);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString();
    const day = date.getDate();
    let hour = date.getHours();
    hour = hour >= 10 ? hour : "0" + hour;
    let minutes = date.getMinutes();
    minutes = minutes >= 10 ? minutes : "0" + minutes;
    let seconds = date.getSeconds();
    seconds = seconds >= 10 ? seconds : "0" + seconds;

    return (
      <>
        <div>{`${year} - ${month} - ${day}`}</div>
        <div>{`${hour} : ${minutes} : ${seconds}`}</div>
      </>
    );
  }, []);

  return (
    <div className="BoardList">
      <span className="write">
        <Link to={"board/write"}>
          <i className="fas fa-pen fa-1x" ></i>
        </Link>
      </span>

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
          {list.map((post, key) => {
            return (
              <tr key={key}
              >
                <td width="10%">{post.no}</td>
                <td width="40%">
                  <Link to={`board/detail/${post.no}`}>{post.title}</Link>
                </td>
                <td width="20%">{post.id}</td>
                <td width="20%">{dateToStr(post.date)}</td>
                <td width="10%">{post.views}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BoardList;
