import React, { useEffect } from 'react';
import { connect } from "react-redux";
import BoardList from '../../components/board/BoardList';
import { listPost } from "../../modules/postList";

function BoardListContainer({ listPost, result, error, loading}) {
    useEffect(() => {
        const fn = async() => {
            try {
                listPost(0);
            } catch(e) {
                console.log(e);
            }
        };
        fn();
    }, [listPost]
    );
    
    return (
        <BoardList loading = {loading} error= {error} result={result}></BoardList>
    );
}

export default connect(
    ({postList, loading}) => ({
        result: postList.result,
        error: postList.error,
        loading : loading["postList/LIST_POST"],
    }),
    {
        listPost
    }
)(BoardListContainer);