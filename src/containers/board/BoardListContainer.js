import React, { useEffect } from "react";
import { connect } from "react-redux";
import BoardList from "../../components/board/BoardList";
import { listPost, changePage } from "../../modules/postList";
import Pagination from '../../components/common/Pagination'

const LIMIT = 10;

function BoardListContainer({ listPost, changePage,  page, result, error, loading }) {
  useEffect(async () => {
    const fn = async () => {
      try {
        await listPost(page * LIMIT);
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
          <Pagination
            totalPage={parseInt(result.total % LIMIT == 0 ? result.total / LIMIT : result.total / LIMIT + 1)}
            currentPage={page}
            changePage={(num) => {changePage(num);}}
          ></Pagination>
        </>
      )}
    </>
  );
}

export default connect(
  ({ postList, loading }) => ({
    page: postList.page,
    result: postList.result,
    error: postList.error,
    loading: loading["postList/LIST_POST"],
  }),
  {
    listPost,
    changePage
  }
)(BoardListContainer);
