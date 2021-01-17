import React from 'react';
import HomeSearchbar from '../components/HomeSearchbar'
import { MDBContainer, MDBRow, MDBCol,MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

import Cloud from './Cloud.js'

import ModalPage from './Modal.js'


function Home() {
    return (


        <MDBContainer className="content_home">

            <MDBRow><br/><br/><br/></MDBRow>
            <MDBRow>
                <HomeSearchbar></HomeSearchbar>
            </MDBRow>
            <MDBRow><br/><br/><br/></MDBRow>
            <MDBRow >
                <MDBCol></MDBCol>
                <MDBCol size="10"> <Cloud /> </MDBCol>
                <MDBCol></MDBCol>
            </MDBRow>
            <MDBRow><br/><br/><br/></MDBRow>
            <MDBRow around>
                <MDBCol size="3" className="box effect8" >
                <br /><h6>주간 기업평가</h6><br />
                    <MDBTable borderless style={{color:"white"}}>
                        <MDBTableBody>
                            <tr>
                            <td>1</td>
                            <td>릴</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>보이</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>짱</td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>lil boi</td>
                            </tr>
                            <tr>
                            <td>5</td>
                            <td>lil boi</td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                    <br />
                </MDBCol>
                <MDBCol size="3" className="box effect8">
                    <br /><h6>주가 예측 상승률 / 하락률</h6><br />
                <MDBTable borderless style={{color:"white"}}>
                        <MDBTableBody>
                            <tr>
                            <td>1</td>
                            <td>원슈</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>타인</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>짱</td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>wonstein</td>
                            </tr>
                            <tr>
                            <td>5</td>
                            <td>wonstein</td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                    <br />
                </MDBCol>
                <MDBCol size="3" className="box effect8">
                    <br /><h6>게시글 조회수 순위</h6><br />
                    <MDBTable borderless style={{color:"white"}}>
                        <MDBTableBody >
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Larry</td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>Larry</td>
                            </tr>
                            <tr>
                            <td>5</td>
                            <td>Larry</td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                </MDBCol>
                <br />
            </MDBRow>
            <MDBRow><br/><br/><br/></MDBRow>
                
        </MDBContainer>
        
    )
}

export default Home;