import React from "react";
import { connect } from "react-redux";
import { changePage } from "../../modules/postList";
import Pagination from "../../components/common/Pagination";


const LIMIT = 10;
function PaginationContainer({ changePage, page, result, error, loading }) {


  return (
    <>
      {error ? (
        "error"
      ) : !result || loading ? (
        "loading"
      ) : (
          <Pagination
            totalPage={parseInt(result.total % LIMIT == 0 ? result.total / LIMIT : result.total / LIMIT + 1)}
            currentPage={page}
            changePage={(num) => {changePage(num);}}
          ></Pagination>
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
    changePage,
  }
)(PaginationContainer);
