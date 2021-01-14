import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { pink } from "@material-ui/core/colors";
import Pagination from "@material-ui/lab/Pagination";


// const StyledTabs = withStyles({
//   indicator: {
//     display: 'flex',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//     '& > span': {                         //밑줄
//       maxWidth: 40,
//       width: '100%',
//       backgroundColor: 'white',
//     },
//   },
// })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const panelStyle = {
    justifyContent: 'center',
    padding: '10px',
    marginTop: '20px'
  }

  return (
    <div
      hidden={value !== index}
      id={`tabpanel_${index}`}
      {...other}
      style={panelStyle}
    >
      {value === index && (
        <div>
          {children}<br></br>
        </div>
      )}
    </div>
  );
}

function Post(props) {
  const { no, title, date, view } = props;
  return (
    <tr>
      <td width="10%">{no}</td>
      <td width="60%">{title}</td>
      <td width="20%">{date}</td>
      <td width="10%">{view}</td>
    </tr>
  )
}
function Comment(props) {
  const { no, comment, date } = props;
  return (
    <tr>
      <td width="10%">{no}</td>
      <td width="70%">{comment}</td>
      <td width="20%">{date}</td>
    </tr>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: pink['500'],
    borderRadius: 4,
    marginBottom: 10,
  },
  tab: {
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    }
  },
  tabs: {
    '& > div > span': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {                         //밑줄
        maxWidth: 40,
        width: '100%',
        backgroundColor: 'white',
      }
    }
  },
  table: {
    width: "100%",
    tableLayout: 'fixed',
    '& > tbody > tr': {
      maxHeight: '30px'
    }

  }

}));



function PostList(props) {
  const { posts, comments } = props;
  const classes = useStyles();

  const [currentTab, setTab] = useState(0);
  const [currentPostpage, setPostpage] = useState(1);
  const [currentCommentpage, setCommentpage] = useState(1);

  //한 번에 보여줄 게시물 수
  const LIMIT = 10;

  //전체 페이지
  const totalPostpage = Math.ceil(posts.length / LIMIT);
  const totalCommentpage = Math.ceil(comments.length / LIMIT);

  const currentPosts = posts.slice(LIMIT * (currentPostpage - 1), LIMIT * currentPostpage);
  const currentComments = comments.slice(LIMIT * (currentCommentpage - 1), LIMIT * currentCommentpage);


  const tabChange = (event, newValue) => {
    setTab(newValue);
  };
  const postpageChange = (event, newValue) => {
    setPostpage(newValue);
  };
  const commentpageChange = (event, newValue) => {
    setCommentpage(newValue);
  };

  return (
    <div className="postlist">
      <div className={classes.root} >
        <Tabs className={classes.tabs} value={currentTab} onChange={tabChange} TabIndicatorProps={{ children: <span /> }}>
          <Tab className={classes.tab} label="작성한 게시글" />
          <Tab className={classes.tab} label="작성한 댓글" />
        </Tabs>

        <TabPanel value={currentTab} index={0}>
          <table className={classes.table}>
            <thead>
              <Post no="NO." title="TITLE" date="DATE" view="VIEWS"></Post>
            </thead>
            <tbody>
              {currentPosts.map((data, index) => {
                return (
                  <Post key={index} no={data['no']} title={data['title']} date={data['date']} view={data['view']}></Post>
                )
              })}
            </tbody>
          </table>
          <Pagination count={totalPostpage} showFirstButton showLastButton page={currentPostpage} onChange={postpageChange} />
        </TabPanel>

        <TabPanel value={currentTab} index={1}>
          <table className={classes.table}>
            <thead>
              <Comment no="NO." comment="COMMENT" date="DATE"></Comment>
            </thead>
            <tbody>
              {currentComments.map((data, index) => {
                return (
                  <Comment key={index} no={data['no']} comment={data['comment']} date={data['date']}></Comment>
                )
              })}
            </tbody>
          </table>
          <Pagination count={totalCommentpage} showFirstButton showLastButton page={currentCommentpage} onChange={commentpageChange} />
        </TabPanel>
      </div>
    </div>
  );
}




export default PostList;