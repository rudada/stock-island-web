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
    marginTop: '10px',
    textAlign: 'center',
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
          {children}
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
      <td width="60%"><a href="/board">{title}</a></td>
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
      <td width="70%"><a href="/board">{comment}</a></td>
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
    '& > div > span': {                 //밑줄
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {                         
        maxWidth: 40,
        width: '100%',
        backgroundColor: 'white',
      }
    }
  },
  table: {
    width: "100%",
    tableLayout: 'fixed',
    '& a' : {
      color: 'white'
    }, 
    '& thead' : {
      borderBottom: "1px solid white"
    },
  },
  pagination: {
    '& button': {
      color: 'white'
    },
    '& button:focus': {
      outline: 'none',
    },
    '& ul' : {
      textAlign: 'center',
      display: 'block',
      '& li' : {
        display: 'inline-block'
      }
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
      <div className={`post-list ${classes.root}`} >
        <Tabs className={classes.tabs} value={currentTab} onChange={tabChange} TabIndicatorProps={{ children: <span /> }}>
          <Tab className={classes.tab} label="작성한 게시글" />
          <Tab className={classes.tab} label="작성한 댓글" />
        </Tabs>

        <TabPanel value={currentTab} index={0}>
          <table className={classes.table}>
            <thead>
              <tr>
                <td width="10%">NO</td>
                <td width="60%">TITLE</td>
                <td width="20%">DATE</td>
                <td width="10%">VIEWS</td>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((data, index) => {
                return (
                  <Post key={index} no={data['no']} title={data['title']} date={data['date']} view={data['view']}></Post>
                )
              })}
            </tbody>
          </table>
          <Pagination className={classes.pagination} count={totalPostpage} showFirstButton showLastButton page={currentPostpage} onChange={postpageChange} />
        </TabPanel>

        <TabPanel value={currentTab} index={1}>
          <table className={classes.table}>
            <thead>
              <tr>
                <td width="10%">NO</td>
                <td width="70%">COMMENT</td>
                <td width="20%">DATE</td>
              </tr>
            </thead>
            <tbody>
              {currentComments.map((data, index) => {
                return (
                  <Comment key={index} no={data['no']} comment={data['comment']} date={data['date']}></Comment>
                )
              })}
            </tbody>
          </table>
          <Pagination className={classes.pagination} count={totalCommentpage} showFirstButton showLastButton page={currentCommentpage} onChange={commentpageChange} />
        </TabPanel>
      </div>
  );
}




export default PostList;