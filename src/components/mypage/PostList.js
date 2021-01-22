import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import { pink } from "@material-ui/core/colors";
import Pagination from "@material-ui/lab/Pagination";
import TabComponent from '../common/TabComponent'
import ListComponent from '../common/ListComponent'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: pink['500'],
    borderRadius: 4,
    marginBottom: 10,
  },
  pagination: {
    '& button': {
      color: 'white'
    },
    '& button:focus': {
      outline: 'none',
    },
    '& ul': {
      textAlign: 'center',
      display: 'block',
      '& li': {
        display: 'inline-block'
      }
    }
  }
}));

function PostList(props) {
  const { posts, comments } = props;
  const classes = useStyles();

  //현재 페이지번호
  const [currentPostpage, setPostpage] = useState(1);
  const [currentCommentpage, setCommentpage] = useState(1);

  //한 번에 보여줄 게시물 수
  const LIMIT = 10;

  //전체 페이지
  const totalPostpage = Math.ceil(posts.length / LIMIT);
  const totalCommentpage = Math.ceil(comments.length / LIMIT);

  //현재 페이지에서 보여주는 내용들
  const currentPosts = posts.slice(LIMIT * (currentPostpage - 1), LIMIT * currentPostpage);
  const currentComments = comments.slice(LIMIT * (currentCommentpage - 1), LIMIT * currentCommentpage);

  const postpageChange = (event, newValue) => {
    setPostpage(newValue);
  };
  const commentpageChange = (event, newValue) => {
    setCommentpage(newValue);
  };

  return (
    <div className={`post-list ${classes.root}`} >
      <TabComponent tabNames={["작성한 게시글", "작성한 댓글"]}>
        <div>
          <ListComponent columnSize={4} columnNames={["NO", "TITLE", "DATE", "VIEWS"]} contents={currentPosts}></ListComponent>
          <Pagination className={classes.pagination} count={totalPostpage} showFirstButton showLastButton page={currentPostpage} onChange={postpageChange} />
        </div>
        <div>
          <ListComponent columnSize={3} columnNames={["NO", "COMMENT", "DATE"]} contents={currentComments}></ListComponent>
          <Pagination className={classes.pagination} count={totalCommentpage} showFirstButton showLastButton page={currentCommentpage} onChange={commentpageChange} />
        </div>
      </TabComponent>
    </div>
  );
}




export default PostList;