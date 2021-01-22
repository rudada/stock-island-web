import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse} from "mdbreact";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
        setOpen(!isOpen)
    }

    return (
        <Router>
            <MDBNavbar color="default-color" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">StockIsland</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <Link to="/">Home</Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link to="/board">Board</Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link to="/weekly">Weekly</Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link to="/mypage">Mypage</Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link to="/login">Login</Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link to="/search">Search</Link>
                        </MDBNavItem><MDBNavItem>
                            <Link to="/details">Details</Link>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            {/* <MDBFormInline waves> */}
                            <div className="md-form my-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                            </div>
                            {/* </MDBFormInline> */}
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
