import React from "react";
import "./BoardDetail.scss";
import ProfileImageComponent from "../common/ProfileImageComponent";

const Post = ({ post }) => {
  const {
    BOARD_CONTENT: content,
    BOARD_REGIST_DATE: date,
    BOARD_TITLE: title,
    BOARD_VIEW_COUNT: views,
  } = post;
  return (
    <div className="Post">
      <h4 className="title">{title}</h4>
      <hr />
      <div className="content">{content}</div>
      <div className="info">
        <span className="date">Updated on {date}, </span>
        <span className="views">
          <i className="far fa-eye"></i>
          {views}
        </span>
      </div>
    </div>
  );
};

const BoardDetail = ({ post, editButton, removeButton }) => {
  return (
    <div className="BoardDetail">
      <div className="buttons">
        {editButton} {removeButton}
      </div>
      <div className="PostDetail">
        <div className="column-1">
          <div className="post-userinfo">
            <ProfileImageComponent
              url={post.profileImage}
            ></ProfileImageComponent>
            <div className="userid">{post.MEMBER_NO}</div>
          </div>
        </div>

        <div className="column-2">
          <Post post={post}></Post>
        </div>

        <div className="column-3"></div>
      </div>
    </div>
  );
};

export default React.memo(BoardDetail);
