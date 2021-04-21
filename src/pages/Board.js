import React from "react";
import { Route } from "react-router-dom";
import BoardListPage from "./BoardListPage";
import BoardDetailPage from "./BoardDetailPage";
import BoardWritePage from "./BoardWritePage";
import "./Board.scss";

function Board({ match }) {
  return (
    // <div className="bg_image">
    <div className="content-board">
      <h2 className="board-title">게시판</h2>
      <Route exact path={match.path} component={BoardListPage}></Route>
      <Route
        path={`${match.path}/detail/:postId`}
        component={BoardDetailPage}
      ></Route>
      <Route path={`${match.path}/write`} component={BoardWritePage}></Route>
    </div>
    // </div>
  );
}

export default Board;
