import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";
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
    const [isOpen, setOpen] = useState(false);
    const toggleCollapse = () => {
        console.log('hi')
    }

    return (
        <Router>
            {/* <Navbar bg="dark" variant="dark" scrolling="true" fixed="top">
                <Navbar.Brand href="/">StockIsland</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/board">게시판</Nav.Link>
                    <Nav.Link href="/weekly">주간평가</Nav.Link>
                    <Nav.Link href="/mypage">마이페이지</Nav.Link>
                    <Nav.Link href="/login">로그인</Nav.Link>
                    <Nav.Link href="/details">상세페이지(테스트)</Nav.Link>
                </Nav>
            </Navbar> */}
            {/* <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/">StockIsalnd</Link>
                <Link color="inherit" href="/board">게시판</Link>
                <Link color="inherit" href="/weekly">주간평가</Link>
                <Link color="inherit" href="/mypage">마이페이지</Link>
                <Link color="inherit" href="/login">로그인</Link>
                <Link color="inherit" href="/details">상세페이지(테스트)</Link>
            </Breadcrumbs>
            <br /><br /><br /> */}

<MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              {/* <MDBNavLink href="/">Home</MDBNavLink> */}
              {/* <button href="/mypage">hi</button> */}
            </MDBNavItem>
            <MDBNavItem>
              {/* <MDBNavLink to="#!">Features</MDBNavLink> */}
            </MDBNavItem>
            <MDBNavItem>
              {/* <MDBNavLink to="#!">Pricing</MDBNavLink> */}
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              {/* <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline> */}
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>


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
