import React, {Component} from 'react';
import PostList from '../../components/mypage/PostList';

class MypagePosts extends Component {

    constructor(props) {
        super(props);
        this.state={
            posts : [],
            comments : []
        };
    }

    componentDidMount() {
        this._getPosts();
    }

    _getPosts() {
        //get data here

        this.setState({
            posts : [
                {no : 24, title : "ㅋ_ㅋ", date : "2020-01-03", view : 22},
                {no : 23, title : "ㅎㅅㅎ", date : "2020-01-02", view : 20},
                {no : 22, title : "주식 어렵당", date : "2020-01-01", view : 10},
                {no : 21, title : "해영아 안녕~~~~", date : "2020-01-02", view : 20},
                {no : 20, title : "ㅋ_ㅋ", date : "2020-01-03", view : 22},
                {no : 19, title : "ㅎㅅㅎ", date : "2020-01-02", view : 20},
                {no : 18, title : "주식 어렵당", date : "2020-01-01", view : 10},
                {no : 17, title : "해영아 안녕~~~~", date : "2020-01-02", view : 20},
                {no : 16, title : "ㅋ_ㅋ", date : "2020-01-03", view : 22},
                {no : 15, title : "ㅎㅅㅎ", date : "2020-01-02", view : 20},
                {no : 14, title : "주식 어렵당", date : "2020-01-01", view : 10},
                {no : 13, title : "해영아 안녕~~~~", date : "2020-01-02", view : 20},
                {no : 12, title : "ㅋ_ㅋ", date : "2020-01-03", view : 22},
                {no : 11, title : "ㅎㅅㅎ", date : "2020-01-02", view : 20},
                {no : 10, title : "주식 어렵당", date : "2020-01-01", view : 10},
                {no : 9, title : "해영아 ssssssssssssssssssssssss안녕~~~~", date : "2020-01-02", view : 20},
                {no : 8, title : "ㅋ_ㅋ", date : "2020-01-03", view : 22},
                {no : 7, title : "ㅎㅅㅎ", date : "2020-01-02", view : 20},
                {no : 6, title : "주식 어렵당", date : "2020-01-01", view : 10},
                {no : 5, title : "해영아 안녕~~~~", date : "2020-01-02", view : 20},
                {no : 4, title : "ㅋ_ㅋ", date : "2020-01-03", view : 22},
                {no : 3, title : "ㅎㅅㅎ", date : "2020-01-02", view : 20},
                {no : 2, title : "주식 어렵당", date : "2020-01-01", view : 10},
                {no : 1, title : "해영아 안녕~~~~", date : "2020-01-02", view : 20},
            ],
            comments : [
                {no : 20, comment : "공감함니당^^", date : "2020-01-01"},
                {no : 19, comment : "공감함니당^^", date : "2020-01-01"},
                {no : 18, comment : "공감함니당^^", date : "2020-01-01"},
                {no : 17, comment : "공감함니당^^", date : "2020-01-01"},
                {no : 16, comment : "공감함니당^^", date : "2020-01-01"},
                {no : 15, comment : "공감함니당^^", date : "2020-01-01"},
                {no : 14, comment : "공감함니당^^", date : "2020-01-01"},
                {no : 13, comment : "공감함니당^^", date : "2020-01-01"},
                {no : 12, comment : "공감함니당^^", date : "2020-01-01"},
                {no : 11, comment : "공감함니당^^", date : "2020-01-01"},
                {no : 10, comment : "공감함니당^^", date : "2020-01-01"},
                {no : 9, comment : "공감함니당^^", date : "2020-01-01"},
                {no : 8, comment : "공감함니당^^", date : "2020-01-01"},
                {no : 7, comment : "공감함니당^^", date : "2020-01-01"},
                {no : 6, comment : "공감함니당^^", date : "2020-01-01"},
                {no : 5, comment : "공감함니당^^", date : "2020-01-01"},
                {no : 4, comment : "공감함니당^^", date : "2020-01-01"},
                {no : 3, comment : "공감함니당^^", date : "2020-01-01"},
                {no : 2, comment : "공감함니당^^", date : "2020-01-01"},
                {no : 1, comment : "공감함니당^^", date : "2020-01-01"},
            ]
        })
    }

    

    render() {
        const {posts, comments} = this.state;
        return(
                <PostList posts={posts} comments={comments}></PostList>
        );
    }

    
};

export default MypagePosts;