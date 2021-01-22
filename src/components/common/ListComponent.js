import React from "react";
import { makeStyles } from '@material-ui/core/styles';


//column 4개일 때
function TableHead4(props) {
    const { columnNames } = props;
    return (
        <thead>
            <tr>
                <td width="10%">{columnNames[0]}</td>
                <td width="60%">{columnNames[1]}</td>
                <td width="20%">{columnNames[2]}</td>
                <td width="10%">{columnNames[3]}</td>
            </tr>
        </thead>
    );
}
function TableRow4(props) {
    const { data } = props;
    const keys = Object.keys(data);
    return (
        <tr>
            <td width="10%">{data[keys[0]]}</td>
            <td width="60%"><a href="/board">{data[keys[1]]}</a></td>
            <td width="20%">{data[keys[2]]}</td>
            <td width="10%">{data[keys[3]]}</td>
        </tr>
    )
}

//column 3개일 때
function TableHead3(props) {
    const { columnNames } = props;
    return (
        <thead>
            <tr>
                <td width="10%">{columnNames[0]}</td>
                <td width="70%">{columnNames[1]}</td>
                <td width="20%">{columnNames[2]}</td>
            </tr>
        </thead>
    );
}
function TableRow3(props) {
    const { data } = props;
    const keys = Object.keys(data);
    return (
        <tr>
            <td width="10%">{data[keys[0]]}</td>
            <td width="70%"><a href="/board">{data[keys[1]]}</a></td>
            <td width="20%">{data[keys[2]]}</td>
        </tr>
    )
}

const useStyles = makeStyles((theme) => ({
    table: {
        width: "100%",
        tableLayout: 'fixed',
        '& a': {
            color: 'white'
        },
        '& thead': {
            borderBottom: "1px solid white"
        },
    },
}));


function ListComponent(props) {
    const classes = useStyles();
    const { columnSize, columnNames, contents } = props;
    //칼럼사이즈, 이름array, 내용object

    if (columnSize === 4) {
        return (
            <table className={classes.table}>
                <TableHead4 columnNames={columnNames} ></TableHead4>
                <tbody>
                    {contents.map((data, key) => {
                        return (
                            <TableRow4 key={key} data={data}></TableRow4>
                        )
                    })}
                </tbody>
            </table>

        );
    } else if (columnSize === 3) {
        return (
            <table className={classes.table}>
                <TableHead3 columnNames={columnNames}></TableHead3>
                <tbody>
                    {contents.map((data, key) => {
                        return (
                            <TableRow3 key={key} data={data}></TableRow3>
                        )
                    })}
                </tbody>
            </table>
        );
    }
}


export default ListComponent;