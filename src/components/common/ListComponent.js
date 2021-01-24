import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from "@material-ui/lab/Pagination";


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
    pagination: {
        '& button': {
            color: 'white'
        },
        '& button:focus': {
            outline: 'none',
        },
        '& ul': {
            textAlign: 'center',
            display: 'block',
            '& li': {
                display: 'inline-block'
            }
        }
    }
}));


function ListComponent(props) {
    const classes = useStyles();
    //칼럼사이즈, 이름array, 내용object
    const { columnSize, columnNames, contents } = props;

    //현재 페이지번호
    const [currentPage, setPage] = useState(1);

    //한 번에 보여줄 게시물 수
    const LIMIT = 10;

    //전체 페이지
    const totalPage = Math.ceil(contents.length / LIMIT);

    //현재 페이지에서 보여주는 내용들
    const currentContent = contents.slice(LIMIT * (currentPage - 1), LIMIT * currentPage);

    const pageChange = (event, newValue) => {
        setPage(newValue);
    };

    if (columnSize === 4) {
        return (
            <div>
                <table className={classes.table}>
                    <TableHead4 columnNames={columnNames} ></TableHead4>
                    <tbody>
                        {currentContent.map((data, key) => {
                            return (
                                <TableRow4 key={key} data={data}></TableRow4>
                            )
                        })}
                    </tbody>
                </table>
                <Pagination className={classes.pagination} count={totalPage} showFirstButton showLastButton page={currentPage} onChange={pageChange} />
            </div>
        );
    } else if (columnSize === 3) {
        return (
            <div>
                <table className={classes.table}>
                    <TableHead3 columnNames={columnNames}></TableHead3>
                    <tbody>
                        {currentContent.map((data, key) => {
                            return (
                                <TableRow3 key={key} data={data}></TableRow3>
                            )
                        })}
                    </tbody>
                </table>
                <Pagination className={classes.pagination} count={totalPage} showFirstButton showLastButton page={currentPage} onChange={pageChange} />
            </div>
        );
    }
}


export default ListComponent;