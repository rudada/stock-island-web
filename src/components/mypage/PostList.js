import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import { pink } from "@material-ui/core/colors";
import TabComponent from '../common/TabComponent'
import ListComponent from '../common/ListComponent'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: pink['500'],
    borderRadius: 4,
    marginBottom: 10,
  },
}));

function PostList(props) {
  const { posts, comments } = props;
  const classes = useStyles();

  return (
    <div className={`post-list ${classes.root}`} >
      <TabComponent tabNames={["작성한 게시글", "작성한 댓글"]}>
          <ListComponent columnSize={4} columnNames={["NO", "TITLE", "DATE", "VIEWS"]} contents={posts}></ListComponent>
          <ListComponent columnSize={3} columnNames={["NO", "COMMENT", "DATE"]} contents={comments}></ListComponent>
      </TabComponent>
    </div>
  );
}




export default PostList;