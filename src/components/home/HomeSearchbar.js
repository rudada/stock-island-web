import React from "react";
import {
  makeStyles,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #F3AA88 30%, #A58CFD 90%)",
    borderRadius: 3,
    color: "white",
  },
  textfield: {
    height: "60px",
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(0.5, 5),
  },
  keywordlist: {
    textAlign: "left",
    padding: "60px 40px 0px 40px",
    marginTop: "-60px",
  },
}));

function HomeSearchbar(props) {
  const { changeHandler, filteredKeywords } = props;
  const classes = useStyles();

  return (
    <div className="HomeSearchbar" style={{ height: "60px" }}>
      <div className={`${classes.root} ${classes.textfield}`} noValidate>
        <TextField
          className={classes.margin}
          label="기업검색"
          id="mui-theme-provider-standard-input"
          fullWidth
          size="small"
          onKeyUp={changeHandler}
        />
      </div>

      <div className={`keyword-list ${classes.keywordlist} ${classes.root}`}>
        {filteredKeywords.map(function (keyword, index, list) {
          return (
            <div key={keyword.F_STOCK_LISTED_COMPANY_CD}>
              <a
                className="keyword-list-item"
                href={"/search/" + keyword.F_STOCK_LISTED_COMPANY_CD}
              >
                {keyword.F_STOCK_LISTED_COMPANY_NAME}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeSearchbar;
