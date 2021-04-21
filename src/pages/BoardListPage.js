import React from "react";
import BoardListContainer from "../containers/board/BoardListContainer";
import PaginationContainer from "../containers/board/PaginationContainer";

function BoardListPage() {
  return (
    <>
      <BoardListContainer></BoardListContainer>
      <PaginationContainer></PaginationContainer>
    </>
  );
}

export default BoardListPage;
