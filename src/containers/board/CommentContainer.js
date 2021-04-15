import React from "react";
import Comment from "../../components/board/Comment";

function CommentContainer({ postId }) {
  return <Comment comments={comments}></Comment>;
}

const comments = [
  {
    id: 1,
    user: "user1",
    content: "Comment1",
    date: "2021-03-17",
  },
  {
    id: 2,
    user: "user2",
    content: "Comment2",
    date: "2021-03-17",
  },
  {
    id: 3,
    user: "user4",
    content: "Comment3",
    date: "2021-03-17",
  },
];

export default CommentContainer;
