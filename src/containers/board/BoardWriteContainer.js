import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import BoardWrite from "../../components/board/BoardWrite";
import { writePost, updatePost } from "../../modules/postWrite";

function BoardWriteContainer({ writePost, updatePost, title, content, post, error, postId, loading, history }) {

  useEffect(() =>{
    if(error) {
      console.log(error);
    } else if(post) {
      history.goBack();  
    } 
  }, [error, post])

  const onPost = () => { 
    if(postId) updatePost(postId, title, content);
    else writePost(title, content);
  };

  const onCancel = () => { history.goBack(); };

  return (
    <BoardWrite
      onPost={onPost}
      onCancel={onCancel}
      isEdit={!!postId}
    ></BoardWrite>
  );
}

export default withRouter(
  connect(
    ({ postWrite, loading }) => ({
      title: postWrite.title,
      content: postWrite.content,
      post: postWrite.post,
      error: postWrite.error,
      postId: postWrite.postId,
      loading: loading["postWrite/WRITE_POST"],
    }),
    {
      writePost,
      updatePost,
    }
  )(BoardWriteContainer)
);
