import React from "react";
import PostView from "../../components/board/PostView";

function PostViewContainer() {
  return (
    <PostView post={post}/>
  );
}

const post = {id: 1,user: 123,title: "제목",content: "나 주식 어려워~!!!!!! 누가 대신해조~!!",date: "2021-03-17",views: 1,profileImage: "https://mdbootstrap.com/img/new/standard/city/041.jpg"};
export default PostViewContainer;
