import React from "react";
import "./BoardDetail.scss";
import ProfileImageComponent from "../common/ProfileImageComponent";

const Post = ({post}) => {
  const {title, content, date, views} = post
  return(
    <div className="post-content">
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
}

const BoardDetail = ({ post }) => {
  return (
    <div className="BoardDetail">
      <div className="column-1">
        <div className="post-userinfo">
          <ProfileImageComponent
            url={post.profileImage}
          ></ProfileImageComponent>
          <div className="userid">userid</div>
        </div>
      </div>

      <div className="column-2"><Post post={post}></Post></div>

      <div className="column-3"></div>
      
    </div>
  );
};

export default React.memo(BoardDetail);
