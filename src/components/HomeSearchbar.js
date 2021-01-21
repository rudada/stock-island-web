import React from 'react';
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { gray } from '@material-ui/core/colors';




const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #F3AA88 30%, #A58CFD 90%)',
    borderRadius: 3,
  
    color: 'white',
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(0.5, 5),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: gray,
  },
});

export default function HomeSearchbar() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label="기업검색"
          id="mui-theme-provider-standard-input"
          fullWidth
          size='small'
        />
      </ThemeProvider>
    </form>
  );
}
