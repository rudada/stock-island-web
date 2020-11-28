import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'

import Home from './containers/Home';
import Board from './containers/Board';
import Weekly from './containers/Weekly';
import Mypage from './containers/Mypage';
import Login from './containers/Login';
import Search from './containers/Search';
import StockItemDetails from './containers/StockItemDetails';

function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">StockIsland</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/board">게시판</Nav.Link>
                    <Nav.Link href="/weekly">주간평가</Nav.Link>
                    <Nav.Link href="/mypage">마이페이지</Nav.Link>
                    <Nav.Link href="/login">로그인</Nav.Link>
                    <Nav.Link href="/details">상세페이지(테스트)</Nav.Link>
                </Nav>
            </Navbar>

            <div className="wrapper">
                <Route exact path="/" component={Home} />
                <Route exact path="/board" component={Board} />
                <Route exact path="/weekly" component={Weekly} />
                <Route exact path="/mypage" component={Mypage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/details" component={StockItemDetails} />
            </div>
        </Router>
    )
}

export default App;
