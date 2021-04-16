import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { IoMdPerson } from "react-icons/io";
import './App.css'

import Home from './pages/Home';
import Board from './pages/Board';
import Weekly from './pages/Weekly';
import Mypage from './pages/Mypage';
import LogIn from './containers/auth/LogIn';
import SignUp from './containers/auth/SignUp';
import Search from './pages/Search';


function App() {
    const [isOpen, setOpen] = useState(false);
    const toggleCollapse = () => {
        setOpen(!isOpen)
    }

    return (
        <Router>
            <MDBNavbar className="navbar" dark expand="md" fixed="top">

                <MDBNavbarBrand href="/">
                    <strong className="white-text"> StockIsland </strong>
                </MDBNavbarBrand>

                <MDBNavbarNav left>
                    <MDBNavItem active style={{ marginTop: "15px" }}>
                        <Link to="/board" style={{ color: "white" }}> &emsp;Board&emsp; </Link>
                    </MDBNavItem>
                    <MDBNavItem style={{ marginTop: "15px" }}>
                        <Link to="/weekly" style={{ color: "white" }}> Weekly&emsp; </Link>
                    </MDBNavItem>
                    <MDBNavItem>
                        <div className="md-form my-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        </div>
                    </MDBNavItem>
                </MDBNavbarNav>

                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <IoMdPerson></IoMdPerson>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default" >
                                <MDBDropdownItem href="/mypage" >Mypage</MDBDropdownItem>
                                <MDBDropdownItem href="/login">LogIn</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Logout</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                            </MDBDropdownMenu>

                        </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>


            <div className="wrapper">
                <Route exact path="/" component={Home} />
                <Route path="/board" component={Board} />
                <Route path="/weekly" component={Weekly} />
                <Route path="/mypage" component={Mypage} />
                <Route path="/login" component={LogIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/search/:keyword" component={Search} />
            </div>
        </Router>
    )
}

export default App;
