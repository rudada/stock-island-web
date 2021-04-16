import React, {useState, useRef} from 'react';
// import Searchbar from '../components/Searchbar'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


import WeekRange from './WeekRange';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import bear from './bear.png';
import bull from './bull.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(0, 3),
      overflow: 'hidden',
      paddingTop: '100px',
    },
    paper: {
      padding: theme.spacing(3),
      margin: `${theme.spacing(1)}px auto`,
      maxWidth: 700,
      backgroundColor: '#0D0C10',
      textAlign : 'left',
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      padding : 10
    },
    main : {
        color :'#F3AA88',
    },
    title : {
      padding : theme.spacing(3, 40),
    }
  }));
  
  export default function WeeklyContainer() {
    const classes = useStyles();
  
    return (
    <div className="bg_weekly">
      <div className={classes.root}>
        <Typography className={classes.title} variant="h5" align="justify"> 주간평가</Typography>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={bear} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="body2" >
                   035720
                  </Typography>
                  <Typography gutterBottom className={classes.main} variant="subtitle1">
                    카카오
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    긍정 Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    부정 Full resolution 1920x1080 • JPEG
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    더보기 ~
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1"> 482,500 </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
  
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={bull} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="body2" >
                   035720
                  </Typography>
                  <Typography gutterBottom className={classes.main} variant="subtitle1">
                    카카오
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    긍정 Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    부정 Full resolution 1920x1080 • JPEG
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    더보기 ~
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1"> 482,500 </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
  
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={bull} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="body2" >
                   035720
                  </Typography>
                  <Typography gutterBottom className={classes.main} variant="subtitle1">
                    카카오
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    긍정 Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    부정 Full resolution 1920x1080 • JPEG
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    더보기 ~
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1"> 482,500 </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={bear} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="body2" >
                   035720
                  </Typography>
                  <Typography gutterBottom className={classes.main} variant="subtitle1">
                    카카오
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    긍정 Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    부정 Full resolution 1920x1080 • JPEG
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    더보기 ~
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1"> 482,500 </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
  
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={bull} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="body2" >
                   035720
                  </Typography>
                  <Typography gutterBottom className={classes.main} variant="subtitle1">
                    카카오
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    긍정 Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    부정 Full resolution 1920x1080 • JPEG
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    더보기 ~
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1"> 482,500 </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
  
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={bull} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="body2" >
                   035720
                  </Typography>
                  <Typography gutterBottom className={classes.main} variant="subtitle1">
                    카카오
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    긍정 Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    부정 Full resolution 1920x1080 • JPEG
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    더보기 ~
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1"> 482,500 </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
    );
  }



// const useStyles = makeStyles({
//     root: {
//       width : 600,
//       minWidth: 275,
//       padding : 15,
//       backgroundColor: '#0D0C10',
//       color:'#ffffff'
//     },
//     bullet: {
//       display: 'inline-block',
//       margin: '0 2px',
//       transform: 'scale(0.8)',
//     },
//     title: {
//       fontSize: 14,
//     },
//     pos: {
//       marginBottom: 12,
//     },
//     line: {
//       backgroundColor : '#6d6d6f',
//       margin : 8
//   },
//   main : {
//       color :'#A58CFD',
//   }
//   });
  
//   export default function Weekly() {
//     const classes = useStyles();
//     const bull = <span className={classes.bullet}>•</span>;
  
//     return (
//     <div className="bg_weekly">
//       <Card className={classes.root} variant="outlined">
//         <CardContent>
//           <Typography className={classes.title} gutterBottom>
//             035720
//           </Typography>
//           <Typography className={classes.main} variant="h5" component="h2" >
//             카카오
//           </Typography>
//           <Typography className={classes.pos} >
//             482,500 {bull} +3,500 (0.73%)
//           </Typography>
//           <Typography variant="body2" component="p">
//             well meaning and kindly.
//             <br />
//             {'"a benevolent smile"'}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">Learn More</Button>
//         </CardActions>
//         <Divider className={classes.line} />
//         <CardContent>
//           <Typography className={classes.title} gutterBottom>
//             035720
//           </Typography>
//           <Typography variant="h5" component="h2">
//             카카오
//           </Typography>
//           <Typography className={classes.pos} >
//             482,500 {bull} +3,500 (0.73%)
//           </Typography>
//           <Typography variant="body2" component="p">
//             well meaning and kindly.
//             <br />
//             {'"a benevolent smile"'}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">Learn More</Button>
//         </CardActions>
//         <Divider className={classes.line} />
//         <CardContent>
//           <Typography className={classes.title} gutterBottom>
//             035720
//           </Typography>
//           <Typography variant="h5" component="h2">
//             카카오
//           </Typography>
//           <Typography className={classes.pos} >
//             482,500 {bull} +3,500 (0.73%)
//           </Typography>
//           <Typography variant="body2" component="p">
//             well meaning and kindly.
//             <br />
//             {'"a benevolent smile"'}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">Learn More</Button>
//         </CardActions>
//       </Card>
//       </div>
      
//     );
//   }

















// class Weekly extends React.Component {
    
//     render() {

//         return (

//             <MDBContainer className="content_weekly">
//                 <MDBRow className="small_title">주간평가</MDBRow>
//                 <MDBRow><br/></MDBRow>
//                 <MDBRow align="left">
//                     <MDBCol > <WeekRange /> </MDBCol>
//                 </MDBRow>
//                 <MDBRow><br/><br/></MDBRow>
//                 <MDBRow align="left" className="box effect7">
//                     <MDBCol className="week_comment"><br /><h3>&nbsp; &nbsp;카카오</h3><br /><br />&nbsp; &nbsp;긍정 코멘트 &nbsp; &nbsp; &nbsp;  돈있으면 바로 살거같아요 ~<br /><br />&nbsp; &nbsp;부정 코멘트 &nbsp; &nbsp; &nbsp;  카카오 뱅크 짱~<br /><br /><br /><br /><br /><br /><br /></MDBCol>
//                 </MDBRow>
//                 <MDBRow><br/><br/></MDBRow>
//                 <MDBRow align="left" className="box effect7">
//                     <MDBCol className="week_comment"><br /><h3>&nbsp; &nbsp;네이버</h3><br /><br />&nbsp; &nbsp;긍정 코멘트 &nbsp; &nbsp; &nbsp;  네이버에게 점령당했다.<br /><br />&nbsp; &nbsp;부정 코멘트 &nbsp; &nbsp; &nbsp;  구글짱<br /><br /><br /><br /><br /><br /><br /></MDBCol>
//                 </MDBRow>
//                 <MDBRow><br/><br/></MDBRow>
//                 <MDBRow align="left" className="box effect7">
//                     <MDBCol className="week_comment"><br /><h3>&nbsp; &nbsp;전기차</h3><br /><br />&nbsp; &nbsp;긍정 코멘트 &nbsp; &nbsp; &nbsp;  배터리 안 살수 가 없죠<br /><br />&nbsp; &nbsp;부정 코멘트 &nbsp; &nbsp; &nbsp;  달려달려<br /><br /><br /><br /><br /><br /><br /></MDBCol>
//                 </MDBRow>
//                 <MDBRow><br/><br/></MDBRow>
                
//             </MDBContainer>
//         )
//     }
// }

// export default Weekly;