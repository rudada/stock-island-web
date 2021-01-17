import React, { Component } from 'react';
import Profile from '../../components/mypage/Profile';

class MypageProfile extends Component {
    //user profile과 bookmark company

    constructor(props) {
        super(props);
        this.state = {
            point: 0,
            marked_company: [],
        };
    }

    componentDidMount() {
        this._getAccountData();
    }

    _getAccountData() {
        //get data here

        this.setState({
            point: 100,
            marked_company: [
                { key: 0, label: "삼성전자" },
                { key: 1, label: "포인트모바일" },
                { key: 2, label: "셀트리온" },
                { key: 3, label: "신풍제약" },
                { key: 4, label: "셀트리온헬스케어" },
                { key: 5, label: "일양약품" },
                { key: 6, label: "루다" }
            ]
        })
    }

    //delete bookmark 시 호출되는 함수
    onDelete() {
        //delete 쿼리하구
        //_getAccountDAta() 재호출
    }



    render() {
        const { point, marked_company } = this.state;
        return (
                <Profile point={point} marked_company={marked_company}></Profile>
        );
    }


};

export default MypageProfile;