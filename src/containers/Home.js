import React from 'react';
import HomeSearchbar from '../components/HomeSearchbar'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Cloud from './Cloud.js'

import ModalPage from './Modal.js'


function Home() {
    return (


<MDBContainer className="content_home">

<MDBRow>
<HomeSearchbar></HomeSearchbar>
{/* <ModalPage /> */}
</MDBRow>
    <MDBRow middle >
    <Cloud />
    
    </MDBRow>
    <MDBRow>
                 <MDBCol size="4" >주간 기업평가 목록<br /><br /><br /><br /><br /><br /><br /><br /><br /></MDBCol>
                 <MDBCol size="4" >주가 예측 상승률 / 하락률 순위<br /><br /><br /><br /><br /><br /><br /><br /><br /></MDBCol>
                 <MDBCol size="4" >게시글 조회수 순위<br /><br /><br /><br /><br /><br /><br /><br /><br /></MDBCol>
           </MDBRow>
           
        </MDBContainer>
        
    )
}

export default Home;