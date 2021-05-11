import React, { useState, useRef, useEffect } from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';


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

const useStyles = makeStyles((theme) => ({
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
    }
  }));

function TabComponent(props) {
    const classes = useStyles();
    const { tabNames, children } = props;
    //tabnames => 탭 이름들, children => tabpanel에 들어갈 자식 컴포넌트들

    const [currentTab, setTab] = useState(0);
    const tabChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
            <Tabs  className={classes.tabs} value={currentTab} onChange={tabChange} TabIndicatorProps={{ children: <span /> }}>
                {tabNames.map((name, key) => <Tab className={classes.tab} key={key} label = {name}></Tab>)}
            </Tabs>
    )


}
export default TabComponent;