import React from "react";
import BoardDetail from "../../components/board/BoardDetail";
import Comment from "../../components/board/Comment";

function BoardDetailContainer() {
  return (
    <>
      <BoardDetail post={post} />
      <Comment comments={comments}></Comment>
    </>
  );
}

const post = {
  id: 1,
  user: 123,
  title: "제목",
  content: "나 주식 어려워~!!!!!! 누가 대신해조~!!",
  date: "2021-03-17",
  views: 1,
  profileImage: "https://mdbootstrap.com/img/new/standard/city/041.jpg",
};
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

export default BoardDetailContainer;
