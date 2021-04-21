import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const buttonColor = "rgb(165,140,253)";

const useStyles = makeStyles((theme) => ({
    submit: {
        borderRadius: "8px",
        padding: "3px 10px 3px 11px",
        backgroundColor: buttonColor,
        border: "none",
        outline: "none",
    }
  }));
  
function BoardButton({text, onClick}) {
    const styles = useStyles();
    return (
        <button className={`submit ${styles.submit}`} onClick={onClick}>{text}</button>
    );
}

export default BoardButton;