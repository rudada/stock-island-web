import React from 'react';
import HomeSearchbar from '../../components/home/HomeSearchbar'
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import Autocomplete from '../common/Autocomplete'
import Cloud from './Cloud'

import ModalPage from '../Modal.js'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      //width: '100%',
      //maxWidth: 360,
      //backgroundColor: theme.palette.background.paper
    },
    paper: {
      height: 400,
      width: 250,
      padding : 30,
      backgroundColor: '#0D0C10',
      boxShadow : 100 ,
    },
    control: {
      padding: theme.spacing(2),
    },
    line: {
        backgroundColor : '#6d6d6f',
        margin : 8
    },
    text:{  /* 글자수가 넘친다면 사용해보기 */ 
        overflow: 'hidden',
    }
  }));


function HomeContainer() {
    const [spacing] = React.useState(5);
    const classes = useStyles();

    return (
<div className="bg_image">
        <MDBContainer className="content_home">
            <MDBRow>
                <MDBCol sm="2"></MDBCol>
                <MDBCol sm="8" className="title">Stock island</MDBCol>
                <MDBCol sm="2"></MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol></MDBCol>
                <MDBCol size="10"><Autocomplete><HomeSearchbar></HomeSearchbar></Autocomplete></MDBCol>
                <MDBCol></MDBCol>
            </MDBRow>
            <MDBRow><br /><br /><br /></MDBRow>
            <MDBRow >
                <MDBCol></MDBCol>
                <MDBCol size="10"> <Cloud /> </MDBCol>
                <MDBCol></MDBCol>
            </MDBRow>
            <MDBRow><br /></MDBRow>


            <Grid container className={classes.root} spacing={2} >
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                    <Grid key={0} item>
                        <Paper className={classes.paper}>
                            <List component="nav" className={classes.root} aria-label="contacts"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader" style={{ color: "white" }}>
                                    주간 기업평가
                                </ListSubheader>
                            } >
                                <Divider className={classes.line} />
                                <ListItem button>
                                <ListItemText primary="Chelsea Otakan" />
                                </ListItem>
                                <ListItem button>
                                <ListItemText primary="Eric Hoffman" />
                                </ListItem>
                                <ListItem button>
                                <ListItemText primary="Chelsea Otakan" />
                                </ListItem>
                                <ListItem button>
                                <ListItemText primary="Eric Hoffman" />
                                </ListItem>
                                <ListItem button>
                                <ListItemText primary="Chelsea Otakan" />
                                </ListItem>
                                <ListItem button>
                                <ListItemText primary="Eric Hoffman" />
                                </ListItem>
                            </List>
                        </ Paper>
                    </Grid>
                    <Grid key={1} item>
                    {/*
                    밑에 List를 map형식으로 구현하면 자동으로 제목을 받고 리스트를 생성할 수 있을까..
                    {[0, 1, 2].map((value) => (
                        <Grid key={value} item>
                        <Paper className={classes.paper} />
                        </Grid>
                    ))} */}
                        <Paper className={classes.paper}>
                            <List component="nav" className={classes.root} aria-label="contacts"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader" style={{ color: "white" }}>
                                    원래 주가 예측
                                </ListSubheader>
                            }>
                                <Divider className={classes.line} />
                                <ListItem button>
                                <ListItemText primary="Chelsea Otakan" />
                                </ListItem>
                                <ListItem button>
                                <ListItemText primary="Eric Hoffman" />
                                </ListItem>
                                <ListItem button>
                                <ListItemText primary="Chelsea Otakan" />
                                </ListItem>
                                <ListItem button>
                                <ListItemText primary="Eric Hoffman" />
                                </ListItem>
                                <ListItem button>
                                <ListItemText primary="Chelsea Otakan" />
                                </ListItem>
                                <ListItem button>
                                <ListItemText primary="Eric Hoffman" />
                                </ListItem>
                            </List>
                        </ Paper>
                    </Grid>
                    <Grid key={2} item>
                        <Paper className={classes.paper}>
                            <List component="nav" className={classes.root} aria-label="contacts"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader" style={{ color: "white" }}>
                                    실시간 인기글
                                </ListSubheader>
                            }  >
                                <Divider className={classes.line} />
                                <ListItem button>
                                <ListItemText primary="Chelsea Otakan" />
                                </ListItem>
                                <ListItem button>
                                <ListItemText primary="Eric Hoffman" />
                                </ListItem>
                                <ListItem button>
                                <ListItemText primary="Chelsea Otakan" />
                                </ListItem>
                                <ListItem button>
                                <ListItemText primary="Eric Hoffman" />
                                </ListItem>
                                <ListItem button>
                                <ListItemText primary="Chelsea Otakan" />
                                </ListItem>
                                <ListItem button>
                                <ListItemText primary="Eric Hoffman" />
                                </ListItem>
                            </List>
                        </ Paper>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
           
            <MDBRow><br /><br /><br /></MDBRow> 
        </MDBContainer>
        </div>
    )
}

export default HomeContainer;