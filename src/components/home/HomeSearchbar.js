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
  keywordlist: {
    textAlign: 'left',
  },
}));

// const theme = createMuiTheme({
//   palette: {
//     primary: gray,
//   },
// });

function HomeSearchbar(props) {
  const { changeHandler, filteredKeywords} = props;
  const classes = useStyles();


  return (
    <div className={classes.root} noValidate>
      {/* <ThemeProvider theme={theme}> */}
      <TextField
        className={classes.margin}
        label="기업검색"
        id="mui-theme-provider-standard-input"
        fullWidth
        size='small'
        onKeyUp={changeHandler}
      />
      <div className={`keyword-list ${classes.keywordlist} ${classes.margin}`}>
        {
          filteredKeywords.map(
            function (keyword, index, list) {
              return <div key={keyword.F_STOCK_LISTED_COMPANY_CD}>
                <a className="keyword-list-item" href={'/search/' + keyword.F_STOCK_LISTED_COMPANY_CD}>
                  {keyword.F_STOCK_LISTED_COMPANY_NAME}
                </a>
              </div>
            }
          )
        }

      </div>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default HomeSearchbar;