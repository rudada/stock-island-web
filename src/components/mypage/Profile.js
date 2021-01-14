import './Profile.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function Profile({ point, marked_company }) {
  const classes = useStyles();
  // const [chipData, setChipData] = useState(marked_company);

  const handleDelete = (chipToDelete) => () => {
    alert(chipToDelete.key);
    // setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    // onDelete함수 호출!!
  };

  return (

    <div className="profile">
      <div className="profile_head">
        <img className="profile_image" src="https://mdbootstrap.com/img/new/standard/city/041.jpg" ></img>
      </div>

      <div className="userid">
        sea_zero 님
      </div>
      <div className="point">보유 포인트 : {point}</div>


      <div className="company_list">
        <div>관심 기업</div>

        <Paper component="ul" className={classes.root}>
          {marked_company.map((data) => {
            return (
              <li key={data.key}>
                <Chip
                  label={data.label}
                  onDelete={handleDelete(data)}
                  className={classes.chip}
                  color="secondary"
                />
              </li>
            );
          })}
        </Paper>
      </div>

    </div>
  );
}

Profile.propTypes = {
  point : PropTypes.number.isRequired, 
  marked_company : PropTypes.array.isRequired
}

export default Profile;