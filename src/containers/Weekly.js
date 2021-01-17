import React, {useState, useRef} from 'react';
import Searchbar from '../components/Searchbar'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


import WeekRange from './WeekRange';

class Weekly extends React.Component {
    
    render() {

        return (

            <MDBContainer className="content_weekly">

            <MDBRow><br/><br/><br/></MDBRow>
            <MDBRow>
                <Searchbar></Searchbar>
            </MDBRow>
            <MDBRow><br/><br/><br/></MDBRow>
            <MDBRow className="small_title">주간평가</MDBRow>
            <MDBRow><br/></MDBRow>
            <MDBRow align="left">
                <MDBCol > <WeekRange /> </MDBCol>
            </MDBRow>
            <MDBRow><br/><br/></MDBRow>
            <MDBRow align="left" className="box effect7">
                <MDBCol className="week_comment"><br /><h3>&nbsp; &nbsp;카카오</h3><br /><br />&nbsp; &nbsp;긍정 코멘트 &nbsp; &nbsp; &nbsp;  돈있으면 바로 살거같아요 ~<br /><br />&nbsp; &nbsp;부정 코멘트 &nbsp; &nbsp; &nbsp;  카카오 뱅크 짱~<br /><br /><br /><br /><br /><br /><br /></MDBCol>
            </MDBRow>
            <MDBRow><br/><br/></MDBRow>
            <MDBRow align="left" className="box effect7">
                <MDBCol className="week_comment"><br /><h3>&nbsp; &nbsp;네이버</h3><br /><br />&nbsp; &nbsp;긍정 코멘트 &nbsp; &nbsp; &nbsp;  네이버에게 점령당했다.<br /><br />&nbsp; &nbsp;부정 코멘트 &nbsp; &nbsp; &nbsp;  구글짱<br /><br /><br /><br /><br /><br /><br /></MDBCol>
            </MDBRow>
            <MDBRow><br/><br/></MDBRow>
            <MDBRow align="left" className="box effect7">
                <MDBCol className="week_comment"><br /><h3>&nbsp; &nbsp;전기차</h3><br /><br />&nbsp; &nbsp;긍정 코멘트 &nbsp; &nbsp; &nbsp;  배터리 안 살수 가 없죠<br /><br />&nbsp; &nbsp;부정 코멘트 &nbsp; &nbsp; &nbsp;  달려달려<br /><br /><br /><br /><br /><br /><br /></MDBCol>
            </MDBRow>
            <MDBRow><br/><br/></MDBRow>
                
            </MDBContainer>
        )
    }
}

export default Weekly;