import React from 'react';
import {Route} from 'react-router-dom';
import PostListPage from './PostListPage';
import PostViewPage from './PostViewPage';
// import SampleContainer from '../containers/samplecontainer';
import './Board.scss';

function Board({match}) {
        return (
            // <div className="bg_image">
            <div  className="content-board">
                <h2 className="board-title">게시판</h2>
                <Route exact path={match.path} component={PostListPage}></Route>
                <Route exact path={`${match.path}/:postId`} component={PostViewPage}></Route>
                {/* <SampleContainer></SampleContainer> */}
            </div>
            // </div>
        );
}

export default Board;