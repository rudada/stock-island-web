import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { changeField, initialize } from "../../modules/postWrite";
import BoardEditor from "../../components/board/BoardEditor";

function BoardEditorContainer({ changeField, initialize, title, content, postId }) {

  useEffect(() => {
    return() => {initialize();};
  }, []);
  
  const onChangeField = useCallback((payload) => changeField(payload));

  return (
    <BoardEditor
      title={title}
      content={content}
      onChangeField={onChangeField}
    ></BoardEditor>
  );
}

export default connect(
  ({ postWrite }) => ({
    title: postWrite.title,
    content: postWrite.content,
    postId: postWrite.postId
  }),
  { changeField, initialize }
)(BoardEditorContainer);
