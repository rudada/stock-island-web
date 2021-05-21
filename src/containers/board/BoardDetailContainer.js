import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readPost, unloadPost } from "../../modules/postRead";
import { setPost } from "../../modules/postWrite";
import BoardDetail from "../../components/board/BoardDetail";
import BoardButton from "../../components/common/BoardButton";
import { removePost } from "../../lib/api/board";

function BoardDetailContainer({
  readPost,
  unloadPost,
  setPost,
  post,
  error,
  loading,
  post_id,
  history
}) {
  useEffect(() => {
    readPost(post_id);
    return () => {
      unloadPost();
    };
  }, [post_id]);

  const onEdit = () => {
    setPost(post[0], post_id);
    history.push('/board/write');
  }

  const onRemove = async () => {
    try {
      await removePost({post_id});
      history.push('/board');
    } catch (e) {console.log(e);}
  }

  return (
    <>
      {error ? (
        "error"
      ) : !post || loading ? (
        "loading"
      ) : (
        <BoardDetail
          post={post[0]}
          editButton={<i className="fas fa-eraser fa-lg" onClick={onEdit}></i>}
          removeButton={<i className="far fa-trash-alt fa-lg" onClick={onRemove}></i>}
        />
      )}
    </>
  );
}

export default withRouter(
  connect(
  ({ postRead, loading }) => ({
    post: postRead.post,
    error: postRead.error,
    loading: loading["postRead/READ_POST"],
  }),
  { readPost, unloadPost, setPost }
)(BoardDetailContainer)
);
