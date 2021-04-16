import React from 'react';
import MypageProfile from '../containers/mypage/MypageProfile';
import MypagePosts from '../containers/mypage/MypagePosts';

function Mypage() {
    return(
        <div  className="content-mypage">
            <MypageProfile></MypageProfile>
            <MypagePosts></MypagePosts>
        </div>
    );
};

export default Mypage;