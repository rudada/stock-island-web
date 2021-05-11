import React, { useEffect } from "react";
import { connect } from "react-redux";
import BoardList from "../../components/board/BoardList";
import { listPost } from "../../modules/postList";
import Pagination from '../../components/common/Pagination'

function BoardListContainer({ listPost, page, result, error, loading }) {
  useEffect(() => {
    const fn = async () => {
      try {
        await listPost(page);
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [page]);

  return (
    <>
      {error ? (
        "error"
      ) : !result || loading ? (
        "loading"
      ) : (
        <>
          <BoardList list={result.list}></BoardList>
        </>
      )}
    </>
  );
}

export default connect(
  ({ postList, loading }) => ({
    page: postList.page,
    result: JSON.parse(postList.result),
    error: postList.error,
    loading: loading["postList/LIST_POST"],
  }),
  {
    listPost,
  }
)(BoardListContainer);
