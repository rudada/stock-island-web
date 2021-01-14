import React from 'react';
import MypageProfile from './mypage/MypageProfile';
import MypagePosts from './mypage/MypagePosts';

function Mypage() {
    return(
        <div  className="content_mypage">
            <MypageProfile></MypageProfile>
            <MypagePosts></MypagePosts>
        </div>
    );
};

export default Mypage;