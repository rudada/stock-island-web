import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import BoardWrite from "../../components/board/BoardWrite";
import { writePost } from "../../modules/postWrite";

function BoardWriteContainer({ writePost, post, error, loading, history }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onPost = () => {
    try {
      writePost(title, content);
    } catch (e) {
      console.log(e);
    }
  };

  const onCancel = () => {
    history.goBack();
  };

  return (
    <BoardWrite
      title={title}
      content={content}
      changeTitle={(title) => setTitle(title)}
      changeContent={(content) => setContent(content)}
      onPost={() => onPost()}
      onCancel={() => onCancel()}
    ></BoardWrite>
  );
}

export default withRouter(
  connect(
    ({ postWrite, loading }) => ({
      post: postWrite.post,
      error: postWrite.error,
      loading: loading["postWrite/WRITE_POST"],
    }),
    {
      writePost,
    }
  )(BoardWriteContainer)
);
